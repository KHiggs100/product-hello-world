# Backstage Pass — Content Outline (Modules 0–2)

> **The site in one line:** AI builds the show. You learn to read the script, spot the bum notes, and direct the cast — so the magic stops being magic and starts being yours.

## Theme & voice

**Backstage Pass.** The web is a live show. AI is an absurdly fast, slightly over-confident stagehand who can build sets, write lines, and run lights in seconds — but it needs a director who can read the script and say "no, not like that." That director is the learner.

**Tone for adults:** Smart, warm, never condescending. We assume the learner is capable and busy, just new to *this*. No baby-talk, no "coding is scary!" hand-wringing. Humour is dry, not zany. Wins are celebrated plainly.

**Recurring motifs**
- **The Curtain** — every module opens by "pulling back the curtain" on one piece of magic.
- **The Script** — code is just the script the show runs from. You can read it.
- **The Stagehand** — the AI. Fast, tireless, confident, occasionally wrong. Your job is to direct, not to worship.
- **Cue cards** — short "remember this" takeaways at the end of each lesson.
- **Curtain call** — the end-of-module recap + game.

**Progress model:** A row of stage lights along the top. Each completed lesson lights one up. Finish a module → the spotlight hits and a "Curtain Call" badge unlocks. Streaks are framed as "show nights."

---

# MODULE 0 — "It's just instructions and files"
### Act tagline: *Pull back the curtain*

**Goal:** Remove the intimidation. By the end, the learner believes three things: a computer follows instructions *literally*, code is just *text in files*, and a website is just *a few files a browser reads*. No writing yet — only seeing.

**Why this comes first:** Beginners quit because they think there's a secret they're missing. There isn't. Module 0 proves the building is unlocked before we ask anyone to walk in.

---

### Lesson 0.1 — The show is just instructions

**On-screen copy:**

> Every app, website, and game you've ever used is a list of instructions being followed very, very fast. That's it. The "magic" is just speed.
>
> The catch: a computer follows instructions **literally**. It has no common sense. It does *exactly* what the script says — including the mistakes. This is the single most useful thing to understand about both code and AI: neither one guesses what you *meant*.

**Concept:** Literal instruction-following. Set up the idea that precision matters and that "wrong output" usually means "imprecise instructions," not "broken computer."

**🎮 Game — Human Compiler ("You be the computer")**
- The learner is handed a goofy real-world goal: *"Make a jam sandwich."*
- They drag-and-drop instruction cards into order ("pick up knife," "open jar," "spread jam"...).
- The site then follows the instructions **literally and dramatically** with a little animation — if "open the jar" is missing, the stagehand jams the knife on a closed lid. If "put jam ON bread" isn't specified, jam goes on the table.
- Replays until the instructions are complete and ordered. The laugh *is* the lesson.
- **Lands:** computers (and AI) do exactly what you say, not what you mean.

**Cue card:** *The computer is not clever. It is fast and obedient. Precision is your job.*

---

### Lesson 0.2 — Code is just text in files

**On-screen copy:**

> Brace yourself for an anticlimax: code is text. You could open it in a notepad. It's stored in **files** with names like `index.html` and `styles.css`. The `.html` bit at the end is just a label telling the computer what kind of text it's looking at.
>
> No secret format. No vault. Just files you can open, read, and change.

**Concept:** Files, file extensions, the idea that a project is a folder of files. Demystify the file tree.

**🎮 Interactive — The Backstage Tour**
- A clickable file tree showing the learner's *actual* scaffold: `index.html`, `styles.css`, `app.js`, `projects.json`.
- Hovering each file flips a "cue card": *"`index.html` — the bones of the page. What's on screen and in what order."*
- Clicking opens a read-only peek at the real file contents with 2–3 lines gently highlighted and labelled in plain English.
- **Lands:** "I'm looking at a real website's actual files, and they're not scary."

**Cue card:** *A project is just a folder of text files. You already know how to open files.*

---

### Lesson 0.3 — A website is a few files a browser reads

**On-screen copy:**

> When you visit a page, your browser quietly opens a handful of these files and assembles the show in front of you. Change a word in the file, refresh, and the show changes. That's the entire loop. Everything else is detail.

