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
  const safety = element("p", "safety-note", `The ZIP contains every published pet. After downloading it, copy the pets/${pet.id} folder into your Codex pets folder, then restart Codex.`);

  const actions = element("div", "actions");
  const download = element("a", "primary-button", "Download pet files (.zip)");
  download.href = `${repository}/archive/refs/heads/main.zip`;
  download.setAttribute("aria-label", `Download the repository ZIP containing ${pet.name}`);

  const back = element("a", "text-link", "Choose another pet");
  back.href = "./";

  const manual = element("a", "text-link", "How to install the downloaded ZIP");
  manual.href = `${repository}#manual-installation`;

  actions.append(download);
  content.append(eyebrow, heading, description, safety, actions, manual);
  content.append(back);
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
