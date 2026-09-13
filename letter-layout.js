(() => {
  "use strict";

  function applyLetterLayout(frame) {
    let doc;
    try {
      doc = frame.contentDocument;
    } catch (_error) {
      return;
    }

    if (!doc || !doc.head || doc.documentElement.dataset.letterLayout === "true") {
      return;
    }

    doc.documentElement.dataset.letterLayout = "true";

    const link = doc.createElement("link");
    link.rel = "stylesheet";
    link.href = "letter-page.css";
    link.dataset.darkStarLetterLayout = "true";
    doc.head.appendChild(link);
  }

  document.querySelectorAll("iframe.print-page").forEach((frame) => {
    frame.addEventListener("load", () => applyLetterLayout(frame));

    try {
      if (frame.contentDocument && frame.contentDocument.readyState === "complete") {
        applyLetterLayout(frame);
      }
    } catch (_error) {
      /* Same-origin pages are expected; ignore transient navigation state. */
    }
  });
})();
