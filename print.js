(() => {
  "use strict";

  const book = window.DARK_STAR_BOOK;
  const documentRoot = document.getElementById("print-document");
  const mode = document.body.dataset.printMode;

  function makeFrame(resource, physicalPageNumber) {
    const frame = document.createElement("iframe");
    frame.className = "print-page";
    frame.title = resource
      ? `Physical page ${physicalPageNumber}: ${resource}`
      : `Physical page ${physicalPageNumber}: blank`;

    if (resource) {
      frame.src = resource;
    } else {
      frame.srcdoc =
        "<!doctype html><html><body style='margin:0;width:7in;height:8.5in;background:#fff'></body></html>";
    }

    return frame;
  }

  function addLabel(sheet, text) {
    const label = document.createElement("span");
    label.className = "sheet-label";
    label.textContent = text;
    sheet.appendChild(label);
  }

  function renderLetter() {
    const requestedPage = Number.parseInt(
      new URLSearchParams(window.location.search).get("page"),
      10
    );

    const pageIndices =
      Number.isFinite(requestedPage) &&
      requestedPage >= 1 &&
      requestedPage <= book.pages.length
        ? [requestedPage - 1]
        : book.pages.map((_, index) => index);

    pageIndices.forEach((pageIndex) => {
      const sheet = document.createElement("section");
      sheet.className = "sheet letter-sheet";
      sheet.appendChild(makeFrame(book.pages[pageIndex], pageIndex + 1));
      addLabel(sheet, `physical page ${pageIndex + 1}`);
      documentRoot.appendChild(sheet);
    });
  }

  function paddedBookPages() {
    const pages = [...book.pages];
    while (pages.length % 4 !== 0) pages.push(null);
    return pages;
  }

  function makeBookletHalf(resource, pageIndex) {
    const half = document.createElement("div");
    half.className = "booklet-half";
    half.appendChild(makeFrame(resource, pageIndex + 1));
    return half;
  }

  function addBookletSide(pages, leftIndex, rightIndex, sheetNumber, side) {
    const sheet = document.createElement("section");
    sheet.className = "sheet booklet-sheet";
    sheet.appendChild(makeBookletHalf(pages[leftIndex], leftIndex));
    sheet.appendChild(makeBookletHalf(pages[rightIndex], rightIndex));
    addLabel(
      sheet,
      `sheet ${sheetNumber}, ${side}: pages ${leftIndex + 1} | ${rightIndex + 1}`
    );
    documentRoot.appendChild(sheet);
  }

  function renderBooklet() {
    const pages = paddedBookPages();
    const sheetCount = pages.length / 4;

    for (let sheetIndex = 0; sheetIndex < sheetCount; sheetIndex += 1) {
      const frontLeft = pages.length - 1 - sheetIndex * 2;
      const frontRight = sheetIndex * 2;
      const backLeft = sheetIndex * 2 + 1;
      const backRight = pages.length - 2 - sheetIndex * 2;

      addBookletSide(
        pages,
        frontLeft,
        frontRight,
        sheetIndex + 1,
        "front"
      );
      addBookletSide(
        pages,
        backLeft,
        backRight,
        sheetIndex + 1,
        "back"
      );
    }
  }

  if (mode === "booklet") {
    renderBooklet();
  } else {
    renderLetter();
  }
})();
