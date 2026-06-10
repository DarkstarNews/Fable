#!/usr/bin/env node
/**
 * Verifies every photo URL in src/data/images.json resolves.
 *
 * The site has a three-layer defence (primary URL -> backup URL -> designed
 * placeholder), so a dead link never shows a broken image — but this script
 * lets CI tell us when a link has died so we can replace it.
 */
import { readFile } from 'node:fs/promises';

const manifest = JSON.parse(
  await readFile(new URL('../src/data/images.json', import.meta.url), 'utf8')
);

async function check(urlStr) {
  try {
    const res = await fetch(urlStr, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(15_000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

const failures = [];
const checks = [];

for (const [key, img] of Object.entries(manifest)) {
  for (const role of ['src', 'backup']) {
    checks.push(
      check(img[role]).then((ok) => {
        const mark = ok ? '✓' : '✗';
        console.log(`${mark} ${key}.${role}`);
        if (!ok) failures.push(`${key}.${role}: ${img[role]}`);
      })
    );
  }
}

await Promise.all(checks);

if (failures.length) {
  console.error(`\n${failures.length} image URL(s) failed:\n  ${failures.join('\n  ')}`);
  console.error('\nReplace the dead URL(s) in src/data/images.json.');
  process.exit(1);
}

console.log(`\nAll ${checks.length} image URLs are alive.`);
