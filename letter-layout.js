(() => {
  "use strict";

  const book = window.DARK_STAR_BOOK;
  const printDocument = document.getElementById("print-document");

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

  function makeTearoutFrame(resource, label) {
    const frame = document.createElement("iframe");
    frame.className = "print-page";
    frame.title = label;
    frame.addEventListener("load", () => applyLetterLayout(frame));
    frame.src = resource;
    return frame;
  }

  function appendTearoutSheet() {
    if (!printDocument || !Array.isArray(book.tearoutPages) || book.tearoutPages.length !== 2) {
      return;
    }

    const sheet = document.createElement("section");
    sheet.className = "sheet booklet-sheet standalone-tearout-sheet";

    book.tearoutPages.forEach((resource, index) => {
      const half = document.createElement("div");
      half.className = "booklet-half";
      half.appendChild(
        makeTearoutFrame(resource, `Tear-out ${index === 0 ? "left" : "right"}: ${resource}`)
      );
      sheet.appendChild(half);
    });

    const label = document.createElement("span");
    label.className = "sheet-label";
    label.textContent = "final standalone tear-out sheet";
    sheet.appendChild(label);

    printDocument.appendChild(sheet);
  }

  appendTearoutSheet();

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
