# Axenova Studios website

Studio website, ArrowFlow game page, and Google Play privacy policy. Built with React 18, TypeScript, and Vite 5.

- [Studio website](https://ha2mad.github.io/Axenova-studio/)
- [ArrowFlow game page](https://ha2mad.github.io/Axenova-studio/games/arrowflow/)
- [ArrowFlow privacy policy](https://ha2mad.github.io/Axenova-studio/privacy-policy/)
- [ArrowFlow on Google Play](https://play.google.com/store/apps/details?id=com.AxnovaStudios.ArrowFlow)

## Run locally

```sh
npm ci
npm run dev
npm run build
npm run preview
npm run check
```

## Update content

- Add library entries, localized descriptions, screenshots, and dated release notes in `src/data/games.ts`. For a new detail page, register its HTML entry in `vite.config.ts`.
- ArrowFlow's icon and screenshots in `public/arrowflow/` come from its official Google Play listing. The share card uses those assets.
- Add the confirmed gameplay trailer URL in `src/data/games.ts` and verified YouTube and Bilibili channel URLs in `src/data/site.ts`. The corresponding links render when configured.
- The existing privacy policy is at `privacy-policy/index.html`. Maintain both language versions in `src/PrivacyPage.tsx`.

## Publish a signed APK

The site shows an APK download only after the build verifies it. Leave `src/data/apk.json` set to `null` until an official APK is ready.

1. Enable release immutability in GitHub, then publish a stable release in this repository with the signed production APK attached. Use the approved ArrowFlow signing certificate and make sure the release APK uses `com.AxnovaStudios.ArrowFlow`.
2. In `src/data/apk.json`, set `tag` and `filename` to the exact release tag and asset name. Set `sha256` to the APK file's SHA-256 and `signerSha256` to the independently trusted public signing certificate fingerprint. Use lowercase hex for both hashes.
3. Make Android SDK Build Tools (`apksigner` and `aapt`) available on `PATH` for local verification. GitHub Actions installs them when an APK is configured. The build checks the live GitHub release and asset, file hash, signature, app ID, and debuggable flag. A verification failure stops the build.

Keep private keys, keystores, and signing credentials in the app's signing environment.

## Deploy

The existing GitHub Actions workflow publishes `dist/` to GitHub Pages from `main`. Vite emits real HTML entry points and relative assets for the home, game, and privacy pages.