**Concept:** Browser-as-reader. The edit → save → refresh loop. Introduce that *they* will do this in the very next module.

**🎮 Game — Match the File to the Job**
- Three columns: a file name, what it does, and a tiny visual ("the words you read," "the colours," "the moving bits").
- Drag to match `index.html` → structure, `styles.css` → style, `app.js` → behaviour.
- Instant feedback with a one-line "why" on each correct match.
- **Lands:** the three-part split that Module 2 will build on.

**Cue card:** *Browser reads the files → builds the show. Edit a file → the show changes.*

---

### 🎬 Module 0 Curtain Call
- **Recap:** instructions are literal · code is text in files · a browser reads those files into a page.
- **Mini-quiz (3 Q, no fail state):** "Which file holds the words on the page?" etc. Wrong answers nudge, don't punish.
- **Reward:** First stage light glows. Badge: *"Backstage Pass — Issued."*
- **Hook to next:** *"You've seen the script. Next, you'll read it."*

---

# MODULE 1 — Reading code before writing it
### Act tagline: *Learn to read the script*

**Goal:** Teach the five universal building blocks of *all* code by **spotting them**, not writing them. Reading fluency first. By the end, a learner can look at a snippet in almost any language and point to "that's a variable, that's a loop, that's an if."

**Why reading first:** You learned to read before you wrote. Code is the same, and it's *especially* true in the AI era — the learner's main job will be reading what the stagehand hands them and judging it. Reading is the skill.

**The five blocks (the whole module is these five):**
1. **Values & variables** — a labelled box that holds something (`name = "Sam"`).
2. **Lists** — many things in order (`["jam", "bread", "knife"]`).
3. **Conditionals (if/then)** — a fork in the road (`if logged_in: show dashboard`).
4. **Loops** — do this again for each thing (`for each project: make a card`).
5. **Functions** — a named, reusable action (`loadProjects()`).

---

### Lesson 1.1 — Boxes with labels (values & variables)

**On-screen copy:**

> A variable is a labelled box. You put something in it — a word, a number — and from then on you can refer to it by its label. `name = "Sam"` means "the box called *name* holds Sam."
>
> Why bother? So the show can say the right thing in fifty places by changing one box.

**🎮 Game — Spot the Block: Boxes**
- A real snippet appears (pulled from `app.js` / `projects.json` — their own scaffold).
- Prompt: *"Tap everything that's a labelled box."*
- Tapping `title`, `year`, `summary` lights them green; tapping punctuation or keywords gives a gentle "not quite — that's a label for a box, look for the name holding a value."
- **Lands:** variables are everywhere and easy to spot.

**Cue card:** *Variable = a labelled box holding a value. Find the name, find the box.*

---

### Lesson 1.2 — Many things in a row (lists)

**On-screen copy:**

> Often you don't have one thing, you have a stack of them — three projects, ten emails, a hundred songs. A **list** holds many things in order. Your projects page? That's a list. Look:

(Show `projects.json` — a real list of three projects.)

**🎮 Game — Build the Setlist**
- Learner drags items into a list and watches the page's project cards appear/reorder live (using their real `projects.json` rendered by `app.js`).
- Remove an item → a card vanishes. Reorder → cards reorder.
- **Lands:** "the list in the file *is* the list on the screen." This is the first taste of data → display.

**Cue card:** *A list is many values in order. Change the list, change what shows up.*

---

### Lesson 1.3 — Forks in the road (conditionals)

**On-screen copy:**

> Code makes decisions with **if**. *If* you're logged in, show the dashboard; *otherwise*, show the login screen. Same show, different scene, depending on the situation. Computers can't improvise — every "it depends" in an app is an `if` somewhere.

**🎮 Game — Predict the Scene**
- A simple `if / else` snippet in plain-ish code. Learner is given the situation ("the user is NOT logged in") and picks which branch runs.
- Reveal animates the chosen branch lighting up.
- 3–4 rounds, increasing in spice (nested condition by the last one).
- **Lands:** reading a fork and tracing which path is taken.

**Cue card:** *`if` is a fork in the road. Trace the situation to find which path runs.*

---

