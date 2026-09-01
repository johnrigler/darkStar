# darkStar

Dark Star is an experimental work of comic fiction. Every physical page is
an ordinary HTML resource that can be opened and edited directly. The book
ends with a page that encourages the reader—perhaps in the company of
others—to create a secret, personalized paper wallet leading into the
universe of ideas sometimes called #web3.

The project's symbolic framework is preserved in `DARK_STAR_MYTHOS.md`.
It distinguishes established Dark Star ideas from speculative cross-cultural
and historical connections. Some of the same material may also appear as
hidden mythos in HTML comments, glyphs, addresses, and other source-level
artifacts.

## Edit one physical page

The manuscript pages remain deliberately redundant and local. Edit the
exact page you see:

```sh
vi front-cover.html
vi bell-05.html
vi doge-soup.html
vi 01_01.html
```

Each resource has a fixed 7 × 8.5 inch typeset area. Hand-authored
`<pre>` spacing and line breaks remain unchanged. The front cover is the
first physical page, while `polygon.html` remains the final page.

The current front cover is `cover-dark-star.jpg`, placed by
`front-cover.html` without changing the physical page dimensions.

## Print one page on 8.5 × 11

Open the page itself, or use:

```text
print-letter.html?page=6
```

Without `?page=`, `print-letter.html` produces the whole book in reading
order, one page per US Letter sheet.

Print settings:

- US Letter, portrait
- 100% or “Actual size”
- no added margins
- headers and footers off
- background graphics on when the page uses them

The 7 × 8.5 inch typeset area is centered on the 8.5 × 11 sheet.

## Print the one-fold 17 × 11 booklet

Open:

```text
print-booklet.html
```

The print job reads `book.js`, pads the book with blank pages until its
length is divisible by four, and imposes the pages in booklet order. It
produces consecutive front and back sides for each 17 × 11 sheet.

Print settings:

- Tabloid / 11 × 17 paper
- landscape
- two-sided
- flip on short edge
- 100% or “Actual size”
- no added margins
- headers and footers off
- background graphics on

Keep the sheets in printed order, nest them, and fold once through the
center. Page order is generated at print time, so adding or editing an
HTML page does not require manually rebuilding the imposition.
