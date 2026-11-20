# Set up a new project

For a new website, logo, brand pack or social media content (or any mix). Paste this into a Claude session on the project (cloud or local). Attach or point it at the kit first; see the README for how.

---

Copy everything inside the kit's `starter/` folder into the root of this project. Don't overwrite any file that already exists; if one does, stop and tell me.

Then help me fill it in. First ask what we're making: a website, a logo, a brand pack, social media content, or a mix. Delete the sections in `CLAUDE.md` and `docs/design-system.md` for anything we're not making, and the parts about updating existing work.

Then ask me questions one at a time, in plain words, until every part in [square brackets] is filled in or marked [TBD].

For "The idea", don't ask me to write it. Suggest 3–4 concrete, visual ideas that only make sense for this business (a place, a material, a time of day, a world), each in two sentences, and let me pick or mix them.

Ask me for 3–5 references of the quality I want (links or pictures) and what I like about each. Save them in `design/references/` with a line each in its README.

When it's all filled in, commit it. Then tell me what the first piece should be (the logo if we're making one, otherwise the website's opening screen or the first post template) and start on it with the right prompt from the kit (`7-logo.md` for a logo, otherwise `3-explore-directions.md`).
