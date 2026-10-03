/*
  Dark Star vNext editorial prototype.
  28 pages = 7 folded US Letter sheets.
  The existing book.js remains untouched as the archival/current experimental edition.
*/
const DARK_STAR_VNEXT_PAGES = [
  "front-cover.html",
  "blank.html",
  "preface.html",
  "next/00-field-map.html",

  "next/01-dark-star.html",
  "next/02-money-first-message.html",
  "next/03-public-index.html",
  "next/activity-01-inspect.html",

  "next/04-recombined-agency.html",
  "next/05-code-smaller.html",
  "next/activity-02-replace-service.html",
  "next/06-servers-are-workers.html",

  "next/07-recognition-is-not-adoption.html",
  "centerfold-train-left.html",
  "centerfold-train-right.html",

  "next/08-language-hacks.html",
  "next/activity-03-language.html",
  "next/09-mythos-as-maps.html",
  "next/10-executable-publication.html",
  "next/activity-04-passport.html",

  "next/11-proof-is-recovery.html",
  "next/activity-05-recovery.html",

  "next/visual-bell-programmer.html",
  "next/visual-bell-final.html",
  "next/doge-artifact.html",

  "next/12-tools-map.html",
  "next/13-book-does-not-end.html",
  "next/14-exit.html"
];

window.DARK_STAR_BOOK = {
  title: "Dark Star vNext",
  pageWidthInches: 7,
  pageHeightInches: 8.5,
  coverIndex: 0,
  pages: DARK_STAR_VNEXT_PAGES
};
