# Codex Pets

A personal collection of unofficial custom pets for Codex.

These pets are fan-made and intended for personal, non-commercial use.

## Pets

| Pet | Preview | Description |
| --- | --- | --- |
| [No.7 Celebration](./pets/white-no7-celebration) | ![No.7 Celebration preview](./pets/white-no7-celebration/preview.gif) | A white no.7 football celebration pet with a rear-view idle and hover celebration. |

## Install

Codex custom pets are loaded from `~/.codex/pets/<pet-id>`.

To install a pet from this repository:

```bash
mkdir -p ~/.codex/pets
cp -R pets/white-no7-celebration ~/.codex/pets/
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
