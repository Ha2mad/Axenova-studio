import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const repository = 'Ha2mad/Axenova-studio';
const packageId = 'com.AxnovaStudios.ArrowFlow';
const maxBytes = 150 * 1024 * 1024;
const digest = /^[a-f0-9]{64}$/;

export async function verifyApk() {
  const source = JSON.parse(await readFile(new URL('../src/data/apk.json', import.meta.url), 'utf8'));
  if (source === null) return null;

  const { tag, filename, sha256, signerSha256 } = source;
  if (!/^[\w.-]+$/.test(tag) || !/^[\w.-]+\.apk$/.test(filename) ||
      !digest.test(sha256) || !digest.test(signerSha256) ||
      [tag, filename, sha256, signerSha256].some(value => typeof value !== 'string')) {
    throw new Error('Invalid APK release configuration.');
  }

  const url = `https://github.com/${repository}/releases/download/${tag}/${filename}`;
  const result = await fetch(`https://api.github.com/repos/${repository}/releases/tags/${tag}`, {
    signal: AbortSignal.timeout(15000),
  });
  if (!result.ok) throw new Error('APK release could not be verified.');
  const release = await result.json();
  const asset = release.assets?.find(entry => entry.browser_download_url === url);
  if (release.draft || release.prerelease || release.immutable !== true ||
      asset?.state !== 'uploaded' || !(asset.size > 0 && asset.size <= maxBytes)) {
    throw new Error('APK must be on an immutable, published, stable GitHub release.');
  }

  const response = await fetch(url, { signal: AbortSignal.timeout(60000) });
  if (!response.ok || !response.body) throw new Error('APK download could not be verified.');
  const chunks = [];
  let size = 0;
  for await (const chunk of response.body) {
    size += chunk.length;
    if (size > asset.size) throw new Error('APK exceeds its declared size.');
    chunks.push(chunk);
  }
  const bytes = Buffer.concat(chunks);
  if (size !== asset.size || createHash('sha256').update(bytes).digest('hex') !== sha256) {
    throw new Error('APK checksum mismatch.');
  }

  const temporary = await mkdtemp(join(tmpdir(), 'arrowflow-apk-'));
  try {
    const file = join(temporary, 'release.apk');
    await writeFile(file, bytes);
    const signature = execFileSync('apksigner', ['verify', '--print-certs', file], { encoding: 'utf8' });
    const signers = [...signature.matchAll(/^Signer #\d+ certificate SHA-256 digest: ([a-f0-9]{64})$/gm)];
    const manifest = execFileSync('aapt', ['dump', 'badging', file], { encoding: 'utf8' });
    if (signers.length !== 1 || signers[0][1] !== signerSha256 ||
        !manifest.startsWith(`package: name='${packageId}' `) ||
        /^application-debuggable\s*$/m.test(manifest)) {
      throw new Error('APK signer or application manifest failed validation.');
    }
    return { url, sha256 };
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}
