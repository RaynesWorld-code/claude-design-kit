// Screenshots a page or design at the sizes people will see it.
//
// Usage: node design/shoot.js <file or address> <name> [options]
//   (no options)         phone (390 wide) and desktop (1440 wide), full length, at 2x
//   --only phone|desktop one of those two
//   --preset social      1080x1080, 1080x1350, 1080x1920 and 1200x630, exact pixels
//   --size 1080x1350     one exact size (can be given more than once)
//   --out <folder>       where to save (default design/sheets/)
//
// Exact sizes are saved at exactly that many pixels and not full length, so the
// design should fill the window (e.g. body { width: 100vw; height: 100vh }).
// Prints any console errors.
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const take = k => { const i = args.indexOf(k); return i >= 0 ? args.splice(i, 2)[1] : undefined; };
const only = take('--only');
const preset = take('--preset');
const outArg = take('--out');
const exact = [];
for (let s; (s = take('--size')); ) exact.push(s);
const [target, name = 'shot'] = args;

if (!target) {
  console.log('Usage: node design/shoot.js <file or address> <name> [--only phone|desktop] [--preset social] [--size WxH] [--out <folder>]');
  process.exit(1);
}
if (preset && preset !== 'social') { console.log(`Unknown preset "${preset}". Try --preset social.`); process.exit(1); }

const url = /^https?:\/\//.test(target) ? target : 'file://' + path.resolve(target);
const out = outArg ? path.resolve(outArg) : path.join(__dirname, 'sheets');
fs.mkdirSync(out, { recursive: true });

let sizes;
if (preset === 'social') exact.push('1080x1080', '1080x1350', '1080x1920', '1200x630');
if (exact.length) {
  sizes = exact.map(s => {
    const m = /^(\d+)x(\d+)$/.exec(s);
    if (!m) { console.log(`Bad size "${s}". Use WIDTHxHEIGHT, e.g. 1080x1350.`); process.exit(1); }
    return { label: s, width: +m[1], height: +m[2], scale: 1, full: false };
  });
} else {
  sizes = [
    { label: 'phone', width: 390, height: 780, scale: 2, full: true },
    { label: 'desktop', width: 1440, height: 900, scale: 2, full: true },
  ].filter(s => !only || s.label === only);
}

(async () => {
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
  });
  let errors = 0;
  for (const s of sizes) {
    const page = await browser.newPage({ viewport: { width: s.width, height: s.height }, deviceScaleFactor: s.scale });
    page.on('console', m => { if (m.type() === 'error') { errors++; console.log(`[${s.label}] console error: ${m.text()}`); } });
    page.on('pageerror', e => { errors++; console.log(`[${s.label}] page error: ${e.message}`); });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts && document.fonts.ready);
    await page.waitForTimeout(1200); // let animations settle
    const file = path.join(out, `${name}-${s.label}.png`);
    await page.screenshot({ path: file, fullPage: s.full });
    console.log('saved', path.relative(process.cwd(), file));
    await page.close();
  }
  await browser.close();
  console.log(errors ? `${errors} console error(s)` : 'no console errors');
})();
