(() => {
  "use strict";

  const panels = {
    cover: {
      file: "assets/bell/bell-42fffb2d.png",
      label: "The Bell cover"
    },
    "1": { file: "assets/bell/bell-9b1baf54.png", label: "The Bell, panel 1" },
    "2": { file: "assets/bell/bell-33604ec9.png", label: "The Bell, panel 2" },
    "3": { file: "assets/bell/bell-c8cdf0c1.png", label: "The Bell, panel 3" },
    "4": { file: "assets/bell/bell-1fecc426.png", label: "The Bell, panel 4" },
    "5": { file: "assets/bell/bell-c9af16fd.png", label: "The Bell, panel 5" },
    "6": { file: "assets/bell/bell-f6021db7.png", label: "The Bell, panel 6" },
    "7": { file: "assets/bell/bell-3f90b579.png", label: "The Bell, panel 7" },
    "8": { file: "assets/bell/bell-01351232.png", label: "The Bell, panel 8" },
    "9": { file: "assets/bell/bell-97b80da2.png", label: "The Bell, panel 9" },
    "10": { file: "assets/bell/bell-215b542e.png", label: "The Bell, panel 10" },
    "11": { file: "assets/bell/bell-f69a2913.png", label: "The Bell, panel 11" },
    last: {
      file: "assets/bell/bell-48bf9231.png",
      label: "The Bell, final panel"
    }
  };

  const parameters = new URLSearchParams(window.location.search);
  const requestedPanel = parameters.get("panel");
  const requestedSide = parameters.get("side");
  const panel = panels[requestedPanel] || panels.cover;
  const side = requestedSide === "left" ? "left" : "right";
  const image = document.getElementById("bell-image");
  const observation = document.getElementById("bell-observation");

  document.body.dataset.side = side;
  image.src = panel.file;
  image.alt = panel.label;
  document.title = panel.label;

  if (observation) {
    observation.textContent = `${panel.label}. The panel sits inside the larger manuscript page like a separate pamphlet page: drawing and lettering held together as the object to read, with placeholder prose flowing around its outside edge. This is only a first visual note, deliberately provisional.`;
  }
})();
