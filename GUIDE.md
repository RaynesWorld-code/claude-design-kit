# How it works, and how to fill it in

## Why Claude's design goes generic

Asked for a "modern, clean, premium" website, any model goes to the average of every website it has seen. That average is the generic AI look: a small label over a big headline, a sentence, two buttons, a grid of rounded cards. Telling it to "be original" or "use maximum effort" doesn't help, because there's nothing concrete to aim at and nothing to measure against.

What does help is in this kit.

## The seven things that raise the standard

1. **A concrete idea, not adjectives.** "A bakery counter at six in the morning: brown paper bags, chalk prices, flour on the edges of things" gives Claude something to build toward. "Warm and friendly" doesn't.
2. **Named Don'ts.** Not "avoid generic design", but "don't use the small label, big headline, one sentence, two buttons block". Every time something looks off-the-shelf, write down exactly what it was, in your words.
3. **A real bar.** One page in the project that's genuinely right. "Work to the level of [that page]" is something Claude can measure against; "maximum effort" isn't.
4. **Looking at real renders, every time.** Most generic output comes from never looking at the result. The loop is: screenshot at phone size, look closely, list every flaw, fix, screenshot again.
5. **Several directions before building.** The first idea is usually the generic one. Draw 3–4 different directions as stills, pick, then push the pick further.
6. **One rulebook that keeps up.** Every decision goes into `docs/design-system.md` with a changelog line, so new sessions don't start from zero taste or reopen settled questions.
7. **Your feedback, written down.** Most of the standard is your own reactions turned into rules. The kit only makes sure they stick.

## Filling in CLAUDE.md

You don't have to type into it yourself: the set-up prompts get Claude to ask you questions one at a time. Leave anything you can't answer yet as [TBD]; the file is meant to grow.

- **Name and one line:** what it is and who it's for. "Website for a dog groomer in Leeds. Customers are busy owners booking on their phones."
- **The idea:** the most important part. Look at what the business physically is or does, pick a material (paper, wood, chalk, enamel, felt) and a light or time (sunrise, a lit workshop at night, a bright market stall). If you're stuck, let Claude suggest 3–4 and pick the one you react to.
- **Where things are:** fill in as files appear.
- **The bar:** "none yet" until one page is right.
- **Don'ts:** keep the starter list and add your own.
- **Copy:** British or US English, and any words the business always or never uses.

## When there's no bar yet

The first job is to make one.

1. **Pick one piece:** usually the opening screen, or on an existing site the most important page.
2. **Borrow a bar from outside:** 3–5 references of the quality you want (sites, packaging, book covers, shop fronts) in `design/references/`, each with a line on what it does well. They show the level, not something to copy.
3. **Explore wide:** 3–4 genuinely different directions as stills. Pick one, even if none is perfect.
4. **Push it at least three more rounds.** The first round is always too safe.
5. **Name it as the bar** in `CLAUDE.md`. Every other page now has to reach it.
6. **Raise it** when a later page beats it, and bring the older pages up.

**Signs a piece is finished:**
- You can't tell it was made with a template or kit.
- It only makes sense for this business; it couldn't be swapped onto another site.
- A close look at a phone-sized render shows nothing stray, cut off, floating or uneven.
- Every word is something the owner would actually say.
- You can't name anything that still feels basic.

## Existing sites

The same loop works, with three changes:

- **Decide refresh or rethink** at the start, or Claude drifts either way. Refresh keeps the brand and structure; rethink keeps the content and logo.
- **Screenshot the current site first** into `design/before/`, and list what's wrong now and what's good and stays. Compare every change against the before.
- **List what must not break:** page addresses (redirect any that move), forms, contact details, page titles and descriptions, analytics, booking, payment.

Work one page at a time: before, directions, pick, build, after side by side with the before.

## The honest part

The instructions don't make the best possible website by themselves. They set up the loop. The standard comes from going round it again and again, with you saying "not yet" until it's right.
