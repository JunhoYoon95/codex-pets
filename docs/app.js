"use strict";

const repository = "https://github.com/JunhoYoon95/codex-pets";
const rawRoot = "https://raw.githubusercontent.com/JunhoYoon95/codex-pets/main/pets";

const pets = Object.freeze([
  {
    id: "white-no7-celebration",
    name: "No.7 Celebration",
    description: "A white no.7 football celebration pet with a rear-view idle and hover celebration."
  },
  {
    id: "white-navy-no7-golden-boot",
    name: "White Navy No.7",
    description: "A white and navy no.7 football pet with a camera-click idle celebration and gold boot hover poses."
  },
  {
    id: "blue-red-no10-era-shift",
    name: "Blue Red No.10",
    description: "A blue-red no.10 football pet with a shirt-display idle and era-shifting sky-point hover celebration."
  },
  {
    id: "long-beach-legend",
    name: "Long Beach Legend",
    description: "A relaxed West Coast rapper-inspired pet with braids, black shades, a gold chain, and smoke-ring hover poses."
  },
  {
    id: "green-cage-fighter",
    name: "Green Cage Fighter",
    description: "A mature MMA fighter-inspired pet with bold tattoos, green fight shorts, a static standing idle, and flex hover poses."
  },
  {
    id: "trophy-striker-v2",
    name: "Trophy Striker V2",
    description: "A football-forward-inspired pet with multiple kit moments, trophy hover poses, and celebration animations."
  },
  {
    id: "sky-blue-no9-zen-slide",
    name: "Sky Blue No.9 Zen Slide",
    description: "A sky-blue no.9 striker-inspired pet with dynamic hover poses and sliding zen celebration states."
  },
  {
    id: "yellow-green-forward",
    name: "Yellow Green Forward",
    description: "A yellow-green national-kit football pet with rainbow-flick hover poses and a celebration state."
  }
]);

const petById = new Map(pets.map((pet) => [pet.id, pet]));
const app = document.querySelector("#app");
const requestedId = new URLSearchParams(window.location.search).get("pet");

function petAsset(pet, filename) {
  return `${rawRoot}/${pet.id}/${filename}`;
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

async function fetchPetFile(pet, filename) {
  const response = await fetch(petAsset(pet, filename));
  if (!response.ok) {
    throw new Error(`Unable to download ${filename}`);
  }
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.length === 0 || bytes.length > 20 * 1024 * 1024) {
    throw new Error(`${filename} has an invalid size`);
  }
  return bytes;
}

function validWebp(bytes) {
  return bytes.length >= 12
    && String.fromCharCode(...bytes.slice(0, 4)) === "RIFF"
    && String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";
}

async function downloadPet(pet, button, status) {
  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = `Preparing ${pet.name}…`;
  status.textContent = "Downloading the two pet files and creating one ZIP…";

  try {
    const [manifestBytes, spritesheetBytes] = await Promise.all([
      fetchPetFile(pet, "pet.json"),
      fetchPetFile(pet, "spritesheet.webp")
    ]);
    const manifest = JSON.parse(new TextDecoder().decode(manifestBytes));
    if (manifest.spriteVersionNumber !== 2 || manifest.spritesheetPath !== "spritesheet.webp" || !validWebp(spritesheetBytes)) {
      throw new Error("The downloaded pet files failed validation");
    }

    const zipBytes = globalThis.CodexPetZip.createStoredZip([
      { name: `${pet.id}/pet.json`, data: manifestBytes },
      { name: `${pet.id}/spritesheet.webp`, data: spritesheetBytes }
    ]);
    const objectUrl = URL.createObjectURL(new Blob([zipBytes], { type: "application/zip" }));
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = `${pet.id}.zip`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);

    button.textContent = "Downloaded";
    status.textContent = `Saved ${pet.id}.zip to your Downloads folder.`;
  } catch (error) {
    button.textContent = "Try download again";
    status.textContent = "The download failed. Check your connection and try again.";
  } finally {
    button.disabled = false;
    window.setTimeout(() => {
      if (button.textContent === "Downloaded") button.textContent = originalLabel;
    }, 3000);
  }
}

function renderHome(errorMessage) {
  const fragment = document.createDocumentFragment();

  if (errorMessage) {
    const notice = element("section", "notice error");
    notice.append(
      element("p", "eyebrow", "Invalid pet link"),
      element("h2", "", "That pet is not registered"),
      element("p", "lede", errorMessage)
    );
    fragment.append(notice);
  }

  const intro = element("section", "intro");
  intro.append(
    element("p", "eyebrow", "Unofficial custom companions"),
    element("h1", "", "Choose a pet for Codex."),
    element("p", "lede", "Review a pet, then open Codex only when you are ready. This page accepts only pets registered in the public codex-pets repository.")
  );

  const grid = element("section", "pet-grid");
  grid.setAttribute("aria-label", "Available Codex pets");

  for (const pet of pets) {
    const card = element("article", "pet-card");
    const image = element("img");
    image.src = petAsset(pet, "preview.gif");
    image.alt = `${pet.name} animated preview`;
    image.loading = "lazy";
    image.width = 320;
    image.height = 320;

    const body = element("div", "pet-card-body");
    const heading = element("h2", "", pet.name);
    const link = element("a", "card-link", "Review & download");
    link.href = `?pet=${encodeURIComponent(pet.id)}`;
    link.setAttribute("aria-label", `Review and download ${pet.name}`);
    body.append(heading, link);
    card.append(image, body);
    grid.append(card);
  }

  fragment.append(intro, grid);
  app.replaceChildren(fragment);
  document.title = "Codex Pets — Safe Installer";
}

