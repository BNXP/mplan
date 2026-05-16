/**
 * Competitor / own-product image inventory.
 *
 * Run: `node download-images.js`
 *
 * What it does:
 *   - Lists every image the app expects.
 *   - Reports which are present, which are missing, which are still
 *     placeholders (small generated PNGs we ship by default).
 *   - Tells you exactly where to drop real product photos to replace them.
 *
 * It does NOT fetch images from the network — competitor product photos
 * are subject to copyright, so we never auto-download them. You are
 * expected to source legally-cleared images yourself and drop them in.
 */
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PUBLIC_DIR     = join(__dirname, 'public', 'images');
const COMPETITOR_DIR = join(PUBLIC_DIR, 'competitors');

const competitors = [
  ['viagra.png',         'ED Pill',     'Viagra (Pfizer)'],
  ['cialis.png',         'ED Pill',     'Cialis (Lilly)'],
  ['snafi.png',          'ED Pill',     'Snafi (Tadalafil, Hikma)'],
  ['erecta.png',         'ED Pill',     'Erecta'],
  ['wafi.png',           'ED Pill',     'Wafi'],
  ['priligy.png',        'PE Pill',     'Priligy (Dapoxetine)'],
  ['lejam.png',          'PE Pill',     'Lejam (Dapoxetine)'],
  ['endura.png',         'PE Pill',     'Endura'],
  ['procomil.png',       'Delay Spray', 'Procomil'],
  ['dynamo.png',         'Delay Spray', 'Dynamo Delay Spray'],
  ['stud100.png',        'Delay Spray', 'Stud 100'],
  ['pjur-prolong.png',   'Delay Spray', 'pjur med PROLONG'],
  ['eros-delay.png',     'Delay Spray', 'Eros Delay Spray'],
  ['himcolin.png',       'Gel',         'Himcolin (Himalaya)'],
  ['eroxon.png',         'Gel',         'Eroxon'],
  ['prila-cream.png',    'Cream',       'Prila 5% Cream'],
  ['emla-cream.png',     'Cream',       'EMLA Cream'],
  ['lidocaine-cream.png','Cream',       'Lidocaine Cream'],
];

const ourProducts = [
  ['our-product-main.png',   'Main product shot'],
  ['our-product-box.png',    'Discreet packaging'],
  ['our-product-bottle.png', 'Bottle / formula close-up'],
];

const PLACEHOLDER_MAX_BYTES = 40_000;

function inspect(filepath) {
  if (!existsSync(filepath)) return { state: 'missing', size: 0 };
  const size = statSync(filepath).size;
  if (size === 0) return { state: 'empty', size };
  if (size < PLACEHOLDER_MAX_BYTES) return { state: 'placeholder', size };
  return { state: 'real', size };
}

const icon = { real: 'OK', placeholder: '..', missing: '!!', empty: 'XX' };

function report(rows, dir) {
  for (const [filename, ...info] of rows) {
    const r = inspect(join(dir, filename));
    const tag = icon[r.state];
    const label = info.join(' — ');
    const sizeStr = r.state === 'missing' ? '' : ` (${(r.size/1024).toFixed(1)}KB)`;
    console.log(`  [${tag}] ${filename.padEnd(22)} ${label}${sizeStr}`);
  }
}

console.log('\nCompetitor images  ->', COMPETITOR_DIR);
report(competitors, COMPETITOR_DIR);

console.log('\nOur product images ->', PUBLIC_DIR);
report(ourProducts, PUBLIC_DIR);

const allCompetitor = competitors.map(c => inspect(join(COMPETITOR_DIR, c[0])));
const allOurs       = ourProducts.map(c => inspect(join(PUBLIC_DIR, c[0])));
const counts = [...allCompetitor, ...allOurs].reduce((a, r) => (a[r.state] = (a[r.state]||0)+1, a), {});

console.log('\nSummary:', counts);

console.log(`
Legend:
  [OK]  real image (>=40KB)   - your final product shot
  [..]  placeholder           - the generated stand-in we ship by default
  [!!]  missing               - file not on disk; will trigger fallback icon
  [XX]  empty (0 bytes)       - file exists but is unreadable; treat as missing

To replace a placeholder with a real product image:
  1. Get a legally-cleared product photo (PNG, transparent background preferred).
  2. Resize to ~400x600 (or any 2:3 ratio) and optimize.
  3. Save it with the EXACT filename listed above into:
       ${COMPETITOR_DIR}     (for competitor products)
       ${PUBLIC_DIR}              (for your own product shots)
  4. Run \`npm run build\` and re-deploy. No code changes needed.

Filenames are referenced from src/App.jsx and src/App-en.jsx
inside the \`productImages\` object - keep them in sync if you rename anything.
`);
