# Codex Pets

Unofficial, fan-made animated companions for the Codex app and Codex CLI.

Pick a pet, install it, and let it keep you company while Codex works. No coding is required.

[한국어 설치 안내](#한국어-빠른-설치) · [Manual installation](#manual-installation) · [Troubleshooting](#troubleshooting)

> [!IMPORTANT]
> You need a version of the Codex/ChatGPT desktop app that includes **Settings > Pets**. Pet availability can depend on your app version, account, or workspace.

## Choose your pet

Click **Install** next to a pet. Your browser may ask for permission to open Codex.

| Pet | Preview | Install |
| --- | --- | :---: |
| [No.7 Celebration](./pets/white-no7-celebration) | ![No.7 Celebration preview](./pets/white-no7-celebration/preview.gif) | [Install in Codex](codex://pets/install?name=No.7%20Celebration&imageUrl=https%3A%2F%2Fraw.githubusercontent.com%2FJunhoYoon95%2Fcodex-pets%2Fmain%2Fpets%2Fwhite-no7-celebration%2Fspritesheet.webp&spriteVersionNumber=2) |
| [White Navy No.7](./pets/white-navy-no7-golden-boot) | ![White Navy No.7 preview](./pets/white-navy-no7-golden-boot/preview.gif) | [Install in Codex](codex://pets/install?name=White%20Navy%20No.7&imageUrl=https%3A%2F%2Fraw.githubusercontent.com%2FJunhoYoon95%2Fcodex-pets%2Fmain%2Fpets%2Fwhite-navy-no7-golden-boot%2Fspritesheet.webp&spriteVersionNumber=2) |
| [Blue Red No.10](./pets/blue-red-no10-era-shift) | ![Blue Red No.10 preview](./pets/blue-red-no10-era-shift/preview.gif) | [Install in Codex](codex://pets/install?name=Blue%20Red%20No.10&imageUrl=https%3A%2F%2Fraw.githubusercontent.com%2FJunhoYoon95%2Fcodex-pets%2Fmain%2Fpets%2Fblue-red-no10-era-shift%2Fspritesheet.webp&spriteVersionNumber=2) |
| [Long Beach Legend](./pets/long-beach-legend) | ![Long Beach Legend preview](./pets/long-beach-legend/preview.gif) | [Install in Codex](codex://pets/install?name=Long%20Beach%20Legend&imageUrl=https%3A%2F%2Fraw.githubusercontent.com%2FJunhoYoon95%2Fcodex-pets%2Fmain%2Fpets%2Flong-beach-legend%2Fspritesheet.webp&spriteVersionNumber=2) |
| [Green Cage Fighter](./pets/green-cage-fighter) | ![Green Cage Fighter preview](./pets/green-cage-fighter/preview.gif) | [Install in Codex](codex://pets/install?name=Green%20Cage%20Fighter&imageUrl=https%3A%2F%2Fraw.githubusercontent.com%2FJunhoYoon95%2Fcodex-pets%2Fmain%2Fpets%2Fgreen-cage-fighter%2Fspritesheet.webp&spriteVersionNumber=2) |
| [Trophy Striker V2](./pets/trophy-striker-v2) | ![Trophy Striker V2 preview](./pets/trophy-striker-v2/preview.gif) | [Install in Codex](codex://pets/install?name=Trophy%20Striker%20V2&imageUrl=https%3A%2F%2Fraw.githubusercontent.com%2FJunhoYoon95%2Fcodex-pets%2Fmain%2Fpets%2Ftrophy-striker-v2%2Fspritesheet.webp&spriteVersionNumber=2) |
| [Sky Blue No.9 Zen Slide](./pets/sky-blue-no9-zen-slide) | ![Sky Blue No.9 Zen Slide preview](./pets/sky-blue-no9-zen-slide/preview.gif) | [Install in Codex](codex://pets/install?name=Sky%20Blue%20No.9%20Zen%20Slide&imageUrl=https%3A%2F%2Fraw.githubusercontent.com%2FJunhoYoon95%2Fcodex-pets%2Fmain%2Fpets%2Fsky-blue-no9-zen-slide%2Fspritesheet.webp&spriteVersionNumber=2) |
| [Yellow Green Forward](./pets/yellow-green-forward) | ![Yellow Green Forward preview](./pets/yellow-green-forward/preview.gif) | [Install in Codex](codex://pets/install?name=Yellow%20Green%20Forward&imageUrl=https%3A%2F%2Fraw.githubusercontent.com%2FJunhoYoon95%2Fcodex-pets%2Fmain%2Fpets%2Fyellow-green-forward%2Fspritesheet.webp&spriteVersionNumber=2) |

## Quick start

1. Click **Install in Codex** next to the pet you want.
2. Allow your browser to open Codex, then confirm the installation.
3. In Codex, open your profile menu and select **Pets**. You can also open **Settings > Pets**.
4. Select your new pet.
5. Type `/pet` in a chat, or open the command menu and select **Wake Pet**.

Run `/pet` again or select **Tuck Away Pet** when you want to hide it.

> [!TIP]
> If the install link does not open, use the manual installation steps below. Some browsers and GitHub clients block app links such as `codex://`.

## 한국어 빠른 설치

1. 위 목록에서 원하는 펫의 **Install in Codex**를 누릅니다.
2. 브라우저에 Codex를 열겠다는 안내가 나오면 허용한 뒤 설치를 확인합니다.
3. Codex의 프로필 메뉴에서 **Pets**를 열거나 **Settings > Pets**로 이동합니다.
4. 설치한 펫을 선택합니다.
5. 채팅에 `/pet`을 입력하거나 명령 메뉴에서 **Wake Pet**을 선택합니다.

설치 링크가 열리지 않으면 아래의 [수동 설치](#manual-installation)를 이용하세요. 터미널이나 개발 지식 없이도 ZIP 파일을 내려받아 설치할 수 있습니다.

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
| `spritesheet.webp` | The Codex v2 animated spritesheet. This is the file installed by the one-click link. |
| `preview.gif` | A lightweight animated preview for GitHub. |
| `contact-sheet.png` | A full animation contact sheet for inspection. |
| `look-directions.png` | A QA sheet for v2 look directions. |
| `validation.json` | The latest atlas validation result. |

## Usage and disclaimer

These pets are free to download and use for personal, non-commercial purposes.

This is an unofficial fan project. It is not affiliated with, endorsed by, or sponsored by OpenAI or by any person, team, league, brand, or other rights holder that may have inspired a design. All trademarks and likenesses belong to their respective owners.

## Share

If you enjoy a pet, star the repository or share it with another Codex user. Contributions and issue reports are welcome through GitHub.
