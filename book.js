/*
  Dark Star book manifest.

  Each non-null entry is one physical 7 x 8.5 inch page resource.
  Add or reorder reading pages in DARK_STAR_READING_PAGES.
  A null entry is an intentionally blank page.

  polygon.html is deliberately appended after all reading pages so the
  Polygon writer remains the final page as the book grows.
*/
const DARK_STAR_READING_PAGES = [
  "preface.html",
  "01_01.html",
  "01_02.html",
  "01_03.html",

  "bell.html?panel=cover",
  "bell.html?panel=1",
  "bell.html?panel=2",
  "bell.html?panel=3",
  "bell.html?panel=4",
  "bell.html?panel=5",
  "bell.html?panel=6",
  "bell.html?panel=7",
  "bell.html?panel=8",
  "bell.html?panel=9",
  "bell.html?panel=10",
  "bell.html?panel=11",
  "bell.html?panel=last"
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
