// Shows social posts the way people see them: in the feed on a phone, and as the profile grid.
//
// Usage: node design/feed-check.js <folder of post images> <name> [--out <folder>]
// Takes the PNG/JPG files in the folder in name order (newest last, e.g. dated names),
// and saves <name>-feed.png (posts at phone width, one under another)
// and <name>-grid.png (the last 12 as a 3-wide profile grid, newest first).
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const take = k => { const i = args.indexOf(k); return i >= 0 ? args.splice(i, 2)[1] : undefined; };
const outArg = take('--out');
const [dir, name = 'social'] = args;
if (!dir) { console.log('Usage: node design/feed-check.js <folder of post images> <name> [--out <folder>]'); process.exit(1); }

const files = fs.readdirSync(path.resolve(dir)).filter(f => /\.(png|jpe?g)$/i.test(f)).sort();
if (!files.length) { console.log(`No PNG or JPG files in ${dir}.`); process.exit(1); }
const src = f => 'file://' + path.resolve(dir, f);
const out = outArg ? path.resolve(outArg) : path.join(__dirname, 'sheets');
fs.mkdirSync(out, { recursive: true });

const feed = `<!doctype html><meta charset="utf-8"><style>
  * { margin: 0; box-sizing: border-box } body { width: 390px; background: #fff; font: 13px system-ui, sans-serif; color: #111 }
  .post { border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 8px }
  .head { display: flex; align-items: center; gap: 8px; padding: 10px 12px }
  .av { width: 32px; height: 32px; border-radius: 50%; background: #ddd }
  img { display: block; width: 390px; height: auto }
  .bar { height: 24px; margin: 10px 12px 0; display: flex; gap: 14px }
  .bar i { width: 22px; height: 22px; border: 2px solid #222; border-radius: 6px }
</style>${files.slice().reverse().map(f => `
  <div class="post"><div class="head"><div class="av"></div><b>[account]</b></div>
  <img src="${src(f)}"><div class="bar"><i></i><i></i><i></i></div></div>`).join('')}`;

const last = files.slice(-12).reverse();
const grid = `<!doctype html><meta charset="utf-8"><style>
  * { margin: 0 } body { width: 390px; background: #fff }
  .g { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px }
  .g div { aspect-ratio: 4 / 5; overflow: hidden; background: #eee }
  .g img { width: 100%; height: 100%; object-fit: cover; display: block }
</style><div class="g">${last.map(f => `<div><img src="${src(f)}"></div>`).join('')}</div>`;

(async () => {
  const browser = await chromium.launch();
  for (const [label, html] of [['feed', feed], ['grid', grid]]) {
    const page = await browser.newPage({ viewport: { width: 390, height: 780 }, deviceScaleFactor: 2 });
    const tmp = path.join(out, `.${name}-${label}.html`);
    fs.writeFileSync(tmp, html);
    await page.goto('file://' + tmp, { waitUntil: 'load' });
    const file = path.join(out, `${name}-${label}.png`);
    await page.setViewportSize({ width: 390, height: 100 });
    await page.screenshot({ path: file, fullPage: true });
    fs.unlinkSync(tmp);
    console.log('saved', path.relative(process.cwd(), file));
    await page.close();
  }
  await browser.close();
  console.log(`${files.length} post(s). Look at the feed at real size: if the words don't read there, there are too many or they're too small.`);
})();