### Lesson 1.4 — Do it again (loops)

**On-screen copy:**

> You have three projects but you only wrote the design for *one* card. How do all three appear? A **loop**: "for each project in the list, make a card." Write once, repeat for every item. This is why a shopping site with 10,000 products didn't take someone 10,000 days.

(Point at the real `.map(...)` in `app.js` — *"this line is a loop. It runs once per project."*)

**🎮 Game — Spot the Block: The Repeat**
- Show the real `app.js` render code. Prompt: *"One of these lines runs once for every project. Find it."*
- Correct tap on the `.map` line triggers an animation: the single card template stamps out three real cards.
- **Lands:** the loop connects "one instruction" to "many results on screen."

**Cue card:** *A loop runs the same action for each item in a list. One instruction, many results.*

---

### Lesson 1.5 — Named actions you reuse (functions)

**On-screen copy:**

> A **function** is a named action you can trigger by its name, as often as you like. `loadProjects()` means "go do the whole load-the-projects routine." Define it once; call it whenever. When you ask AI for code, it almost always hands you functions — so being able to say *"what does this function do, in one sentence?"* is gold.

**🎮 Game — Name That Routine**
- Show 3 short real functions (stripped of their names). Learner reads each and picks the best plain-English name from options.
- Reveals the actual name and a one-line "what it does."
- **Lands:** functions are nameable, summarisable units — the unit you'll review AI output in.

**Cue card:** *A function is a named, reusable action. Read it, name it, and you understand it.*

---

### 🎬 Module 1 Curtain Call
- **Recap:** the five blocks, with the real scaffold lines that showed each one.
- **Game — Read the Whole Script:** their full `app.js` shown once more, and the learner labels each block they now know (box / list / loop / function). This is the "aha — I can read this whole file" moment.
- **Reward:** stage lights 2–6 glow. Badge: *"Script Reader."*
- **Hook:** *"You can read the script. Time to change it — and watch the show change in front of you."*

---

# MODULE 2 — The web you can see
### Act tagline: *Bones, skin, and muscle*

**Goal:** First real edits, with instant visual payoff. Teach the three-layer split — **HTML = structure (bones), CSS = style (skin), JS = behaviour (muscle)** — by changing each and watching the page react. This is where it gets *fun* and tangible.

**Why now:** Module 0 proved it's safe, Module 1 made the script readable. Module 2 gives the first hit of "I changed it and the show changed." That dopamine is what makes people come back.

---

### Lesson 2.1 — The bones (HTML)

**On-screen copy:**

> HTML is the skeleton: what's on the page and in what order. A heading, a paragraph, a button. No colours, no movement — just *what exists and how it's nested*. Tags come in pairs, like stage curtains: `<h1>` opens, `</h1>` closes, and your content sits between them.

**🎮 Sandbox — Change the Words**
- Split screen: a simplified `index.html` on the left, **live preview** on the right (their real scaffold).
- Guided task: *"Find `Sam Rivera`. Make it your name."* Save → preview updates instantly.
- Then: *"Change the tagline to describe you."*
- Guardrails: only safe text regions are editable so nothing "breaks"; a reset button restores the original.
- **Lands:** the edit → see loop, for real, with their own name on screen.

**Cue card:** *HTML = the bones. Tags come in open/close pairs. Content lives between them.*

---

### Lesson 2.2 — The skin (CSS)

**On-screen copy:**

> CSS is the styling: colours, fonts, spacing, the whole look. The bones don't move — they just get dressed. The cleverest trick beginners love: one named colour, used everywhere, changed in one place.

(Point at the real `--color-accent` variable in `styles.css`.)

**🎮 Sandbox — Repaint the Set**
- A colour picker wired to the real `--color-accent` custom property.
- Learner picks a colour → the whole page's accents change at once. Then a font-size slider on the hero name.
- Optional "go wild" mode with a one-tap reset.
- **Lands:** style is separate from structure; one change can ripple everywhere (callback to the variable lesson, 1.1).

**Cue card:** *CSS = the skin. Change one named value, restyle the whole show.*

---

### Lesson 2.3 — The muscle (JavaScript)

**On-screen copy:**

