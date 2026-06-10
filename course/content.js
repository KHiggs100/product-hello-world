/* =========================================================================
   content.js — the whole course, as DATA.
   This is on purpose: just like demo/projects.json holds the projects as
   data, the lessons here are data the engine (app.js) reads and renders.
   You can read this file top to bottom and understand the entire course.
   ========================================================================= */

const COURSE = {
  welcome: {
    eyebrow: "Backstage Pass",
    title: "Pull back the curtain on code — and AI.",
    lead:
      "Every app and website is just instructions being followed very fast. " +
      "AI can write those instructions in seconds — but it needs a director who can read the script and catch its mistakes. That's you.",
    promises: [
      "No installs. No setup. Works right here in your browser.",
      "Built for adults who are brand new to this — no jargon left unexplained.",
      "You cannot break anything. There's a Reset button whenever you want it.",
      "About 20 minutes per module. Your progress is saved on this device.",
    ],
    cta: "Take your seat",
  },

  // Glossary powers the always-available "Jargon Buster" panel.
  glossary: [
    { term: "Code", def: "Instructions for a computer, written as plain text in files." },
    { term: "File", def: "A named piece of saved text or data, like index.html." },
    { term: "Variable", def: "A labelled box that holds a value, so you can reuse it by name." },
    { term: "List", def: "Many values kept in order, like a setlist or a to-do list." },
    { term: "Loop", def: "An instruction that repeats once for each item in a list." },
    { term: "Function", def: "A named, reusable action you can trigger by its name." },
    { term: "HTML", def: "The structure of a web page — the bones: what's there and in what order." },
    { term: "CSS", def: "The styling of a page — the skin: colours, fonts and spacing." },
    { term: "JavaScript", def: "The behaviour of a page — the muscle: things that react and update." },
    { term: "Browser", def: "The app (Chrome, Edge, Safari…) that reads files and draws the page." },
    { term: "AI / model", def: "A tool that predicts helpful text or code from your request. Fast, but not always right." },
    { term: "Prompt", def: "What you ask the AI. Clearer prompts get better answers." },
    { term: "Bug", def: "A mistake in the instructions that makes the show misbehave." },
  ],

  modules: [
    {
      id: 0,
      title: "It's just instructions and files",
      tagline: "Pull back the curtain",
      blurb: "Three quick truths that make everything else make sense.",
      available: true,
      lessons: [
        {
          id: "0.1",
          title: "The show is just instructions",
          game: "humanCompiler",
          intro: [
            "Every app, website and game you've ever used is a list of instructions being followed very, very fast. That's it. The \"magic\" is just speed.",
            "The catch: a computer follows instructions <strong>literally</strong>. It has no common sense — it does exactly what the script says, including the mistakes. Neither a computer nor an AI guesses what you <em>meant</em>.",
          ],
          // Data for the Human Compiler game:
          goal: "Make a jam sandwich",
          // The correct, complete recipe (order matters):
          recipe: [
            { id: "bread", text: "Take two slices of bread" },
            { id: "open", text: "Open the jar of jam" },
            { id: "scoop", text: "Scoop jam onto the knife" },
            { id: "spread", text: "Spread the jam on one slice" },
            { id: "close", text: "Put the second slice on top" },
          ],
          // How the literal "computer" reacts when a step is missing:
          literalFails: {
            open: "🤖 Jams the knife against a sealed lid. The jar stays shut. No jam today.",
            bread: "🤖 Spreads jam directly onto the table. There is no bread to be found.",
            scoop: "🤖 Waves an empty knife hopefully over the bread. Nothing happens.",
            spread: "🤖 Holds a knife full of jam, frozen, unsure where it goes.",
            close: "🤖 Presents a single open slice. Technically a jam cracker.",
          },
          success: "🥪 A jam sandwich! You gave complete, ordered instructions — exactly what a computer (and an AI) needs.",
          cue: "The computer is not clever. It is fast and obedient. <strong>Precision is your job.</strong>",
        },
        {
          id: "0.2",
          title: "Code is just text in files",
          game: "backstageTour",
          intro: [
            "Brace yourself for an anticlimax: code is text. You could open it in a notepad. It lives in <strong>files</strong> with names like <code>index.html</code>. The bit after the dot just labels what kind of text it is.",
            "No secret format. No vault. Just files you can open, read and change. Here are the real files behind the demo site you'll edit later — click each to peek.",
          ],
          files: [
            {
              name: "index.html",
              role: "The bones — what's on the page and in what order.",
              peek: "<h1 class=\"hero__name\">Sam Rivera</h1>\n<p class=\"hero__tagline\">I help teams ship…</p>",
              note: "Plain words wrapped in tags. The text between the tags is what you see.",
            },
            {
              name: "styles.css",
              role: "The skin — colours, fonts and spacing.",
              peek: "--color-accent: #c4344b;\nh1 { font-size: 3rem; }",
              note: "One named colour, used all over the page. Change it once, change everything.",
            },
            {
              name: "app.js",
              role: "The muscle — things that happen after the page loads.",
              peek: "const projects = await fetch('projects.json');\n// …then build a card for each one",
              note: "This fetches your data and builds the page from it.",
            },
            {
              name: "projects.json",
              role: "The data — a plain list of projects.",
              peek: "[\n  { \"title\": \"Refunds API v2\", \"year\": 2024 }\n]",
              note: "Just a list. The page is built from this — change the list, change the page.",
            },
          ],
          cue: "A project is just a folder of text files. <strong>You already know how to open files.</strong>",
        },
        {
          id: "0.3",
          title: "A website is a few files a browser reads",
          game: "matchFiles",
          intro: [
            "When you visit a page, your browser quietly opens these files and assembles the show in front of you. Change a word, refresh, and the show changes. That's the whole loop.",
            "Match each file to its job to lock it in.",
          ],
          pairs: [
            { file: "index.html", job: "The words and structure you read", jobId: "structure" },
            { file: "styles.css", job: "The colours and the look", jobId: "style" },
            { file: "app.js", job: "The moving, reacting bits", jobId: "behaviour" },
          ],
          cue: "Browser reads the files → builds the show. <strong>Edit a file → the show changes.</strong>",
        },
      ],
      curtainCall: {
        recap: [
          "Instructions are followed <strong>literally</strong> — precision is your job.",
          "Code is just <strong>text in files</strong> you can open and read.",
          "A <strong>browser reads those files</strong> and builds the page.",
        ],
        game: "memoryMatch",
        match: {
          pairs: [
            { a: "Code", b: "Instructions, written as text in files" },
            { a: "Browser", b: "Reads the files and draws the page" },
            { a: "index.html", b: "The words and structure you see" },
            { a: "Literal", b: "Does exactly what you say, no guessing" },
          ],
        },
        badge: "Backstage Pass — Issued",
        star: "🎟️",
        next: "You've seen the script. Next, you'll learn to read it.",
      },
    },

    {
      id: 1,
      title: "Reading the script",
      tagline: "Learn to read code before writing it",
      blurb: "Spot the five building blocks behind almost any code: boxes, lists, forks, loops and named actions.",
      available: true,
      lessons: [
        {
          id: "1.1",
          title: "Boxes with labels (variables)",
          game: "spotBlock",
          intro: [
            "A <strong>variable</strong> is a labelled box. You put something in it — a word, a number — and from then on you refer to it by its label. <code>const name = \"Sam\"</code> means \"the box called <em>name</em> holds Sam\".",
            "Why bother? So the show can say the right thing in fifty places by changing one box. Tap every labelled box below.",
          ],
          spot: {
            prompt: "Tap every labelled box (the variable names).",
            tokens: [
              { t: "const " }, { t: "name", tap: true, target: true }, { t: " = \"Sam Rivera\";\n" },
              { t: "const " }, { t: "year", tap: true, target: true }, { t: " = 2025;\n" },
              { t: "const " }, { t: "tagline", tap: true, target: true }, { t: " = \"I help teams ship.\";" },
            ],
          },
          stagehand: {
            prompt: "Explain this line like I'm brand new: const year = 2025;",
            reply: [
              "Happy to! This makes a labelled box named <strong>year</strong> and puts the number <strong>2025</strong> inside it.",
              "<code>const</code> just means \"this box won't be swapped for a different one later\". From now on, writing <code>year</code> anywhere means 2025.",
            ],
            watch: "I asked it to explain simply — that's a good prompt. The Stagehand sounds sure of itself; always check its answer against the code you can see.",
          },
          cue: "A variable is a labelled box holding a value. <strong>Find the name, find the box.</strong>",
        },
        {
          id: "1.2",
          title: "Many things in a row (lists)",
          game: "buildSetlist",
          intro: [
            "Often you don't have one thing, you have a stack — three projects, ten emails, a hundred songs. A <strong>list</strong> holds many things in order. Your demo projects page? That's a list.",
            "Add an act and remove an act below, and watch the show's cards change to match the list.",
          ],
          setlist: {
            items: ["Self-serve onboarding", "Refunds API v2", "Mobile dashboard"],
            pool: ["Payments redesign", "Fraud alerts", "Merchant insights", "Dark mode"],
          },
          stagehand: {
            prompt: "What does this square-bracket thing mean? [\"jam\", \"bread\", \"knife\"]",
            reply: [
              "That's a <strong>list</strong> — three items kept in order. The square brackets <code>[ ]</code> say \"this is a list\", and the commas separate the items.",
              "Lists are how code handles \"many of something\" without writing each one out by hand.",
            ],
            watch: "Notice the answer matches what you can see in the brackets. When the Stagehand and the code agree, you can trust it.",
          },
          cue: "A list is many values in order. <strong>Change the list, change what shows up.</strong>",
        },
        {
          id: "1.3",
          title: "Forks in the road (if / else)",
          game: "fillGap",
          intro: [
            "Code makes decisions with <strong>if</strong>. <em>If</em> you're logged in, show the dashboard; <em>otherwise</em>, show the login screen. Same show, different scene depending on the situation.",
            "Computers can't improvise — every \"it depends\" in an app is an <code>if</code> somewhere. Drop the right piece into each fork to complete it.",
          ],
          fillGap: {
            rounds: [
              {
                intro: "Finish this fork so the dashboard shows only when the user is logged in:",
                before: "if (",
                after: ") {\n  showDashboard();\n} else {\n  showLoginScreen();\n}",
                options: ["loggedIn", "showDashboard", "2 + 2"],
                answer: 0,
                nudge: "You need the thing being checked — whether they're logged in.",
              },
              {
                intro: "The cart has items. Fill the gap so checkout turns on:",
                before: "if (cartItems > 0) {\n  ",
                after: ";\n} else {\n  showEmptyCart();\n}",
                options: ["enableCheckout()", "showEmptyCart()", "emptyTheCart()"],
                answer: 0,
                nudge: "When the 'if' is true, we want to enable checkout.",
              },
            ],
          },
          stagehand: {
            prompt: "In plain English, what does 'else' mean here?",
            reply: [
              "<code>else</code> is the \"otherwise\" path. The code tries the <code>if</code> first; if that's not true, it falls through to <code>else</code> instead.",
              "Exactly one of the two paths runs — never both.",
            ],
            watch: "Good habit: ask the AI to confirm your own reading. If its explanation doesn't match what you traced, slow down and find out who's right.",
          },
          cue: "<code>if</code> is a fork in the road. <strong>Trace the situation to find which path runs.</strong>",
        },
        {
          id: "1.4",
          title: "Do it again (loops)",
          game: "spotBlock",
          intro: [
            "You have three projects but the design for only <em>one</em> card. How do all three appear? A <strong>loop</strong>: \"for each project, make a card.\" Write once, repeat for every item.",
            "This is why a shop with 10,000 products didn't take someone 10,000 days. One part of this real code runs once per project — tap the loop.",
          ],
          spot: {
            prompt: "Tap the loop — the part that runs once for every project.",
            tokens: [
              { t: "const cards = " }, { t: "projects", tap: true }, { t: "." }, { t: "map", tap: true, target: true }, { t: "(project => {\n" },
              { t: "  return makeCard(" }, { t: "project", tap: true }, { t: ");\n});" },
            ],
          },
          stagehand: {
            prompt: "Which part here is the loop, and how do you know?",
            reply: [
              "The loop is <code>.map(...)</code>. <code>map</code> walks through every item in the <strong>projects</strong> list and runs the same code for each one.",
              "So one instruction (\"make a card\") becomes many cards — one per project.",
            ],
            watch: "The Stagehand pointed at a specific word and said why. That's the kind of answer to trust — vague answers are a red flag.",
          },
          cue: "A loop runs the same action for each item in a list. <strong>One instruction, many results.</strong>",
        },
        {
          id: "1.5",
          title: "Named actions you reuse (functions)",
          game: "choose",
          intro: [
            "A <strong>function</strong> is a named action you can trigger by its name, as often as you like. <code>loadProjects()</code> means \"do the whole load-the-projects routine\".",
            "When you ask AI for code, it almost always hands you functions — so being able to say <em>what does this function do, in one sentence?</em> is gold. Read each routine and pick the best name.",
          ],
          rounds: [
            {
              code: "function ?????(price, taxRate) {\n  return price + (price * taxRate);\n}",
              question: "What's the best name for this routine?",
              options: ["addTax", "sendEmail", "loadPage"],
              answer: 0,
              nudge: "It takes a price and a tax rate and adds the tax on. Name it after what it does.",
            },
            {
              code: "function ?????(list) {\n  return list.length === 0;\n}",
              question: "What's the best name for this routine?",
              options: ["printList", "isEmpty", "deleteList"],
              answer: 1,
              nudge: "It checks whether the list has zero items — true or false. It only asks a question; it changes nothing.",
            },
          ],
          stagehand: {
            prompt: "Summarise this function in one sentence: function addTax(price, taxRate) { return price + price * taxRate; }",
            reply: [
              "In one sentence: it takes a price and a tax rate, and gives back the price with the tax added on.",
              "Tip: a good name (<code>addTax</code>) already tells you most of that before you read a single line inside.",
            ],
            watch: "Asking \"summarise this in one sentence\" is one of the most useful things you can ask an AI about code you didn't write.",
          },
          cue: "A function is a named, reusable action. <strong>Read it, name it, and you understand it.</strong>",
        },
      ],
      curtainCall: {
        codeIntro:
          "// The real script that builds your demo projects page:\nconst projects = await fetch('projects.json');\nconst cards = projects.map(project => {\n  return makeCard(project.title, project.year);\n});",
        recap: [
          "<strong>Variable</strong> — a labelled box holding a value.",
          "<strong>List</strong> — many values in order.",
          "<strong>if / else</strong> — a fork; one path runs.",
          "<strong>Loop</strong> — the same action for each item.",
          "<strong>Function</strong> — a named, reusable action.",
        ],
        game: "bucket",
        bucket: {
          prompt: "Drag each piece of code into the kind of building block it is.",
          bins: [
            { id: "var", label: "Variable (a box)" },
            { id: "list", label: "List" },
            { id: "loop", label: "Loop" },
            { id: "func", label: "Function" },
          ],
          cards: [
            { text: 'const year = 2025;', bin: "var" },
            { text: '["a", "b", "c"]', bin: "list" },
            { text: 'projects.map(p => …)', bin: "loop" },
            { text: 'loadProjects()', bin: "func" },
          ],
        },
        badge: "Script Reader",
        star: "📖",
        next: "You can read the script. Next: change it — and watch the show change in front of you.",
      },
    },
    {
      id: 2,
      title: "The web you can see",
      tagline: "Bones, skin and muscle",
      blurb: "Make your first real edits — change words, repaint colours, add data — and watch the page react instantly.",
      available: true,
      lessons: [
        {
          id: "2.1",
          title: "The bones (HTML)",
          game: "editHtml",
          intro: [
            "HTML is the skeleton: what's on the page and in what order. A heading, a paragraph, a button. No colours, no movement — just <em>what exists</em>. Tags come in pairs, like stage curtains: <code>&lt;h1&gt;</code> opens, <code>&lt;/h1&gt;</code> closes, and your content sits between them.",
            "Edit the words below. Watch the HTML update, and the live page on the right change with it. Make it say <strong>your</strong> name and something true about you.",
          ],
          editHtml: {
            name: "Sam Rivera",
            tagline: "I help teams ship things customers actually use.",
            eyebrow: "Product Manager",
          },
          stagehand: {
            prompt: "What does <h1> actually do in HTML?",
            reply: [
              "<code>&lt;h1&gt;</code> marks its text as the <strong>main heading</strong> of the page — the biggest, most important title. The matching <code>&lt;/h1&gt;</code> closes it.",
              "Whatever you type between the two tags is what shows on screen as that heading.",
            ],
            watch: "The Stagehand explained the tag and pointed at where your text goes. Compare it to the live preview — do they agree?",
          },
          cue: "HTML = the bones. Tags come in open/close pairs. <strong>Content lives between them.</strong>",
        },
        {
          id: "2.2",
          title: "The skin (CSS)",
          game: "editCss",
          intro: [
            "CSS is the styling: colours, fonts, spacing — the whole look. The bones don't move; they just get dressed. The trick beginners love: one named colour, used everywhere, changed in one place.",
            "Pick an accent colour and a heading size below. Notice how the single colour repaints several parts of the page at once.",
          ],
          editCss: { accent: "#c4344b", size: 44 },
          stagehand: {
            prompt: "Why use a named colour instead of typing the colour everywhere?",
            reply: [
              "Because you set it <strong>once</strong> and reuse the name in lots of places. Change the one value and everything using it updates together.",
              "That's the same idea as a variable from the last act — a labelled box, but for a colour.",
            ],
            watch: "Good answer — and notice it links back to something you already learned. When AI connects new ideas to old ones, that's a sign it understood the question.",
          },
          cue: "CSS = the skin. Change one named value, <strong>restyle the whole show.</strong>",
        },
        {
          id: "2.3",
          title: "The muscle (JavaScript & data)",
          game: "editData",
          intro: [
            "JavaScript is behaviour — the things that <em>happen</em>. On the demo site, a little script reads a list of projects (data) and builds a card for each one. Change the data, and the script rebuilds the page.",
            "Add a third project to the list below. Keep the commas and brackets tidy — if you slip, you'll see the same friendly error the real site gives. That's normal, and the whole point of the next act.",
          ],
          editData: {
            start:
              "[\n  { \"title\": \"Refunds API v2\", \"year\": 2024 },\n  { \"title\": \"Mobile dashboard\", \"year\": 2023 }\n]",
            startCount: 2,
          },
          stagehand: {
            prompt: "I got 'Unexpected token' — what does that mean?",
            reply: [
              "That error means the data isn't quite valid yet — usually a <strong>missing comma</strong> between items, or an extra one at the end.",
              "Check that each item is separated by a comma, and there's no stray comma before the closing <code>]</code>.",
            ],
            watch: "Notice: a clear error message is a gift. Pasting the exact error to an AI and asking 'what does this mean?' is one of the fastest ways to get unstuck.",
          },
          cue: "JS = the muscle. It reacts and updates. <strong>Data in → show out.</strong>",
        },
        {
          id: "2.4",
          title: "How the three work together",
          game: "bucket",
          intro: [
            "Bones, skin, muscle — a page is all three at once. HTML lays things out, CSS makes them look good, JS makes them react. When you ask AI to \"add a contact form\" or \"make the header sticky\", it'll touch one, two, or all three.",
            "Knowing <em>which layer a request lives in</em> is how you tell whether the AI's answer even makes sense. Drag each job into its layer.",
          ],
          bucket: {
            bins: [
              { id: "bones", label: "Bones (HTML)" },
              { id: "skin", label: "Skin (CSS)" },
              { id: "muscle", label: "Muscle (JS)" },
            ],
            cards: [
              { text: "Make the page title blue", bin: "skin" },
              { text: "Add a new link to the menu", bin: "bones" },
              { text: "Pop up a thank-you when a button is clicked", bin: "muscle" },
              { text: "Make the heading text bigger", bin: "skin" },
              { text: "Add a paragraph about your hobbies", bin: "bones" },
            ],
          },
          stagehand: {
            prompt: "I asked AI to 'make the header sticky'. Which layer is that?",
            reply: [
              "That's the <strong>skin (CSS)</strong> — \"sticky\" is about how the header looks and behaves visually as you scroll, which is styling.",
              "So if the AI's answer changes your HTML structure instead, you'd know to question it.",
            ],
            watch: "This is the real payoff: naming the layer first lets you sanity-check the AI's answer before you trust it.",
          },
          cue: "Every change lives in a layer: bones, skin, or muscle. <strong>Name the layer first.</strong>",
        },
      ],
      curtainCall: {
        recap: [
          "<strong>HTML</strong> = bones — structure and content.",
          "<strong>CSS</strong> = skin — colours, fonts, spacing.",
          "<strong>JavaScript</strong> = muscle — behaviour and reactions.",
          "Every change lives in one layer — <strong>name the layer first.</strong>",
        ],
        game: "dragOrder",
        order: {
          prompt: "Put the steps in the order a browser builds a page. Drag, or use the ↑ ↓ buttons, then check.",
          steps: [
            "Browser opens index.html (the bones)",
            "Applies styles.css (the skin)",
            "Runs app.js (the muscle)",
            "The finished page appears on screen",
          ],
        },
        badge: "Set Builder",
        star: "🛠️",
        next: "You can read the script AND change the set. Next up: directing the Stagehand — prompting AI well, and catching it when it's confidently wrong.",
      },
    },
    {
      id: 3,
      title: "Directing the Stagehand",
      tagline: "Ask well, and read what comes back",
      blurb: "The AI is fast but literal. Learn to ask clearly, give it context, ask for explanations, and treat it as a conversation.",
      available: true,
      lessons: [
        {
          id: "3.1",
          title: "Vague vs. specific",
          game: "promptLab",
          intro: [
            "The Stagehand will build whatever you ask — but vague directions get vague results. The clearer your request, the better the code you get back.",
            "Here are two ways to ask for the same thing. Reveal what the Stagehand returns for each, then pick the prompt you'd rather have sent.",
          ],
          promptLab: {
            task: "You want a button on your page that says \"Get in touch\".",
            prompts: [
              {
                label: "Vague",
                text: "make a button",
                reply: [
                  "Here's a button: <code>&lt;button&gt;Click&lt;/button&gt;</code>",
                  "…but what should it say? What happens when someone clicks it? I had to guess.",
                ],
              },
              {
                label: "Specific",
                text: "Make a button labelled \"Get in touch\" that opens the visitor's email app when clicked.",
                reply: [
                  "Here's a button labelled \"Get in touch\" that opens the visitor's email app:",
                  "<code>&lt;a href=\"mailto:you@example.com\"&gt;&lt;button&gt;Get in touch&lt;/button&gt;&lt;/a&gt;</code>",
                ],
              },
            ],
            best: 1,
            why: "The specific prompt said the label AND what should happen — so the Stagehand didn't have to guess, and you got exactly what you wanted.",
          },
          cue: "Vague in, vague out. <strong>Say what you want, and what it should do.</strong>",
        },
        {
          id: "3.2",
          title: "Give it context",
          game: "buildPrompt",
          intro: [
            "The Stagehand can't see your screen, your goal, or what you've already tried. Anything it doesn't know, it guesses. Good prompts hand over the context up front.",
            "Start from a bare request and add the details that actually help. Tap the bits that make it clearer — watch your prompt grow.",
          ],
          buildPrompt: {
            base: "Fix my code.",
            additions: [
              { text: "the exact error message you got", good: true },
              { text: "what you expected to happen", good: true },
              { text: "the small bit of code that's failing", good: true },
              { text: "what you've already tried", good: true },
              { text: "an apology for bothering it", good: false },
              { text: "your whole life story", good: false },
            ],
          },
          stagehand: {
            prompt: "Why do you keep asking me for the error message and what I expected?",
            reply: [
              "Because I can't see your screen! The error tells me <strong>what</strong> went wrong, and \"what you expected\" tells me what <strong>right</strong> looks like.",
              "With both, I can aim at the real problem instead of guessing.",
            ],
            watch: "The AI is honest here about a real limit: it only knows what you tell it. Treat that as the rule, not the exception.",
          },
          cue: "The AI only knows what you tell it. <strong>Hand over the context.</strong>",
        },
        {
          id: "3.3",
          title: "Ask to understand",
          game: "fillGap",
          intro: [
            "The most useful thing to ask about code you didn't write isn't \"is this right?\" — it's \"help me understand it.\" The right phrasing gets the right kind of answer.",
            "Complete each ask by dropping in the piece that makes it land.",
          ],
          fillGap: {
            rounds: [
              {
                intro: "You're lost in a file of code. Complete the ask:",
                before: "Explain this code ",
                after: ", like I'm completely new.",
                options: ["line by line", "in one word", "tomorrow"],
                answer: 0,
                nudge: "Going line by line is what makes it understandable.",
              },
              {
                intro: "A function is 40 lines long and you just want the gist. Complete the ask:",
                before: "Summarise what this function does ",
                after: ".",
                options: ["in one sentence", "in 500 words", "as a poem"],
                answer: 0,
                nudge: "A one-sentence summary gives you the gist fast.",
              },
              {
                intro: "One word in the code is unfamiliar. Complete the ask:",
                before: "What does this word mean here, ",
                after: "?",
                options: ["in plain English", "in binary", "in Latin"],
                answer: 0,
                nudge: "Plain English is exactly what you want.",
              },
            ],
          },
          cue: "Ask to understand, not just to fix. <strong>\"Explain it like I'm new\" is gold.</strong>",
        },
        {
          id: "3.4",
          title: "It's a conversation",
          game: "branchChat",
          intro: [
            "The AI rarely nails it on the first try, and that's fine. Prompting is a back-and-forth: look at the answer, say what's off, ask again. You're the director giving notes.",
            "Direct the scene below — pick your note to the Stagehand and watch how it responds. Steer it to a good result.",
          ],
          scene: {
            beats: [
              {
                ai: ["I've built the contact form you asked for — it has a Name field and a Send button. Anything you'd change?"],
                prompt: "Your note to the Stagehand:",
                options: [
                  { label: "Thanks, that's perfect!", reply: "Glad you like it! …though there's nowhere for visitors to leave their email. Sure you don't want one?", good: false },
                  { label: "Good start — please add an email field", reply: "Good call — adding an email field now, so visitors can leave their address.", good: true },
                  { label: "Delete it and start over", reply: "We can, but the Name field and Send button are already fine — we'd be throwing away good work.", good: false },
                ],
              },
              {
                ai: ["Done — here's the form with Name, Email and a Send button. I tested it and it submits. Anything before we ship?"],
                prompt: "Your note:",
                options: [
                  { label: "Ship it, no need to check", reply: "Risky — let's make sure it actually does what you expect first.", good: false },
                  { label: "Let me test it myself first", reply: "Smart. You enter a test name and email, hit Send — it works. Now you KNOW, rather than hope.", good: true },
                  { label: "Add ten more fields, just in case", reply: "More isn't better — extra fields you don't need just put people off. Keep it lean.", good: false },
                ],
              },
              {
                ai: ["One last thing — there's a line in here you might not recognise. Want me to explain it?"],
                prompt: "Your note:",
                options: [
                  { label: "No need, I'll just trust it", reply: "You could… but shipping code you don't understand is how nasty surprises happen later.", good: false },
                  { label: "Yes — explain it simply, with an example", reply: "Happily. That line stops the page reloading when the form sends, so the visitor's typing isn't lost. You've directed a clean, understood result. 🎬", good: true },
                ],
              },
            ],
          },
          cue: "AI is a conversation, not a vending machine. <strong>Give notes and iterate.</strong>",
        },
      ],
      curtainCall: {
        recap: [
          "<strong>Specific beats vague</strong> — say the label, the goal, and what should happen.",
          "<strong>Hand over context</strong> — the AI can't see what you can.",
          "<strong>Ask to understand</strong> — \"explain like I'm new\", \"one-sentence summary\".",
          "<strong>It's a conversation</strong> — give notes and iterate.",
        ],
        quiz: [
          {
            q: "Which request will get you the most useful code?",
            options: [
              "make a thing for sign ups",
              "Make a sign-up form with name and email fields and a Submit button",
              "build it",
            ],
            answer: 1,
            nudge: "The one that says exactly what it should contain and do.",
          },
          {
            q: "The AI's code threw an error. What's the smartest next move?",
            options: [
              "Paste the exact error and ask what it means and how to fix it",
              "Assume coding isn't for you",
              "Run it again unchanged",
            ],
            answer: 0,
            nudge: "Hand it the error — that's the fastest way to get unstuck.",
          },
          {
            q: "You don't understand the code the AI gave you. Best ask?",
            options: ["Nothing — just use it", "Explain this to me simply, with an example", "Make it longer"],
            answer: 1,
            nudge: "Always ask for a simpler explanation — never ship what you don't understand.",
          },
        ],
        badge: "Director",
        star: "🎬",
        next: "You can direct the Stagehand. Next: reading what it hands back — and spotting when it's confidently wrong.",
      },
    },
    {
      id: 4,
      title: "Reading what the Stagehand hands you",
      tagline: "Confident isn't the same as correct",
      blurb: "AI sounds sure of itself even when it's wrong. Learn to trace what code does, judge its claims, and never ship what you haven't checked.",
      available: true,
      lessons: [
        {
          id: "4.1",
          title: "Predict the output",
          game: "predictOutput",
          intro: [
            "Before you run code — yours or the Stagehand's — you can often work out what it'll do just by reading it slowly. That habit is your superpower: it's how you catch mistakes <em>before</em> they bite.",
            "Read each snippet and predict what it shows. Then we'll run it and see if you were right. (<code>show(...)</code> just means \"display this\".)",
          ],
          rounds: [
            {
              code: "let price = 10;\nprice = price + 5;\nshow(price);",
              question: "What does this show?",
              options: ["10", "15", "5"],
              answer: 1,
              output: "15",
              nudge: "Trace it line by line: price starts at 10, then becomes 10 + 5.",
            },
            {
              code: "let name = \"Sam\";\nshow(\"Hello, \" + name);",
              question: "What does this show?",
              options: ["Hello, name", "Hello, Sam", "Hello, + name"],
              answer: 1,
              output: "Hello, Sam",
              nudge: "The box 'name' holds \"Sam\", and + joins the two pieces of text together.",
            },
            {
              code: "let items = [\"a\", \"b\", \"c\"];\nshow(items.length);",
              question: "What does this show?",
              options: ["3", "a b c", "0"],
              answer: 0,
              output: "3",
              nudge: "length counts how many items are in the list.",
            },
          ],
          stagehand: {
            prompt: "What does this line do? price = price + 5;",
            reply: [
              "It takes whatever is in the box <code>price</code>, adds 5, and puts the new total back in the same box.",
              "So if price was 10, it becomes 15.",
            ],
            watch: "Useful — but you predicted it yourself first. Reading the code before asking means you can tell when the answer is off.",
          },
          cue: "Read before you run. <strong>Predicting the output is how you catch mistakes early.</strong>",
        },
        {
          id: "4.2",
          title: "Confident ≠ correct",
          game: "spotFake",
          intro: [
            "Here's the big one. AI always sounds <strong>confident</strong> — even when it's flat wrong. It doesn't say \"I think\" or \"maybe\"; it states things plainly. That tone is convincing, and that's exactly the trap.",
            "Each round, the Stagehand makes three confident claims about a snippet — one is a lie. Read the code and tap the false one.",
          ],
          spotFake: {
            rounds: [
              {
                prompt: "Three claims about <code>items.push(\"new\")</code>. Tap the one that's NOT true:",
                statements: [
                  "It adds \"new\" to the end of the list",
                  "It changes the <code>items</code> list",
                  "It removes the last item from the list",
                ],
                fake: 2,
                why: "push ADDS to the end — it never removes. The other two are true.",
              },
              {
                prompt: "Three claims about <code>let greeting = \"Hi \" + userName;</code>. Spot the false one:",
                statements: [
                  "It joins \"Hi \" with whatever userName holds",
                  "It always shows \"Hi Sam\"",
                  "The result depends on userName's value",
                ],
                fake: 1,
                why: "It only says \"Hi Sam\" if userName is \"Sam\". That confident \"always\" is the giveaway.",
              },
              {
                prompt: "Spot the false statement about <code>let total = 2 + 2;</code>:",
                statements: [
                  "total ends up as the number 4",
                  "It adds two numbers together",
                  "total ends up as the text \"22\"",
                ],
                fake: 2,
                why: "2 + 2 with numbers is 4, not the text \"22\". Sometimes the confident claim is right — you only know by checking.",
              },
            ],
          },
          cue: "AI states everything with confidence — right or wrong. <strong>The tone is not the truth.</strong>",
        },
        {
          id: "4.3",
          title: "Runs ≠ correct",
          game: "spotBug",
          intro: [
            "A dangerous half-truth: \"it ran without an error, so it must be right.\" Not so. Code can run perfectly happily and still do the <em>wrong thing</em> — no error, just a wrong answer.",
            "This little function is meant to work out a 20% tip. It runs fine — but the answer's wrong. Tap the line with the bug.",
          ],
          spotBug: {
            prompt: "Tap the line that makes this give the wrong answer:",
            lines: [
              "function tip(bill) {",
              "  let rate = 0.2;",
              "  return bill + rate;",
              "}",
            ],
            bug: 2,
            why: "It ADDS 0.2 to the bill instead of multiplying. It should be bill * rate. No error — just a wrong number.",
          },
          cue: "No error ≠ correct. <strong>Always check it does what you actually wanted.</strong>",
        },
        {
          id: "4.4",
          title: "Your reading routine",
          game: "dragOrder",
          intro: [
            "Put it together into a habit you'll use every time the Stagehand hands you code. It takes a minute and saves hours.",
            "Put the four steps of the routine in the order you'd actually do them.",
          ],
          order: {
            prompt: "Drag the steps into order (or use ↑ ↓), then check.",
            steps: [
              "Read it — or ask the AI to explain it",
              "Predict what it should do",
              "Run it and test the real result",
              "If it's off, tell the AI what's wrong and iterate",
            ],
          },
          stagehand: {
            prompt: "Can you double-check the tip function you gave me actually adds 20%?",
            reply: [
              "Good catch — you're right to check. <code>bill + 0.2</code> only adds 0.2, not 20%.",
              "It should be <code>bill * 0.2</code> for the tip, or <code>bill * 1.2</code> for the total. Thanks for reading it carefully.",
            ],
            watch: "When you push back with a specific doubt, a good AI will reconsider. Your reading is what triggered the fix — not the AI's confidence.",
          },
          cue: "Read it → predict it → test it → ask if unsure. <strong>That's the whole routine.</strong>",
        },
      ],
      curtainCall: {
        recap: [
          "AI sounds <strong>confident even when it's wrong</strong> — the tone isn't the truth.",
          "<strong>Trace the code</strong>: predict what it does before you run it.",
          "<strong>Runs ≠ correct</strong> — no error doesn't mean right.",
          "Your routine: <strong>read it → predict it → test it → ask if unsure.</strong>",
        ],
        game: "predictOutput",
        rounds: [
          {
            code: "let x = 3;\nx = x * 2;\nshow(x);",
            question: "Predict the output:",
            options: ["6", "32", "5"],
            answer: 0,
            output: "6",
            nudge: "3 times 2 is 6.",
          },
          {
            code: "let who = \"world\";\nshow(\"hello \" + who);",
            question: "Predict the output:",
            options: ["hello world", "hello who", "hello + world"],
            answer: 0,
            output: "hello world",
            nudge: "+ joins the text with whatever 'who' holds.",
          },
          {
            code: "let nums = [10, 20, 30];\nshow(nums.length);",
            question: "Predict the output:",
            options: ["3", "60", "10"],
            answer: 0,
            output: "3",
            nudge: "length counts how many items are in the list.",
          },
        ],
        badge: "Critical Reader",
        star: "🔍",
        next: "You can read AI's output with a sharp eye. Next: when something breaks, how to debug it — calmly, with the Stagehand's help.",
      },
    },
    {
      id: 5,
      title: "When the show stumbles",
      tagline: "Errors are normal — here's how to fix them",
      blurb: "Errors aren't failure — they're clues. Learn to read them, walk the debugging loop, and stay calm when something breaks.",
      available: true,
      lessons: [
        {
          id: "5.1",
          title: "Errors are normal (and helpful)",
          game: "spotFake",
          intro: [
            "Here's the secret every coder knows and every beginner doesn't: errors are <strong>completely normal</strong>. Professionals see them all day long. An error isn't a verdict on you — it's the computer telling you what tripped it up, and usually where.",
            "Each set has two true statements about errors and one myth. Tap the myth.",
          ],
          spotFake: {
            rounds: [
              {
                prompt: "Two are true, one's a myth. Tap the myth:",
                statements: [
                  "Professional coders see errors all day long",
                  "An error usually tells you what went wrong, and often where",
                  "Getting an error means you're not cut out for coding",
                ],
                fake: 2,
                why: "Errors aren't a verdict on you — everyone gets them constantly. They're clues, not judgement.",
              },
              {
                prompt: "Spot the myth about error messages:",
                statements: [
                  "Many errors point you to a file and a line number",
                  "A red error means your computer is broken",
                  "Reading the error calmly is the fastest way forward",
                ],
                fake: 1,
                why: "A red error is just information, not a broken computer — it's pointing at the problem.",
              },
            ],
          },
          cue: "Errors are normal and helpful. <strong>They tell you what went wrong, and often where.</strong>",
        },
        {
          id: "5.2",
          title: "Read the message",
          game: "spotBlock",
          intro: [
            "Error messages look scary because they're blunt, not because they're complicated. Most tell you three things: <strong>what</strong> went wrong, the <strong>file</strong>, and the <strong>line number</strong>. Once you know where to look, most of the fear drains away.",
            "Here's a real one. Tap the two parts that tell you <em>where</em> to look — the file name and the line number.",
          ],
          spot: {
            prompt: "Tap the file name and the line number in this error.",
            tokens: [
              { t: "app.js", tap: true, target: true },
              { t: ":" },
              { t: "12", tap: true, target: true },
              { t: "  Uncaught " },
              { t: "SyntaxError", tap: true },
              { t: ": missing ) after argument list" },
            ],
          },
          cue: "Most errors tell you <strong>what</strong> went wrong and <strong>where</strong> (file + line). Start there.",
        },
        {
          id: "5.3",
          title: "The debugging loop",
          game: "fixIt",
          intro: [
            "When something breaks, there's a calm little loop that fixes most things: <strong>read the error → ask for help with the exact error → apply the fix → run it again.</strong> Round and round until it goes green.",
            "Let's walk it once, for real.",
          ],
          fix: {
            brokenCode: "let price = 10;\nshow(total);",
            error: "app.js:2  ReferenceError: total is not defined",
            help: [
              "The error says <code>total is not defined</code> — you're using a box called <strong>total</strong> that was never created.",
              "Look at line 1: the box you actually made is called <strong>price</strong>. Did you mean to show that one?",
            ],
            fixes: [
              { code: "let price = 10;\nshow(price);", right: true },
              { code: "let price = 10;\nshow(\"total\");", right: false },
              { code: "let total = 10;\nshow(price);", right: false },
            ],
            success: "▶ Output: 10 — fixed! You read the error, asked for help, applied the fix, and re-ran. That's the whole loop.",
          },
          cue: "Read → ask with the exact error → fix → re-run. <strong>That loop fixes most things.</strong>",
        },
        {
          id: "5.4",
          title: "When you're really stuck",
          game: "choose",
          intro: [
            "Sometimes the loop doesn't crack it on the first lap. Here's what actually helps when you're stuck — and none of it is giving up.",
            "Pick the smart move each time.",
          ],
          rounds: [
            {
              question: "You've been stuck on the same error for 20 minutes. Smart move?",
              options: ["Keep doing the exact same thing harder", "Explain the problem out loud, step by step — you'll often spot it yourself", "Give up on the whole idea"],
              answer: 1,
              nudge: "Explaining it aloud ('rubber-ducking') often reveals the answer. A short break helps too.",
            },
            {
              question: "The AI's first fix didn't work either. Next step?",
              options: ["Give up for good", "Tell it 'that didn't work — here's the new error' and keep iterating", "Get angry at the AI"],
              answer: 1,
              nudge: "Feed it the new error. Debugging is iteration — you rarely nail it first try.",
            },
            {
              question: "You want to see if others hit the same generic error. What helps most?",
              options: ["Searching the exact error message", "Searching your own name", "Guessing at random"],
              answer: 0,
              nudge: "Pasting the exact (non-sensitive) error into a search often finds someone who solved it.",
            },
          ],
          cue: "Stuck isn't stuck forever. <strong>Explain it, search the exact error, iterate, take a break.</strong>",
        },
      ],
      curtainCall: {
        recap: [
          "Errors are <strong>normal and useful</strong> — clues, not failure.",
          "Most errors tell you <strong>what</strong> went wrong and <strong>where</strong> (file + line).",
          "The loop: <strong>read → ask with the exact error → fix → re-run.</strong>",
          "Stuck? <strong>Explain it aloud, search the exact error, iterate, take a break.</strong>",
        ],
        game: "fixIt",
        fix: {
          brokenCode: "function greet(name) {\n  show(\"Hi \" + name;\n}",
          error: "app.js:2  SyntaxError: missing ) after argument list",
          help: [
            "The error points at line 2 — <code>missing )</code>. Count the brackets: <code>show(</code> opens one, but it's never closed before the line ends.",
            "Add the closing <code>)</code> after <code>name</code>.",
          ],
          fixes: [
            { code: "function greet(name) {\n  show(\"Hi \" + name);\n}", right: true },
            { code: "function greet(name) {\n  show \"Hi \" + name;\n}", right: false },
            { code: "function greet(name) {\n  show((\"Hi \" + name;\n}", right: false },
          ],
          success: "▶ Fixed! greet(\"Sam\") now shows \"Hi Sam\". You found the line, understood the error, and closed the bracket — the whole loop, on your own.",
        },
        badge: "Troubleshooter",
        star: "🔧",
        next: "You can keep calm and fix things. The final act: using AI wisely and safely at work — what's OK to share, what isn't, and where to go next at Funding Circle.",
      },
    },
    {
      id: 6,
      title: "Opening night",
      tagline: "Use AI wisely — and within the rules",
      blurb: "The grown-up skills: judging what's worth building, keeping data safe, using approved tools, and knowing where to check.",
      available: true,
      lessons: [
        {
          id: "6.1",
          title: "Just because it can, should it?",
          game: "choose",
          intro: [
            "You can now read code, direct AI, judge its output and fix breaks. The last skill is the most grown-up one: <strong>judgement</strong>. AI will happily build whatever you ask — even when it's the wrong thing, or far more than you need.",
            "A good director asks not just \"does it work?\" but \"is this actually the right thing to do?\" Try these.",
          ],
          rounds: [
            {
              question: "The AI produces 200 lines for something you suspect could be simple. Best response?",
              options: ["Use it — more code is better", "Ask 'is there a simpler way?' and check you understand it", "Paste it in without reading"],
              answer: 1,
              nudge: "Simpler is usually better — and never ship code you don't understand.",
            },
            {
              question: "AI suggests a clever solution you don't understand at all. You should…",
              options: ["Ship it and hope", "Ask it to explain until you do — or don't use it yet", "Pretend you wrote it"],
              answer: 1,
              nudge: "Never put your name to something you can't explain. Understand it first.",
            },
            {
              question: "You're about to automate something that affects real customers. Wise first step?",
              options: ["Just run it live", "Test it safely first, and check with whoever owns that area", "Turn off the safety checks"],
              answer: 1,
              nudge: "Anything touching real customers deserves testing and a second pair of eyes.",
            },
          ],
          cue: "AI does what you ask — judgement is knowing what's worth asking for. <strong>Right beats clever.</strong>",
        },
        {
          id: "6.2",
          title: "What's safe to share with AI",
          game: "bucket",
          intro: [
            "Anything you type into an AI tool is information you're <strong>sharing</strong>. At Funding Circle that means following our <strong>AI Policy</strong> and <strong>data classification</strong>: never put personal, customer, or confidential information into an AI tool unless it's a genuine need of your role and the tool is approved for it.",
            "Drag each item into where it belongs. When in doubt, leave it out — and check the policy.",
          ],
          bucket: {
            bins: [
              { id: "ok", label: "Fine in an approved AI tool" },
              { id: "no", label: "Keep it out of AI" },
            ],
            cards: [
              { text: "'How do I write a loop?'", bin: "ok" },
              { text: "A made-up example with fake data", bin: "ok" },
              { text: "A customer's name, email or account number", bin: "no" },
              { text: "A password, API key or secret", bin: "no" },
              { text: "Real applicant or financial records", bin: "no" },
              { text: "A generic error with no personal data", bin: "ok" },
            ],
          },
          stagehand: {
            prompt: "I need help with a bug, but it involves real customer details. What do I do?",
            reply: [
              "Don't paste real customer details into me. Recreate the problem with <strong>fake, made-up data</strong> — the code behaves exactly the same.",
              "If you genuinely can't reproduce it without real data, stop and check your AI Policy and data classification first.",
            ],
            watch: "A reliable rule: AI almost never needs the real data to help with the code. Swap in fakes and you stay safe.",
          },
          cue: "Never feed AI personal, customer or confidential data. <strong>When in doubt, leave it out — and check the policy.</strong>",
        },
        {
          id: "6.3",
          title: "Use the tools you're meant to",
          game: "spotFake",
          intro: [
            "At Funding Circle, use only the AI tools and connectors that have been <strong>approved</strong>. They're set up to keep our data and customers safe. Going around them — or around our security tools — isn't a shortcut; it's a risk to everyone.",
            "In each set, two choices are sensible and one is a risk. Tap the risky one.",
          ],
          spotFake: {
            rounds: [
              {
                prompt: "You find a new AI tool that isn't FC-approved. Tap the risky move:",
                statements: [
                  "Stick to approved tools for now",
                  "Ask for the new tool to be reviewed",
                  "Just install it and crack on",
                ],
                fake: 2,
                why: "Installing unapproved tools is the risk. Use approved tools, and request a review if you want something new.",
              },
              {
                prompt: "An AI tool wants access your security software is blocking. Tap the risky move:",
                statements: [
                  "Leave the security tools alone",
                  "Turn off the security software to let it through",
                  "Use an approved route instead",
                ],
                fake: 1,
                why: "Never switch off or work around FC security tooling — that's a risk to everyone.",
              },
              {
                prompt: "You're unsure whether an AI use is allowed. Tap the risky move:",
                statements: [
                  "Check the FC AI Policy",
                  "Check the FC AI training site",
                  "Guess and hope it's fine",
                ],
                fake: 2,
                why: "Guessing is the risk. The AI Policy and training site exist to tell you.",
              },
            ],
          },
          cue: "Use FC-approved tools, never bypass security, and <strong>check the policy when unsure.</strong>",
        },
        {
          id: "6.4",
          title: "Where to go next",
          game: "choose",
          intro: [
            "That's the whole show. You can read code, change a page, direct AI, judge what it gives you, fix what breaks — and do it all safely. This isn't the end; it's your backstage pass to keep going.",
            "Keep practising with FC-approved tools, and bookmark these two:",
            "📘 <a href=\"https://app.hibob.com/docs/company-docs/preview/637693\" target=\"_blank\" rel=\"noopener\">Funding Circle AI Policy</a> — what's allowed, and how to handle data.",
            "🎓 <a href=\"https://fundingcircle.learnamp.com/en/items/funding-circle-prod-sign-in-435b2e24-81e0-4b87-ae9c-f0a75476e51f\" target=\"_blank\" rel=\"noopener\">Funding Circle AI training</a> — go deeper, and check here first when you have a question.",
          ],
          rounds: [
            {
              question: "You have a question about whether an AI use is allowed. Where do you look first?",
              options: ["The FC AI training site and AI Policy", "Ask a stranger online", "Just risk it"],
              answer: 0,
              nudge: "The FC AI training site and AI Policy are the first stop — the answer's often already there.",
            },
            {
              question: "Best way to keep these new skills sharp?",
              options: ["Never touch code again", "Keep practising on safe, approved tools", "Cram everything tonight then stop"],
              answer: 1,
              nudge: "Use it or lose it — keep tinkering with approved tools.",
            },
          ],
          cue: "Keep going — safely, with approved tools, and the policy a click away. <strong>You've got this.</strong>",
        },
      ],
      curtainCall: {
        recap: [
          "<strong>Judgement</strong> — ask 'is this the right thing?', not just 'does it work?'",
          "Never put personal, customer or confidential data into AI — <strong>when in doubt, leave it out.</strong>",
          "Use only <strong>FC-approved AI tools</strong>; never bypass security.",
          "Check the <a href=\"https://app.hibob.com/docs/company-docs/preview/637693\" target=\"_blank\" rel=\"noopener\">AI Policy</a> and <a href=\"https://fundingcircle.learnamp.com/en/items/funding-circle-prod-sign-in-435b2e24-81e0-4b87-ae9c-f0a75476e51f\" target=\"_blank\" rel=\"noopener\">AI training site</a> whenever you're unsure.",
        ],
        game: "memoryMatch",
        match: {
          pairs: [
            { a: "Real customer data", b: "Keep it out of AI" },
            { a: "Unapproved AI tool", b: "Stick to approved ones" },
            { a: "Security software blocking", b: "Never work around it" },
            { a: "Not sure what's allowed", b: "Check the FC AI Policy" },
          ],
        },
        badge: "Backstage Pass — Graduate",
        star: "🎓",
        next: "Curtain call! You've completed the whole show — now go and build something, safely. 👏",
      },
    },
  ],
};