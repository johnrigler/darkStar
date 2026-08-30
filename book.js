/*
  Dark Star book manifest.

  Each non-null entry is one physical 7 x 8.5 inch page resource.
  A null entry is an intentionally blank page.

  The Bell pages are deliberately separate HTML files. This is redundant
  on purpose: each physical page can be opened and hand-edited directly
  without changing a shared template or query-string renderer.

  polygon.html is deliberately appended after all reading pages so the
  Polygon writer remains the final page as the book grows.
*/
const DARK_STAR_PAGES_BEFORE_BELL = [
  "preface.html",
  "01_01.html",
  "01_02.html",
  "01_03.html"
];

const DARK_STAR_BELL_PAGES = [
  "bell-cover.html",
  "bell-01.html",
  "bell-02.html",
  "bell-03.html",
  "bell-04.html",
  "bell-05.html",
  "bell-06.html",
  "bell-07.html",
  "bell-08.html",
  "bell-09.html",
  "bell-10.html",
  "bell-11.html",
  "bell-last.html"
];

const DARK_STAR_PAGES_AFTER_BELL = [
  "doge-soup.html"
];

const DARK_STAR_READING_PAGES = [
  ...DARK_STAR_PAGES_BEFORE_BELL,
  ...DARK_STAR_BELL_PAGES,
  ...DARK_STAR_PAGES_AFTER_BELL
];

window.DARK_STAR_BOOK = {
  title: "Dark Star",
  pageWidthInches: 7,
  pageHeightInches: 8.5,
  pages: [
    null,
    ...DARK_STAR_READING_PAGES,
    "polygon.html"
  ]
};
