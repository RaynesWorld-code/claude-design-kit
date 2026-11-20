# [Project name]

[One line: what this is and who it's for.]

Read `docs/design-system.md` before doing anything. It is the rulebook. If something needs to break a rule, update the rulebook first, then build it.

## The idea (the most important part)

[One paragraph, concrete and visual. A metaphor, a material, a time of day, a world. Not adjectives.
Bad: "modern, clean, premium, friendly."
Good: "The site is a bakery counter at six in the morning. Brown paper bags, chalk prices, flour on the edges of things, low warm light from the ovens. Each section is something on the counter."]

Every page, button and piece of copy should feel like part of this idea. If a part could belong to any other website, it isn't finished.

## Where things are

- **Prototype (source of truth for look and behaviour):** `[path]`. Edit it directly.
- **Rulebook:** `docs/design-system.md`.
- **Design stills:** `design/sheets/` (PNG), made from sources in `design/src/`.
- **Screenshots:** `node design/shoot.js <file or address> <name>` saves phone (390px) and desktop (1440px) shots, full length, to `design/sheets/` (add `--out <folder>` to save elsewhere, `--only phone` for one size). It also prints any console errors. Needs Playwright (`npm i -D playwright`, then `npx playwright install chromium` on your own computer; cloud sessions usually have it already).
- [Add anything else as it appears: build scripts, assets, how to rebuild them.]

## The standard

**The bar:** `[path to the best page so far, or "none yet"]`.
If there is no bar yet, the first job is to make one: pick the most important page or section, compare it against the references in `design/references/`, explore 3–4 directions as stills, then push the chosen one through at least three rounds of render, inspect and fix until I say it's right. That page then becomes the bar, and every other page must reach it. If a later page beats it, that one becomes the new bar.

**References:** `design/references/` holds 3–5 pictures of the quality we're aiming for (websites, packaging, book covers, shop fronts, anything), each with a line on what it does well. They show the level, not something to copy.

**Signs a piece is finished** (always, and especially before there's a bar):
- You can't tell it was made with a template or kit.
- It only makes sense for this business; it couldn't be swapped onto another site.
- A close look at a phone-sized render shows nothing stray, cut off, floating or uneven.
- Every word is something the owner would actually say.
- You can't name anything that still feels basic. If you can, it isn't done.

How every piece of work is done:
1. **Look at the real thing.** Screenshot it with `design/shoot.js` (phone first) and open the pictures. Never call design work done without looking at a real render.
2. **Inspect it closely.** Zoom in. List every flaw: stray marks, glare, things floating, wrong scale, uneven spacing, text that's cut off or crowded, wording that's off, anything that looks default or generic.
3. **Fix every flaw, then render again.** Keep going until nothing looks basic. One pass is never enough.
4. **Check desktop last.** Phone is the real design; desktop is the adaptation.
5. **Check the console** for errors.

## New designs: explore before building

For anything new or big (a page, a section, a main component):
- Draw **3–4 genuinely different directions** as stills first (in `design/src/`, rendered to `design/sheets/`, each sheet with a letter or name).
- Show them to me and let me pick. Don't build the first idea: the first idea is usually the generic one.
- Then push the chosen one further before building it.
- Record what was picked and why in the rulebook. Keep the rejected sheets for ideas.

## Don'ts (add to this every time something looks generic)

- ❌ Don't use the "small label, big headline, one sentence, two buttons" hero block. It looks like every template.
- ❌ Don't use rounded cards in a grid with an icon, title and two lines of text.
- ❌ Don't use purple-to-blue gradients, glassmorphism or glowing blobs unless the idea calls for them.
- ❌ Don't use stock photos, stock icons or emoji as decoration.
- ❌ Don't use default component-library looks (pill buttons, shadcn-style cards, default shadows) without making them part of the idea.
- ❌ Don't fill space with filler sections ("Why choose us", three feature tiles, a logo strip).
- ❌ Don't make up stats, testimonials or client logos.
- ❌ Don't design desktop first and squash it down.
- [Add each new one in the words I use when I spot it.]

## Copy

- [British/US] English. Plain words, short sentences, no jargon. If a technical word is needed, explain it in the same sentence.
- Talk like a person: "you" and "we". Lead with the result.
- Placeholder prices and facts stay as placeholders. Never invent real ones.

## Keeping the rulebook alive

- When I decide something, write it into `docs/design-system.md` in the same change, and add a line to its changelog with a version number.
- When I say something looks wrong or generic, turn it into a rule (usually a Don't) so it never comes back.
- Keep a "Decided along the way" list and a "Still open" list at the top of the rulebook, so every new session starts from where we are and doesn't reopen settled decisions.

## Updating an existing site

[Delete this section for a brand-new site.]

**The live site:** `[address]`. **Its code:** `[path, or "not in this repo"]`.

**Refresh or rethink?** [Pick one and delete the other.]
- **Refresh:** keep the logo, colours, fonts and page structure. Fix what's weak and make it feel finished. Don't change the brand.
- **Rethink:** keep the content, the logo and what the business is. Everything else can change, starting from a new idea (see "The idea").

**Before anything changes:**
1. Screenshot every page of the current site at 390px and 1440px wide, full length, into `design/before/`. These are the starting point; compare every change against them.
2. Write a list in the rulebook headed "What's wrong now", page by page, plainly ("the menu is tiny on phones", "the hero looks like a template", "prices are hard to find"). Ask me what the owner and customers complain about.
3. Write a list headed "What's good and stays". A redesign shouldn't throw away what works.

**Must not break:**
- Page addresses. If a page moves or goes, add a redirect from the old address.
- Forms: every field still works and still sends to the same place.
- Phone numbers, emails, opening times, addresses and prices: copied exactly, never retyped from memory.
- Page titles and descriptions (what shows in Google), unless I agree a change.
- Analytics, booking, payment and any other tools the site is connected to.
- [Anything else the owner relies on.]

**How to work:**
- One page or section at a time, not the whole site at once. For each one: before screenshot, 3–4 directions as stills, I pick, build, after screenshot side by side with the before.
- Keep the real content. Don't rewrite the owner's words unless I ask; if the copy is weak, suggest changes and show them separately.
- Note any content that's missing (photos, prices, details) as `[NEEDED: …]`. Never fill gaps with made-up facts.
