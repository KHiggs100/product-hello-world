# Backstage Pass — Stage Crew Content Outline (Tier 2, Modules 7–12)

> **The tier in one line:** You've read the script and changed a line. Now you run the real tools, plan the work, and direct the stagehand across a whole scene — with save points so nothing is ever truly broken.

> **Status:** Lesson-by-lesson build outline for **Tier 2 (Stage Crew)**, in the same format as `content-outline.md`. Strategy and tier reasoning live in `next-levels-outline.md` (§3). Locked for this tier: **simulated in-browser hands-on**, **pre-scripted AI**, **internal-FC zero-experience audience**, **FC-approved tooling referenced generically until the approved list lands**. No code until you say go.

## Theme & voice (carried from Tier 1)

Same world, same **Backstage Pass** voice — smart, warm, dry, never condescending. Same motifs: **the Curtain**, **the Script**, **the Stagehand** (fast, tireless, over-confident AI), **cue cards**, **Curtain Calls**, **stage lights as progress**. The reward shelf keeps climbing; Stage Crew lights up a **second row**.

**The through-line that must not get lost:** this is still a course about *directing AI well*, not about becoming a software engineer. Every new technical idea is here because it makes the learner a better director — better at giving context, reading what comes back, spotting when it's wrong, and knowing what's above their pay grade.

**Promise of this tier:** *"Stop watching, start building scenes."* The learner moves from **reading and tweaking** to **building small, working things** and **directing the stagehand across a whole feature**.

---

# MODULE 7 — The real workspace
### Act tagline: *First day on the crew*

**Goal:** Demystify the tools professionals actually use — the editor, the file tree, what "running" code means, and a *gentle* first look at the command line as "just another way to give instructions." By the end, the learner believes the "real" environment is the same ideas they already know, with fewer training wheels.

**Why now:** Everything in Tier 1 happened inside the friendly course sandbox. Confidence comes from seeing that the real workspace is not a different planet — it's the same files (Module 0), read the same way (Module 1), changed the same way (Module 2).

**FC note (whole module):** Steer entirely toward **FC-approved tools and connectors**. Do **not** teach installing personal tooling, local servers, or anything touching FC security controls. The command line is taught *conceptually* in a simulated panel; where a real one is needed, point to the FC-approved environment only.

---

### Lesson 7.1 — The crew's workbench (the editor)

**On-screen copy:**

> A code editor looks busy, but it's just a document editor that knows it's looking at code. Three things to find and you're oriented: the **file tree** (your folder of files, down the side), the **editor** (the open file, in the middle), and the **output** (the running show, off to one side). That's the whole workbench. The rest is buttons you'll meet when you need them.

**Concept:** Editor vs. document editor; the three panes (files / editor / output); "it's the same files from Module 0, just in their natural habitat."

**🎮 Interactive — Tour the Workbench** *(reuses the Module 0 "Backstage Tour" clickable-hotspot pattern)*
- A realistic but simplified editor screenshot with clickable hotspots.
- Each hotspot flips a cue card: *"File tree — the folder of files. Same tree you toured in Module 0."*
- **Lands:** the scary-looking IDE is three familiar ideas in a trench coat.

**Cue card:** *An editor is three panes: your files, the open file, and the running show. You already know all three.*

---

### Lesson 7.2 — The project is a living folder

**On-screen copy:**

> A project isn't one file — it's a folder of them, and the editor lets you hop between them. Most of "finding your way around" is just answering one question: *"which file would this live in?"* You got the first taste of that in Module 2 — bones in the HTML file, skin in the CSS, muscle in the JS.

**Concept:** Navigating a file tree; the project-as-folder; the "where would this change live?" habit (a seed for Module 13's architecture work).

**🎮 Game — Find the File** *(reuses `bucket` / file-to-job matching)*
- Given a job — *"change the page's colours," "add a new project," "fix the words in the heading"* — the learner picks which file to open.
- Wrong picks nudge with a one-line "why not": *"That's the skin — colours live there, but the words are in the bones."*
- **Lands:** navigating is just routing a job to a file.

**Cue card:** *A project is a living folder. Finding your way around = "which file would this live in?"*

---

### Lesson 7.3 — Saving vs running

**On-screen copy:**

> Two different buttons that beginners blur together. **Saving** writes your change to the file — it's now real on disk. **Running** tells the computer to actually *do* what the file says. You can save without running (the change is stored but the show hasn't restarted) and the show won't reflect a change you never saved. Most "but I changed it!" moments are one of those two steps skipped.

