import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// index.html and privacy-policy/index.html use %VITE_SITE_URL% for canonical and social-card URLs.
// CI sets it in .github/workflows/deploy.yml; this fallback lets `npm run build` work locally too.
process.env.VITE_SITE_URL ??= 'https://ha2mad.github.io/Axenova-studio';

// base './' makes every asset path relative, so the site works on GitHub Pages
// whether it is served from https://user.github.io/ or https://user.github.io/repo/.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        privacy: fileURLToPath(new URL('./privacy-policy/index.html', import.meta.url)),
      },
    },
  },
});
