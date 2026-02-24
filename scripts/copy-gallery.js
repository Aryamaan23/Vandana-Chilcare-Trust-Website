#!/usr/bin/env node
/**
 * Copies all 9 screenshot images into public/gallery/ for the Our Moments section.
 * Run from Vandana-Chilcare-Trust-Website:  node scripts/copy-gallery.js
 *
 * Looks for screenshots in (in order):
 *   - screenshots/ folder inside this project
 *   - parent folder (vandana-childcare-trust-website)
 */

const fs = require('fs');
const path = require('path');

const REPO_DIR = path.resolve(__dirname, '..');
const PARENT_DIR = path.resolve(REPO_DIR, '..');
const SCREENSHOTS_IN_REPO = path.join(REPO_DIR, 'screenshots');
const GAL = path.join(REPO_DIR, 'public', 'gallery');

const FILES = [
  { src: 'Screenshot 2026-02-24 at 8.53.09 PM.png', dest: '1-new-year-sapru.png' },
  { src: 'Screenshot 2026-02-24 at 8.53.29 PM.png', dest: '2-tulsi-christmas-talent.png' },
  { src: 'Screenshot 2026-02-24 at 8.53.46 PM.png', dest: '3-teachers-day.png' },
  { src: 'Screenshot 2026-02-24 at 8.54.02 PM.png', dest: '4-awareness-visionless-kids.png' },
  { src: 'Screenshot 2026-02-24 at 8.54.17 PM.png', dest: '5-raj-blind-school.png' },
  { src: 'Screenshot 2026-02-24 at 8.54.48 PM.png', dest: '6.png' },
  { src: 'Screenshot 2026-02-24 at 8.55.10 PM.png', dest: '7.png' },
  { src: 'Screenshot 2026-02-24 at 8.55.19 PM.png', dest: '8.png' },
  { src: 'Screenshot 2026-02-24 at 8.55.54 PM.png', dest: '9.png' },
];

function findSourceDir() {
  if (fs.existsSync(path.join(SCREENSHOTS_IN_REPO, FILES[0].src))) return SCREENSHOTS_IN_REPO;
  if (fs.existsSync(path.join(PARENT_DIR, FILES[0].src))) return PARENT_DIR;
  return null;
}

const sourceDir = findSourceDir();
if (!sourceDir) {
  console.error('Screenshots not found. Either:');
  console.error('  1) Create a folder "screenshots" inside Vandana-Chilcare-Trust-Website and put the 9 Screenshot PNG files there, or');
  console.error('  2) Put the Screenshot PNG files in the parent folder (vandana-childcare-trust-website)');
  console.error('Then run: node scripts/copy-gallery.js');
  process.exit(1);
}

fs.mkdirSync(GAL, { recursive: true });
FILES.forEach(({ src, dest }) => {
  const from = path.join(sourceDir, src);
  const to = path.join(GAL, dest);
  fs.copyFileSync(from, to);
  console.log('Copied', dest);
});
console.log('Done. All', FILES.length, 'images are in public/gallery/');