**Concept:** Save = persist to file; run = execute it; the edit → save → run → see loop (the grown-up version of Module 0's edit→refresh).

**🎮 Game — What Just Happened?** *(reuses `dragOrder` + `predictOutput`)*
- The learner orders the steps of "make a change show up" (edit → save → run → see), then predicts the result of a sequence with a step *missing* — e.g. edited and ran but never saved.
- The stagehand acts it out literally (callback to Human Compiler, M0): no save → old show.
- **Lands:** save and run are two distinct actions; skipping one explains most confusion.

**Cue card:** *Save writes the change. Run makes it happen. Skip one and the show won't match your edit.*

---

### Lesson 7.4 — The command line, gently

**On-screen copy:**

> The command line is a black box with a blinking cursor, and it scares people for no good reason. It's just *another way to give instructions* — you type one line, press enter, and the computer does exactly that one thing and tells you how it went. Same literal, obedient computer from Module 0. You read its reply like a clue, not a verdict.

**Concept:** The terminal as a literal instruction-taker (hard callback to Module 0); typing a command, reading its output without fear; commands are just named actions (callback to functions, M1.5).

**🎮 Interactive — The Safe Stage Door (simulated terminal)** *(NEW mechanic: `simTerm`)*
- A fake, sandboxed command line that accepts only a short menu of safe, narrated commands (e.g. "list the files," "show me this file," "run the show").
- Each command narrates what it did and shows realistic-but-fake output; an unknown command gets the gentle real-world reply *"command not found"* — framed as normal, not failure.
- **Lands:** the terminal is approachable and literal; output is a clue to read.

**FC note:** Conceptual only. The simulated terminal never touches a real shell. Where a real command line is genuinely needed, the lesson points to the **FC-approved environment** and explicitly does **not** cover installing tools or anything that works around FC security controls.

**Cue card:** *The command line is just instructions, one line at a time. Read the reply like a clue.*

---

### 🎬 Module 7 Curtain Call
- **Recap:** the workbench (files / editor / output) · the project is a folder · save vs run · the command line is just instructions.
- **Mini-quiz (3 Q, no fail state):** "Which pane shows the running show?" · "You changed a file but the show looks the same — what did you probably skip?"
- **Reward:** first light of the **second row** glows. Badge: *"Crew Badge — Issued."*
- **Hook:** *"You know the workbench. Before you start moving things around, let's give you a safety net you can't break."*

---

# MODULE 8 — Save points
### Act tagline: *Undo for grown-ups*

**Goal:** Teach version control as "undo for grown-ups and a history of the show" — the single biggest confidence-booster when working with an AI that changes lots of files at once. By the end, the learner trusts that they can always roll back.

**Why now:** Before we let the learner (and the stagehand) make bigger changes, they need to *know* they can undo anything. This safety net is what unlocks braver experimentation in every later module.

**FC note (whole module):** Concept-level teaching is fine for everyone. Any hands-on uses **FC-approved version-control tooling only** — no setup of personal accounts or tools that bypass FC controls.

---

### Lesson 8.1 — Rehearsal photos (commits)

**On-screen copy:**

> Imagine taking a photo of the whole stage every time a scene is set just right. Later, if a change ruins everything, you can put the stage back exactly how the photo looked. That's a **save point** — a snapshot of every file at one moment, with a short note saying what changed. Take them often. They're free, and they're your undo button with a memory.

**Concept:** Commits as "rehearsal photos" — a labelled snapshot of the whole project; the commit message as the note-to-future-you.

**🎮 Game — Caption the Take** *(reuses `choose` + `fillGap`)*
- The learner is shown a small change and picks (or fills in) the best short save-point note — *"Added contact button"* beats *"stuff"* or *"asdf"*.
- **Lands:** good notes make history readable; the habit matters more than the wording.

**Cue card:** *A save point is a photo of every file at one moment. Take them often; note what changed.*

---

### Lesson 8.2 — Walking the timeline (history & rollback)

**On-screen copy:**

> All those photos line up into a **timeline** you can walk back along. Made a mess in the last ten minutes? Step back to the last good photo and the whole stage resets to that moment. Nothing is ever truly broken if you've been taking pictures. This is *the* reason crews experiment fearlessly.

**Concept:** History as a walkable timeline; rolling back to a known-good save point; "broken" is temporary when you have history.

**🎮 Interactive — Roll Back the Take** *(NEW mechanic: `timeline` scrubber)*
- The stagehand makes a confident change that visibly breaks the scene.
- The learner scrubs the timeline back to a good save point and watches the stage snap back to working — feeling the net catch them.
- **Lands:** the safety net is real and reachable; courage is now justified.

**Cue card:** *History is a timeline of save points. When it breaks, walk back to the last good one.*

---

### Lesson 8.3 — Alternate takes (branches)

**On-screen copy:**

> Sometimes you want to *try* something risky without touching the show that works. A **branch** is an alternate take — a parallel copy where you can experiment freely. Love it? Fold it back into the main show. Hate it? Throw the whole take away and the main show never knew. This is how teams try ten ideas without ten disasters.

**Concept:** Branches as "alternate takes"; experiment in isolation; keep or discard without risking the main show.

**🎮 Game — Which Take Goes Live?** *(reuses `branchChat` / `choose`)*
- A short branching scenario: the learner decides when to spin up an alternate take, and whether a finished experiment should be folded in or thrown away.
- **Lands:** branches make risky ideas cheap and safe.

**Cue card:** *A branch is an alternate take. Try freely; keep the good ones, bin the rest — the main show is safe.*

---

### Lesson 8.4 — Why this matters double with AI

**On-screen copy:**

> Here's the payoff for *this* course. When you ask the stagehand for something big, it might change ten files in one go — too much to eyeball line by line. A save point taken *before* you ask means you can let it run, review the whole batch as one set, and undo all of it with one move if it went sideways. Save points turn "I'm scared to let the AI loose" into "go on then, I can always roll back."

**Concept:** Commit before a big AI change; review the batch as a unit; one-move revert of an AI's whole change set (bridge into Module 11's review-the-scene work).

