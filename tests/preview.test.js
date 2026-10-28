import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readdir, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { PREVIEW_EXPIRES_AT, previewHasExpired, previewTimeLeft } from '../src/preview-config.js';
import { buildPreview } from '../scripts/build.mjs';
const expiry = Date.parse(PREVIEW_EXPIRES_AT);
test('preview expires at the configured instant, with no negative countdown', () => {
 assert.equal(previewHasExpired(expiry - 1), false);
 assert.equal(previewHasExpired(expiry), true);
 assert.equal(previewHasExpired(expiry + 1), true);
 assert.equal(previewTimeLeft(expiry - 7 * 86400000), '7d 0h remaining');
 assert.equal(previewTimeLeft(expiry + 60000), '0m remaining');
});
test('expired deployment contains no website code, room images, fonts or video', async () => {
 const outDir = await mkdtemp(path.join(os.tmpdir(), 'cat-hotel-expiry-'));
 try {
  assert.equal(await buildPreview({ outDir, now: expiry }), 'expired');
  assert.deepEqual((await readdir(outDir)).sort(), ['.nojekyll','404.html','index.html','robots.txt']);
  const html = await readFile(path.join(outDir,'index.html'),'utf8');
  assert.match(html, /This design preview has expired/);
  assert.doesNotMatch(html, /<script|<video|<img|stylesheet/);
 } finally { await rm(outDir, { recursive:true, force:true }); }
});