> JavaScript is behaviour — the things that *happen*. Reacting to a click, loading data, updating the page after it's open. Remember the loop that built your project cards? That was JavaScript, doing a job after the page loaded. Bones stand still; muscle moves them.

**🎮 Sandbox — Add a Cast Member**
- Learner adds one new project by editing the real `projects.json` (guided, with comma-safety hints — the classic beginner trap, surfaced gently).
- `app.js` re-runs; a new card appears in the live preview.
- If they break the JSON (stray comma), the friendly error from `app.js` shows — *and we frame it as the next module's whole point.*
- **Lands:** data + behaviour produce what's on screen; and "breaking it" is normal and recoverable.

**Cue card:** *JS = the muscle. It reacts and updates. Data in → show out.*

---

### Lesson 2.4 — How the three work together

**On-screen copy:**

> Bones, skin, muscle — a page is all three at once. HTML lays out the cards, CSS makes them look good, JS fills them with your real projects. When you ask AI to "add a contact form" or "make the header sticky," it'll touch one, two, or all three. Knowing *which layer a request lives in* is how you tell whether the AI's answer even makes sense.

**🎮 Game — Which Layer?**
- Rapid-fire prompts: *"Make the title blue" · "Add a new menu item" · "Pop up a thank-you when the button's clicked."*
- Learner sorts each into Bones / Skin / Muscle.
- **Lands:** a mental routing table they'll reuse every time they prompt the AI — the bridge into Track B (Modules 3+).

**Cue card:** *Every change lives in a layer: bones (HTML), skin (CSS), or muscle (JS). Name the layer first.*

---

### 🎬 Module 2 Curtain Call
- **Recap:** the three layers + the edit→save→see loop, all done on their own page.
- **Mini-build:** "Make this page yours" — name, tagline, accent colour, one new project. Their scaffold now genuinely reflects them.
- **Reward:** spotlight hits centre stage. Badge: *"Set Builder."* Progress bar shows Track A nearly done, Track B (working with AI) unlocking.
- **Hook:** *"You can read the script and change the set. Next: how to direct the stagehand — and catch it when it's confidently wrong."* (→ Module 3, Prompt Lab.)

---

## How this maps to your scaffold (build notes)

Everything above is teachable on the files you already have — no new stack, no installs:

- **`index.html`** → Module 0 file tour, Module 2.1 "Change the Words" sandbox.
- **`styles.css`** (`--color-accent`) → Module 2.2 "Repaint the Set."
- **`app.js`** (`.map`, `loadProjects`) → Module 1.4 loop + 1.5 function lessons, Module 2.3 behaviour.
- **`projects.json`** → Module 1.2 lists, Module 2.3 "Add a Cast Member" + the friendly-error moment that sets up Module 5 (debugging).

The site can teach itself *using itself* — the learner's textbook and their first project are the same files. That's the strongest version of this idea.

---

## Production decisions (locked 2026-06-10)

- **AI responses are pre-scripted**, not live — zero cost, consistent, no data/privacy exposure.
- **Progress stays in-browser** via `localStorage` — no accounts in v1, resume where you left off.
- **No-build vanilla HTML/CSS/JS**, kept clean because the site is its own worked example.
- The original scaffold (Sam Rivera page) is the **demo stage**, now in `demo/`; the course lives at repo root.

### v1 additions agreed (folded into the build)

1. **Welcome / first-60-seconds screen** — expectations: no installs, ~20 min, you can't break anything, here's reset.
2. **Accessibility baseline** — keyboard-operable games, contrast, alt text, `prefers-reduced-motion`. The CSS game turns contrast into a lesson.
3. **Mobile fallback** — split-screen sandboxes stack vertically; editors become tap-to-edit fields on narrow screens.
4. **Jargon Buster** — always-available slide-out glossary.
5. **Stagehand panel** — a pre-scripted AI helper from Module 1 on, modelling good prompting *and* good reading of AI output. Threads Track B through the whole course.

### Deferred (not v1)

- Accounts, server-side progress, any analytics (keep none / strictly anonymous-local given FC data classification).
- "Where to next / which AI tools" page — **must point only to FC-approved tooling if used as internal training.** Audience to be confirmed.