**🎮 Game — Net First, Then Leap** *(reuses `judgeClaim` / `dragOrder`)*
- The learner orders the safe workflow (save point → ask the stagehand → review the batch → keep or roll back) and judges claims like *"I'll just remember what it changed."*
- **Lands:** the save-point-before-AI habit is the spine of fearless AI direction.

**Cue card:** *Save first, then let the stagehand loose. Review the whole batch; roll it all back if needed.*

---

### 🎬 Module 8 Curtain Call
- **Recap:** save points are photos · history is a walkable timeline · branches are alternate takes · save before you let AI loose.
- **Mini-quiz (3 Q, no fail state):** "The AI changed eight files and broke the page — what saves you?" · "What's a branch for?"
- **Reward:** second-row lights climb. Badge: *"Net Holder."*
- **Hook:** *"You've got a net. Now let's build something that actually does something — a show that reacts."*

---

# MODULE 9 — Data and state
### Act tagline: *Things that change*

**Goal:** Move from fixed values to data that *changes over time* — input from a person, the page reacting, remembering something. This is the conceptual heart of *building* rather than *decorating*.

**Why now:** Every interesting app is "something changes and the screen responds." With the net in place (M8), the learner can safely wire up their first reacting thing.

---

### Lesson 9.1 — Getting something from a person (input)

**On-screen copy:**

> So far the show has said the same thing to everyone. Real apps *listen*: a text box, a dropdown, a button. **Input** is anything a person hands the app. The moment you accept input, your page stops being a poster and starts being a conversation.

**Concept:** Input via forms/fields; capturing what a person types or picks; input is the start of every interactive feature.

**🎮 Sandbox — Open the Box Office** *(reuses Module 2 `srcdoc` live-preview sandbox)*
- A tiny form in the live preview; the learner adds a field and labels it, watching the real input box appear.
- **Lands:** inputs are easy to add and are where "interactive" begins.

