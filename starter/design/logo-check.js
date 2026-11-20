// Shows a logo the ways people will meet it, so you can see where it breaks.
//
// Usage: node design/logo-check.js <logo.svg> <name> [options]
//   --mark <mark.svg>   the mark or monogram on its own, for the favicon and profile-picture rows
//   --colour #hex       the brand colour to test on (default #1f4d3a)
//   --export            also write finished PNGs and favicons to brand/logo/
//   --out <folder>      where to save the sheet (default design/sheets/)
//
// The sheet shows: sizes from 16px to 128px (where logos break), on light, dark and colour;
// one large copy (to check curves and points); a one-colour
// black and a reversed white version; the mark in a profile-picture circle; and a
// blurred copy (if the shape still reads blurred, it's a strong shape).
// The SVG should use fill="currentColor" (or no fill) on shapes that should go
// one-colour; the sheet forces one colour with a CSS filter either way.
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const take = k => { const i = args.indexOf(k); return i >= 0 ? args.splice(i, 2)[1] : undefined; };
const flag = k => { const i = args.indexOf(k); if (i >= 0) { args.splice(i, 1); return true; } return false; };
const markArg = take('--mark');
const colour = take('--colour') || '#1f4d3a';
const outArg = take('--out');
const doExport = flag('--export');
const [logoPath, name = 'logo'] = args;

if (!logoPath) {
  console.log('Usage: node design/logo-check.js <logo.svg> <name> [--mark mark.svg] [--colour #hex] [--export] [--out <folder>]');
  process.exit(1);
}
const read = p => {
  const t = fs.readFileSync(path.resolve(p), 'utf8');
  if (!/<svg[\s>]/i.test(t)) { console.log(`${p} doesn't look like an SVG.`); process.exit(1); }
  return t;
};
const logo = read(logoPath);
const mark = markArg ? read(markArg) : logo;
const uri = s => 'data:image/svg+xml;base64,' + Buffer.from(s).toString('base64');
const L = uri(logo), M = uri(mark);

const out = outArg ? path.resolve(outArg) : path.join(__dirname, 'sheets');
fs.mkdirSync(out, { recursive: true });

const sizes = [16, 24, 32, 48, 64, 128];
const row = (bg, fg, filter, src, label) => `
  <div class="row" style="background:${bg};color:${fg}">
    <div class="lab">${label}</div>
    <div class="items">${sizes.map(s => `
      <figure><img src="${src}" style="height:${s}px;${filter}"><figcaption>${s}px</figcaption></figure>`).join('')}
    </div>
  </div>`;
const black = 'filter:brightness(0)';
const white = 'filter:brightness(0) invert(1)';

const html = `<!doctype html><meta charset="utf-8"><style>
  * { box-sizing: border-box; margin: 0 }
  body { font: 13px/1.3 system-ui, sans-serif; background: #fff; width: 1600px }
  h1 { font-size: 18px; padding: 24px 32px 8px }
  .row { padding: 20px 32px; border-top: 1px solid rgba(128,128,128,.25) }
  .lab { font-weight: 600; margin-bottom: 12px; opacity: .75 }
  .items { display: flex; align-items: flex-end; gap: 28px; flex-wrap: wrap }
  figure { display: flex; flex-direction: column; align-items: flex-start; gap: 6px }
  figure img { display: block; width: auto; max-width: 900px }
  figcaption { font-size: 11px; opacity: .55 }
  .bottom { display: flex; gap: 0 }
  .cell { flex: 1; padding: 24px 32px; border-top: 1px solid rgba(128,128,128,.25) }
  .circle { width: 110px; height: 110px; border-radius: 50%; display: grid; place-items: center; overflow: hidden }
  .circle img { width: 70%; height: 70%; object-fit: contain }
  .small .circle { width: 32px; height: 32px }
  .tab { display: inline-flex; align-items: center; gap: 8px; background: #dee1e6; padding: 8px 14px; border-radius: 8px 8px 0 0; font-size: 12px }
  .tab img { width: 16px; height: 16px; object-fit: contain }
</style>
<h1>${name}: logo check</h1>
${row('#ffffff', '#111', '', L, 'Full colour on white')}
${row('#16181d', '#eee', '', L, 'Full colour on dark (does it still read?)')}
${row(colour, '#fff', white, L, 'Reversed: white on the brand colour')}
${row('#ffffff', '#111', black, L, 'One colour: black')}
<div class="row"><div class="lab">Large (like a shop sign): any wobbly curves, stray points or uneven gaps?</div>
  <img src="${L}" style="display:block;height:420px;max-width:1536px;width:auto"></div>
<div class="bottom">
  <div class="cell"><div class="lab">Profile picture</div>
    <div style="display:flex;gap:20px;align-items:center">
      <div class="circle" style="background:${colour}"><img src="${M}" style="${white}"></div>
      <div class="circle" style="background:#f2f2f2"><img src="${M}"></div>
      <div class="small"><div class="circle" style="background:${colour}"><img src="${M}" style="${white}"></div></div>
    </div></div>
  <div class="cell"><div class="lab">Browser tab (16px)</div>
    <div class="tab"><img src="${M}">[Business name]</div></div>
  <div class="cell"><div class="lab">Blurred: is the shape still recognisable?</div>
    <img src="${L}" style="height:120px;filter:blur(6px)"></div>
</div>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'load' });
  const file = path.join(out, `${name}-logo-check.png`);
  await page.screenshot({ path: file, fullPage: true });
  console.log('saved', path.relative(process.cwd(), file));

  if (doExport) {
    const dir = path.resolve('brand/logo');
    fs.mkdirSync(dir, { recursive: true });
    const shot = async (src, w, h, file, filter = '') => {
      const p = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
      await p.setContent(`<!doctype html><style>html,body{margin:0;background:transparent}
        img{display:block;width:${w}px;height:${h}px;object-fit:contain;${filter}}</style><img src="${src}">`, { waitUntil: 'load' });
      await p.screenshot({ path: path.join(dir, file), omitBackground: true });
      await p.close();
      console.log('saved', path.relative(process.cwd(), path.join(dir, file)));
    };
    // Full logo: keep its own shape, longest side at each size.
    const ratio = await page.evaluate(src => new Promise(r => { const i = new Image(); i.onload = () => r(i.naturalWidth / i.naturalHeight || 1); i.src = src; }), L);
    for (const s of [512, 1024, 2048]) {
      const w = ratio >= 1 ? s : Math.round(s * ratio), h = ratio >= 1 ? Math.round(s / ratio) : s;
      await shot(L, w, h, `${name}-${s}.png`);
      await shot(L, w, h, `${name}-white-${s}.png`, white);
      await shot(L, w, h, `${name}-black-${s}.png`, black);
    }
    // Favicons and app icons from the mark.
    for (const s of [16, 32, 48, 180, 192, 512]) await shot(M, s, s, `favicon-${s}.png`);
    fs.copyFileSync(path.resolve(logoPath), path.join(dir, `${name}.svg`));
    console.log('Check the exported files by eye. The SVG is copied as it is: outline any text in it before handing it over.');
  }
  await browser.close();
})();
