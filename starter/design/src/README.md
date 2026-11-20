# Sources

HTML (and SVG) files that draw the designs. One file per sheet or piece, named after it.

- Website stills: `design/src/A-opening.html` → `node design/shoot.js design/src/A-opening.html A-opening`
- Logo: `design/src/logo/` (SVG, one file per version) → `node design/logo-check.js design/src/logo/full.svg full --mark design/src/logo/mark.svg`
- Social posts: `design/src/social/` (one HTML file per template, filling the window) → `node design/shoot.js design/src/social/quote.html quote --size 1080x1350 --out social`
- Brand pack pages and print items: `design/src/brand/`, drawn at real size.
