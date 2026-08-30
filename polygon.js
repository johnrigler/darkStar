(() => {
  "use strict";

  const POLYGON_CHAIN_ID = "0x89";
  const POLYGON_EXPLORER = "https://polygonscan.com";
  const JETHRO_ADDRESS = "0x0076416C84c7151CaEfA74C3e09d6eBF2f296BA0";
  const core = window.DARK_STAR_POLYGON;
  const providers = new Map();

  let selectedProvider = null;
  let selectedAccount = "";

  const elements = {};

  function byId(id) {
    return document.getElementById(id);
  }

  function setStatus(message, isError) {
    elements.status.textContent = message || "";
    elements.status.classList.toggle("error", !!isError);
  }

  function shortAddress(address) {
    const value = String(address || "");
    return value.length > 20 ? value.slice(0, 10) + "…" + value.slice(-8) : value;
  }

  function providerKey(info, provider) {
    if (info && info.uuid) return info.uuid;
    if (provider && provider.isMetaMask) return "legacy-metamask";
    if (provider && provider.isBackpack) return "legacy-backpack";
    return "legacy-injected-" + providers.size;
  }

  function legacyProviderName(provider, index) {
    if (provider && provider.isBackpack) return "Backpack";
    if (provider && provider.isMetaMask) return "MetaMask";
    if (provider && provider.isCoinbaseWallet) return "Coinbase Wallet";
    return "Injected wallet" + (index ? " " + index : "");
  }

  function addProvider(info, provider) {
    if (!provider || typeof provider.request !== "function") return;
    const key = providerKey(info, provider);
    if (providers.has(key)) return;

    const record = {
      key: key,
      name: (info && info.name) || legacyProviderName(provider, providers.size + 1),
      rdns: (info && info.rdns) || "",
      provider: provider
    };
    providers.set(key, record);

    const option = document.createElement("option");
    option.value = key;
    option.textContent = record.name + (record.rdns ? " — " + record.rdns : "");
    elements.wallet.append(option);

    if (!selectedProvider) {
      elements.wallet.value = key;
      selectProvider(key);
    }
  }

  function selectProvider(key) {
    const record = providers.get(key);
    selectedProvider = record ? record.provider : null;
    selectedAccount = "";
    elements.account.textContent = "Not connected";
    elements.send.disabled = true;
    if (selectedProvider) bindProviderEvents(selectedProvider);
  }

  function bindProviderEvents(provider) {
    if (!provider || typeof provider.on !== "function" || provider.__darkStarBound) return;
    try { provider.__darkStarBound = true; } catch (error) { /* provider may be sealed */ }
    provider.on("accountsChanged", function (accounts) {
      selectedAccount = Array.isArray(accounts) && accounts[0] ? accounts[0] : "";
      elements.account.textContent = selectedAccount ? shortAddress(selectedAccount) : "Not connected";
      updateSendState();
    });
    provider.on("chainChanged", function () {
      updateSendState();
    });
  }

  function discoverProviders() {
    window.addEventListener("eip6963:announceProvider", function (event) {
      const detail = event && event.detail;
      if (detail) addProvider(detail.info, detail.provider);
    });
    window.dispatchEvent(new Event("eip6963:requestProvider"));

    window.setTimeout(function () {
      const injected = window.ethereum;
      if (!injected) {
        if (!providers.size) setStatus("No injected EVM wallet was found. Open this page in a browser with MetaMask, Backpack, or another compatible wallet.", true);
        return;
      }
      const legacy = Array.isArray(injected.providers) ? injected.providers : [injected];
      legacy.forEach(function (provider, index) {
        addProvider({ name: legacyProviderName(provider, index + 1) }, provider);
      });
    }, 350);
  }

  async function ensurePolygon(provider) {
    let chainId = await provider.request({ method: "eth_chainId" });
    if (String(chainId).toLowerCase() === POLYGON_CHAIN_ID) return;

    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: POLYGON_CHAIN_ID }]
      });
    } catch (error) {
      if (Number(error && error.code) !== 4902) throw error;
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: POLYGON_CHAIN_ID,
          chainName: "Polygon Mainnet",
          nativeCurrency: { name: "Polygon Ecosystem Token", symbol: "POL", decimals: 18 },
          rpcUrls: ["https://polygon-rpc.com"],
          blockExplorerUrls: [POLYGON_EXPLORER]
        }]
      });
    }

    chainId = await provider.request({ method: "eth_chainId" });
    if (String(chainId).toLowerCase() !== POLYGON_CHAIN_ID) {
      throw new Error("The selected wallet did not switch to Polygon Mainnet (chain 137).");
    }
  }

  async function connect() {
    try {
      if (!selectedProvider) throw new Error("Choose an injected wallet first.");
      setStatus("Waiting for the wallet…", false);
      const accounts = await selectedProvider.request({ method: "eth_requestAccounts" });
      if (!Array.isArray(accounts) || !accounts[0]) throw new Error("The wallet did not return an account.");
      selectedAccount = accounts[0];
      await ensurePolygon(selectedProvider);
      elements.account.textContent = shortAddress(selectedAccount);
      setStatus("Connected to Polygon Mainnet. Dark Star never receives the wallet's private key.", false);
      updateSendState();
    } catch (error) {
      setStatus(error && error.message ? error.message : String(error), true);
      updateSendState();
    }
  }

  function updatePreview() {
    try {
      const address = core.textToWordAddress(elements.words.value);
      elements.address.textContent = address;
      elements.address.dataset.valid = "true";
      elements.byteCount.textContent = new TextEncoder().encode(elements.words.value).length + " / 20 UTF-8 bytes";
      setStatus("This address encodes the text directly and is padded on the right with zero bytes.", false);
    } catch (error) {
      elements.address.textContent = "—";
      elements.address.dataset.valid = "false";
      elements.byteCount.textContent = new TextEncoder().encode(elements.words.value).length + " / 20 UTF-8 bytes";
      setStatus(error.message || String(error), true);
    }
    updateSendState();
  }

  function updateSendState() {
    let amountIsValid = false;
    try {
      core.parsePol(elements.amount.value);
      amountIsValid = true;
    } catch (error) {
      amountIsValid = false;
    }
    elements.send.disabled = !(
      selectedProvider &&
      selectedAccount &&
      elements.address.dataset.valid === "true" &&
      amountIsValid &&
      elements.understand.checked
    );
  }

  async function send() {
    try {
      if (!selectedProvider || !selectedAccount) throw new Error("Connect a wallet first.");
      if (!elements.understand.checked) throw new Error("Confirm that the destination is deliberately unowned.");

      const to = core.textToWordAddress(elements.words.value);
      const value = core.quantityHex(core.parsePol(elements.amount.value));
      await ensurePolygon(selectedProvider);

      setStatus("Review the destination, value, and gas charge in the wallet. Nothing has been sent yet.", false);
      const transactionHash = await selectedProvider.request({
        method: "eth_sendTransaction",
        params: [{ from: selectedAccount, to: to, value: value }]
      });

      elements.result.hidden = false;
      elements.resultHash.textContent = transactionHash;
      elements.resultLink.href = POLYGON_EXPLORER + "/tx/" + transactionHash;
      setStatus("The wallet submitted the transaction.", false);
    } catch (error) {
      setStatus(error && error.message ? error.message : String(error), true);
    }
  }

  function initialize() {
    if (!core) throw new Error("polygon-core.js did not load.");
    ["wallet", "connect", "account", "words", "byteCount", "address", "amount", "understand", "send", "status", "result", "resultHash", "resultLink", "jethro"].forEach(function (id) {
      elements[id] = byId(id);
    });

    elements.jethro.textContent = JETHRO_ADDRESS;
    elements.wallet.addEventListener("change", function () { selectProvider(elements.wallet.value); });
    elements.connect.addEventListener("click", connect);
    elements.words.addEventListener("input", updatePreview);
    elements.amount.addEventListener("input", updateSendState);
    elements.understand.addEventListener("change", updateSendState);
    elements.send.addEventListener("click", send);

    if (window.top !== window.self) {
      byId("frameNotice").hidden = false;
    }

    updatePreview();
    discoverProviders();
  }

  document.addEventListener("DOMContentLoaded", initialize);
})();
