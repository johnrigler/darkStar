(() => {
  "use strict";

  const book = window.DARK_STAR_BOOK;
  const left = document.getElementById("page-left");
  const right = document.getElementById("page-right");
  const turnLeft = document.getElementById("turn-left");
  const turnRight = document.getElementById("turn-right");
  const pageWidthPixels = book.pageWidthInches * 96;
  const pageHeightPixels = book.pageHeightInches * 96;
  const spreadCount = Math.ceil(book.pages.length / 2);

  function spreadFromUrl() {
    const page = Number.parseInt(
      new URLSearchParams(window.location.search).get("page"),
      10
    );

    if (!Number.isFinite(page) || page < 1) return 0;
    return Math.min(page - 1, spreadCount - 1);
  }

  let spread = spreadFromUrl();

  function fitPage(frame) {
    const slot = frame.parentElement;
    const scale = Math.min(
      slot.clientWidth / pageWidthPixels,
      slot.clientHeight / pageHeightPixels
    );

    frame.style.transform = `scale(${scale})`;
  }

  function fitPages() {
    fitPage(left);
    fitPage(right);
  }

  function blank(frame) {
    frame.removeAttribute("src");
    frame.srcdoc = "<!doctype html><html><body style='margin:0;background:#fff'></body></html>";
  }

  function load(frame, pageIndex) {
    const resource = book.pages[pageIndex];
    if (!resource) {
      blank(frame);
      return;
    }

    frame.removeAttribute("srcdoc");
    frame.src = resource;
  }

  function render() {
    const leftIndex = spread * 2;
    load(left, leftIndex);
    load(right, leftIndex + 1);
    fitPages();

    const url = new URL(window.location.href);
    url.searchParams.set("page", spread + 1);
    window.history.replaceState(null, "", url);
  }

  function previous() {
    if (spread === 0) return;
    spread -= 1;
    render();
  }

  function next() {
    const nextLeft = (spread + 1) * 2;
    if (nextLeft >= book.pages.length) return;
    spread += 1;
    render();
  }

  turnLeft.addEventListener("click", previous);
  turnRight.addEventListener("click", next);
  window.addEventListener("resize", fitPages);
  window.addEventListener("afterprint", fitPages);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "PageUp") previous();
    if (event.key === "ArrowRight" || event.key === "PageDown") next();
  });

  render();
})();
