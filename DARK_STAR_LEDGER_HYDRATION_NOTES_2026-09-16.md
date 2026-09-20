# Dark Star — ledger hydration / M64 notes — 2026-09-16

Dark Star should treat QR links, IPFS, M64, Chisel, and public ledgers as one narrative substrate rather than as separate technical demonstrations.

## Basic idea

An IPFS object can disappear from the currently visible IPFS network if nobody is hosting it, while its CID still identifies the exact intended content.

The proposed Dark Star/Chisel pattern is therefore:

**ledger record → deterministic reconstruction → CID verification → republish to IPFS → QR opens artifact**

Polygon is one candidate ledger for the reconstruction material. The important distinction is that Polygon itself does not magically host the IPFS object. It stores enough information for a hydrator to reconstruct the object and make it available again.

## Minimal deterministic record

M64 can act as the compact transport/encoding layer, but the hydration protocol should be stricter than the ordinary application format.

A minimal conceptual record could be:

```text
M64H1
CID <expected CID>
TYPE text/html
ENC utf8
BODY <M64 payload>
```

For larger objects:

```text
M64H1
CID bafy...
PARTS 17
PART 0 <data>
PART 1 <data>
...
```

The hydrator should:

1. discover the ledger records;
2. reconstruct the canonical bytes in deterministic order;
3. rebuild the intended IPFS object/DAG;
4. verify that the resulting CID matches the stored expected CID;
5. publish or pin the reconstructed object back into IPFS.

## Determinism requirement

The critical issue is exact byte and DAG determinism.

A different newline, character encoding, filename, metadata value, chunking strategy, UnixFS parameter, or directory layout can produce a different CID.

For single-file artifacts, canonical UTF-8 may be enough.

For more complex artifacts, storing/reconstructing a CAR file or another explicitly defined DAG representation may be cleaner because the intended IPFS structure itself is preserved.

## QR behavior in Dark Star

The printed book does not need to think of a QR as an ordinary website link.

The durable object is the content address or ledger reference.

A contemporary reader may enter through an ordinary gateway URL, but the book's deeper promise is that the object can be recovered from the ledger if the current gateway or IPFS host disappears.

This allows printed QR codes to function as holes into another narrative layer.

In Mark, that layer can be formally strange: moving marbles, alternate dinosaur fragments, changing page state, recursive QR references, and ledger artifacts.

In Matthew, the same substrate can support documentary references and preserved source material.

In later chapters, once the reader has learned the toolkit, QR codes can become simpler and more personal. They can refer to shoes, paint colors, personal objects, private notes, local artifacts, or other mundane elements without re-explaining Web3.

## Narrative point

The technical system preserves symbols more reliably than conventional Web links, but it does not preserve interpretation automatically.

This is especially important in Mark:

**permanence of symbols is not permanence of meaning.**

The ledger may preserve the exact marble colors and positions while future players invent entirely different rules for them.


## CID-first entry and dynamic editions

A QR containing an HTTPS gateway URL does not itself route around DNS. Durable
paper should preserve a raw CID, `ipfs://` reference, ledger identifier, or
enough printed text to reconstruct one.

A resolver can attempt, in order:

1. a local IPFS node;
2. an IPFS-capable browser or extension;
3. a configured gateway;
4. alternate gateways;
5. deterministic hydration from ledger records.

The immutable IPFS edition and the changing Dark Star experience are separate.
The CID identifies exact edition bytes. JavaScript in that edition may read
ledger state, signed manifests, annotations, or branches and render a changing
environment around those bytes. An old paper copy should continue to identify
the original edition even when a newer manifest exists.

## Signed physical-anchor bindings

A sticker may carry only a persistent public identifier:

```text
sticker 7K4M9Q...
```

A separate signed record can bind it to the work:

```text
STICKER 7K4M9Q...
EDITION bafy...
ANCHOR dinosaurs-and-marbles
CONTROLLER <account or public key>
SIGNATURE <network-specific signature>
```

A Chisel or Dark Star reader resolves the sticker identifier, verifies the
network-specific signature, and opens the bound scene or state.

Because a visible identifier can be photographed, the sticker is normally a
public pointer rather than an authenticator. Rebinding authority comes from the
controller's signature. A possession-controlled sticker requires a concealed
secret and a different threat model.

This mechanism lets individual paper copies acquire different spatial indexes
without modifying the immutable edition underneath them.
