# Dark Star — Executable Publication and Campaign Cartridges
## 2026-09-20

These notes extend the paper-machine, Mogwai, Chisel, and ledger ideas already
described elsewhere in the repository.

## From reader to operator

Dark Star should not terminate in agreement.

A conventional political book supplies interpretation. The reader recognizes a
pattern, discusses it, and may then consume the next interpretation. Dark Star
is intended to cross a different boundary:

```text
reader
→ encounter
→ emotional activation
→ entry
→ action
→ operator
```

The activating emotion does not have to be approval. Curiosity, desire, humor,
confusion, offense, and anger can all move a person toward the machinery. A
hostile response still counts as entry if the participant has learned to scan,
inspect, sign, publish, annotate, fork, or preserve an artifact.

Agreement is unnecessary. Response is enough.

To answer Dark Star at the level of its medium, a critic may need to become an
operator of that medium. The system should therefore permit genuine rebuttal,
parody, contradiction, and hostile annotation rather than only affirmation.

The trigger should expose a real contradiction or violate a real convention. It
should not depend on concealed financial commitments, credential capture,
harassment, or manufactured outrage with no durable capability on the other
side.

## An executable book

The physical book is boot media.

It can move a participant around the ordinary account-and-domain funnel and
into a content-addressed environment. Once the participant has entered, the
paper copy is no longer required for ordinary navigation. It remains a physical
artifact, historical edition, map, controller, or distributable gateway.

The intended transition is:

```text
paper Dark Star
→ QR / printed CID / ledger identifier
→ IPFS Dark Star or another reader
→ identity choice
→ ledger interaction
→ new artifact
```

This is not merely a book with a companion website. Its propositions can be
tested by using the system it reveals.

The first encounter should ideally allow a participant to:

1. scan or enter a strange identifier;
2. arrive without first creating a conventional platform account;
3. inspect a human-readable artifact and its provenance;
4. see other paths or participants around it;
5. perform one small, legible, persistent act;
6. leave with an address, identity, artifact, or route that still works later.

Without the persistent act, the participant has toured the environment. With
it, the participant has entered it.

## Several identity doors

Chisel is one entrance, not the sovereign center.

A module may accept an injected EVM wallet, a Solana wallet such as Backpack, a
Polkadot-compatible signer, another chain-specific signer, a locally generated
Chisel identity, a purpose-specific offline paper wallet, or read-only entry
with no identity.

The application can normalize the resulting action as a signed envelope while
allowing each network adapter to verify its own signature rules:

```text
network
account or public key
artifact
action
payload
signature
```

Accounts from different networks are not technically interchangeable. The
common envelope provides routing and presentation, not a false universal
signature scheme.

A twelve-word recovery phrase may be represented on paper, but it should never
be sent casually through an ordinary printer, browser history, print service,
or cloud spooler. Paper-game identities should normally be purpose-specific and
low-value. Primary-wallet recovery material requires an offline generator and a
trusted output path.

## DNS independence is a technical property

A QR code containing an HTTPS gateway URL does not bypass DNS. It only hides
the URL from the reader.

A durable printed route should contain a raw CID, an `ipfs://` reference, a
ledger identifier, or enough printed text to reconstruct one. Chisel or another
reader can then attempt resolution through:

1. a local IPFS node;
2. an IPFS-capable browser or extension;
3. a configured public gateway;
4. alternate gateways;
5. ledger hydration when the object is no longer hosted.

The identifier should also be printed as text when practical so damage to the
QR image does not destroy the route.

## Three simultaneous Dark Stars

The project can exist in three forms without selecting one as the only real
edition:

- **Paper Dark Star** — physical gateway, controller, and historical edition.
- **IPFS Dark Star** — narrative interface that can load current external state.
- **Chisel Dark Star** — structured ledger objects, provenance, and operating
  tools.

An IPFS edition is immutable at a particular CID. It becomes dynamic because
its JavaScript reads ledger state, follows newer signed manifests, and renders
annotations or branches around the immutable edition. Old paper should always
continue to identify the edition it originally referenced.

## Stickers as user-installed physical hyperlinks

A sticker does not have to contain a private key or one quarter of a key.

