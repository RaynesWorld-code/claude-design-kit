# Design social media content

Use this for post templates, a launch series, or a refresh of an account's look.

---

We're designing social media content. Read `CLAUDE.md` and `docs/design-system.md` first.

1. **Ask me** which platforms, what the business posts about (news, offers, work, tips, behind the scenes), how often, and who makes the photos.
2. **Templates, not one-offs.** Pick 4–5 kinds of post we'll need again and again (e.g. a quote, an announcement, a photo with a caption, a carousel cover and an inside page). Draw 3 different directions for the whole set, each as HTML in `design/src/social/` that fills the window, using the brand and real example content. Render with `node design/shoot.js <file> <name> --size 1080x1350` (and 1080x1920 for stories).
3. **Check them the way people see them.** Put the renders in a folder and run `node design/feed-check.js <folder> <name>`. Look at the feed: does each post read at a glance at phone size? Look at the grid: does it look like one brand? Show me all three directions as feed and grid.
4. **Let me pick, then push it.** Polish rounds on each template. Check story safe zones (nothing important in the top 250px or bottom 340px). Write the rules into the rulebook's Social media section: smallest type size, the grid pattern, captions.
5. **Profile and headers.** The profile picture (the logo mark, checked small in a circle with `design/logo-check.js`) and any headers the platforms need, at their current sizes.
6. **Export** each post at its exact size to `social/`, named `[date]-[topic]-[size].png`, with the caption in a matching `.txt` file.