function renderInstaller(pet) {
  const section = element("section", "installer");

  const preview = element("div", "installer-preview");
  const image = element("img");
  image.src = petAsset(pet, "preview.gif");
  image.alt = `${pet.name} animated preview`;
  image.width = 520;
  image.height = 520;
  preview.append(image);

  const content = element("div", "installer-content");
  const eyebrow = element("p", "eyebrow", "Review before downloading");
  const heading = element("h1", "", pet.name);
  const description = element("p", "description", pet.description);
  const safety = element("p", "safety-note", `This downloads only ${pet.name}: one folder containing pet.json and spritesheet.webp. No other pets or repository files are included.`);

  const actions = element("div", "actions");
  const download = element("button", "primary-button", `Download ${pet.name} (.zip)`);
  download.type = "button";
  download.setAttribute("aria-label", `Download only ${pet.name} as a ZIP file`);
  const downloadStatus = element("p", "download-status", "Only this pet will be downloaded.");
  downloadStatus.setAttribute("aria-live", "polite");
  download.addEventListener("click", () => downloadPet(pet, download, downloadStatus));

  const back = element("a", "text-link", "Choose another pet");
  back.href = "./";

  const manual = element("a", "text-link", "How to install the downloaded ZIP");
  manual.href = `${repository}#manual-installation`;

  const guide = element("section", "install-guide");
  guide.setAttribute("aria-labelledby", "install-guide-title");
  const guideTitle = element("h2", "", "After downloading");
  guideTitle.id = "install-guide-title";
  const guideIntro = element("p", "guide-intro", "The ZIP is saved to your Downloads folder. Extract it first, then let Codex open the correct hidden folder for you.");
  const steps = element("ol", "install-steps");

  const unzipStep = element("li");
  unzipStep.append(
    document.createTextNode("In your Downloads folder, open "),
    element("code", "", `${pet.id}.zip`),
    document.createTextNode(" to extract it. Keep the folder named "),
    element("code", "", pet.id),
    document.createTextNode(".")
  );

  const settingsStep = element("li", "", "Open the Codex app, then go to Settings > Pets.");

  const findStep = element("li");
  findStep.append(
    document.createTextNode("Scroll down to "),
    element("strong", "", "Custom pets"),
    document.createTextNode(", then select "),
    element("strong", "", "Open folder"),
    document.createTextNode(". Codex will open the correct pet folder for you.")
  );

  const copyStep = element("li");
  copyStep.append(
    document.createTextNode("Drag the extracted "),
    element("code", "", pet.id),
    document.createTextNode(" folder into the folder Codex opened.")
  );

  const finishStep = element("li");
  finishStep.append(
    document.createTextNode("Return to the pet list in Codex. The new pet should appear automatically. If it does not, select "),
    element("strong", "", "Refresh"),
    document.createTextNode(", then choose the pet and enter /pet to wake it.")
  );
  steps.append(unzipStep, settingsStep, findStep, copyStep, finishStep);

  const advanced = element("details", "advanced-path");
  const advancedTitle = element("summary", "", "If you do not see Open folder");
  const advancedText = element("p");
  advancedText.append(
    document.createTextNode("On macOS, open Finder and press Command + Shift + G, then enter "),
    element("code", "", "~/.codex/pets"),
    document.createTextNode(". On Windows, paste "),
    element("code", "", "%USERPROFILE%\\.codex\\pets"),
    document.createTextNode(" into File Explorer's address bar. Create the pets folder inside .codex if it does not exist.")
  );
  advanced.append(advancedTitle, advancedText);
  guide.append(guideTitle, guideIntro, steps, advanced);

  const helperLinks = element("nav", "helper-links");
  helperLinks.setAttribute("aria-label", "Installer links");
  helperLinks.append(manual, back);

  actions.append(download, downloadStatus);
  content.append(eyebrow, heading, description, safety, actions, guide, helperLinks);
  section.append(preview, content);
  app.replaceChildren(section);
  document.title = `${pet.name} — Codex Pets`;
}

if (!requestedId) {
  renderHome();
} else if (petById.has(requestedId)) {
  renderInstaller(petById.get(requestedId));
} else {
  renderHome("The URL requested an unknown pet. Choose one of the published pets below instead.");
}