It can carry a random persistent identifier that the participant binds to a
location in a physical book. A sticker placed beside the dinosaurs-and-marbles
material can become that copy's entrance into the corresponding live part of
the story.

A conceptual binding is:

```text
sticker identifier
edition CID
semantic anchor
owner or controller
signature
```

The QR needs only the sticker identifier. A ledger or signed manifest supplies
the current binding. Scanning can then open a scene, annotation, Mogwai stream,
ledger object, alternate branch, gathering point, or the participant's previous
state.

The sticker becomes a physical anchor ID: a persistent user-installed hyperlink,
not a one-use cryptographic nonce.

A visible sticker identifier cannot prove physical possession because it can be
photographed and copied. It is suitable as a public pointer. Authority to bind
or rebind it should come from a signature. If possession of the sticker itself
must confer control, the physical object needs a concealed secret such as a
scratch-off value.

After stickers are placed, the book becomes a paper controller. Two copies of
the same edition can develop different spatial indexes and therefore become
different interfaces into the same larger world.

The reader puts doors into the page, and the ledger determines where those
doors now lead.

## The campaign-cartridge model

Dark Star is one score, world, or campaign cartridge. It is not the entire
instrument.

```text
Chisel          instrument / runtime
public ledgers  shared memory
wallets         identities and controllers
stickers        physical inputs and anchors
Mogwai          media and social reader
Dark Star       one score, setting, or campaign module
```

The piano-roll analogy explains how a publication can be consumed by a common
instrument. The tabletop-game analogy adds rules, participants, and changing
world state. The merit-badge analogy adds tasks and portable evidence of
completion.

A cartridge may define:

- narrative and visual language;
- rules and available actions;
- anchor namespace;
- tasks, badges, or credentials;
- recognized ledger records;
- supported signers and networks;
- resolver and hydration behavior;
- governance and update policy;
- printable outputs and sticker behavior.

Different cartridges do not need ideological agreement. Christian, queer,
labor, artistic, local-history, educational, legal, and adversarial worlds can
share transport, signature, and verification protocols while retaining
incompatible values and purposes.

Dark Star is a reference implementation of a publication that can be loaded,
entered, played, modified, and used to assemble people around a shared world or
objective.

## A legal-action cartridge

A legal cartridge could route around the legal industry's intake and claimant-
coordination bottleneck. It cannot route around courts, standing,
certification, professional responsibility, or applicable law.

It could allow participants to:

1. recognize that they experienced related conduct;
2. join a claimant cohort before selecting a law firm;
3. record facts through a common schema;
4. commit timestamped evidence without publishing the evidence;
5. compare jurisdiction, date, damages, and fact patterns;
6. pool resources for investigation or expert review;
7. establish transparent rules for selecting counsel;
8. invite qualified lawyers to propose terms for defined work;
9. monitor filings, fees, settlements, objections, and distributions.

The community could originate and assemble the matter. Lawyers would provide
the regulated interface to the court and the legal judgment the matter
requires.

For a United States federal class action, the court still determines whether
the class satisfies Rule 23, appoints class counsel, supervises notice, and
reviews settlements and fees. The useful reversal is therefore not the
elimination of lawyers. It is that lawyers meet an already organized
constituency instead of exclusively owning the originating conversation,
claimant list, evidence map, and financing decision.

Sensitive allegations, names, medical information, employment records,
privileged communications, and raw evidence should not be placed on a public
ledger. The public layer should normally contain hashes, timestamps, consent
receipts, membership proofs, and encrypted references. Disclosure should be
selective and controlled by the relevant participant or legal process.

The cartridge is an organizing and evidentiary instrument, not automatic legal
advice and not a class action merely because many people have entered it.

## Design test

Every cartridge should be tested with concrete questions:

- What does a person do, not merely understand?
- What durable capability do they leave with?
- Can they oppose the cartridge as well as endorse it?
- Can an artifact survive the original operator and domain?
- Are consequential actions legible before they occur?
- What is public, what is encrypted, and what is never recorded?
- Can another author fork the format and build a substantially different world?

The reusable invention is the transition from publication as something consumed
to publication as an environment people operate inside.
