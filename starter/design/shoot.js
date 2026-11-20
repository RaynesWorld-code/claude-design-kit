// Screenshots a page at phone and desktop size, full length.
// Usage: node design/shoot.js <file or address> <name> [--only phone|desktop] [--out <folder>]
// Saves <name>-phone.png and <name>-desktop.png to design/sheets/ (or --out), and prints any console errors.
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args.splice(i, 2)[1] : undefined; };
const only = opt('--only');
const outArg = opt('--out');
const [target, name = 'shot'] = args;
if (!target) {
  console.log('Usage: node design/shoot.js <file or address> <name> [--only phone|desktop] [--out <folder>]');
  process.exit(1);
}
const url = /^https?:\/\//.test(target) ? target : 'file://' + path.resolve(target);
const out = outArg ? path.resolve(outArg) : path.join(__dirname, 'sheets');
fs.mkdirSync(out, { recursive: true });

const sizes = [
  { label: 'phone', width: 390, height: 780 },
  { label: 'desktop', width: 1440, height: 900 },
].filter(s => !only || s.label === only);

(async () => {
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
  });
  let errors = 0;
  for (const s of sizes) {
    const page = await browser.newPage({ viewport: { width: s.width, height: s.height }, deviceScaleFactor: 2 });
    page.on('console', m => { if (m.type() === 'error') { errors++; console.log(`[${s.label}] console error: ${m.text()}`); } });
    page.on('pageerror', e => { errors++; console.log(`[${s.label}] page error: ${e.message}`); });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200); // let fonts and animations settle
    const file = path.join(out, `${name}-${s.label}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log('saved', path.relative(process.cwd(), file));
    await page.close();
  }
  await browser.close();
  console.log(errors ? `${errors} console error(s)` : 'no console errors');
})();
