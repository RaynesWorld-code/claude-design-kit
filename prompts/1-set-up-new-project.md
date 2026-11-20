# Set up a new project

Paste this into a Claude session on the new project (cloud or local). Attach or point it at the kit first; see the README for how.

---

Copy everything inside the kit's `starter/` folder into the root of this project. Don't overwrite any file that already exists; if one does, stop and tell me.

Then help me fill it in. Ask me questions one at a time, in plain words, until every part in [square brackets] in `CLAUDE.md` and `docs/design-system.md` is filled in or marked [TBD]. Delete the sections marked "existing sites only" and "Updating an existing site".

For "The idea", don't ask me to write it. Suggest 3–4 concrete, visual ideas that only make sense for this business (a place, a material, a time of day, a world), each in two sentences, and let me pick or mix them.

Ask me for 3–5 references of the quality I want (links or pictures) and what I like about each. Save them in `design/references/` with a line each in its README.

When it's all filled in, commit it. Then tell me what the first piece to design should be (usually the opening screen), and start on it using `prompts/3-explore-directions.md` from the kit.
