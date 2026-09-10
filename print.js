(() => {
  "use strict";

  const book = window.DARK_STAR_BOOK;
  const documentRoot = document.getElementById("print-document");
  const mode = document.body.dataset.printMode;

  /*
    The print edition replaces provisional lorem/filler in the Bell and
    artifact pages with current novel notes. The source pages remain easy
    to hand-edit; this layer is specifically for the printable edition.
  */
  const NOVEL_NOTES = {
    "bell-cover.html": [
      {
        color: "note-navy",
        text: `PART ONE / GOSPEL NOTES\n\nMatthew, Mark, Luke and John are four rendering systems, not four\nwitnesses politely agreeing. The same world keeps being translated\nthrough money, technology, theology, rhyme, taxonomy and bad memory.\nThe contradictions are part of the machinery.`
      },
      {
        color: "note-purple",
        text: `Johnnie McDougall can narrate the Gospel without surviving it intact.\nThe voice begins confident, annotating everything. By John, the notes,\ncharacters, code, quotations and ledger artifacts stop obeying the old\nboundaries. The book should feel increasingly unable to remember which\nmedium it started in.`
      }
    ],
    "bell-01.html": [
      {
        color: "note-navy",
        text: `MATTHEW\n\nWorking fiction note: Matthew is a composite mask made from Nick Hanauer\nand Paul Graham. Do not solve the composite. Let both voices occupy the\nsame speaker until the reader notices that the argument about capital is\nalso an argument about who gets to build.`
      },
      {
        color: "note-brown",
        text: `One side sees concentrated wealth eating the social order. The other\nsees small groups of builders escaping institutional permission. Matthew\nkeeps asking whether capital can finance the bazaar without becoming its\nlandlord.`
      }
    ],
    "bell-02.html": [
      {
        color: "note-brown",
        text: `MATTHEW / GATE\n\nA person may be allowed to speak without being allowed to carry away the\nmachinery. Universities, venture firms, platforms and protocols all have\ndifferent versions of this problem. The useful test is not openness of\nspeech but symmetry of action.`
      },
      {
        color: "note-navy",
        text: `The bell is a crude test case. If the crowd can only assemble through a\nlicensed bell, the crowd is still rented. The stronger tool keeps working\nafter its author, investor, interface and institution disappear.`
      }
    ],
    "bell-03.html": [
      {
        color: "note-purple",
        text: `MATTHEW / MONEY THAT IS NOT THE POINT\n\nCrypto keeps announcing itself as price. Matthew keeps trying to talk\nabout the medium underneath the price: signatures, replicated history,\nportable proof and the possibility that a transaction can carry language.`
      },
      {
        color: "note-brown",
        text: `The joke is that a market can become more interesting when the protocol\nitself becomes economically boring. Remove the tollbooth and value moves\nup the stack into coordination, logistics, reputation, discovery and the\nthings people can now do without asking.`
      }
    ],
    "bell-04.html": [
      {
        color: "note-navy",
        text: `MATTHEW -> MARK\n\nThe chapter should not end by proving Matthew correct. It should mutate.\nAn argument about founders and kings hardens into a literal king, then a\ndinosaur, then a naming problem. The abstraction acquires teeth.`
      },
      {
        color: "note-purple",
        text: `Transition rule: when an explanation becomes too stable, break its frame.\nThe reader is not carried to a conclusion. The reader is dropped into a\ndifferent representational system and expected to keep moving.`
      }
    ],
    "bell-05.html": [
      {
        color: "note-purple",
        text: `MARK\n\nPeter Thiel appears to become a T-Rex playing a strange mathematical\nmarble game. The language slips into German because the game is now\nshadowed by Hesse's Das Glasperlenspiel. Philosophy has become a toy with\nrules nobody quite remembers.`
      },
      {
        color: "note-navy",
        text: `Do not explain the transformation as dream, satire or hallucination. Mark\nshould behave as though taxonomy itself made the change necessary.`
      }
    ],
    "bell-06.html": [
      {
        color: "note-purple",
        text: `MARK / DAS GLASPERLENSPIEL\n\nThe marble game becomes too serious. It accumulates references, rules and\nGerman terminology until the intellectual machine starts to resemble the\nthing it is discussing: a closed game of prestige played by people who\nknow the moves.`
      },
      {
        color: "note-brown",
        text: `Then a paleontological coincidence intrudes. Perhaps this Tylosaurus Rex\nis not Peter Thiel at all. Perhaps the name points to a paleontologist\nnamed Thiel. The book briefly pretends that taxonomy will rescue identity.\nIt will not.`
      }
    ],
    "bell-07.html": [
      {
        color: "note-brown",
        text: `MARK / THE NAME IS ALREADY TAKEN\n\nThe proposed dinosaur name collides with another creature: the Elon\nMuskiest dinosaur. Now the dispute is not about politics but priority,\nnomenclature and who got there first. Founder mythology has been demoted\nto a schoolyard argument over labels.`
      },
      {
        color: "note-purple",
        text: `Keep the naming dispute ridiculous and technically earnest at the same\ntime. The characters should care more about the rules of naming than the\nreader can justify.`
      }
    ],
    "bell-08.html": [
      {
        color: "note-navy",
        text: `MARK / REGRESSION\n\nThe book appears to travel backward into dinosaur time. Then the disguise\nslips: these may simply be children dressed as dinosaurs for Halloween.\nThe grand historical regression collapses into costumes, pavement and a\nhandful of marbles.`
      },
      {
        color: "note-brown",
        text: `They keep arguing. The argument survives every change of scale: billionaire\nto dinosaur, dinosaur to child, theory to game. Only the dignity of the\nparticipants has changed.`
      }
    ],
    "bell-09.html": [
      {
        color: "note-purple",
        text: `MARK / MARBLES\n\nTwo children in dinosaur suits shoot marbles and dispute the rules. This\nis where the Glass Bead Game should finally become literal enough to be\nunderstood and childish enough to become embarrassing.`
      },
      {
        color: "note-navy",
        text: `The reader can no longer tell whether the earlier philosophers were\nplaying a children's game or whether the children have inherited an\nimpossibly elaborate philosophy. Leave both readings alive.`
      }
    ],
    "bell-10.html": [
      {
        color: "note-brown",
        text: `LUKE\n\nLuke begins with the sound of the name: LUKE / LUCK / LOOK / LOOKS LIKE.\nMeaning starts to follow phonetics instead of causality. A sentence can\nturn because the next word rhymes, resembles, mishears or visually echoes\nthe word before it.`
      },
      {
        color: "note-purple",
        text: `This is the Dr. Seuss pressure entering the book. The rhyme is not comic\nrelief pasted on top. It is an alternate physics for the page.`
      }
    ],
    "bell-10a.html": [
      {
        color: "note-purple",
        text: `LUKE / LOOK / LUCK\n\nA name produces a verb, the verb produces an image, the image produces a\nnew scene. Grammar becomes a switchyard. Repetition is allowed to create\nobjects simply because the mouth keeps finding the same track.`
      },
      {
        color: "note-brown",
        text: `The chapter can look childish while doing something severe: removing the\nreader's confidence that prose exists to report a stable external world.`
      }
    ],
    "bell-10b.html": [
      {
        color: "note-navy",
        text: `LUKE / SEUSS ENGINE\n\nLet typography participate. Words can enlarge, narrow, stagger, rhyme or\nfall into columns. The page is allowed to become an instrument rather than\na transparent window.`
      },
      {
        color: "note-purple",
        text: `By the end of Luke, sound has done to narrative what Mark did with\ntaxonomy: it has replaced explanation with a rule the reader can feel but\ncannot fully stabilize.`
      }
    ],
    "bell-11.html": [
      {
        color: "note-navy",
        text: `JOHN\n\nJohn is where the rendering systems fail together. Narrator, character,\nquotation, source code, scripture, ledger address and stage direction can\noccupy the same visual rank. The page stops promising which layer is real.`
      },
      {
        color: "note-purple",
        text: `Johnnie McDougall is still present, but increasingly as residue: prefixes,\nchecksums, commentary, broken names and instructions that may be read by a\nperson or executed by a machine.`
      }
    ],
    "bell-12.html": [
      {
        color: "note-purple",
        text: `JOHN / DISINTEGRATION\n\nChronology should loosen. Identity should accumulate instead of resolve.\nOne figure may be a person, a reference, a protocol joke and a later tool\nwithout any final revelation explaining which one was true.`
      },
      {
        color: "note-brown",
        text: `The QR code and ledger artifact stop being annotations to the story. They\nbecome part of its grammar. Reading now has an exit route into an actual\nsystem outside the page.`
      }
    ],
    "bell-last.html": [
      {
        color: "note-navy",
        text: `JOHN / END OF PART ONE\n\nDo not resolve the Gospel. End it physically. The next page is sideways\nand tarot-like: a hinge, field-kit card, pullout precursor. The reader has\nbeen trained to tolerate unstable representation; now the book hands over\nan object.`
      },
      {
        color: "note-purple",
        text: `The move is: READ -> TURN -> HANDLE -> SCAN -> WRITE -> PASS.\nThe story changes regime after this. John does not have to narrate what\ncomes next.`
      }
    ],
    "doge-soup.html": [
      {
        color: "note-teal",
        text: `PART TWO / FOUND ARTIFACT\n\nA Dogecoin transaction appears inside an explorer, inside a browser, inside\na phone screenshot, with advertising and operating-system chrome still\nattached. The readable address fragments are only one layer. The important\nthing is the nesting of media: ledger -> explorer -> page -> phone -> book.\n\nDaisy's later identity should work the same way. Issy, Daisy, machine-song\nDaisy, AI image, toolmaker: the references accumulate instead of peeling\naway toward one secret essence. Dark Star keeps asking whether identity can\nbe a stack rather than a mask.\n\nThe artifact also points forward to the ending rule. Fiction is allowed to\nproduce a tool that actually exists outside the fiction. The character does\nnot save the world. She notices a small encoding problem and makes M64.`
      }
    ]
  };

  function applyNovelNotes(frame, resource) {
    const notes = NOVEL_NOTES[resource];
    if (!notes) return;

    const doc = frame.contentDocument;
    if (!doc) return;

    const targets = [...doc.querySelectorAll(".lorem")];
    if (!targets.length) return;

    targets.forEach((target, index) => {
      const note = notes[Math.min(index, notes.length - 1)];
      target.textContent = note.text;
      target.classList.add("novel-note", note.color);
      target.classList.remove("panel-notes");
    });

    if (doc.body) doc.body.dataset.printNovelized = "true";
  }

  function makeFrame(resource, physicalPageNumber) {
    const frame = document.createElement("iframe");
    frame.className = "print-page";
    frame.title = resource
      ? `Physical page ${physicalPageNumber}: ${resource}`
      : `Physical page ${physicalPageNumber}: blank`;

    if (resource) {
      frame.addEventListener("load", () => applyNovelNotes(frame, resource), { once: true });
      frame.src = resource;
    } else {
      frame.srcdoc =
        "<!doctype html><html><body style='margin:0;width:7in;height:8.5in;background:#fff'></body></html>";
    }

    return frame;
  }

  function addLabel(sheet, text) {
    const label = document.createElement("span");
    label.className = "sheet-label";
    label.textContent = text;
    sheet.appendChild(label);
  }

  function renderLetter() {
    const requestedPage = Number.parseInt(
      new URLSearchParams(window.location.search).get("page"),
      10
    );

    const pageIndices =
      Number.isFinite(requestedPage) &&
      requestedPage >= 1 &&
      requestedPage <= book.pages.length
        ? [requestedPage - 1]
        : book.pages.map((_, index) => index);

    pageIndices.forEach((pageIndex) => {
      const sheet = document.createElement("section");
      sheet.className = "sheet letter-sheet";
      sheet.appendChild(makeFrame(book.pages[pageIndex], pageIndex + 1));
      addLabel(sheet, `physical page ${pageIndex + 1}`);
      documentRoot.appendChild(sheet);
    });
  }

  function paddedBookPages() {
    const pages = [...book.pages];
    while (pages.length % 4 !== 0) pages.push(null);
    return pages;
  }

  function makeBookletHalf(resource, pageIndex) {
    const half = document.createElement("div");
    half.className = "booklet-half";
    half.appendChild(makeFrame(resource, pageIndex + 1));
    return half;
  }

  function addBookletSide(pages, leftIndex, rightIndex, sheetNumber, side) {
    const sheet = document.createElement("section");
    sheet.className = "sheet booklet-sheet";
    sheet.appendChild(makeBookletHalf(pages[leftIndex], leftIndex));
    sheet.appendChild(makeBookletHalf(pages[rightIndex], rightIndex));
    addLabel(
      sheet,
      `sheet ${sheetNumber}, ${side}: pages ${leftIndex + 1} | ${rightIndex + 1}`
    );
    documentRoot.appendChild(sheet);
  }

  function renderBooklet() {
    const pages = paddedBookPages();
    const sheetCount = pages.length / 4;

    for (let sheetIndex = 0; sheetIndex < sheetCount; sheetIndex += 1) {
      const frontLeft = pages.length - 1 - sheetIndex * 2;
      const frontRight = sheetIndex * 2;
      const backLeft = sheetIndex * 2 + 1;
      const backRight = pages.length - 2 - sheetIndex * 2;

      addBookletSide(
        pages,
        frontLeft,
        frontRight,
        sheetIndex + 1,
        "front"
      );
      addBookletSide(
        pages,
        backLeft,
        backRight,
        sheetIndex + 1,
        "back"
      );
    }
  }

  if (mode === "booklet") {
    renderBooklet();
  } else {
    renderLetter();
  }
})();
