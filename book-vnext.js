/*
  Dark Star vNext editorial spine.
  The default edition is intentionally short: front matter + Chapters 1–4.
  Earlier essay/lab material remains available as an optional appendix.
*/
const DARK_STAR_VNEXT_CORE_PAGES = [
  "front-cover.html",
  "blank.html",
  "next/00-beautiful-dark-star.html",
  "preface.html",
  "next/chapter-01-there-is-no-spoon.html",
  "next/chapter-02-address-index.html",
  "next/chapter-03-no-gatekeeper.html",
  "next/chapter-04-book-not-thing.html",
  "next/13-book-does-not-end.html",
  "next/14-exit.html"
];

const DARK_STAR_VNEXT_OPTIONAL_APPENDIX = [
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
  "next/12-tools-map.html"
];

function appendixEnabled() {
  const params = new URLSearchParams(window.location.search);
  const explicit = params.get("appendix");
  if (explicit === "1") {
    localStorage.setItem("darkStarVnextAppendix", "1");
    return true;
  }
  if (explicit === "0") {
    localStorage.setItem("darkStarVnextAppendix", "0");
    return false;
  }
  return localStorage.getItem("darkStarVnextAppendix") === "1";
}

const includeAppendix = appendixEnabled();
const DARK_STAR_VNEXT_PAGES = includeAppendix
  ? [...DARK_STAR_VNEXT_CORE_PAGES, ...DARK_STAR_VNEXT_OPTIONAL_APPENDIX]
  : [...DARK_STAR_VNEXT_CORE_PAGES];

window.DARK_STAR_BOOK = {
  title: "Dark Star vNext",
  pageWidthInches: 7,
  pageHeightInches: 8.5,
  coverIndex: 0,
  includeAppendix,
  corePages: DARK_STAR_VNEXT_CORE_PAGES,
  optionalAppendix: DARK_STAR_VNEXT_OPTIONAL_APPENDIX,
  pages: DARK_STAR_VNEXT_PAGES
};