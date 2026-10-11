# Axenova Studios website

React + TypeScript + Vite static site for Axenova Studios. No backend, no paid services.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build and preview

```bash
npm run build      # type-checks, then writes the site to dist/
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.
4. Your site will be at `https://<username>.github.io/<repository>/` and the privacy policy at
   `https://<username>.github.io/<repository>/privacy-policy/`. Use these URLs in Google Play Console.

Tip: a repository named `<username>.github.io` serves the site from the root domain.

## Replace before publishing

Run `npm run check` to list every placeholder that is still in the project.

- [ ] `src/data/site.ts`: set `contactEmail` to your real email. Optionally add `socialUrl` and `socialLabel`.
- [ ] `src/PrivacyPage.tsx`: replace every highlighted `Todo` block with details you have verified
      (data collected, SDKs and ad networks, children's privacy, retention, last updated date).
- [ ] `src/data/games.ts`: add real screenshots (put images in `public/screenshots/`, then list them as
      `screenshots/your-file.png`), set `storeUrl` to your Google Play listing, and change
      `status` to `'released'` once the game is public.
- [ ] `.env`: only needed for a custom domain. The GitHub workflow sets the site URL automatically.
- [ ] Optional: replace `public/og-image.png` (1200x630) with your own artwork.

## Add another game

Copy the object in `src/data/games.ts`, give it a new `id`, and add it to the array.
