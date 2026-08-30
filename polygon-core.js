(function (root) {
  "use strict";

  const ADDRESS_BYTES = 20;
  const POL_DECIMALS = 18;

  function bytesToHex(bytes) {
    return Array.from(bytes, function (byte) {
      return byte.toString(16).padStart(2, "0");
    }).join("");
  }

  function textToWordAddress(text) {
    const value = String(text == null ? "" : text);
    const bytes = new TextEncoder().encode(value);
    if (!bytes.length) throw new Error("Enter at least one character.");
    if (bytes.length > ADDRESS_BYTES) {
      throw new Error("The text uses " + bytes.length + " UTF-8 bytes; a Polygon address can hold only 20.");
    }

    const padded = new Uint8Array(ADDRESS_BYTES);
    padded.set(bytes);
    return "0x" + bytesToHex(padded);
  }

  function wordAddressToText(address) {
    const hex = String(address || "").replace(/^0x/i, "");
    if (!/^[0-9a-f]{40}$/i.test(hex)) throw new Error("Expected a 20-byte hexadecimal address.");
    const bytes = [];
    for (let index = 0; index < hex.length; index += 2) {
      const byte = parseInt(hex.slice(index, index + 2), 16);
      if (byte === 0) break;
      bytes.push(byte);
    }
    return new TextDecoder("utf-8", { fatal: true }).decode(new Uint8Array(bytes));
  }

  function parsePol(value) {
    const text = String(value == null ? "" : value).trim();
    if (!/^(?:0|[1-9][0-9]*)(?:\.[0-9]{0,18})?$/.test(text)) {
      throw new Error("Enter a non-negative POL amount with no more than 18 decimal places.");
    }
    const parts = text.split(".");
    const whole = BigInt(parts[0]);
    const fraction = BigInt((parts[1] || "").padEnd(POL_DECIMALS, "0"));
    return whole * (10n ** BigInt(POL_DECIMALS)) + fraction;
  }

  function quantityHex(value) {
    const number = typeof value === "bigint" ? value : BigInt(value);
    if (number < 0n) throw new Error("JSON-RPC quantities cannot be negative.");
    return "0x" + number.toString(16);
  }

  root.DARK_STAR_POLYGON = Object.freeze({
    ADDRESS_BYTES: ADDRESS_BYTES,
    POL_DECIMALS: POL_DECIMALS,
    textToWordAddress: textToWordAddress,
    wordAddressToText: wordAddressToText,
    parsePol: parsePol,
    quantityHex: quantityHex
  });
})(typeof window !== "undefined" ? window : globalThis);
