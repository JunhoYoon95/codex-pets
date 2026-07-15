# Codex Pets

A personal collection of unofficial custom pets for Codex.

These pets are fan-made and intended for personal, non-commercial use. This repository is not affiliated with, endorsed by, or sponsored by OpenAI, Codex, any athlete, team, brand, league, or other rights holder.

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

## Notes

Please keep redistributed pets personal and non-commercial. Do not use these assets to imply official endorsement, sponsorship, or affiliation.

If you are a rights holder and have concerns, please open an issue and I will review or remove the material promptly.
