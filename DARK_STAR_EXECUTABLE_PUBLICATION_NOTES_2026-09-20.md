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


## The Continental Divide story and contested transmission

The story read by Carolyn Fowler's reading group is the Continental Divide
story. It begins with two women from different Native nations speaking across
a divide, structurally recalling the two washerwomen in the "Anna Livia
Plurabelle" chapter of *Finnegans Wake*. The field expands as additional women,
girls, elders, nations, and languages enter.

Acoma may appear to morph into and out of Laguna before the distinctions become
important. Laguna and Diné/Navajo participants may argue with one another in
different languages. This apparent instability must belong to the characters,
translations, or reader's position rather than to an underlying assumption
that the nations are interchangeable.

Elders speak in their own languages. Women and girls translate for older
members of their communities, but translation is not a transparent relay.
Translators may clarify, protect, soften, exaggerate, censor, retaliate, or lie.
A mistranslation may be selfish, strategic, compassionate, politically
necessary, or several of these at once. Women then interpret and argue against
one another across the translations.

The layered transmission is:

```text
elder's speech
→ woman's or girl's translation
→ argument among communities
→ Continental Divide written story
→ women's reading group
→ Carolyn's apology or defense
→ online expansion and participation
→ extracted or compiled pages
```

The reading group imposes another set of voices on an already unstable and
emotional story. Carolyn is present as both author and character, but her
apologetics do not settle what the story means.

There is no required central protagonist, character-following mode, or stable
point of identification. Characters are present without being assigned the job
of carrying a complete arc. As in the *Twin Peaks* universe, a figure may
temporarily seem to provide orientation, but the world exceeds that figure and
does not resolve into a hero story.

The online system may expand into large amounts of prose, and individual pages
or groups of pages may emerge from it and be printed. That does not mean that
following a character generates a different book. Extraction, assembly, and
printing are properties of the device and its material, not promises of a
personalized point-of-view narrative.

Strong emotional scenes should remain exact even when the overall world is
bizarre. A death, accusation, ceremony, disappearance, translation dispute, or
supernatural attack can be written with complete local precision without
creating a global arc or final explanation. The destabilizing world is not a
substitute protagonist; it is the condition under which all of the characters
briefly appear.


## A universe intended to be exited

Dark Star is not the first installment of a durable fictional universe. Its
characters do not exist primarily to accumulate canon, sustain sequels, or
support a franchise. The writing can be singular, emotionally exact, and
memorable without asking the reader to treat the fictional world as a lasting
substitute for action.

The project begins from distrust of fiction's conventional social function.
Fiction can give a reader the emotional impression of confronting danger,
changing a society, or completing a quest while the reader remains materially
inactive. Dark Star uses fiction but attempts to break that proxy relationship.
The printed object is a device intended to push beyond interpretation and
toward scanning, meeting, making, signing, publishing, exchanging, or another
real act.

Its movement is therefore:

```text
destabilizing fiction
→ printed device
→ encounter with the mechanism
→ action outside the fiction
```

The pages do not need to produce a clear narrative arc, hero, resolution, or
stable character identification. Unique scenes and voices can simply appear,
collide, and disappear. Pages can detach from the larger body, be compiled,
printed, carried, or used without becoming character-centered alternate novels.

If another work is made with the same instrument, it should not have to extend
Dark Star. It can be another cartridge, scroll, score, or device with a
completely different world and purpose. The reusable object is the instrument
and publication method, not the Dark Star universe.

Dark Star's fictional world is deliberately expendable. It may persist as an
artifact, but it is not designed to hold the participant inside it. In that
sense, the universe succeeds when the reader leaves it and begins operating the
machinery to which it points.


## Compiled image edition

HTML is an editable and inspectable stage of the publication, but it need not
remain the definitive reading form. A provisional arrangement of pages can be compiled into fixed page images,
with a PDF acting primarily as a lossless ordered container for those images. The image edition freezes character placement,
spacing, type, color, ornaments, and page geometry.

The build can resemble `make`: source fragments, character paths, page rules,
fonts, images, and edition state are dependencies; a Lisp program or another
small deterministic builder resolves them into fixed pages. Only affected pages
need to be rebuilt when an input changes.

A conceptual pipeline is:

```text
prose and scene fragments
+ edition inputs and assembly rules
+ page and color rules
+ visual assets
+ edition metadata
→ deterministic builder
→ fixed raster pages
→ printable PDF / image sequence
```

During composition, HTML should move toward locked preformatted layout rather
than responsive paragraphs. `<pre>` or equivalent preserved-whitespace rules
can make authored line breaks and horizontal placement explicit. This is still
an intermediate preview: different browsers, fonts, and rendering engines can
move pixels. Compilation freezes a particular edition.

For reproducibility, a build manifest should eventually identify at least the
source revision, path selection, builder version, fonts, viewport, scale,
color profile, asset hashes, page dimensions, and output hashes.

### A machine-readable side channel

The definitive page image should be readable by a computer without requiring
OCR. A narrow side region, border, or microdot field can operate like the
soundtrack beside frames of film. It can encode the page's characters and
structural data while the visible page retains traditional typography.

Possible payloads include:

- exact textual characters and line breaks;
- semantic spans or speaker identifiers;
- page sequence and edition assembly information;
- edition and source hashes;
- links, addresses, CIDs, or ledger anchors;
- checksums and error-correction data;
- color-role or game-state information.

The encoding is not yet selected. PNG metadata alone is insufficient because a
screenshot, conversion, or physical print can discard it. If the channel is
expected to survive printing and scanning, its marks must exist in the rendered
page itself and use registration, redundancy, checksums, and error correction.
A screen edition might keep an additional data strip outside the ordinary
viewing crop, while a printed edition may require a visible or nearly invisible
border or microdot field.

This creates two related artifacts:

- the image as the definitive human-facing page for an edition;
- embedded or adjacent page data as a fast machine-readable transcription and
  structural index.

The system should preserve an ordinary visual reading experience even when the
data channel is ignored.

### Type and color as exact state

The fixed image can combine traditional black book typography with literal
colored characters. Color is not limited to decoration; it may distinguish
voices, encode state, identify character ownership, or participate in a scene's
mechanics.

The Mark episode can exploit this directly. It can behave visually like a game
of marbles, with colored characters occupying exact positions and functioning
as pieces, collisions, claims, or moves. The compiled page preserves that state
more reliably than flowing HTML. The same page can therefore be prose,
typesetting, image, game board, and machine-readable record at once.


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
