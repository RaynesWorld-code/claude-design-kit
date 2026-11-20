# Design a logo

Use this for a new logo or a refresh of an existing one.

---

We're designing the logo. Read `CLAUDE.md` and `docs/design-system.md` first.

**1. Find the meaning.** Before drawing anything, ask me questions until you can list 10–20 things that are true and specific about this business: what it does, where, how, for whom, what the name sounds like and where it comes from, what's odd or special about it. Write the list into the rulebook's Logo section. Also list the clichés in this trade (the shapes every logo in it uses) so we can avoid them.

**2. Explore wide, in black.** Draw 4 genuinely different directions as SVG in `design/src/logo/`, each from a different item on the list: e.g. a symbol, a wordmark, lettering with one clever detail, a badge. One flat colour only. Put them on one sheet with the next free letter, with one line on what each means.

**3. Test them.** Run `node design/logo-check.js` on each. Drop or fix any that don't read at 16px and 32px, in one colour, or blurred.

**4. Let me pick, then push it.** Do at least three rounds on the chosen one: refine the shapes (fewer points, smooth curves, even weights, letter spacing adjusted by eye), run the logo check every round, and show me before and after.

**5. Colour and versions.** Only when the shape is right: try it in 2–3 colour options from the idea. Then make the versions: full, mark on its own, stacked or wide if needed, one colour, reversed.

**6. Finish.** Outline any text in the SVGs, run `node design/logo-check.js <full.svg> <name> --mark <mark.svg> --colour <brand hex> --export`, check every exported file by eye, and record the logo rules (clear space, smallest size, don'ts) in the rulebook.
