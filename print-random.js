(() => {
  "use strict";

  // Print-only variation layer. This intentionally does not edit the source pages.
  // Reloading the print job creates a new copy with a new random arrangement.
  const GLYPHS = ["🍒", "🍓", "◆", "●", "✦", "◖"];
  const MIN_PER_BLOCK = 1;
  const MAX_PER_BLOCK = 3;

  function randomInt(max) {
    if (max <= 1) return 0;
    if (window.crypto?.getRandomValues) {
      const value = new Uint32Array(1);
      window.crypto.getRandomValues(value);
      return value[0] % max;
    }
    return Math.floor(Math.random() * max);
  }

  function randomGlyph() {
    return GLYPHS[randomInt(GLYPHS.length)];
  }

  function insertGlyph(pre) {
    const textNodes = [];
    const walker = pre.ownerDocument.createTreeWalker(
      pre,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          return node.nodeValue.trim()
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    while (walker.nextNode()) textNodes.push(walker.currentNode);
    if (!textNodes.length) return;

    const node = textNodes[randomInt(textNodes.length)];
    const text = node.nodeValue;
    const safePositions = [];

    for (let i = 1; i < text.length - 1; i += 1) {
      if (/\s/.test(text[i])) safePositions.push(i);
    }

    if (!safePositions.length) return;

    const at = safePositions[randomInt(safePositions.length)];
    const before = node.ownerDocument.createTextNode(text.slice(0, at));
    const ornament = node.ownerDocument.createElement("span");
    ornament.className = "print-random-ornament";
    ornament.setAttribute("aria-hidden", "true");
    ornament.textContent = ` ${randomGlyph()} `;
    const after = node.ownerDocument.createTextNode(text.slice(at));

    node.replaceWith(before, ornament, after);
  }

  function decorateFrame(frame) {
    if (!frame.contentDocument || frame.dataset.printRandomized === "yes") return;
    frame.dataset.printRandomized = "yes";

    const doc = frame.contentDocument;
    const blocks = [...doc.querySelectorAll("pre.lorem")];
    if (!blocks.length) return;

    const style = doc.createElement("style");
    style.textContent = `
      .print-random-ornament {
        display: inline;
        font-family: sans-serif;
        font-size: 0.9em;
        line-height: 1;
        white-space: nowrap;
      }
    `;
    doc.head.appendChild(style);

    blocks.forEach((block) => {
      const count = MIN_PER_BLOCK + randomInt(MAX_PER_BLOCK - MIN_PER_BLOCK + 1);
      for (let i = 0; i < count; i += 1) insertGlyph(block);
    });
  }

  function watchFrame(frame) {
    frame.addEventListener("load", () => decorateFrame(frame), { once: true });
  }

  document.querySelectorAll("iframe.print-page").forEach(watchFrame);

  const root = document.getElementById("print-document");
  if (!root) return;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;
        if (node.matches("iframe.print-page")) watchFrame(node);
        node.querySelectorAll?.("iframe.print-page").forEach(watchFrame);
      });
    });
  });

  observer.observe(root, { childList: true, subtree: true });
})();
