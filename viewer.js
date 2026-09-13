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
    const pageNumber = Number.parseInt(
      new URLSearchParams(window.location.search).get("page"),
      10
    );

    if (!Number.isFinite(pageNumber) || pageNumber < 1) return 0;
    return Math.min(Math.floor((pageNumber - 1) / 2), spreadCount - 1);
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

  function uniformStyleHref() {
    return new URL("style.css?page-model=0.3.2", window.location.href).href;
  }

  function injectUniformStyle(doc) {
    let link = doc.head.querySelector("link[data-darkstar-uniform-style]");
    if (!link) {
      link = doc.createElement("link");
      link.rel = "stylesheet";
      link.dataset.darkstarUniformStyle = "true";
      doc.head.appendChild(link);
    }
    link.href = uniformStyleHref();
  }

  function substantiveNodes(parent) {
    return Array.from(parent.childNodes).filter((node) => {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent.trim().length > 0;
      if (node.nodeType !== Node.ELEMENT_NODE) return false;
      return node.tagName !== "SCRIPT" && node.tagName !== "STYLE";
    });
  }

  function sourceNodes(body) {
    let nodes = substantiveNodes(body);

    // Old source files often have one structural wrapper. The wrapper is not
    // a page type, so peel it away and make its children movable blocks.
    if (nodes.length === 1 && nodes[0].nodeType === Node.ELEMENT_NODE) {
      const wrapper = nodes[0];
      if (["MAIN", "CENTER", "ARTICLE"].includes(wrapper.tagName)) {
        const children = substantiveNodes(wrapper);
        if (children.length) nodes = children;
      }
    }

    return nodes;
  }

  function blockId(resource, node, index) {
    const stem = resource.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
    const explicit = node.nodeType === Node.ELEMENT_NODE
      ? (node.dataset.block || node.id || "")
      : "";
    return explicit ? `${stem}:${explicit}` : `${stem}:${String(index + 1).padStart(2, "0")}`;
  }

  function normalizeInterior(frame, pageIndex) {
    if (pageIndex === book.coverIndex) return;

    const doc = frame.contentDocument;
    if (!doc || !doc.body) return;

    injectUniformStyle(doc);
    doc.documentElement.classList.add("darkstar-page");
    doc.body.classList.add("darkstar-interior");

    if (doc.body.querySelector(":scope > .interior-page[data-darkstar-uniform]")) return;

    const resource = book.pages[pageIndex];
    const article = doc.createElement("article");
    article.className = "interior-page";
    article.dataset.darkstarUniform = "true";
    article.dataset.source = resource;

    const flow = doc.createElement("div");
    flow.className = "page-flow";

    sourceNodes(doc.body).forEach((node, index) => {
      const block = doc.createElement("section");
      block.className = "page-block";
      block.dataset.block = blockId(resource, node, index);
      block.appendChild(node);
      flow.appendChild(block);
    });

    article.appendChild(flow);
    doc.body.appendChild(article);
  }

  function blank(frame) {
    frame.dataset.pageIndex = "";
    frame.removeAttribute("src");
    frame.srcdoc = "<!doctype html><html><body style='margin:0;background:#fff'></body></html>";
  }

  function load(frame, pageIndex) {
    const resource = book.pages[pageIndex];
    if (!resource) {
      blank(frame);
      return;
    }

    frame.dataset.pageIndex = String(pageIndex);
    frame.onload = () => {
      const currentIndex = Number.parseInt(frame.dataset.pageIndex, 10);
      if (Number.isFinite(currentIndex)) normalizeInterior(frame, currentIndex);
      fitPage(frame);
    };
    frame.removeAttribute("srcdoc");
    frame.src = resource;
  }

  function render() {
    const leftIndex = spread * 2;
    load(left, leftIndex);
    load(right, leftIndex + 1);
    fitPages();

    const url = new URL(window.location.href);
    url.searchParams.set("page", leftIndex + 1);
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

  function visibleFlows() {
    return [left, right]
      .map((frame) => frame.contentDocument?.querySelector(".page-flow"))
      .filter(Boolean);
  }

  // A small editing primitive for the current spread. Moving a block causes
  // the target page to reflow without changing either page's format.
  function moveBlock(blockIdToMove, targetSide = "right", targetPosition = null) {
    const frames = targetSide === "left" ? [left, right] : [right, left];
    const targetFlow = frames[0].contentDocument?.querySelector(".page-flow");
    if (!targetFlow) return false;

    let block = null;
    for (const flow of visibleFlows()) {
      block = Array.from(flow.children).find((candidate) => candidate.dataset.block === blockIdToMove);
      if (block) break;
    }
    if (!block) return false;

    const children = Array.from(targetFlow.children);
    const position = targetPosition == null
      ? children.length
      : Math.max(0, Math.min(targetPosition, children.length));
    targetFlow.insertBefore(block, children[position] || null);
    return true;
  }

  window.DarkStar = Object.freeze({ moveBlock });

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
