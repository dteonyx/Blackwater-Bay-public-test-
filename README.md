# Blackwater Bay: installable web app (tester build)

This repo carries the **tester** build, the same one deployed to the team tester on Netlify (test--blackwater-bay.netlify.app). The public release lives at https://blackwater-bay.netlify.app. Tester saves are kept separate from release saves.

## Hosting
This repo is served by GitHub Pages: Settings > Pages > Deploy from a branch > `main` / root. Every push to `main` redeploys.

## Install it
- **Chromebook / Windows / Mac (Chrome or Edge):** open the URL, click the install icon at the right of the address bar (or menu > Install Blackwater Bay).
- **Android (Chrome):** menu > Install app / Add to Home screen.
- **iPhone / iPad (Safari):** Share > Add to Home Screen.
- **Xbox (Edge):** open the URL in Edge and plug in the pad. Xbox Edge cannot install web apps, but it can pin or bookmark the page.

## Updating the game
Each time the tester goes to Netlify, `index.html` is replaced with the new `blackwater-bay-tester.html` (songs go in `music/`), `VERSION` in `sw.js` is bumped (e.g. `bb-v2`), and push. Installed copies update on their next launch (they may need one extra relaunch).

Saves live in each device's browser storage (they are not shared between devices).

## Change log
See [CHANGELOG.md](CHANGELOG.md). It matches the in-game list under Options > Change log and is updated with every release.
