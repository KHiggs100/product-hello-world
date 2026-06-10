# Backstage Pass

An interactive, browser-based course that teaches **adults with zero coding experience** the basics of code — and, crucially, how to **read, trust, question and direct the code that AI tools produce.**

The theme: the web is a live show, AI is a fast but over-confident stagehand, and the learner is the director who learns to read the script and catch the mistakes.

> Design note: the site is built in plain, readable HTML/CSS/JS on purpose. It is its own worked example — the thing you learn on is the thing you're learning about.

## Run it

Just **double-click `index.html`** (or open it in any browser). The course needs no server and no installs — all content loads from `course/content.js`.

In VSCode you can also right-click `index.html` → **Show Preview** (Live Preview extension).

## What's in here

| Path                 | What it is                                                       |
| -------------------- | --------------------------------------------------------------- |
| `index.html`         | The course shell — top bar, progress lights, glossary, footer   |
| `course/theme.css`   | The "Backstage Pass" look — colours, layout, components         |
| `course/content.js`  | **The whole course as data** — modules, lessons, games, glossary |
| `course/app.js`      | The engine — routing, in-browser progress, and the games        |
| `demo/`              | The little "Sam Rivera" demo site that lessons teach on          |
| `docs/content-outline.md` | The full content plan (Modules 0–2 written, 3–6 outlined)  |

## How it works

- **Progress is saved in your browser only** (`localStorage`) — nothing leaves the device, no account needed. The **Reset** button clears it.
- **AI responses are pre-scripted**, not live API calls — consistent, free, and safe with no data shared.
- **The lessons are data.** To add or tweak a lesson, edit `course/content.js`; the engine renders it.

## Status

- ✅ **Module 0 — "It's just instructions and files"**: welcome screen, three lessons + games (Human Compiler, Backstage Tour, Match the File), and a Curtain Call quiz + badge.
- ✅ **Module 1 — "Reading the script"**: five lessons + games (Spot the Block for variables & loops, Build the Setlist for lists, Choose for if/else & functions), each with a pre-scripted **Stagehand** AI panel, plus a "Read the Whole Script" Curtain Call.
- ✅ **Module 2 — "The web you can see"**: four lessons with **live edit-and-preview sandboxes** — change the words (HTML), repaint the set (CSS, with a built-in contrast/accessibility warning), add a project by editing data (JS, with the real friendly JSON error), and a "Which Layer?" sorting game — plus the "Set Builder" Curtain Call.
- ✅ **Module 3 — "Directing the Stagehand"**: four lessons on using AI well — Prompt Lab (vague vs. specific, reveal each reply), Build a Better Prompt (add the context that helps), Ask to Understand, and It's a Conversation — plus the "Director" Curtain Call.
- ✅ **Module 4 — "Reading what the Stagehand hands you"**: four lessons on judging AI output — Predict the Output (trace, then "run" it), Confident ≠ Correct (judge the AI's confident claims), Runs ≠ Correct (code that works but is wrong), and Your Reading Routine — plus the "Critical Reader" Curtain Call.
- ✅ **Module 5 — "When the show stumbles"**: four lessons on debugging — Errors Are Normal (reframe), Read the Message (what + file + line), The Debugging Loop (a hands-on Fix It walkthrough), and When You're Really Stuck — plus the "Troubleshooter" Curtain Call.
- ✅ **Module 6 — "Opening night"**: four lessons on judgement & safety for **internal Funding Circle use** — Just Because It Can, Should It? (judgement), What's Safe to Share with AI (data classification / never share PII), Use the Tools You're Meant To (FC-approved tools, never bypass security), and Where to Go Next (links to FC's AI Policy and AI training site) — plus the "Backstage Pass — Graduate" finale.

**Polish:** the map shows a live progress summary (lessons done / acts complete) and an earned-badges shelf; completing every act triggers a grand finale with confetti (skipped under `prefers-reduced-motion`) and a "Replay from the start" option.

**Interaction variety:** beyond the original mechanics, the course now includes **Drag-to-Order**, **Drag-to-Bucket**, **Spot the Fake**, **Spot the Bug**, **Fill-the-Gap**, **Memory Match**, and **Direct the Scene** (a branching chat with the Stagehand). Multiple-choice is now used sparingly (~5 spots) rather than as the default, and every Curtain Call ends with a different challenge (match / bucket / order / speed round / fix-it / branching). All new games keep click + keyboard fallbacks (no drag-only traps) and respect `prefers-reduced-motion`.

**The course is content-complete: Acts 0 → 6.** Module 6 links the [FC AI Policy](https://app.hibob.com/docs/company-docs/preview/637693) and the [FC AI training site](https://fundingcircle.learnamp.com/en/items/funding-circle-prod-sign-in-435b2e24-81e0-4b87-ae9c-f0a75476e51f). It currently refers to "FC-approved AI tools" generically — drop in the specific approved tool name(s) when confirmed.

The sandboxes render a real mini web page in an `<iframe>` (via `srcdoc`) that updates as you type. Nothing writes to disk — edits live in memory and there's a Reset on each.

### The Stagehand (pre-scripted AI helper)

From Module 1 on, lessons include a "🎭 Ask the Stagehand" panel: a *scripted* example of asking an AI about the code on screen, plus a "Watch for" note that trains the learner to read AI answers critically. No live API calls — replies live in `course/content.js`.

## Accessibility

Skip link, keyboard-operable games, visible focus rings, `aria-live` feedback regions, sufficient contrast, and `prefers-reduced-motion` support are built in. Layout adapts for narrow/mobile screens.