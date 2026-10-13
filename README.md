# Axenova Studios website

Website and Google Play privacy policy for **Axenova Studios**, an indie mobile game studio. First game: **ArrowFlow** (coming soon), a grid-based puzzle game.

**Live:** https://ha2mad.github.io/Axenova-studio/
**Privacy policy:** https://ha2mad.github.io/Axenova-studio/privacy-policy/

## Stack
React 18 · TypeScript · Vite 5 · GitHub Actions · GitHub Pages

## Run locally
```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build into dist/
npm run preview  # serve the built site
npm run check    # list any placeholders still left to fill in
```

## Where to edit
- `src/data/site.ts`: studio name, contact email, optional social link
- `src/data/games.ts`: games shown in the "Our Games" section (status, store link, screenshots)
- `public/screenshots/`: game screenshots
- `src/PrivacyPage.tsx`: privacy policy text

## Deploy
Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
