import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// @ts-expect-error: Node-only verifier implemented as an ESM script.
import { verifyApk } from './scripts/verify-apk.mjs';

function verifiedApk(): Plugin {
  const id = '\0virtual:verified-apk';
  return {
    name: 'verified-apk',
    resolveId(source) {
      return source === 'virtual:verified-apk' ? id : undefined;
    },
    async load(source) {
      if (source === id) return `export default ${JSON.stringify(await verifyApk())}`;
    },
  };
}

// index.html and privacy-policy/index.html use %VITE_SITE_URL% for canonical and social-card URLs.
// CI sets it in .github/workflows/deploy.yml; this fallback lets `npm run build` work locally too.
process.env.VITE_SITE_URL ??= 'https://ha2mad.github.io/Axenova-studio';

// base './' makes every asset path relative, so the site works on GitHub Pages
// whether it is served from https://user.github.io/ or https://user.github.io/repo/.
export default defineConfig({
  base: './',
  plugins: [react(), verifiedApk()],
  build: {
    target: ['chrome80', 'safari14', 'firefox78', 'edge80'],
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        arrowflow: fileURLToPath(new URL('./games/arrowflow/index.html', import.meta.url)),
        privacy: fileURLToPath(new URL('./privacy-policy/index.html', import.meta.url)),
      },
    },
  },
});
