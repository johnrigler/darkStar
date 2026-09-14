# Bell image assets

The active Dark Star Bell artwork uses content-addressed filenames rather than narrative sequence numbers.

`bell-<hash>.png` uses the first eight hexadecimal characters of the image's Git blob SHA. The filename therefore belongs to the image bytes, not to a page number or story position. Moving a panel forward or backward in `book.js` does not require renaming the asset. Replacing the image bytes produces a new hash-name.

The original `theBell2024/` filenames remain as archival/compatibility aliases for older prototype pages. Active Bell pages use the hash-named paths in this directory.

On-page size and gutter behavior belong to the unified page system in `style.css`; source raster dimensions do not define the printed size.
