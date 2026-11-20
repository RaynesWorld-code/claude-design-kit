# How it works, and how to fill it in

## Why Claude's design goes generic

Asked for a "modern, clean, premium" website, any model goes to the average of every website it has seen. That average is the generic AI look: a small label over a big headline, a sentence, two buttons, a grid of rounded cards. The same thing happens everywhere else: a logo becomes an icon next to a font, or initials in a circle; a brand pack becomes a logo on a white page and a list of colours; social posts become Canva templates. Telling it to "be original" or "use maximum effort" doesn't help, because there's nothing concrete to aim at and nothing to measure against.

What does help is in this kit.

## The seven things that raise the standard

1. **A concrete idea, not adjectives.** "A bakery counter at six in the morning: brown paper bags, chalk prices, flour on the edges of things" gives Claude something to build toward, for the website, the logo and the posts alike. "Warm and friendly" doesn't.
2. **Named Don'ts.** Not "avoid generic design", but "don't use the small label, big headline, one sentence, two buttons block". Every time something looks off-the-shelf, write down exactly what it was, in your words.
3. **A real bar.** One page in the project that's genuinely right. "Work to the level of [that page]" is something Claude can measure against; "maximum effort" isn't.
4. **Looking at real renders, the way people will see them.** Most generic output comes from never looking at the result. The loop is: render it, look closely, list every flaw, fix, render again. "The way people will see it" matters: a website on a phone, a logo at 16px in a browser tab, a post at feed size between other posts.
5. **Several directions before building.** The first idea is usually the generic one. Draw 3–4 different directions as stills, pick, then push the pick further.
6. **One rulebook that keeps up.** Every decision goes into `docs/design-system.md` with a changelog line, so new sessions don't start from zero taste or reopen settled questions.
7. **Your feedback, written down.** Most of the standard is your own reactions turned into rules. The kit only makes sure they stick.

## Filling in CLAUDE.md

You don't have to type into it yourself: the set-up prompts get Claude to ask you questions one at a time. Leave anything you can't answer yet as [TBD]; the file is meant to grow.

- **Name and one line:** what it is and who it's for. "Website and logo for a dog groomer in Leeds. Customers are busy owners booking on their phones."
- **What we're making:** website, logo, brand pack, social media, or a mix. Delete the sections you don't need.
- **The idea:** the most important part. Look at what the business physically is or does, pick a material (paper, wood, chalk, enamel, felt) and a light or time (sunrise, a lit workshop at night, a bright market stall). If you're stuck, let Claude suggest 3–4 and pick the one you react to.
- **Where things are:** fill in as files appear.
- **The bar:** "none yet" until one page is right.
- **Don'ts:** keep the starter list and add your own.
- **Copy:** British or US English, and any words the business always or never uses.

## When there's no bar yet

The first job is to make one.

1. **Pick one piece:** the logo if you're making one; otherwise the website's opening screen (or on an existing site, its most important page), or the first post template.
2. **Borrow a bar from outside:** 3–5 references of the quality you want (sites, logos, packaging, book covers, shop signs, social accounts) in `design/references/`, each with a line on what it does well. They show the level, not something to copy.
3. **Explore wide:** 3–4 genuinely different directions as stills. Pick one, even if none is perfect.
4. **Push it at least three more rounds.** The first round is always too safe.
5. **Name it as the bar** in `CLAUDE.md`. Every other page now has to reach it.
6. **Raise it** when a later page beats it, and bring the older pages up.

**Signs a piece is finished:**
- You can't tell it was made with a template, a kit or an AI image tool.
- It only makes sense for this business; it couldn't be swapped onto another one.
- A close look at a real render, at the size people will see it, shows nothing stray, cut off, floating or uneven.
- Every word is something the owner would actually say.
- You can't name anything that still feels basic.

## Websites, logos, brand packs and social media

The loop is the same for all four. What changes is what "the way people see it" means, and where the generic version comes from.

### Websites
- **Seen on:** a phone, first. Desktop is the adaptation.
- **Generic version:** the hero block, card grids, component-library looks, filler sections.
- **Check with:** `design/shoot.js` (phone and desktop, plus console errors).

### Logos
- **Seen on:** a browser tab at 16px, a profile picture in a small circle, a shop sign, a van, a black-and-white print-out.
- **Generic version:** the trade's clichés (a rooftop for builders, a leaf for anything green, a swoosh), a free icon next to a font, initials in a circle, or the over-detailed AI-image look.
- **What makes it good:** it comes from something true and specific about the business, not from what other logos in the trade look like. It's drawn in black first, so the shape has to work on its own. It reads at 16px, in one colour, and blurred.
- **Check with:** `design/logo-check.js` every round. `--export` makes the finished PNGs and favicons.
- **Prompt:** `prompts/7-logo.md`.

### Brand packs
- **Seen on:** the real things the business uses: business cards, signs, the van, emails, the social profile. And by whoever has to use the brand without you there.
- **Generic version:** a logo on a white page, a row of colour swatches and a font name.
- **What makes it good:** it shows the brand in use, at real size, on the things this business actually needs. The rules are shown as pictures, not just described. It has everything someone needs to use the brand correctly: every file, colour values for screen and print, where to get the fonts.
- **Check with:** every guidelines page and item rendered and looked at, like anything else. Print items set up for print.
- **Prompt:** `prompts/8-brand-pack.md`.

### Social media
- **Seen on:** a phone, at feed size, for about a second, between other people's posts. And on the profile grid, all together.
- **Generic version:** Canva templates, walls of text, every post a different look.
- **What makes it good:** a small set of templates that share one look, so the feed is recognisable without the logo. One idea per post that reads at a glance.
- **Check with:** `design/shoot.js --preset social` for exact sizes, then `design/feed-check.js` for the feed and the grid.
- **Prompt:** `prompts/9-social-content.md`.

### Doing them together
If a whole brand is being made, do the logo first: it sets the shapes, colours and type the rest grow from. Then the brand pack, then the website and social content. Keep one rulebook and one Don'ts list for all of it, so a lesson learnt on the website (say, "no rounded cards") also shapes the posts.

## Existing work

For a website, the same loop works with three changes (and the same ideas apply to refreshing a logo or brand):

- **Decide refresh or rethink** at the start, or Claude drifts either way. Refresh keeps the brand and structure; rethink keeps the content and logo.
- **Screenshot the current site first** into `design/before/`, and list what's wrong now and what's good and stays. Compare every change against the before.
- **List what must not break:** page addresses (redirect any that move), forms, contact details, page titles and descriptions, analytics, booking, payment.

Work one page at a time: before, directions, pick, build, after side by side with the before.

For a logo or brand: put the old version in `design/before/`, run the logo check on it, and work out what people recognise (the shape, the colour, the look of the name). Keep that, fix what's weak, and show every option next to the old one.

## The honest part

The instructions don't make the best possible website, logo or brand by themselves. They set up the loop. The standard comes from going round it again and again, with you saying "not yet" until it's right.
