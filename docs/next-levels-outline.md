# Backstage Pass — Next Levels (Curriculum Roadmap)

> **Status:** Design document. No code. This is the strategic shape of the course *after* the existing Beginner tier — the tiers, modules, and ordering rationale.
>
> **Tier 2 detail:** the full lesson-by-lesson outline for **Stage Crew (Modules 7–12 + capstone)** now lives in `stage-crew-outline.md`, in the same format as `content-outline.md`. Decisions locked for it: simulated in-browser hands-on, pre-scripted AI, internal-FC audience, FC-approved tooling referenced generically until the list lands. Tier 3 (Show Runner) remains at the high-level shape below.

---

## 1. Where we are, and what this document is

The course built so far (the seven Backstage Pass modules, 0–6) is now the **Beginner tier**. It takes someone with zero coding experience and makes them *code-literate*: they can read a snippet and name the parts, make a first guided edit, prompt an AI, judge whether its confident answer is actually correct, do basic debugging, and stay on the right side of FC's AI policy.

That tier deliberately stops short of one thing: the learner has **read** the script and **changed** a line or two, but they haven't yet **built** anything from a blank page, used the real tools, or carried a whole feature from idea to working result. That's exactly the gap the next levels fill.

The Beginner promise was *"the magic stops being magic."* The next levels' promise is *"and now you can make the show yourself — with the stagehand doing the lifting and you genuinely in charge."*

This document proposes **two further tiers** and the modules inside them, with the reasoning for the ordering. It is intentionally curriculum-first; implementation/tech decisions are flagged but not made (see §6).

---

## 2. The three-tier arc (and why the metaphor still works)

The existing theme already casts the learner as **the director** and the AI as a fast, over-confident **stagehand**. That arc extends naturally into "more responsibility, bigger show":

| Tier | Name | One-line promise | The learner is… |
|------|------|------------------|-----------------|
| 1 (built) | **Backstage Pass** | "The magic stops being magic." | A pass-holder who can read the script and catch bum notes. |
| 2 (proposed) | **Stage Crew** | "Stop watching, start building scenes." | Crew who run the real tools and stage whole scenes with the stagehand. |
| 3 (proposed) | **Show Runner** | "Run the whole production — and know when to call a professional." | The show runner: structure, quality, safety, shipping. |

Same world, same voice (smart, warm, dry, never condescending), same recurring motifs (the Curtain, the Script, the Stagehand, cue cards, Curtain Calls, stage lights as progress). The reward shelf and badges just keep climbing.

**The through-line that must not get lost:** this is still a course about *working with AI well*, not about becoming a professional software engineer. Every new technical concept is taught because it makes the learner a **better director of AI** — better at giving context, reading what comes back, spotting when it's wrong, and knowing when something is above their pay grade and needs a real engineer. We teach "real coding" only to the depth that buys better judgement.

---

## 3. TIER 2 — "Stage Crew" (Intermediate)

**Tier goal:** Move from *reading and tweaking* to *building small, working things* — and from prompting single snippets to **directing the stagehand across a whole feature**, with save points so nothing is ever truly broken.

**Why this tier comes next:** The Beginner tier gave the dopamine hit of "I changed it and the show changed." The natural next hunger is "could I make a *new* thing, not just edit the existing one?" To do that safely and confidently, the learner needs three things they don't yet have: the real workspace, a safety net (version control), and the mental habit of breaking a job into steps before handing it to AI.

### Module 7 — The real workspace
- **Goal:** Demystify the tools professionals actually use — the editor, the file tree, what "running" code means, and a *gentle* first look at a terminal/command line as "just another way to give instructions."
- **Why now:** Everything so far happened inside the friendly course sandbox. Confidence comes from seeing that the "real" environment is the same ideas with fewer training wheels.
- **Concepts:** code editor vs. document editor; the project as a living folder; saving vs. running; the command line as a literal instruction-taker (callback to Module 0); reading a command's output without fear.
- **Interaction idea:** *"First day on the crew"* — a guided tour of a realistic editor layout with a simulated, safe command line that only accepts a short menu of commands and narrates what each one does.
- **FC note:** Steer entirely toward **FC-approved tools and connectors**. Do **not** teach installing personal tooling, local servers, or anything that touches FC security controls. Frame the terminal conceptually; where a real one is needed, point to the approved environment.

### Module 8 — Save points (version control, gently)
- **Goal:** Teach version control as "undo for grown-ups and a history of the show" — the single biggest confidence-booster when working with an AI that changes lots of files at once.
- **Why now:** Before we let the learner (and the stagehand) make bigger changes, they need to know they can always roll back. This *unlocks* braver experimentation in every later module.
- **Concepts:** save points/commits as "rehearsal photos"; history as a timeline you can walk back along; branches as "alternate takes" you can try without risking the main show; why this matters double when AI edits many files in one go.
- **Interaction idea:** *"Roll back the take"* — the stagehand makes a confident change that breaks the scene; the learner walks the history back to a good save point and feels the safety net catch them.
- **FC note:** Concept-level is fine for everyone; any hands-on uses FC-approved version-control tooling only.

