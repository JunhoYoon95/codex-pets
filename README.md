# Codex Pets

A personal collection of unofficial custom pets for Codex.

These pets are fan-made and intended for personal, non-commercial use.

## Pets

| Pet | Preview | Description |
| --- | --- | --- |
| [No.7 Celebration](./pets/white-no7-celebration) | ![No.7 Celebration preview](./pets/white-no7-celebration/preview.gif) | A white no.7 football celebration pet with a rear-view idle and hover celebration. |
| [White Navy No.7](./pets/white-navy-no7-golden-boot) | ![White Navy No.7 preview](./pets/white-navy-no7-golden-boot/preview.gif) | A white and navy no.7 football pet with a camera-click idle celebration and gold boot hover poses. |
| [Blue Red No.10](./pets/blue-red-no10-era-shift) | ![Blue Red No.10 preview](./pets/blue-red-no10-era-shift/preview.gif) | A blue-red no.10 football pet with a shirt-display idle and era-shifting sky-point hover celebration. |
| [Long Beach Legend](./pets/long-beach-legend) | ![Long Beach Legend preview](./pets/long-beach-legend/preview.gif) | A relaxed West Coast rapper-inspired pet with braids, black shades, a gold chain, and smoke-ring hover poses. |
| [Green Cage Fighter](./pets/green-cage-fighter) | ![Green Cage Fighter preview](./pets/green-cage-fighter/preview.gif) | A mature MMA fighter-inspired pet with bold tattoos, green fight shorts, a static standing idle, and flex hover poses. |
| [Trophy Striker V2](./pets/trophy-striker-v2) | ![Trophy Striker V2 preview](./pets/trophy-striker-v2/preview.gif) | A football-forward-inspired pet with national, blue-red club, and white club kit moments, trophy hover poses, and celebration animations. |

## Install

Codex custom pets are loaded from `~/.codex/pets/<pet-id>`.

To install a pet from this repository:

```bash
mkdir -p ~/.codex/pets
cp -R pets/white-no7-celebration ~/.codex/pets/
cp -R pets/white-navy-no7-golden-boot ~/.codex/pets/
cp -R pets/blue-red-no10-era-shift ~/.codex/pets/
cp -R pets/long-beach-legend ~/.codex/pets/
cp -R pets/green-cage-fighter ~/.codex/pets/
cp -R pets/trophy-striker-v2 ~/.codex/pets/
```

Then restart Codex or open a new Codex window so the pet list refreshes.

## Pet Folder Format

Each pet folder contains:

- `pet.json`: pet metadata used by Codex.
- `spritesheet.webp`: the Codex v2 spritesheet.
- `preview.gif`: a small README preview.
- `contact-sheet.png`: the full animation contact sheet.
- `look-directions.png`: the v2 look-direction QA sheet.
- `validation.json`: the latest v2 atlas validation result.