**Cue card:** *Input is whatever a person hands the app. Accept input and the page becomes a conversation.*

---

### Lesson 9.2 — What's true right now (state)

**On-screen copy:**

> **State** is just "what's true at this moment" — is the user logged in, what did they type, which tab is open. Think of it as the set of labelled boxes (Module 1) the show checks before deciding what to display. Change the boxes, and what's on screen should change to match.

**Concept:** State as "what's true right now"; built from variables (callback M1.1); the screen is a reflection of state.

**🎮 Game — Read the State, Predict the Scene** *(reuses `predictOutput`)*
- Given a little state snapshot (*"loggedIn = false, cartItems = 0"*), the learner predicts what the page shows.
- **Lands:** what you see is a readout of the current state.

**Cue card:** *State is what's true right now. The screen is just state, made visible.*

---

### Lesson 9.3 — The page reacts (re-rendering on change)

**On-screen copy:**

> Here's the trick that makes apps feel alive: when the state changes, the page **re-reads it and updates itself**. Type in a box → state changes → the relevant bit of screen redraws. You don't repaint the whole stage; the show just keeps itself in sync with what's true.

**Concept:** State change → re-render; the live link between data and display (the grown-up version of Module 1.2's "change the list, change the screen").

**🎮 Interactive — Wire Up the Box Office** *(reuses Module 2 `srcdoc` sandbox, now two-way)*
- A form where typing in the field updates a live preview on the spot (e.g. a "your ticket" card that fills in as they type).
- **Lands:** input → state → reaction, felt directly. This is "building," not "decorating."

**Cue card:** *Change the state, the page redraws to match. Input in → show out.*

---

### Lesson 9.4 — Where data lives (memory vs. saved)

**On-screen copy:**

> One more distinction that explains a *lot* of confusion. Some data lives in **memory** — it's there while the page is open and gone the moment you refresh. Other data is **saved** somewhere lasting, so it's still there when you come back tomorrow. "Why did my list disappear when I reloaded?" almost always means it lived in memory and was never saved.

**Concept:** In-memory (ephemeral) vs. persisted (survives a visit); a first plain-English look at storing data between visits.

**🎮 Game — Survives the Refresh?** *(reuses `bucket`)*
- The learner sorts scenarios into "still here after a refresh" vs. "gone" — and learns which kind of storage each needs.
- **Lands:** persistence is a deliberate choice, not automatic.

**FC note:** When the topic of *where* data is saved comes up, plant the seed early: at FC, **where data lives and how it's classified matters** — never store or send customer data, PII, or proprietary code anywhere unapproved. Full treatment lands in Tier 3 (Modules 14 & 16) and the **AI Policy** (https://app.hibob.com/docs/company-docs/preview/637693); here it's a one-line flag, not a lecture.

**Cue card:** *In memory = gone on refresh. Saved = still there tomorrow. Choosing which is on you.*

---

### 🎬 Module 9 Curtain Call
- **Recap:** input is what a person hands you · state is what's true now · change state → page reacts · memory vs. saved.
- **Mini-build:** extend the box office — add one field, wire it to the live preview, and note whether it should survive a refresh.
- **Reward:** second-row lights climb. Badge: *"Live Wire."*
- **Hook:** *"You can make a thing that reacts. But before you ask the stagehand to build a whole feature — you need a plan."*

---

# MODULE 10 — Thinking in steps
### Act tagline: *Write the run sheet*

**Goal:** Teach the learner to break a goal into ordered steps *before* prompting — the skill that separates a good AI director from someone who throws a vague wish at the stagehand and hopes.

**Why now:** This is the hinge of the whole tier. Better step-thinking → better prompts → better, more reviewable AI output. It pays off in every remaining module, and directly sets up Module 11.

---

### Lesson 10.1 — Big goal → small steps (decomposition)

**On-screen copy:**

> "Build a sign-up form" is not a step — it's a wish. The skill is breaking the wish into small, ordered, obvious steps: show the fields, check they're filled in, save the answer, say thanks. Each step is something you could hand to someone (or something) literal and get a sensible result. Big goals are just small steps in a trench coat.

**Concept:** Decomposition — turning one big goal into ordered small steps; each step concrete enough to be unambiguous.

**🎮 Game — Break Down the Wish** *(reuses `dragOrder`)*
- A vague goal at the top; the learner assembles and orders the small steps from a pool (with a couple of distractors that are still wishes, not steps).
- **Lands:** decomposition is a learnable move, and steps ≠ wishes.

**Cue card:** *A goal isn't a step. Break the wish into small, ordered, obvious steps first.*

---

### Lesson 10.2 — Plans in plain English (pseudocode)

**On-screen copy:**

> You don't need code to plan code. A plain-English plan — "when the button is clicked, *if* the box is empty, show a warning; *otherwise* save it and say thanks" — is called **pseudocode**, and it's how pros think before they type. Notice it's just the five blocks from Module 1 (boxes, lists, ifs, loops, actions) written in words.

**Concept:** Pseudocode as plain-English planning; mapping plans onto the five blocks (callback M1); plan before prompt.

**🎮 Game — Finish the Plan** *(reuses `fillGap`)*
- A half-written plain-English plan with gaps; the learner fills the missing steps/branches from options.
- **Lands:** planning is writing, not coding — and they can already do it.

**Cue card:** *Pseudocode is a plan in plain English. It's just the five blocks, written as words.*

---

### Lesson 10.3 — What if it's empty, wrong, or missing? (edge cases)

**On-screen copy:**

> The difference between a plan that works in the demo and one that works in real life is the boring questions: *what if the box is empty? what if they type nonsense? what if the data isn't there?* These are **edge cases**, and the stagehand will cheerfully ignore every one you didn't mention. Naming them up front is half of good directing.

**Concept:** Edge cases — empty / invalid / missing inputs; the AI handles only what you specify; anticipating failure is a planning skill.

**🎮 Game — Spot the Gap** *(reuses `spotFake` / `choose`)*
- A tidy-looking plan is shown; the learner spots the unhandled edge case (the empty field, the missing data) the plan forgot.
- **Lands:** robust plans name the awkward cases; that's what you'll later check the AI's work against.

**Cue card:** *Name the edge cases — empty, wrong, missing — or the stagehand will ignore them.*

---

### Lesson 10.4 — From plan to behaviour (combining the blocks)

**On-screen copy:**

> Now put it together: a real little feature is just your ordered steps, with the five blocks doing the work and the edge cases handled. The clearer your run sheet, the more literally the stagehand can follow it — and the easier its work is to check. Vague run sheet, vague show.

**Concept:** Combining decomposition + pseudocode + edge cases into a runnable plan; clarity of plan = quality and reviewability of result (direct bridge to M11).

**🎮 Interactive — Write the Run Sheet** *(extends Module 0 `Human Compiler` + `branchChat`)*
- The learner orders/edits the steps of a small feature, *then* watches the stagehand follow their plan literally.
- A vague or gap-ridden run sheet produces a literal, funny failure (callback to the jam-sandwich gag); a clear one produces a working scene.
- **Lands:** the run sheet *is* the lever — this is the whole tier's hinge made tangible.

**Cue card:** *Clear run sheet → clear show. The stagehand follows your plan literally, gaps and all.*

---

### 🎬 Module 10 Curtain Call
- **Recap:** decompose the wish · plan in plain English · name the edge cases · clear plan = checkable result.
- **Mini-build:** write a complete run sheet for a small feature and watch the stagehand execute it.
- **Reward:** second-row lights climb. Badge: *"Run Sheet Writer."*
- **Hook:** *"You can plan a feature. Now let's hand the run sheet to the stagehand — and direct it across the whole scene."*

---

# MODULE 11 — Directing a whole scene
### Act tagline: *Direct the whole scene*

**Goal:** Level up prompting from Module 3's single requests to **multi-step collaboration**: giving the AI context, iterating, reviewing changes across several files, and keeping it on task.

**Why now:** The learner can now plan (M10), has a safety net (M8), and understands changing data (M9) — so they're finally ready to run the stagehand through a real, multi-part build.

---

### Lesson 11.1 — Give the stagehand its context

**On-screen copy:**

> The stagehand is brilliant and amnesiac: it only knows what you put in front of it. Hand it your run sheet, the files it should touch, and what "done" looks like, and you get something usable. Hand it *"make it better"* and you get a confident guess. Context isn't politeness — it's the difference between direction and a coin flip.

**Concept:** Giving useful, specific context (the plan, the relevant files, the definition of done); context as the lever for quality (extends Module 3 prompting).

**🎮 Game — Load the Context** *(extends existing `promptLab` / `buildPrompt`)*
- The learner assembles a strong opening brief for a feature from a pool of context pieces, leaving out the noise; a weak brief gets a visibly vaguer stagehand reply.
- **Lands:** more (relevant) context in → better, more reviewable work out.

**FC note:** Reinforce here — **never paste PII, customer data, or proprietary code** into a prompt as "context" unless it's a genuine requirement of your role and in line with FC's data classification policy and the **AI Policy** (https://app.hibob.com/docs/company-docs/preview/637693). Use FC-approved tools/connectors only.

**Cue card:** *The stagehand only knows what you show it. Brief it: plan, files, and what "done" means.*

---

### Lesson 11.2 — "Almost — change this one thing" (iterating)

**On-screen copy:**

> The first take is rarely the final take, and that's fine. Good directing is small, specific corrections: *"close, but make the button say 'Join', not 'Submit', and keep everything else."* Vague follow-ups ("nah, different") make the stagehand throw away good work and guess again. Steer in small steps and keep what already works.

**Concept:** Iteration as small, specific corrections; preserving what's good; avoiding the "start over" thrash.

**🎮 Game — Steer the Take** *(reuses `branchChat`)*
- A multi-turn exchange where the learner picks follow-up notes; specific ones converge on the goal, vague ones send the stagehand in circles.
- **Lands:** precise iteration beats vague dissatisfaction.

**Cue card:** *Iterate in small, specific notes. "Change this one thing, keep the rest" beats "do it differently."*

---

### Lesson 11.3 — Review the whole set, not one line

**On-screen copy:**

> When the stagehand changes five files, your job shifts from "read a line" to "review a *set*." Skim what changed across all of it: did it do what you asked, did it touch things it shouldn't have, does each part make sense? You don't need to understand every character — you need to catch the bits that are wrong, missing, or sneakily out of scope.

**Concept:** Reviewing a change set across multiple files; "did it do what I asked / touch what it shouldn't / make sense?"; reviewing breadth over depth (builds on M8.4's batch review, sets up Tier 3's M15).

**🎮 Game — Review the Set** *(NEW mechanic: `reviewDiff` — a simplified, beginner-friendly multi-file change view)*
- The stagehand's change set is shown across a couple of files; the learner flags which changes are wanted, which are unexpected, and which are out of scope, before approving.
- **Lands:** AI output is reviewed as a whole, with a director's eye, not blindly accepted.

**Cue card:** *Review the whole set: did it do what I asked, touch what it shouldn't, and make sense?*

---

### Lesson 11.4 — "Stop — not like that" (scope and control)

**On-screen copy:**

> The stagehand loves to be helpful, which means it'll happily rebuild the whole set when you asked for a new button. Part of directing is confidently saying *"stop — that's more than I asked for, undo it and just do the one thing."* You're in charge of scope. With your save point from Module 8, saying no costs you nothing.

**Concept:** Spotting scope creep; halting and re-scoping confidently; the director owns scope (and the save point makes "no" cheap).

**🎮 Interactive — Direct the Whole Scene** *(extends "Direct the Scene" `branchChat`, longer & branching)*
- A longer director-and-stagehand exchange building a small feature; the learner's choices — brief, iterate, review, halt scope creep — steer it to a finished scene or into a ditch, with a replayable path back.
- **Lands:** the full loop of directing AI across a feature, choices and consequences felt.

**Cue card:** *You own the scope. "Stop, just the one thing" is a complete and correct instruction.*

---

### 🎬 Module 11 Curtain Call
- **Recap:** brief with context · iterate in small notes · review the whole set · own the scope.
- **Mini-build:** direct the stagehand through a two-or-three-step feature, reviewing the change set before accepting.
- **Reward:** second-row lights climb. Badge: *"Scene Director."*
- **Hook:** *"You can direct a whole scene. But bigger scenes break in bigger ways — let's learn to fix it when it does."*

---

# MODULE 12 — When it really breaks
### Act tagline: *Opening-night jitters*

**Goal:** Go beyond Tier 1 debugging (Module 5) to reading **actual error messages and a browser console**, and using AI as a debugging *partner* rather than an oracle. Closes the build → break → diagnose → fix loop.

**Why now:** Bigger builds break in bigger ways. This is where the learner stops fearing the red text and starts reading it.

---

### Lesson 12.1 — The error is a clue, not a scolding

**On-screen copy:**

> Red error text feels like the computer telling you off. It isn't — it's the computer *helping*, in its blunt literal way. An error usually says **what** went wrong and **where**. Read it like the opening line of a mystery, not a verdict on your worth. Most of debugging is just reading the clue you were already handed.

**Concept:** Reframing errors as clues; the two things most errors tell you (what + where); reading without panic (matures Module 5).

**🎮 Game — Decode the Clue** *(reuses `choose` / matching)*
- Real-looking error messages; the learner matches each to plain English — *"this one says it can't find something called `total`"* — and points at the "where."
- **Lands:** errors are readable, useful, and on your side.

**Cue card:** *An error is a clue, not a scolding. It tells you what broke and roughly where.*

---

### Lesson 12.2 — The console (reading the show's diary)

**On-screen copy:**

> Browsers keep a running diary called the **console** — messages, warnings, and errors the show jots down as it runs. Opening it is like turning on the lights backstage: suddenly you can see what the show was complaining about all along. You don't have to understand every line; you're scanning for the red bits and what they point to.

**Concept:** What the console is and how to read it; errors/warnings/logs; scanning for the relevant line.

**🎮 Interactive — Open the Console** *(NEW mechanic: `simConsole` — a safe, simulated console panel)*
- A simulated console attached to a small running scene; the learner opens it, finds the error among the chatter, and reads what it points to.
- **Lands:** the console is a readable diary, not a wall of noise.

**Cue card:** *The console is the show's diary. Open it, scan for the red, read where it points.*

---

### Lesson 12.3 — Describe the bug well enough for help

**On-screen copy:**

> "It's broken" is not a bug report — it's a sigh. To get real help (from a colleague *or* the stagehand), say three things: what you expected, what actually happened, and the exact error. A good description often solves the bug on its own, because writing it forces you to look. This is Module 10's "be specific" wearing a detective's coat.

**Concept:** A good bug report = expected vs. actual vs. exact error; specificity unlocks help; describing-to-understand (extends prompting, M3/M11).

**🎮 Game — File the Bug Report** *(extends `promptLab` / `buildPrompt`)*
- The learner builds a strong bug report from pieces; a vague report gets a vague stagehand guess, a precise one gets a targeted fix.
- **Lands:** how you describe a bug determines how useful the help is.

**Cue card:** *A bug report is three things: expected, actual, and the exact error. Vague in, vague out.*

---

### Lesson 12.4 — Verify the fix (and that nothing else broke)

**On-screen copy:**

> The stagehand says "fixed!" with total confidence — same confidence it had when it broke it. So you check: does the original problem go away, *and* does everything that worked before still work? "Confident ≠ correct" (Module 4) never retires; it just gets a bigger stage. A fix isn't done until you've watched it work.

**Concept:** Verifying a fix; regression-awareness ("did the fix break something else?"); the AI's confidence is not proof (callback Module 4).

**🎮 Interactive — Opening-Night Jitters** *(extends `fixIt` + `spotBug` + the new `simConsole`)*
- A scene with a planted bug and a real-looking error in the console; the learner forms a hypothesis *before* asking the stagehand, applies a fix, then verifies both that the bug is gone and that nothing else broke.
- **Lands:** the full real-debugging loop — read, hypothesise, ask, fix, verify — with the learner judging, not worshipping.

**Cue card:** *"Fixed!" isn't proof. Check the bug's gone and nothing else broke. Confident ≠ correct.*

---

### 🎬 Module 12 Curtain Call
- **Recap:** errors are clues · the console is the diary · describe bugs specifically · always verify the fix.
- **Mini-quiz / mini-fix (no fail state):** read one error, point at the cause, write the one-line bug report.
- **Reward:** second-row lights climb. Badge: *"Troubleshooter II."*
- **Hook:** *"Build → break → fix, all yours now. Time to put it together and stage a whole thing."*

---

# 🎬 STAGE CREW CAPSTONE — *Stage your scene*

**Build:** A small but genuinely working thing — e.g. an **interactive list / tracker** (add items, see them appear, persist or reset) — carried end-to-end:
1. **Plan it** — write the run sheet (M10): steps, the five blocks, edge cases.
2. **Set a save point** (M8) before letting the stagehand build.
3. **Direct the build** (M11) — brief with context, iterate in small notes, review the change set.
4. **Wire the reactivity** (M9) — input → state → the screen updates.
5. **Break it and fix it** (M12) — a deliberate planted snag; read the console, file the report, verify the fix.
6. **Roll back once** (M8) on purpose, just to feel the net hold.

All hands-on stays in the **simulated in-browser workspace**; the stagehand stays **pre-scripted**.

- **Reward:** **"Stage Crew"** badge; the second row of stage lights completes.
- **FC note:** The capstone reiterates the FC line wherever it touches tools, data, or AI prompts — **FC-approved tools/connectors only; never paste PII, customer data, or proprietary code; never work around FC security controls.** Anchored to the **AI Policy** (https://app.hibob.com/docs/company-docs/preview/637693).
- **Hook to Tier 3 (Show Runner):** *"You can stage a scene. Next: run the whole production — structure, quality, safety, shipping — and learn where your job ends and an engineer's begins."*

---

## How this maps to the build (notes)

Everything above fits the locked constraints — **no-build vanilla HTML/CSS/JS, pre-scripted AI, in-browser progress, static hosting** (incl. the Google Apps Script copy) — and the simulated-hands-on decision for this tier.

**Reuses the existing `GAMES` registry** (low build cost): `dragOrder`, `bucket`, `choose`, `fillGap`, `spotFake`, `spotBug`, `predictOutput`, `judgeClaim`, `branchChat`, plus the Module 2 `srcdoc` live-preview sandbox, the Module 0 clickable-tour pattern, and the `promptLab` / `buildPrompt` / `fixIt` games (extended, not rebuilt).

**New mechanics this tier needs** (flagged for build estimation — all simulated, all pre-scripted):
- `simTerm` — a sandboxed, menu-driven fake terminal (Lesson 7.4).
- `timeline` — a save-point history scrubber with snap-back (Lesson 8.2; reused in capstone).
- `reviewDiff` — a beginner-friendly multi-file change view for reviewing AI output (Lesson 11.3; reused in capstone).
- `simConsole` — a safe simulated browser console (Lessons 12.2 & 12.4).

Each new mechanic should follow the existing rules learned in Tier 1: **click + keyboard fallbacks**, **completes on first meaningful action**, and **clearly signposts the Next button** (the 1.1 "no next button" dead-end lesson).

**Progress model:** Stage Crew occupies the **second row of stage lights**; Modules 7–12 each light their segment, capstone completes the row and unlocks the **"Stage Crew"** badge on the shelf.

---

## Carry-forward production decisions (Tier 2)

- **AI responses stay pre-scripted** — zero cost, consistent, no data/privacy exposure. (Revisit only if an FC-approved, data-classification-safe live option appears.)
- **Hands-on stays simulated in-browser** — policy-clean, consistent, fits no-build/static; no collision with FC security controls.
- **Internal-FC, zero-experience audience** throughout; depth tuned to "better AI director," not "professional engineer."
- **FC-approved tooling referenced generically** (`FC-approved tools`) until the approved list lands — needed to finalise Modules 7, and (in Tier 3) 14 & 16. **Still outstanding from you.**
- **No accounts, no analytics, in-browser progress** via `localStorage`, same as Tier 1.

## Still needed from you before building Tier 2

1. **The FC-approved tool list** — to make Module 7's tooling references concrete (currently generic).
2. **Confirm the capstone artefact** — interactive list/tracker as proposed, or a different small build you'd prefer.
3. **Then say go** — and I'll build Stage Crew into `course/` (and regenerate the Apps Script copy) the same way as Tier 1. No code until then.