### Module 9 — Data and state (things that change)
- **Goal:** Move from fixed values to data that *changes over time* — input from a person, the page reacting, remembering something.
- **Why now:** Every interesting app is "something changes and the screen responds." This is the conceptual heart of building rather than decorating.
- **Concepts:** input (forms/fields); state ("what's true right now"); the page re-reacting when state changes; where data lives (in memory vs. saved); a first, plain-English look at storing data between visits.
- **Interaction idea:** *"Wire up the box office"* — a small form where typing updates the live preview, building directly on the variables/lists lessons from Module 1.

### Module 10 — Thinking in steps (computational thinking)
- **Goal:** Teach the learner to break a goal into ordered steps *before* prompting — the skill that separates a good AI director from someone who throws a vague wish at the stagehand and hopes.
- **Why now:** This is the hinge of the whole intermediate tier. Better step-thinking → better prompts → better, more reviewable AI output. It pays off in every remaining module.
- **Concepts:** decomposition (big goal → small steps); pseudocode/plain-English plans; sequencing and edge cases ("what if it's empty / wrong / missing?"); combining the five blocks from Module 1 into real behaviour.
- **Interaction idea:** *"Write the run sheet"* — the learner orders/edits the steps of a small feature, *then* sees the stagehand follow their plan; vague plans produce literal, funny failures (callback to the Module 0 jam-sandwich gag).

### Module 11 — Directing a whole scene (AI across a feature)
- **Goal:** Level up prompting from Module 3's single requests to **multi-step collaboration**: giving the AI context, iterating, reviewing changes across several files, and keeping it on task.
- **Why now:** The learner can now plan (M10), has a safety net (M8), and understands changing data (M9) — so they're finally ready to run the stagehand through a real, multi-part build.
- **Concepts:** giving useful context; iterating ("almost — change this one thing"); reviewing a set of changes rather than a single line; spotting scope creep and confidently saying "stop, not like that."
- **Interaction idea:** *"Direct the whole scene"* — a longer, branching director-and-stagehand exchange (extends the existing "Direct the Scene" game) where the learner's choices steer a small feature to completion or into a ditch.

