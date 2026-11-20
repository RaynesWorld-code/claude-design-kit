# Set up an existing site that needs updating

Paste this into a Claude session on the existing project. Attach or point it at the kit first; see the README for how.

---

Copy everything inside the kit's `starter/` folder into the root of this project. **Don't overwrite anything that already exists.** If this project already has a `CLAUDE.md` or a design rulebook, don't replace them: read them, then show me what you'd add from the kit's versions and wait for my OK before merging. Keep everything the existing files say that still holds.

Then, before changing any design:
1. Screenshot every page of the current site with `node design/shoot.js <address> <page-name> --out design/before` (phone and desktop, full length). List the pages you found.
2. Go through the screenshots with me and fill in "What's wrong now" and "What's good and stays" in `docs/design-system.md`, page by page. Ask what the owner and customers complain about.
3. Fill in "Must not break" by checking the code: page addresses, forms and where they send, contact details, page titles and descriptions, analytics, booking, payment.
4. Ask me: refresh (keep the brand and structure, fix what's weak) or rethink (keep the content and logo, everything else can change)? Write the answer into `CLAUDE.md`.
5. Fill in the rest of the [square brackets], one question at a time. For "The idea", suggest 3–4 options that build on what's already there.

Commit when done, then tell me which page to redo first and why.
