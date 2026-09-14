# Dark Star page model

Dark Star has one active interior page format.

The front/title page is the current exception. There is no active back-cover format yet. The inside front cover is an explicit blank interior page so the Preface begins on the right-hand (recto) page.

Every other source resource is normalized by `viewer.js` after it loads into this structure:

```html
<article class="interior-page" data-darkstar-uniform="true">
  <div class="page-flow">
    <section class="page-block" data-block="...">...</section>
  </div>
</article>
```

Old filenames such as `bell-*.html`, `gospel-*.html`, `preface.html`, and the centerfold files are source names only. They do not select a page geometry or page type. `book.js` is a single ordered list.

`style.css` owns the viewer geometry and the common interior page geometry. `viewer.js` removes legacy page-layout styles at render time and installs the common stylesheet.

## Fixed artifacts inside flowing pages

Some content blocks are artifacts with exact page coordinates. They are still content inside the same page format, not separate page types.

`viewer.js` currently recognizes:

- `.bell-tract` as `data-artifact="bell"`
- `.train-art` as `data-artifact="train"`

Artifact blocks are moved to the beginning of `.page-flow`. CSS gives each one an exact slot. The float exclusion shape begins at the artifact's fixed Y coordinate, so ordinary text can occupy the area above it, flow beside it where space exists, and continue below it without moving the artifact.

The Bell uses the same rectangle and Y coordinate on every page where it appears. Left pages pull the rectangle toward the gutter from the left side of the spread; right pages mirror that behavior.

The train uses two equal page windows onto one image twice the flow width. The right-hand image is shifted exactly one page-flow width, creating a deterministic seam instead of two independently positioned pictures.

The explicit blank page after the cover changes parity. `book.js` therefore places `bell-05.html` after the two train halves so `centerfold-train-left.html` and `centerfold-train-right.html` remain a true facing spread.

Top-level content is assigned `data-block` identifiers based on source filename and existing element ID when available. The current spread exposes `DarkStar.moveBlock(blockId, targetSide, targetPosition)` as the first editing primitive. Moving an ordinary block between visible pages reflows the content without changing page structure or fixed artifact coordinates.

The old standalone source files remain in the repository as editable manuscript/media resources. They are not page templates in the active viewer.