### Module 12 — When it really breaks (debugging for real)
- **Goal:** Go beyond Beginner debugging to reading **actual error messages and the browser console**, and using AI as a debugging *partner* rather than an oracle.
- **Why now:** Bigger builds break in bigger ways. This closes the intermediate loop: build → break → diagnose → fix, with the AI helping but the learner judging.
- **Concepts:** reading an error message as a clue, not a scolding; locating *where* it broke; describing a bug well enough for AI to help; verifying a fix actually fixed it (and didn't break something else).
- **Interaction idea:** *"Opening-night jitters"* — a scene with a planted bug, a real-looking error, and a console to read; the learner forms a hypothesis before asking the stagehand.

### 🎬 Stage Crew Capstone
- **Build:** A small but genuinely working thing (e.g. an interactive list/tracker) carried from a plan, through AI-assisted building, save points, and a deliberate break-and-fix.
- **Reward:** "Stage Crew" badge; the progress lights extend into a second row.
- **Hook to Tier 3:** *"You can stage a scene. Next: run the whole production — and learn where your job ends and an engineer's begins."*

---

## 4. TIER 3 — "Show Runner" (Advanced)

**Tier goal:** Understand how real software fits together and how teams ship it, so the learner can **lead AI on bigger work responsibly** — and, crucially, recognise the edges of their competence and escalate to a professional when needed.

**Why this tier comes last:** These are judgement-and-context skills. They only make sense once the learner has actually built something (Tier 2). The emphasis shifts from "can I make it work?" to "is this *good*, *safe*, and *shippable* — and is it even my call?"

### Module 13 — How shows are organised (structure & architecture)
- **Goal:** Read and reason about a *bigger* codebase — why code is split into parts, separation of concerns, and how to find your way around something you didn't write.
- **Concepts:** structure as stage management; separation of concerns (callback to bones/skin/muscle); reading an unfamiliar codebase top-down; "where would this change live?"

### Module 14 — Talking to the outside world (data & services)
- **Goal:** A literacy-level understanding of APIs and stored data — what a request and response are, what JSON looks like in the wild, and the idea of a database.
- **Concepts:** request/response; APIs as "ordering from another department"; JSON as the shared script format; data living somewhere persistent.
- **FC note:** Use **FC-approved connectors only**. Reinforce data classification — never send sensitive/proprietary data or PII to unapproved services. This is where the API conversation and the AI-policy conversation meet.

### Module 15 — Is it any good? (quality, testing & review)
- **Goal:** Introduce testing and code review as first-class skills — *especially* for reviewing what AI produces.
- **Concepts:** what a test is and why; "does it still work after I changed it?"; code review as a skill (human and AI output alike); readability and maintainability as real value, not vanity.
- **Through-line:** this is the natural senior version of the Beginner tier's "confident ≠ correct."

### Module 16 — Doing no harm (security & data responsibility)
- **Goal:** Go deeper than Module 6 on security and data responsibility, at a literacy level — the highest-leverage knowledge for a non-engineer working with AI inside a regulated firm.
- **Concepts:** secrets and why they never go in code or prompts; common classes of vulnerability explained plainly; supply-chain/"don't trust a random dependency" awareness; the cost of a leak.
- **FC note:** This is the keystone module for FC. Anchor it hard to **FC's AI Policy** (https://app.hibob.com/docs/company-docs/preview/637693) and **FC AI training**, data classification, and the firm's approved-tooling rules. Reiterate: never paste PII, customer data, or proprietary code into unapproved tools; never work around FC security controls. As a financial-services firm, the bar here is non-negotiable.

### Module 17 — Opening night (shipping & working with a team)
- **Goal:** Demystify how software actually reaches users and how the learner fits alongside professional engineers.
- **Concepts:** pull requests and review; environments (test vs. live); what "deploying" means; how to collaborate with and hand off to engineers; speaking enough of the language to be a great partner.

### Module 18 — The Show Runner's judgement (leading AI responsibly)
- **Goal:** The capstone of the *whole* course: knowing when to trust AI, when to verify, and **when to stop and bring in a human expert**.
- **Concepts:** AI's real limits; high-stakes vs. low-stakes changes; governance and accountability ("the director is responsible for the show, not the stagehand"); building a personal rule-of-thumb for "is this mine to ship?"
- **Interaction idea:** *"The Show Runner's call"* — escalating scenarios where the right answer is sometimes "do it," sometimes "verify first," and sometimes "this needs a real engineer / this breaks policy — stop."

### 🎬 Show Runner Finale
- A reflective capstone rather than a big build: the learner reviews an AI-produced change end-to-end (structure, quality, security, shippability) and makes the call. Final badge: **"Show Runner."** Grand finale callback to the existing confetti finish.

---

## 5. Learning-progression rationale (the short version)

1. **Read → Edit → Build → Lead.** Tier 1 read and edited; Tier 2 builds; Tier 3 leads. Each tier is useless without the one before it.
2. **Safety nets precede bravery.** Version control (M8) is taught *before* bigger builds so experimentation is genuinely consequence-free.
3. **Planning precedes prompting at scale.** Step-thinking (M10) is placed before whole-feature AI direction (M11) on purpose — vague plans are the root cause of bad AI output.
4. **Judgement is the spine, not a topping.** "Confident ≠ correct" starts in Tier 1 and matures into review (M15), security (M16) and escalation (M18). The course is ultimately about responsible AI direction, and the technical depth serves that.
5. **FC reality is baked in, not bolted on.** Tooling, connectors, data classification and the AI policy appear wherever the relevant technical topic does, not just in one compliance module.

---

## 6. Decisions I need from you (before any building)

The Beginner tier had hard constraints locked: **pre-scripted AI, no live API, no-build vanilla HTML/CSS/JS, in-browser progress, static hosting (incl. the Google Apps Script copy).** Some next-level topics push on those, so a few choices are yours to make:

1. **Scope — both tiers or one?** Do you want me to develop **Stage Crew (Tier 2)** fully first, or plan both before building anything?
2. **Real tools vs. simulated.** Modules 7–8 and 14 (editor, terminal, version control, APIs) are most powerful hands-on — but hands-on collides with the no-build / static / pre-scripted constraints and with FC's tooling rules. Do we keep everything **simulated in-browser** (safe, consistent, policy-clean), or introduce **pointers to the real FC-approved environment** for the brave?
3. **Live AI question, again.** Whole-feature direction (M11) and debugging (M12) are richer with a real model. Staying pre-scripted keeps cost/privacy at zero and stays policy-clean. My recommendation: **stay pre-scripted** unless there's an FC-approved, data-classification-safe way to do live calls. Your call.
4. **The FC-approved tool list.** Still outstanding from the Beginner tier (Module 6) and now needed in Modules 7, 14 and 16. I can't finalise the tooling-specific content without the approved names.
5. **Audience reach.** Same internal-FC, zero-experience audience throughout — or does the advanced tier target a slightly more technical internal group (which would change the depth)?

Tell me how you'd like to answer 1–5 and I'll turn the chosen tier into a full lesson-by-lesson outline in the same format as `content-outline.md` — still no code until you say go.