/*
  Dark Star book manifest.

  The source pages remain the editable book resources. The Letter booklet
  renderer can re-typeset them as native 5.5 x 8.5 inch pages without
  changing the older legal-size screen viewer.

  The 36-page Letter edition is deliberate:
    - pages 18-19 are the physical center spread
    - pages 35-36 are the final tear-out spread
    - the two null pages before the tear-out keep the booklet divisible by 4
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

  // Eight Bell pages put the following pair at pages 18-19 once the
  // front cover and opening pages are counted. That is the exact center
  // spread of the 36-page Letter booklet.
  ...DARK_STAR_BELL_PAGES.slice(0, 8),
  ...DARK_STAR_CENTERFOLD,
  ...DARK_STAR_BELL_PAGES.slice(8),

  ...DARK_STAR_PAGES_AFTER_BELL
];

window.DARK_STAR_BOOK = {
  title: "Dark Star",
  pageWidthInches: 7,
  pageHeightInches: 8.5,
  pages: [
    "front-cover.html",
    ...DARK_STAR_READING_PAGES,
    "polygon.html",

    // Binding / separator leaves. Keeping them explicit makes the final
    // spread the removable object rather than automatic printer padding.
    null,
    null,

    ...DARK_STAR_TEAROUT
  ]
};
