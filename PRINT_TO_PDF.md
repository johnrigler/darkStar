# Dark Star: print-ready PDF workflow

The repository already contains a US Letter booklet print renderer at `print-booklet-letter.html`.

The simplest publication workflow is to use the browser to freeze one generated edition into a single PDF, then print that PDF unchanged.

## Create the PDF

Open:

`print-booklet-letter.html`

Prefer serving the repo over HTTP rather than opening the file directly. From the repository directory:

```sh
python3 -m http.server 8000
```

Then open:

`http://127.0.0.1:8000/print-booklet-letter.html`

Wait until all pages, images, QR codes, and randomized ornaments have loaded. Reload first if you want a different generated edition.

Use the browser print command and choose **Save to PDF**.

Use these settings when creating the PDF:

- Paper size: US Letter (8.5 x 11)
- Layout: Landscape
- Scale: 100% / Actual size
- Margins: None
- Headers and footers: Off
- Background graphics: On

Save the result as something obvious, for example:

`darkstar-print.pdf`

The booklet renderer already imposes the book pages into folding order. The PDF therefore consists of consecutive physical sheet sides, ready for duplex printing.

## Put it on a USB stick

On a Chromebook/Linux machine, insert the USB stick and use the Files application to copy `darkstar-print.pdf` onto the USB drive. Eject the drive cleanly before removing it.

An Android phone can also copy a PDF to a USB drive when the phone supports USB OTG/USB-C storage and the Files application exposes the attached drive, but the laptop workflow is simpler.

## Print at FedEx Office

Bring the USB drive containing `darkstar-print.pdf`.

Print the PDF with:

- US Letter
- Landscape
- Double-sided / duplex
- Flip on short edge
- 100% / Actual size
- Do not use Fit to Page or Shrink to Printable Area
- Color when the edition depends on color

Keep the printed sheets in order and fold each sheet once through the center. The imposition is already in the PDF.

FedEx Office self-service machines accept PDFs from USB drives. A FedEx OnSite counter inside another retailer is not necessarily a FedEx Office print center; use an actual FedEx Office location when you need document printing.

## Why PDF is the distribution format

The HTML remains the editable source. The PDF is the frozen physical edition.

This distinction matters because Dark Star may contain randomized ornaments, QR codes, generated artifacts, exact page placement, and later sticker-anchor geometry. Saving to PDF freezes all of that into the edition that is actually printed.

A useful publishing rule is:

**HTML/source -> render once -> inspect -> PDF -> USB -> printer**

Do not regenerate the HTML at the print shop. Print the already-reviewed PDF.
