/*
  Dark Star book manifest.

  Each non-null entry is one physical 7 x 8.5 inch page resource.
  A null entry is an intentionally blank page.

  Add ordinary pages before or after the Bell chapter below. The Bell page
  alignment is calculated from its physical page index, so its images keep
  facing the center binding when earlier pages are added.

  polygon.html is deliberately appended after all reading pages so the
  Polygon writer remains the final page as the book grows.
*/
const DARK_STAR_PAGES_BEFORE_BELL = [
  "preface.html",
  "01_01.html",
  "01_02.html",
  "01_03.html"
];

const DARK_STAR_BELL_PANELS = [
  "cover",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "last"
];

const DARK_STAR_BELL_PAGES = DARK_STAR_BELL_PANELS.map((panel, offset) => {
  const physicalPageIndex = 1 + DARK_STAR_PAGES_BEFORE_BELL.length + offset;
  const side = physicalPageIndex % 2 === 0 ? "left" : "right";
  return `bell.html?panel=${panel}&side=${side}`;
});

const dogePhysicalPageIndex = 1 + DARK_STAR_PAGES_BEFORE_BELL.length + DARK_STAR_BELL_PAGES.length;
const dogeSide = dogePhysicalPageIndex % 2 === 0 ? "left" : "right";

const DARK_STAR_PAGES_AFTER_BELL = [
  `doge-soup.html?side=${dogeSide}`
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
