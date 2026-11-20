# Design standard kit for Claude

A starter kit that gets Claude to design to a high standard, not the generic "AI" look. It covers **websites, logos, brand packs and social media content**, new or existing. Drop it into any project and use it with Claude Code in the cloud or on your own computer.

It doesn't work by telling Claude to "try harder". It works by giving every project:
- **an idea**: one concrete, visual picture of the brand, not a list of adjectives;
- **a bar**: one piece that's genuinely right, which everything else has to match;
- **a loop**: render it the way people will see it, look closely, fix every flaw, render again, until nothing looks basic;
- **a Don'ts list** that grows every time something looks generic;
- **a rulebook** that records every decision, so each session starts where the last one stopped.

Read [GUIDE.md](GUIDE.md) for why each part matters and how to fill it in.

## What's in it

| Path | What it is |
|---|---|
| `starter/` | **The part you copy into a project.** |
| `starter/CLAUDE.md` | Instructions Claude reads at the start of every session, with a section each for website, logo, brand pack and social. Fill in the [brackets] and delete what you're not making. |
| `starter/docs/design-system.md` | The rulebook: the idea, brand, logo, colour, type, website, brand pack, social, Don'ts, changelog. |
| `starter/design/shoot.js` | Screenshots a page at phone and desktop size, or a post at exact social sizes (`--preset social`). Prints console errors. |
| `starter/design/logo-check.js` | Shows a logo from 16px up, on light, dark and colour, in one colour, as a profile picture, a browser tab and blurred. `--export` writes the PNGs and favicons. |
| `starter/design/feed-check.js` | Shows posts as they look in a phone feed and on the profile grid. |
| `starter/design/references/` | 3–5 pictures of the quality you're aiming for. |
| `starter/design/sheets/`, `src/` | Design stills and the HTML that draws them. |
| `prompts/` | Messages to paste into Claude at each stage. |
| `GUIDE.md` | How and why it works. |

## Getting it into a project

**Claude Code in the cloud (claude.ai/code or the app)**
1. Start a session on the project you want to work on.
2. Say: *"Add the repo [your-username]/[this-repo] to this session."* Claude can attach it alongside your project.
3. Paste the prompt from `prompts/1-set-up-new-project.md` or `prompts/2-set-up-existing-work.md`.

**Claude Code on your own computer**
1. On GitHub, choose **Code → Download ZIP** for this repo and unzip it somewhere (or `git clone` it).
2. Start Claude Code in your project and tell it where the kit is: *"The design kit is in ~/Downloads/[folder]."*
3. Paste the set-up prompt as above.

**By hand:** copy everything inside `starter/` into the root of your project, then fill in the [brackets] yourself (or ask Claude to ask you questions to fill them in).

**Projects that already have a CLAUDE.md:** the set-up prompts tell Claude never to overwrite existing files. It shows you what it would add and merges only with your OK.

**Claude chat Projects (no code):** paste `starter/CLAUDE.md` into the Project instructions and upload `starter/docs/design-system.md` as a file. The idea, bar and Don'ts still help, but the screenshot loop needs Claude Code.

## Using it, stage by stage

| When | Paste |
|---|---|
| Starting something new (website, logo, brand, social, or a mix) | `prompts/1-set-up-new-project.md` |
| Updating an existing website, logo or brand | `prompts/2-set-up-existing-work.md` |
| Designing a logo | `prompts/7-logo.md` |
| Making a brand pack | `prompts/8-brand-pack.md` |
| Designing social media content | `prompts/9-social-content.md` |
| Designing any other new page, item or template | `prompts/3-explore-directions.md` |
| After picking a direction, repeat 3+ times | `prompts/4-polish-round.md` |
| Something looks generic or wrong | `prompts/5-that-looks-generic.md` |
| A piece is genuinely right | `prompts/6-make-it-the-bar.md` |

**The usual order** when making a whole brand: logo first, then the brand pack, then the website and social content, which both grow out of it.

## Needs

- Node.js, and Playwright for screenshots: `npm i -D playwright`, then `npx playwright install chromium` on your own computer. Cloud sessions usually have a browser already.
