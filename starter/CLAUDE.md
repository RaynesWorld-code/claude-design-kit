# [Project name]

[One line: what this is and who it's for.]

Read `docs/design-system.md` before doing anything. It is the rulebook. If something needs to break a rule, update the rulebook first, then build it.

## What we're making

[Keep the ones that apply and delete the rest. Then delete the sections further down for anything not kept.]
- **Website** [new / updating an existing one]
- **Logo** [new / refreshing an existing one]
- **Brand pack** (the logo in all its versions, colours, type and rules, plus things like business cards, letterheads and signage)
- **Social media content** (posts, carousels, stories, profile pictures and headers)

Everything shares one idea, one rulebook and one standard. The logo comes first if it's being made: the website, brand pack and social content all grow out of it.

## The idea (the most important part)

[One paragraph, concrete and visual. A metaphor, a material, a time of day, a world. Not adjectives.
Bad: "modern, clean, premium, friendly."
Good: "A bakery counter at six in the morning. Brown paper bags, chalk prices, flour on the edges of things, low warm light from the ovens."]

Every page, mark, post and piece of copy should feel like part of this idea. If a piece could belong to any other business, it isn't finished.

## Where things are

- **Rulebook:** `docs/design-system.md`.
- **Design stills:** `design/sheets/` (PNG), made from sources in `design/src/`. One sheet per round of options, lettered A, B, C…
- **References:** `design/references/`.
- **Screenshots:** `node design/shoot.js <file or address> <name>` saves phone (390px) and desktop (1440px) shots, full length, to `design/sheets/`. Add `--preset social` for every social size, `--size 1080x1350` for one size, `--out <folder>` to save elsewhere, `--only phone` for one size. It also prints any console errors.
- **Logo check:** `node design/logo-check.js <logo.svg> <name>` makes a sheet of the logo from favicon size up, on light, dark and colour, so you can see where it breaks. Add `--export` to write the PNG and favicon files to `brand/logo/`.
- Both need Playwright (`npm i -D playwright`, then `npx playwright install chromium` on your own computer; cloud sessions usually have it already).
- [Website: path to the prototype or site code. Brand files: `brand/`. Social: `social/`. Add anything else as it appears.]

## The standard

**The bar:** `[path to the best piece so far, or "none yet"]`.
If there is no bar yet, the first job is to make one: pick the most important piece (the logo if we're making one, otherwise the website's opening screen or the first social post), compare it against the references, explore 3–4 directions as stills, then push the chosen one through at least three rounds of render, inspect and fix until I say it's right. That piece becomes the bar, and everything else must reach it. If a later piece beats it, that one becomes the new bar.

**References:** `design/references/` holds 3–5 pictures of the quality we're aiming for (websites, logos, packaging, book covers, posters, shop signs, anything), each with a line on what it does well. They show the level, not something to copy.

**Signs a piece is finished:**
- You can't tell it was made with a template, a kit or an AI image tool.
- It only makes sense for this business; it couldn't be swapped onto another one.
- A close look at a real render, at the size people will actually see it, shows nothing stray, cut off, floating or uneven.
- Every word is something the owner would actually say.
- You can't name anything that still feels basic. If you can, it isn't done.

**How every piece of work is done:**
1. **Look at the real thing.** Render it (`design/shoot.js` or `design/logo-check.js`) and open the pictures. Never call design work done without looking at a real render.
2. **Look at it the way people will see it.** A website on a phone. A logo at favicon size and on a shop sign. A post at feed size on a phone, among other posts.
3. **Inspect it closely.** Zoom in. List every flaw: stray marks, things floating, wrong scale, uneven spacing, wobbly curves, text cut off or crowded, wording that's off, anything that looks default or generic.
4. **Fix every flaw, then render again.** Keep going until nothing looks basic. One pass is never enough.

## New designs: explore before building

For anything new or big (a page, a logo, a brand pack piece, a post series):
- Draw **3–4 genuinely different directions** as stills first, in `design/src/`, rendered to one sheet in `design/sheets/`. Different ideas, not one idea in four colours.
- Show them to me and let me pick. Don't build the first idea: the first idea is usually the generic one.
- Push the chosen one further before finishing it.
- Record what was picked and why in the rulebook. Keep the rejected sheets for ideas.

## Don'ts (add to this every time something looks generic)

**Everything**
- ❌ Don't use stock photos, stock icons or emoji as decoration.
- ❌ Don't use purple-to-blue gradients, glassmorphism or glowing blobs unless the idea calls for them.
- ❌ Don't make up stats, testimonials, reviews or client logos.
- ❌ Don't trace or copy another brand's work.

**Website**
- ❌ Don't use the "small label, big headline, one sentence, two buttons" hero block. It looks like every template.
- ❌ Don't use rounded cards in a grid with an icon, title and two lines of text.
- ❌ Don't use default component-library looks (pill buttons, shadcn-style cards, default shadows) without making them part of the idea.
- ❌ Don't fill space with filler sections ("Why choose us", three feature tiles, a logo strip).
- ❌ Don't design desktop first and squash it down.

**Logo**
- ❌ Don't use the stock ideas: swooshes, globes, lightbulbs, rooftops for builders, a leaf for anything green, initials in a circle.
- ❌ Don't put a free icon next to a font and call it a logo.
- ❌ Don't use gradients, shadows, 3D or fine detail that disappears when small or in one colour.
- ❌ Don't leave text as live text in the final file; outline it.
- ❌ Don't make it look AI-generated: no over-detailed illustration, no melted shapes, no fake lettering.

**Brand pack**
- ❌ Don't hand over a logo on a white page and call it a brand. Show it in use.
- ❌ Don't use fake-looking stock mockups; if a mockup is used, it must look like the real thing would.
- ❌ Don't list colours without values for screen and print (HEX, RGB, CMYK, and Pantone if needed).
- ❌ Don't use fonts the business can't legally use; note the licence for each.

**Social media**
- ❌ Don't make it look like a Canva template.
- ❌ Don't put a wall of text on a post. One idea per post; the words must read on a phone at feed size.
- ❌ Don't put anything important in the parts the app covers (see Social media below).
- ❌ Don't make every post look different. A feed is a series; it should be recognisable without the logo.

- [Add each new one in the words I use when I spot it.]

## Copy

- [British/US] English. Plain words, short sentences, no jargon. If a technical word is needed, explain it in the same sentence.
- Talk like a person: "you" and "we". Lead with the result.
- Placeholder prices and facts stay as placeholders. Never invent real ones.

## Keeping the rulebook alive

- When I decide something, write it into `docs/design-system.md` in the same change, and add a line to its changelog with a version number.
- When I say something looks wrong or generic, turn it into a rule (usually a Don't) so it never comes back.
- Keep a "Decided along the way" list and a "Still open" list at the top of the rulebook, so every new session starts from where we are and doesn't reopen settled decisions.

---

## Website

[Delete this section if we're not making a website.]

**Prototype or site code:** `[path]`.

- Phone first: design at 390px wide, then adapt for desktop. Check desktop last.
- Check the console for errors on every screenshot.
- The website uses the brand: logo, colours and type come from the rulebook, never invented on the page.

### Updating an existing site

[Delete this part for a brand-new site.]

**The live site:** `[address]`. **Its code:** `[path, or "not in this repo"]`.

**Refresh or rethink?** [Pick one and delete the other.]
- **Refresh:** keep the logo, colours, fonts and page structure. Fix what's weak and make it feel finished. Don't change the brand.
- **Rethink:** keep the content, the logo and what the business is. Everything else can change, starting from a new idea.

**Before anything changes:**
1. Screenshot every page of the current site at phone and desktop size, full length, into `design/before/` (`node design/shoot.js <address> <page-name> --out design/before`). These are the starting point; compare every change against them.
2. Write "What's wrong now" in the rulebook, page by page, plainly ("the menu is tiny on phones", "prices are hard to find"). Ask me what the owner and customers complain about.
3. Write "What's good and stays". A redesign shouldn't throw away what works.

**Must not break:**
- Page addresses. If a page moves or goes, add a redirect from the old address.
- Forms: every field still works and still sends to the same place.
- Phone numbers, emails, opening times, addresses and prices: copied exactly, never retyped from memory.
- Page titles and descriptions (what shows in Google), unless I agree a change.
- Analytics, booking, payment and any other tools the site is connected to.
- [Anything else the owner relies on.]

**How to work:** one page or section at a time. For each: before screenshot, 3–4 directions, I pick, build, after screenshot side by side with the before. Keep the owner's words unless I ask; mark missing content as `[NEEDED: …]`, never make it up.

---

## Logo

[Delete this section if we're not making or refreshing a logo.]

**Working files:** `design/src/logo/`. **Finished files:** `brand/logo/`.

- **Start from meaning, not shapes.** Before drawing, list 10–20 things that are true and specific about the business (what it does, where, how, who for, the sound and story of its name). The logo idea comes from these, not from what other logos in the trade look like.
- **Work in black first.** Every direction is drawn in one flat colour until the shape is right. Colour comes after.
- **Explore wide, then narrow.** First sheet: 3–4 genuinely different ideas (a symbol, a wordmark, lettering with a twist, a badge). Then push the picked one through several rounds.
- **Draw it as SVG by hand,** with clean, deliberate shapes: few points, smooth curves, consistent stroke weights, and spacing between letters adjusted by eye, not left to the font.
- **Test it every round** with `node design/logo-check.js`. It must:
  - read at 16px (favicon) and 32px;
  - work in one colour, and reversed out of a dark background;
  - hold up big (a shop sign, a van) with no wobbly curves or stray points;
  - be recognisable from its shape alone, blurred or squinted at.
- **The versions:** full logo, a mark or monogram on its own (for profile pictures and favicons), a stacked and a wide layout if needed, one-colour and reversed.
- **Finished files:** SVG (text outlined), PDF for print, PNG at 512, 1024 and 2048px with a clear background, and favicons (`--export` makes the PNGs and favicons).

**Refreshing an existing logo:** [Delete if new.] Keep what people recognise (usually the shape, the colour or the look of the name) and fix what's weak. Put the old logo in `design/before/` and show every option beside it.

---

## Brand pack

[Delete this section if we're not making a brand pack.]

**Files:** `brand/`. **Guidelines document:** `brand/guidelines/` (built as HTML, exported to PDF).

What goes in it, in this order:
1. **The idea** in a few lines, and what the brand is and isn't (the personality table from the rulebook).
2. **Logo:** every version, when to use each, clear space round it, smallest size, and what not to do with it (shown, not just described).
3. **Colour:** a small palette with HEX, RGB and CMYK (and Pantone if printing in spot colour), and how much of each to use.
4. **Type:** the fonts, where to get them and their licences, the sizes and weights for headings and body, and a fallback for when the brand font isn't available (e.g. in emails or Word).
5. **Imagery:** the kind of photos or illustrations, with real examples. No stock.
6. **Voice:** how the brand writes, with before-and-after examples.
7. **In use:** the brand on the things the business actually needs: [business cards, letterhead, email signature, signage, van, uniform, packaging, social profile]. Each one drawn properly at its real size.

- Every page of the guidelines is checked as a real render, like everything else.
- Print items are set up for print: real size, 3mm bleed, text inside a 5mm safe margin, CMYK colours, exported as PDF.
- Everything the business needs to use the brand is in `brand/`, named plainly (e.g. `logo-full-colour.svg`, `logo-mark-white.png`).

---

## Social media

[Delete this section if we're not making social content.]

**Platforms:** [Instagram / Facebook / LinkedIn / TikTok / X / others]. **Files:** `social/` (sources in `design/src/social/`).

**Sizes** (`node design/shoot.js <file> <name> --preset social` renders the first four):
- Square post: 1080×1080.
- Portrait post (shows biggest in the feed): 1080×1350.
- Story or reel cover: 1080×1920. Keep words and faces out of the top 250px and the bottom 340px, where the app puts its own buttons.
- Link preview (what shows when the website is shared): 1200×630.
- [Headers, e.g. LinkedIn 1584×396, X 1500×500, Facebook cover 1640×624. Check the platform's current sizes before using these.]
- Profile picture: the logo mark, which must read inside a small circle.

**How it works:**
- **Templates, not one-offs.** Design a small set of layouts (e.g. a quote, an announcement, a photo with a caption, a carousel cover and inside page) that share one look. Each post is a template filled in with new words and pictures.
- **Check at feed size.** Every post is looked at as it really appears: about 390px wide on a phone, next to the posts before and after it. If the words don't read there, there are too many or they're too small.
- **Check the grid.** Lay the last 9–12 posts out as the profile grid and check they look like one brand.
- **One idea per post.** The main point reads at a glance, in the first second.
- **Words on posts follow the copy rules.** Captions too.
- Export each post as PNG (or JPG for photos) at its exact size, named `[date]-[topic]-[size].png`.
