# Codex Pets

Unofficial, fan-made animated companions for the Codex app and Codex CLI.

Pick a pet, download it, and let it keep you company while Codex works. No coding is required.

[한국어 설치 안내](#한국어-빠른-설치) · [Manual installation](#manual-installation) · [Troubleshooting](#troubleshooting)

> [!IMPORTANT]
> You need a version of the Codex/ChatGPT desktop app that includes **Settings > Pets**. Pet availability can depend on your app version, account, or workspace.

## Choose your pet

Open a pet's download page and choose **Download pet files (.zip)**. Then copy the selected pet folder into your Codex pets directory by following the instructions below.

| Pet | Preview | Download |
| --- | --- | :---: |
| [No.7 Celebration](./pets/white-no7-celebration) | ![No.7 Celebration preview](./pets/white-no7-celebration/preview.gif) | [Download / install](https://junhoyoon95.github.io/codex-pets/?pet=white-no7-celebration) |
| [White Navy No.7](./pets/white-navy-no7-golden-boot) | ![White Navy No.7 preview](./pets/white-navy-no7-golden-boot/preview.gif) | [Download / install](https://junhoyoon95.github.io/codex-pets/?pet=white-navy-no7-golden-boot) |
| [Blue Red No.10](./pets/blue-red-no10-era-shift) | ![Blue Red No.10 preview](./pets/blue-red-no10-era-shift/preview.gif) | [Download / install](https://junhoyoon95.github.io/codex-pets/?pet=blue-red-no10-era-shift) |
| [Long Beach Legend](./pets/long-beach-legend) | ![Long Beach Legend preview](./pets/long-beach-legend/preview.gif) | [Download / install](https://junhoyoon95.github.io/codex-pets/?pet=long-beach-legend) |
| [Green Cage Fighter](./pets/green-cage-fighter) | ![Green Cage Fighter preview](./pets/green-cage-fighter/preview.gif) | [Download / install](https://junhoyoon95.github.io/codex-pets/?pet=green-cage-fighter) |
| [Trophy Striker V2](./pets/trophy-striker-v2) | ![Trophy Striker V2 preview](./pets/trophy-striker-v2/preview.gif) | [Download / install](https://junhoyoon95.github.io/codex-pets/?pet=trophy-striker-v2) |
| [Sky Blue No.9 Zen Slide](./pets/sky-blue-no9-zen-slide) | ![Sky Blue No.9 Zen Slide preview](./pets/sky-blue-no9-zen-slide/preview.gif) | [Download / install](https://junhoyoon95.github.io/codex-pets/?pet=sky-blue-no9-zen-slide) |
| [Yellow Green Forward](./pets/yellow-green-forward) | ![Yellow Green Forward preview](./pets/yellow-green-forward/preview.gif) | [Download / install](https://junhoyoon95.github.io/codex-pets/?pet=yellow-green-forward) |

## Quick start

1. Click **Download / install** next to the pet you want.
2. Press **Download pet files (.zip)**.
3. Follow the [manual installation steps](#manual-installation) to copy the selected pet folder into the Codex pets directory.
4. Restart Codex, then open your profile menu and select **Pets**. You can also open **Settings > Pets**.
5. Select your new pet.
6. Type `/pet` in a chat, or open the command menu and select **Wake Pet**.

Run `/pet` again or select **Tuck Away Pet** when you want to hide it.

> [!TIP]
> The ZIP contains every published pet, so you only need to copy the folder for the pet you want.

## 한국어 빠른 설치

1. 위 목록에서 원하는 펫의 **Download / install**을 눌러 다운로드 페이지를 엽니다.
2. **Download pet files (.zip)**을 눌러 ZIP 파일을 받습니다.
3. 아래의 [수동 설치](#manual-installation) 안내에 따라 원하는 펫 폴더를 Codex의 `pets` 폴더로 복사합니다.
4. Codex를 재시작한 다음 프로필 메뉴의 **Pets** 또는 **Settings > Pets**로 이동합니다.
5. 설치한 펫을 선택합니다.
6. 채팅에 `/pet`을 입력하거나 명령 메뉴에서 **Wake Pet**을 선택합니다.

ZIP에는 공개된 모든 펫이 들어 있습니다. 아래의 [수동 설치](#manual-installation) 안내에 따라 원하는 펫 폴더 하나만 복사하면 됩니다. 터미널이나 개발 지식은 필요하지 않습니다.

## Manual installation

Use this method if the **Install in Codex** link does not work.

### Option A: Download the ZIP — no terminal required

1. At the top of this GitHub page, click the green **Code** button, then **Download ZIP**.
2. Unzip the downloaded `codex-pets-main.zip` file.
3. Open the extracted `codex-pets-main/pets` folder.
4. Copy the folder for the pet you want. For example, copy `white-no7-celebration`.
5. Paste that folder into the Codex pets directory:
   - **macOS:** In Finder, press <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>, enter `~/.codex/pets`, and press Return.
   - **Windows:** In File Explorer's address bar, enter `%USERPROFILE%\.codex\pets` and press Enter.
   - If the `pets` folder does not exist, create it inside `.codex`.
6. Restart the Codex app, or open a new Codex window.
7. Open **Settings > Pets**, select the installed pet, and run `/pet` to wake it.

The final folder structure should look like this:

```text
.codex/
└── pets/
    └── white-no7-celebration/
        ├── pet.json
        └── spritesheet.webp
```

Avoid an extra nested folder such as `pets/codex-pets-main/pets/white-no7-celebration`; Codex will not find the pet there.

### Option B: Terminal

Install one pet from a cloned copy of this repository:

```bash
mkdir -p ~/.codex/pets
cp -R pets/white-no7-celebration ~/.codex/pets/
```

Replace `white-no7-celebration` with any pet ID from the table above.

To install every pet at once:

```bash
mkdir -p ~/.codex/pets
cp -R pets/* ~/.codex/pets/
```

Then restart Codex or open a new Codex window.

## Using a pet in Codex CLI

Compatible custom pets installed on your computer also appear in an interactive Codex CLI session:

- Enter `/pets` or `/pet` to open the pet picker.
- Enter `/pets ` followed by a name to choose a pet directly.
- Enter `/pets off` to turn terminal pets off.

Terminal pets require iTerm2 3.6 or later, or a terminal with Kitty graphics or Sixel support. They do not work inside tmux or Zellij. The Codex IDE extension does not currently include a pet picker or floating pet overlay.

## Updating or removing a pet

To update a manually installed pet, replace its folder in `~/.codex/pets` with the newer folder from this repository, then restart Codex.

To remove one, delete only that pet's folder from `~/.codex/pets`, then restart Codex. You can also manage pets from **Settings > Pets** when the app provides that option.

## Troubleshooting

### The install link does nothing

- Make sure the Codex desktop app is installed and up to date.
- Try opening this README in a regular browser instead of a GitHub mobile or desktop client.
- Check whether your browser blocked the request to open Codex.
- Use [Manual installation](#manual-installation) if app links are blocked.

### The pet does not appear in Settings

- Confirm that the folder is directly inside `~/.codex/pets` on macOS/Linux or `%USERPROFILE%\.codex\pets` on Windows.
- Confirm that `pet.json` and `spritesheet.webp` are directly inside the pet folder.
- Restart Codex or open a new Codex window after copying the files.
- The Pets feature may not yet be enabled for your app version, account, or workspace.

### The pet appears but does not move

Pets respect your operating system's **Reduce Motion** accessibility setting. When reduced motion is enabled, Codex shows a still frame instead of the animation.

### The pet does not appear in the IDE extension

This is expected. Use the Codex desktop app or a supported Codex CLI terminal. See the [official Pets guide](https://learn.chatgpt.com/docs/pets) for current product support.

## What's in each pet folder?

| File | Purpose |
| --- | --- |
| `pet.json` | Name, description, sprite version, and spritesheet path used by Codex. |
| `spritesheet.webp` | The Codex v2 animated spritesheet used by the pet. |
| `preview.gif` | A lightweight animated preview for GitHub. |
| `contact-sheet.png` | A full animation contact sheet for inspection. |
| `look-directions.png` | A QA sheet for v2 look directions. |
| `validation.json` | The latest atlas validation result. |

## Usage and disclaimer

These pets are free to download and use for personal, non-commercial purposes.

This is an unofficial fan project. It is not affiliated with, endorsed by, or sponsored by OpenAI or by any person, team, league, brand, or other rights holder that may have inspired a design. All trademarks and likenesses belong to their respective owners.

## Share

If you enjoy a pet, star the repository or share it with another Codex user. Contributions and issue reports are welcome through GitHub.
