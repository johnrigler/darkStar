# The Outlaws: Dark Star Comic Architecture
Working narrative and art direction, 2026-10-10

## Distinct but intersecting works
**Dark Star** is the outer comic about ordinary people at a bar during Christmas. **The Outlaws** are people escaping a disastrous Saturday with insufferable in-laws, sometimes accompanied by spouses. A drinking narrator treats an inset religious-surveillance pamphlet as a documentary account, misremembers it, and persuades the Outlaws to attend church on Sunday.

**The inset tract** is earnest, not ironic. It uses severe black-and-white moral certainty, frightening surveillance captions and hostile depictions of a pursued hacker and his allies. The actual shell output, cryptography and distributed infrastructure it shows are technically genuine; its conclusions and the narrator's retelling are unreliable.

**The Gospels** are another continuous inset work, visually an illuminated Book-of-Kells-like manuscript with shared ornaments and marginalia. Matthew: capitalist as heroic, exceptional problem-solver. Mark: Marcus Lyons/Egyptus, lion and Thiel's 'competition is for losers' maxim pushed to alpha dominance. Luke: ox/AI/Elon Musk/attention and social media accelerate out of control. John: outside the synoptic system, dismisses the contest itself and offers portable identity, ledgers and collaboration instead. Retain the distinction from the Bell and other inset stories.

## Agent and source
At the center is a female FBI agent and a hacker/source she has cultivated. Their repeated public meetings look rather like dating. They are both working, but also value the relationship personally. He helps her FBI career. She helps his early church/project. He wants her to support the church in cryptocurrency but keeps developing his ideas, inducing genuine fear of missing out: he can move on without her. He eventually builds a crypto game with demonstrable utility and makes millions in the *fictional* future; she retires from the FBI. Financial success is not itself proof of utility.

## The Sunday recognition
After the Saturday night bar scene the Outlaws attend church at someone's suggestion. They see the supposed agent and hacker from the tract, apparently together and astonishingly ordinary. Reveal mutual assistance, her retirement and his subsequent success through overheard talk and small behavior, not an explanatory speech. The narrator may regard their existence as vindication of the tract, even as the reader discovers its interpretation was false.

## The phone and the dead man's switch
A distributed **dead man's switch** demands periodic authenticated check-ins, with real consequences if the deadline passes. Its monitor may be remote and independent; Termux is a useful phone terminal, not an inherently reliable background timer. Show agents allowing access to his phone, believing that denial might trigger the switch. This does not make the phone immune to seizure, disconnection or monitoring.

He holds an **Android phone horizontally**. Across multiple comic panels and facing pages show Termux, a small keyboard at one side, scrolling prompts, real Python, SSH, shell commands and output. The typed text must make technical sense. He can check in, sign, interact with Chisel/Mogwai, and coordinate remote services. Keep private keys and live credentials out of artwork.

Mogwai's **agentic footprint** spans the world: people and software with independent incentives to maintain distributed infrastructure. Some are compensated to persist records or run infrastructure. A security organization may control the man physically without controlling every independent computer, although none of it is magically fail-proof. The tract portrays those participants as ominous outsiders; bar-goers regurgitate confused authoritarian and political rhetoric without understanding the machinery.

## The QR sequence and the donation
Progress through separate panels: a real text payload, Python QR generation in Termux, scannable QR displayed at right, an observer scanning it, and a **Monero (XMR)** offering request to the church. Do not equate displaying a payment request with confirmation of payment.

A separate Termux-screen **Easter egg QR** must link to the real **Dogecoin transaction from the Preface**. This must be a verified transaction reference, not the Monero address and not an invented Dogecoin destination. The original `qr1.svg` has now been **decoded**, yielding the exact Blockchair transaction link below, and the immutable transaction ID is the canonical key:

`13ff2a763674714aa87ae9931bc74d352e07bac6590d198f0b020d08fc41f839`

`https://blockchair.com/dogecoin/transaction/13ff2a763674714aa87ae9931bc74d352e07bac6590d198f0b020d08fc41f839`

The SVG's QR payload has been decoded locally, although the remote explorer's live response has not been independently confirmed. The other three original explorer QRs remain preserved, and should be checked against this same txid before claiming all four are equivalent. The preface textual addresses can act as secondary search clues. Use the txid in Chisel's Dogecoin transaction lookup or in a local indexed Dogecoin dataset; if Chisel's current Portal lacks exact txid lookup, add it rather than making an explorer URL the canonical artifact.

Reproducible QR generation, once the correct URI has been identified:

```sh
pkg install python
python -m pip install qrcode[pil]
printf '%s' 'VERIFIED_TRANSACTION_URL_HERE' > preface-link.txt
python -c 'import qrcode; qrcode.make(open("preface-link.txt").read().strip()).save("preface-easter-egg.png")'
```

The terminal view could also use Python qrcode's `print_ascii()` for a QR represented with terminal characters, followed by a crisp scan-ready QR on the next panel. These are separate visual treatments of the same encoded artifact.

## Additional tract fear: AI mining
A grim inset can claim that AI data centers threaten cryptocurrencies. The technically credible version is redirected GPUs affecting *smaller GPU-mineable proof-of-work networks* or AI-assisted miner coordination, not generic GPUs defeating Bitcoin ASICs. Narrator/tract hyperbole must be distinguishable from the true technical mechanics.

## Production rules
- Outer comic: Christmas bar, common people, believable faces, comic framing and dialogue.
- Tract: solemn religious alarm, no self-aware satire.
- Gospels: visibly unified illuminated manuscript, its own continuous narrative.
- Termux: real landscape UI, real command syntax, scrolling screen progression, tiny keyboard and QR payoff at right.
- Final church scene: quiet realism and recognition.
- Technical artifacts: correct and independently inspectable. Narrators can misunderstand them.
- Preserve current folded-book pagination and centerfold. Prototype art and narrative before integrating untested QR or overflowing pages.

## Canonical DOGE reference, not a website
The Termux Easter-egg QR should encode a proposed **Chisel/Mogwai ledger URI** rather than any provider URL:

```text
doge:13ff2a763674714aa87ae9931bc74d352e07bac6590d198f0b020d08fc41f839
```

The `doge:` scheme is an **application-defined convention** here, not an already-universal browser URL scheme. It identifies a Dogecoin transaction, not a payment recipient or domain. Chisel/Mogwai can parse the scheme, validate the 64-hex transaction identifier, and resolve it through interchangeable Dogecoin nodes, explorer APIs, or a local index. A handler may register a custom external protocol or use an internal route; an ordinary browser cannot be assumed to open `doge:` natively. A user should always be able to copy the canonical identifier and switch providers. The Preface's four existing historical explorer QRs remain part of the original artifact; the phone comic can show this new canonical URI. The contrast is intentional: protocol address versus service URL.
