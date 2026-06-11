# Backstage Pass — Google Apps Script version

This folder is a **repackaged copy** of the course, ready to paste into a Google
Apps Script web app. The course is front-end only, so Apps Script just delivers
the page — every game, the Stagehand, progress saving and the finale behave the
same as the local version.

> ⚠️ Before deploying publicly: confirm Apps Script web-app hosting is a
> sanctioned route for your team, and set access to **"Anyone within Funding
> Circle"** so the internal AI-policy links stay behind Google sign-in.

## The files

| Apps Script file | Type | What it is |
| ---------------- | ---- | ---------- |
| `Code.gs`        | Script | `doGet()` serves the page + an `include()` helper |
| `index.html`     | HTML | Page markup; pulls the others in with `<?!= include(...) ?>` |
| `theme.html`     | HTML | `course/theme.css` wrapped in `<style>…</style>` |
| `content.html`   | HTML | `course/content.js` wrapped in `<script>…</script>` (defines `COURSE`) |
| `app.html`       | HTML | `course/app.js` wrapped in `<script>…</script>` (the engine) |

Order matters: `index.html` includes **content before app**, because `app.js`
uses the `COURSE` data defined in `content.js`.

## How to deploy

1. Go to <https://script.google.com> and create a **New project**.
2. Recreate these files in the editor (the names must match, **without** the
   `.html`/`.gs` extension shown in the + menu):
   - Rename the default `Code.gs`, paste in `Code.gs`.
   - **+ ▸ HTML** → name it `index`  → paste `index.html`.
   - **+ ▸ HTML** → name it `theme`  → paste `theme.html`.
   - **+ ▸ HTML** → name it `content`→ paste `content.html`.
   - **+ ▸ HTML** → name it `app`    → paste `app.html`.
3. **Deploy ▸ New deployment ▸ Web app**
   - *Execute as:* **Me**
   - *Who has access:* **Anyone within Funding Circle**
4. Authorise when prompted, then open the web-app URL. Done.

To update later: edit the files, then **Deploy ▸ Manage deployments ▸ Edit ▸
New version**.

## Keeping it in sync with the local version

These files are **generated copies** of `course/`. The source of truth is still
`course/theme.css`, `course/content.js`, `course/app.js` — edit those, then
regenerate the wrappers (run from the repo root, in a bash/Git-bash shell):

```bash
{ printf '<style>\n';  cat course/theme.css;   printf '\n</style>\n';  } > appsscript/theme.html
{ printf '<script>\n'; cat course/content.js;  printf '\n</script>\n'; } > appsscript/content.html
{ printf '<script>\n'; cat course/app.js;      printf '\n</script>\n'; } > appsscript/app.html
```

`Code.gs` and `index.html` rarely change, so they're maintained by hand.

## Known differences from the local version

- **Progress saving** uses `localStorage` inside Apps Script's sandboxed iframe.
  It works in the modern `IFRAME` sandbox, but test that progress persists for
  you after a refresh.
- **The `demo/` page is not included** — it relies on `fetch('projects.json')`,
  which needs real file paths. The course itself never loads the demo page, so
  the lessons are unaffected.
- External links (AI Policy, training site) open in a new tab via
  `target="_blank"`, as expected.