/*
  Dark Star book manifest.

  The source pages remain the editable book resources. The Letter booklet
  renderer can re-typeset them as native 5.5 x 8.5 inch pages without
  changing the older 7 x 8.5 legal-size screen viewer.

  The Letter booklet contains 32 bound pages. Pages 16-17 are therefore
  the exact physical center spread. The sticker tear-out is deliberately
  not part of the bound-page count; the Letter print renderer appends it as
  its own 11 x 8.5 landscape sheet after the imposed booklet.
*/
const DARK_STAR_PAGES_BEFORE_BELL = [
  "preface.html",
  "01_01.html",
  "01_02.html",
  "01_03.html",
  "gospel-matthew.html",
  "gospel-mark.html",
  "gospel-luke.html",
  "gospel-john.html"
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
  "bell-10a.html",
  "bell-10b.html",
  "bell-11.html",
  "bell-12.html",
  "bell-last.html"
];

const DARK_STAR_CENTERFOLD = [
  "centerfold-train-left.html",
  "centerfold-train-right.html"
];

const DARK_STAR_PAGES_AFTER_BELL = [
  "part-one-card.html",
  "part-two-carolyn-01.html",
  "part-two-carolyn-02.html",
  "doge-soup.html"
];

const DARK_STAR_TEAROUT = [
  "tearout-left.html",
  "tearout-right.html"
];

const DARK_STAR_READING_PAGES = [
  ...DARK_STAR_PAGES_BEFORE_BELL,

  // With the front cover counted as page 1, these six Bell pages make
  // the train pair pages 16 and 17 of the 32-page booklet.
  ...DARK_STAR_BELL_PAGES.slice(0, 6),
  ...DARK_STAR_CENTERFOLD,
  ...DARK_STAR_BELL_PAGES.slice(6),

  ...DARK_STAR_PAGES_AFTER_BELL
];

window.DARK_STAR_BOOK = {
  title: "Dark Star",
  pageWidthInches: 7,
  pageHeightInches: 8.5,
  tearoutPages: DARK_STAR_TEAROUT,
  pages: [
    "front-cover.html",
    ...DARK_STAR_READING_PAGES,
    "polygon.html"
  ]
};
