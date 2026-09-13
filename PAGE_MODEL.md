# Dark Star page model

Dark Star v0.3.2 has one active interior page format.

The front/title page is the current exception. There is no active back-cover format yet.

Every other source resource is normalized by `viewer.js` after it loads into this structure:

```html
<article class="interior-page" data-darkstar-uniform="true">
  <div class="page-flow">
    <section class="page-block" data-block="...">...</section>
  </div>
</article>
```

Old filenames such as `bell-*.html`, `gospel-*.html`, `preface.html`, and the centerfold files are source names only. They no longer select a page geometry or page type. `book.js` is a single ordered list instead of chapter/page-type groups.

`style.css` owns the active viewer geometry and the common interior page geometry. `viewer.js` injects that stylesheet after each interior source page loads, so legacy page CSS can still style content but cannot choose a different outer page format.

Top-level content is assigned stable-ish `data-block` identifiers based on the source filename and existing element ID when available. The current spread exposes `DarkStar.moveBlock(blockId, targetSide, targetPosition)` as the first editing primitive. Moving a block between the visible pages reflows the content without changing either page's structure.

The old standalone source files remain in the repository as editable manuscript/media resources. They are not page templates in the active viewer.
