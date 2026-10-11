// Run with: npm run check
// Lists every placeholder that still has to be replaced before the site is published.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const patterns = ['YOUR_CONTACT_EMAIL', '<Todo>', 'YOUR_GITHUB_USERNAME'];
const roots = ['src', 'index.html', 'privacy-policy', '.env'];
const hits = [];

function walk(path) {
  const stat = statSync(path);
  if (stat.isDirectory()) {
    for (const entry of readdirSync(path)) walk(join(path, entry));
    return;
  }
  const text = readFileSync(path, 'utf8').split('\n');
  text.forEach((line, i) => {
    for (const p of patterns) {
      if (line.includes(p)) hits.push(`${path}:${i + 1}  ${p}`);
    }
  });
}

for (const r of roots) {
  try { walk(r); } catch { /* path not present */ }
}

if (hits.length === 0) {
  console.log('No placeholders found. Ready to publish.');
} else {
  console.log(`Found ${hits.length} placeholder(s) to replace:\n`);
  console.log(hits.join('\n'));
  process.exitCode = 1;
}
