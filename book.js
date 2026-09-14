/*
  Dark Star active reading order.

  Source filenames are manuscript/media resources only. They do not define
  page geometry. viewer.js wraps every resource after the front cover in the
  same interior-page structure and gives fixed artifacts named slots.
*/
const DARK_STAR_PAGES = [
  "front-cover.html",

  // Inside front cover. Keeping this explicit puts the Preface on a recto.
  "blank.html",
  "preface.html",

  "01_01.html",
  "01_02.html",
  "01_03.html",
  "gospel-matthew.html",
  "gospel-mark.html",
  "gospel-luke.html",
  "gospel-john.html",

  "bell-cover.html",
  "bell-01.html",
  "bell-02.html",
  "bell-03.html",
  "bell-04.html",

  // The added blank page changes page parity. Moving bell-05 to the far side
  // of the centerfold keeps the two train halves on one facing spread.
  "centerfold-train-left.html",
  "centerfold-train-right.html",

  "bell-05.html",
  "bell-06.html",
  "bell-07.html",
  "bell-08.html",
  "bell-09.html",
  "bell-10.html",
  "bell-10a.html",
  "bell-10b.html",
  "bell-11.html",
  "bell-12.html",
  "bell-last.html",

  "part-one-card.html",
  "part-two-carolyn-01.html",
  "part-two-carolyn-02.html",
  "doge-soup.html",
  "polygon.html"
];

window.DARK_STAR_BOOK = {
  title: "Dark Star",
  pageWidthInches: 7,
  pageHeightInches: 8.5,
  coverIndex: 0,
  pages: DARK_STAR_PAGES
};
