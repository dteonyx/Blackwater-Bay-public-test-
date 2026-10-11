# Blackwater Bay: installable web app

## Put it online (GitHub Pages)
1. Create a repo (or use an existing one) and copy everything in this folder to its root, keeping the `.github` folder.
2. Repo Settings > Pages > Build and deployment > Source: **GitHub Actions**.
3. Push to `main`. The "Deploy Blackwater Bay" action runs and prints your URL: `https://YOURNAME.github.io/REPO/`.

## Install it
- **Chromebook / Windows / Mac (Chrome or Edge):** open the URL, click the install icon at the right of the address bar (or menu > Install Blackwater Bay).
- **Android (Chrome):** menu > Install app / Add to Home screen.
- **iPhone / iPad (Safari):** Share > Add to Home Screen.
- **Xbox (Edge):** open the URL in Edge and plug in the pad. Xbox Edge cannot install web apps, but it can pin or bookmark the page.

## Updating the game
Replace `index.html` with the new `blackwater-bay.html`, bump `VERSION` in `sw.js` (e.g. `bb-v2`), and push. Installed copies update on their next launch (they may need one extra relaunch).

Saves live in each device's browser storage (they are not shared between devices).
