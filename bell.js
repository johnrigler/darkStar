(() => {
  "use strict";

  const panels = {
    cover: {
      file: "cover.png",
      label: "The Bell cover"
    },
    "1": { file: "panel1.png", label: "The Bell, panel 1" },
    "2": { file: "panel2.png", label: "The Bell, panel 2" },
    "3": { file: "panel3.png", label: "The Bell, panel 3" },
    "4": { file: "panel4.png", label: "The Bell, panel 4" },
    "5": { file: "panel5.png", label: "The Bell, panel 5" },
    "6": { file: "panel6.png", label: "The Bell, panel 6" },
    "7": { file: "panel7.png", label: "The Bell, panel 7" },
    "8": { file: "panel8.png", label: "The Bell, panel 8" },
    "9": { file: "panel9.png", label: "The Bell, panel 9" },
    "10": { file: "panel10.png", label: "The Bell, panel 10" },
    "11": { file: "panel11.png", label: "The Bell, panel 11" },
    last: {
      file: "lastPanel.png",
      label: "The Bell, final panel"
    }
  };

  const requestedPanel = new URLSearchParams(window.location.search).get("panel");
  const panel = panels[requestedPanel] || panels.cover;
  const image = document.getElementById("bell-image");

  image.src = `theBell2024/${panel.file}`;
  image.alt = panel.label;
  document.title = panel.label;
})();
