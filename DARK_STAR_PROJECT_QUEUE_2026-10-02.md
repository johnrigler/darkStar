# Dark Star Project Queue — 2026-10-02

This file captures work that should remain explicit rather than being forced prematurely into the active book.

## Active editorial direction

The opening argument is now:

1. **There Is No Spoon** — stack capture, Web 2.8, AI, and the danger of mistaking inherited architecture for necessity.
2. **The Address Is the Index** — readable burn-style addresses, ledger history, explorer indexing, and the claim that cryptocurrency address space can serve as a public coordinate system.
3. **No Gatekeeper** — identity before the platform, portable reputation, payments beside other signed relationships, and replaceable services.
4. **The Book Is Not the Thing** — McLuhan, media capture, executable publication, the centralization trap, and physical/digital participation.

The vNext viewer should treat this as the default spine.

Older essay/lab pages remain available as an optional appendix rather than being deleted.

---

## P0 — Paginate the full chapters into physical book pages

The current chapter-entry pages fit the 7 × 8.5 inch physical page model and link to the full HTML chapters.

That is a transitional implementation.

The next print build should automatically or semi-automatically paginate the full chapter HTML into readable 7 × 8.5 book pages while preserving:

- headings;
- blockquotes;
- figures;
- address breakouts;
- explorer-style panels;
- source links;
- page-side layout;
- booklet imposition;
- reasonable orphan/widow behavior.

The goal is:

```text
full chapter HTML
-> physical page fragments
-> vNext viewer
-> printable booklet
-> PDF
```

Do not shrink a full long chapter into one iframe page.

The PDF must remain comfortable to read as a conventional document even for a reader who never participates in the interactive layer.

---

## P0 — Chapter 2 visual evidence pass

Chapter 2 now includes:

- a wall of readable Dogecoin/DigiByte addresses;
- a simplified explorer-style record;
- the DigiByte YouTube index address;
- the Hashtanglement address;
- Chisel image-row examples.

Next evidence pass:

- locate additional historical explorer screenshots if surviving copies exist;
- generate local archival screenshots from bundled transaction data when public explorers have disappeared;
- show several transactions sharing the same readable index coordinate;
- show a relation involving transport + subject + person coordinates;
- distinguish clearly between a literal current explorer screenshot and a reconstruction from archived ledger data;
- consider one full-page visual showing a normal random-looking address beside a readable carrier address.

Candidate anchor:

`DBxYoUTUBEvCoMzzzzzzzzzzzzzzZ31xMU`

The reader should become visually accustomed to the idea that an address can visibly contain language before being asked to accept the indexing argument.

---

## P1 — Chapter 3 examples of reputation without a platform

Add concrete low-stakes scenarios showing:

- one signer publishing repeatedly over time;
- another signer attesting to work;
- a payment attached to a larger public context;
- a service disappearing while the durable identity/history remains;
- two competing readers interpreting the same public record differently.

Avoid implying that ledger history automatically establishes truth or social trust.

The point is continuity and inspectable evidence, not algorithmic reputation scores.

---

## P1 — Chapter 4 executable-publication transition

Chapter 4 now states that centralization itself is a deeper trap than bad tooling.

Continue building the physical transition:

- by Chapter 4 the reader should already have seen QR stickers;
- the chapter should visibly refer back to the physical stickers in the reader's copy;
- at least one page should instruct the reader to do a harmless physical action rather than merely scan a marketing URL;
- the action should leave or recover a durable artifact;
- the action should still make sense if the preferred Dark Star website disappears.

The test:

> If the book disappears, what can the reader still do?

---

## P1 — Front-matter threshold

The current vNext front matter now includes **Beautiful (Dark Star)** before the preface.

It briefly references the Grateful Dead song “Dark Star” and the 2/18/71 passage later called “Beautiful Jam.”

Keep the lyric quotation short for copyright reasons.

Editorial role:

- establish collapse / ashes / transition as a threshold image;
- connect the title to a musical and improvisational lineage without turning the book into Grateful Dead criticism;
- leave room for Saturn / winter / recurrence to become the other Dark Star meaning later.

---

## P1 — Viewer controls

The vNext viewer now supports:

- **core chapters**;
- **core + archive appendix**.

Continue improving this into a visible table-of-contents control:

- show which pages are active;
- allow individual optional sections to be enabled/disabled rather than only one appendix switch;
- retain choices locally in the browser;
- offer a reset-to-core button;
- carry the same selection into print/PDF;
- display resulting page/sheet count before printing.

Older material should remain recoverable but should not silently re-enter the active explanatory spine.

---

## P2 — Re-evaluate older Dark Star material by destination

A large amount of Dark Star material does not belong inside Chapters 1–3.

Sort it rather than deleting it.

Possible destinations:

### Chapter 4 / media and centralization
- recognition is not adoption;
- book as anti-capture device;
- executable publication;
- circulation;
- service economy;
- physical ritual;
- QR/sticker behavior;
- why a publication should produce action.

### Later worldview chapters
- Saturn / Saturnalia;
- Vico;
- Rex Nemorensis;
- Late Age;
- Loss of Slack;
- religious operating system;
- secular denominationalism;
- institutional decomposition;
- recombined agency.

### Labs / appendices
- M64;
- Base57 images;
- Thunderwords / MacDougall;
- service replacement;
- recovery drills;
- Passport;
- Lantern;
- tool maps.

### Literary cartridges
- Bell;
- Gospel structure;
- Carolyn Fowler;
- Daisy / Johnny Ravencoin;
- Doge Soup;
- train centerfold;
- mythic narrative material.

The rule is not “remove strange material.”

The rule is “do not make every strange idea carry the explanatory spine.”

---

## P2 — PDF-first usability review

Dark Star must work in two modes at once:

1. a conventional PDF/book that can simply be read;
2. an executable publication that can be acted upon.

Run a dedicated review where the reviewer does **not** scan any QR code or open any external link.

The printed/PDF argument must still be intelligible.

Then run a second review where the reader performs the actions.

Neither mode should depend on the other for basic coherence.

---

## P2 — Centralization test for every Dark Star tool

For each tool or service, answer:

- Who controls the identity?
- Who controls the only copy of the history?
- What happens if the preferred server disappears?
- Can another implementation read the durable object?
- Can the user leave without becoming a new person?
- Is a company database merely a cache/index, or is it the only reality?
- Does the QR code point to a durable coordinate or merely to a conventional URL?
- Which dependency actually disappeared because blockchain or content addressing was used?

If the answer repeatedly returns to one official Dark Star service, the project is recreating the trap it describes.
