import { rm, mkdir, cp, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { previewHasExpired, expiredPage } from '../src/preview-config.js';
export async function buildPreview({ outDir = 'dist', now = Date.now() } = {}) {
 await rm(outDir, { recursive: true, force: true });
 await mkdir(outDir, { recursive: true });
 if (previewHasExpired(now)) {
  const html = expiredPage();
  await writeFile(path.join(outDir, 'index.html'), html);
  await writeFile(path.join(outDir, '404.html'), html);
 } else {
  for (const file of ['index.html', 'src', 'public']) await cp(file, path.join(outDir, file), { recursive: true });
 }
 await cp('public/robots.txt', path.join(outDir, 'robots.txt'));
 await cp('public/.nojekyll', path.join(outDir, '.nojekyll'));
 return previewHasExpired(now) ? 'expired' : 'active';
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
 console.log(`Built ${await buildPreview()} preview in dist/`);
}
