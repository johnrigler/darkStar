(() => {
  "use strict";

  const book = window.DARK_STAR_BOOK;
  const left = document.getElementById("page-left");
  const right = document.getElementById("page-right");
  const turnLeft = document.getElementById("turn-left");
  const turnRight = document.getElementById("turn-right");

  let spread = 0;

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

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "PageUp") previous();
    if (event.key === "ArrowRight" || event.key === "PageDown") next();
  });

  render();
})();
