# RICHIE TAN — Deployment & Workflow Memory

## Hosting (LIVE)
- **Live site:** https://richietan.com — served by **GitHub Pages**.
- **GitHub repo:** `richietgf88-dot/richie-tan` (branch `main`). Site files live at REPO ROOT (flat — about.html, data.js, etc. at top level).
- **Domain:** richietan.com — DNS at **Squarespace** (4× A records → GitHub Pages IPs, 1× CNAME). Repo has a `CNAME` file = `richietan.com`. DO NOT delete the CNAME file. Netlify is ABANDONED — ignore it.
- The user has a **local git clone** + git configured in terminal. **Local repo path: `/Users/richie/Downloads/richie-tan-FINAL`**. They deploy by: copy changed files into local folder → `git add -A && git commit -m "…" && git push` → GitHub Pages rebuilds (~1 min).

## DEPLOY BLOCK FORMAT (use every edit)
Always assume a COLD terminal — start with `cd`, and ALWAYS `git pull` BEFORE committing (we hit a merge conflict once from skipping it). Template:
```
cd "/Users/richie/Downloads/richie-tan-FINAL"
git pull
# replace the changed file(s) with the new download first
git add -A
git commit -m "<message>"
git push
```
Then: name exactly which file(s) changed + provide a download of just those.

## CANONICAL SOURCE
- **This Claude project's ROOT folder is the source of truth** and mirrors the GitHub repo 1:1 (flat structure).
- `site-live/` legacy duplicate was DELETED. Root files are the only copy.
- I (Claude) have READ-ONLY GitHub access — I CANNOT push. The user pushes from their terminal. After they push, I can READ the repo to confirm it landed.

## DEPLOY HANDOFF PROTOCOL (every time I make an edit)
At the end of any change, give the user a clear **DEPLOY BLOCK**:
1. **Exactly which files changed** (specific filenames, e.g. "only `data.js`").
2. A **download** of just those files (or whole project if many).
3. Copy-paste **git commands**.
Be specific so they only re-download what changed (note: `site-content.js` is ~2.3MB — only changes when the user does Content Studio edits + re-bake; most of MY edits only touch `data.js` or one HTML file).

## CONTENT / EDITS MODEL
- Owner edits via Content Studio (`editor.html`) → saved in browser localStorage only.
- To publish those: user Exports `richie-tan-content.json` → sends to me → I deep-merge into `site-content.js` (baseline for all visitors; localStorage still wins on top). NEVER blind-overwrite site-content.js — deep-merge to preserve prior images/order/added/removed.
- Cache-busting: all HTML reference `?v=NN`. Bump the number on every change (currently at v=22) across all HTML files so browsers fetch fresh CSS/JS.

## STYLE
Cormorant Garamond + Jost; near-black / ivory / gold luxury. 9 pages + Content Studio + per-exhibition pages (`exhibition.html?id=N`) with native video + photo galleries. Edit mode (`?edit=1`) adds drag-reorder / add / remove / section-move; hidden from public.
