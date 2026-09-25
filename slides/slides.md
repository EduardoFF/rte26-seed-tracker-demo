---
theme: ./theme
fonts:
  sans: Calibri,Nunito Sans
highlighter: shiki
lineNumbers: false
info: |
  ## Build Your First App with AI
  Reboot the Earth, Doha 2026
drawings:
  persist: false
transition: none
aspectRatio: 16/9
title: "Build Your First App with AI"
mdc: true
---

<div class="flex flex-col items-center justify-center text-center h-full" style="background:#231F20;">

<img src="/images/RTE-2026-banner.png" class="mx-auto h-[280px] max-w-full" />

<h1 class="mt-8">Build Your First App with AI</h1>
<p class="text-[1.1em]" style="color:var(--rte-accent);">From Idea to a Working Seed Tracker</p>
<p class="mt-4 opacity-70">Eduardo Feo Flushing</p>
<p class="mt-1 text-[0.5em] opacity-50" style="max-width:520px; line-height:1.4;">Assistant Teaching Professor &middot; Software and Societal Systems Department (S3D) &middot; Carnegie Mellon University</p>

</div>

---

# Today's Session

<div class="grid grid-cols-2 gap-8 mt-6 text-[0.85em]" style="max-width:900px; margin-left:auto; margin-right:auto;">
<div class="rte-card">

**Part 1**
- Fast, visual introduction
- Just enough context to get started

</div>
<div class="rte-card" style="border-color:var(--rte-accent);">

**Part 2**
- Hands-on: build a real app with AI
- GitHub Codespaces + Copilot Agent mode

</div>
</div>

<p class="mt-10 text-center text-[0.9em] rte-card" style="max-width:640px; margin-left:auto; margin-right:auto;">AI can write code, but it can also make mistakes. We can make it more useful by giving it clear requirements, persistent project context, and ways to check its work.</p>

---

# Code Is a Language

- LLMs learn programming patterns from source code.
- Modern models can generate increasingly complex programs from natural-language descriptions.

<ExtendedNotes>
Most of you have probably seen AI generate a few lines of code. Today we're going to take that a step further: instead of asking AI for one function, we're going to ask it to help us build a complete, small application.
</ExtendedNotes>

<!--
Most of you have probably seen AI generate a few lines of code. Today we're going to take that a step further. Instead of asking AI for one function, we're going to ask it to help us build a complete, small application.
-->

---

# AI Makes Mistakes

- AI-generated code can be incorrect.
- It can misunderstand what we ask for.
- Generated code still needs to be checked.

<p class="mt-8 text-center text-[1em] font-bold" style="color:var(--rte-accent);">AI is powerful, but it is not automatically correct.</p>

<ExtendedNotes>
AI can write code very quickly, but that doesn't mean the code is correct. So the important question is not only "Can AI write code?" It is also "How do we use AI when it can make mistakes?"
</ExtendedNotes>

<!--
AI can write code very quickly, but that doesn't mean the code is correct. So the important question is not only "Can AI write code?" It is also "How do we use AI when it can make mistakes?"
-->

---

# From Coding Assistant to Coding Agent

<div class="grid grid-cols-2 gap-6 mt-4 text-[0.85em]">
<div class="rte-card">

**Coding assistant**
- Generates code
- Explains code
- Suggests changes

</div>
<div class="rte-card" style="border-color:var(--rte-accent);">

**Coding agent**
- Explores the project
- Modifies files
- Runs commands and tools
- Iterates based on results

</div>
</div>

<ExtendedNotes>
A coding assistant helps us write code. A coding agent can take a goal, look around the project, change files, run the application or tests, see what happened, and continue working.
</ExtendedNotes>

<!--
A coding assistant helps us write code. A coding agent can take a goal, look around the project, change files, run the application or tests, see what happened, and continue working.
-->

---

# The Agent Loop

<div class="rte-flow mt-10 text-[0.9em]">
  <div class="rte-flow-step" style="border-color:var(--rte-accent); color:var(--rte-accent);">GOAL</div>
  <div>&rarr;</div>
  <div class="rte-flow-step">PLAN</div>
  <div>&rarr;</div>
  <div class="rte-flow-step">ACT</div>
  <div>&rarr;</div>
  <div class="rte-flow-step">OBSERVE</div>
</div>

<p class="mt-4 text-center text-[0.7em] opacity-70">&#8635; repeat until the task is complete</p>

<ExtendedNotes>
This is the basic idea behind an agent. We give it a goal. It decides what to do, takes an action, observes the result, and continues. Today we're going to see this happen while we build an application.
</ExtendedNotes>

<!--
This is the basic idea behind an agent. We give it a goal. It decides what to do, takes an action, observes the result, and continues.

Today we're going to see this happen while we build an application.
-->

---

# Give the Agent Context

<div class="rte-flow mt-6 text-[0.85em]">
  <div class="rte-flow-step">PROMPT<br/><span class="opacity-60 text-[0.85em]">"Add this feature"</span></div>
  <div>+</div>
  <div class="rte-flow-step" style="border-color:var(--rte-accent); color:var(--rte-accent);">AGENTS.md<br/><span class="opacity-80 text-[0.85em]">"Here is how this project works"</span></div>
</div>

<p class="mt-6 text-center text-[0.8em]">&darr;<br/>More consistent AI work</p>

<div class="mt-6 text-[0.75em]">

- AI agents need context about a project.
- Persistent project instructions can live in the repository.
- `AGENTS.md` is a simple Markdown file for coding-agent instructions.

</div>

<ExtendedNotes>
Instead of explaining the same project rules in every conversation, we can put them in the project itself. AGENTS.md is a simple file that tells coding agents how we want them to work on this project.
</ExtendedNotes>

<!--
Instead of explaining the same project rules in every conversation, we can put them in the project itself.

AGENTS.md is a simple file that tells coding agents how we want them to work on this project.
-->

---

# From an Idea to a Specification

<div class="rte-flow mt-4 text-[0.65em]" style="flex-direction:column;">
  <div class="rte-flow-step">"Build a seed tracker"</div>
  <div>&darr;</div>
  <div class="rte-flow-step">Ask questions</div>
  <div>&darr;</div>
  <div class="rte-flow-step">Make decisions</div>
  <div>&darr;</div>
  <div class="rte-flow-step">Consider edge cases</div>
  <div>&darr;</div>
  <div class="rte-flow-step" style="border-color:var(--rte-accent); color:var(--rte-accent);">SPEC.md</div>
</div>

<ExtendedNotes>
A good specification does not come from simply making the prompt longer. It comes from asking questions and making decisions. Before we ask the AI to build something, we need to agree on what we're building.
</ExtendedNotes>

<!--
A good specification does not come from simply making the prompt longer. It comes from asking questions and making decisions.

Before we ask the AI to build something, we need to agree on what we're building.
-->

---
layout: statement
---

# Let's Build a Seed Tracker

<div class="rte-window mt-6" style="max-width:560px; margin-left:auto; margin-right:auto; font-size:0.65em;">
  <div class="rte-window-bar">
    <div class="rte-window-dot red"></div>
    <div class="rte-window-dot yellow"></div>
    <div class="rte-window-dot green"></div>
  </div>
  <div class="rte-window-body">
<b style="color:var(--rte-accent-green);">Seed Tracker</b><br/><br/>
My Seeds<br/><br/>
Tomato&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12 packets&nbsp;&nbsp;&nbsp;&minus;&nbsp;&nbsp;+<br/>
Basil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 packets&nbsp;&nbsp;&nbsp;&minus;&nbsp;&nbsp;+<br/>
Sunflower&nbsp;&nbsp;&nbsp;&nbsp;20 seeds&nbsp;&nbsp;&nbsp;&nbsp;&minus;&nbsp;&nbsp;+<br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Add Seed
  </div>
</div>

<p class="mt-6 text-[0.7em] opacity-70">GitHub Codespaces &middot; GitHub Copilot</p>

<ExtendedNotes>
We're going to start with an empty project: no application, no source code. By the end, we want a small working Seed Tracker.
</ExtendedNotes>

<!--
We're going to start with an empty project. No application, no source code.

By the end, we want a small working Seed Tracker.
-->

---
layout: section
---

# Before We Start

Get GitHub Copilot ready to go

---

# Setting Up: GitHub Copilot Access

<div class="text-[0.78em] leading-snug">

- Copilot Chat needs a GitHub account with Copilot access enabled.
- Two ways to get it:

</div>

<div class="grid grid-cols-2 gap-6 mt-3 text-[0.7em]">
<div class="rte-card">

**Fastest: Copilot Free**
- Works on any personal GitHub account.
- No application, available immediately.
- A limited number of chat messages and completions per month, plenty for today.

</div>
<div class="rte-card" style="border-color:var(--rte-accent);">

**More generous: GitHub Education**
- Free upgraded Copilot access for verified students.
- Requires an application and school verification.
- <b style="color:var(--rte-accent);">Apply days before the workshop</b>, approval isn't instant.

</div>
</div>

<ExtendedNotes>
Do this step before workshop day. If your GitHub Education application hasn't been approved yet when we start, the Copilot Free tier is enough to complete today's activity.
</ExtendedNotes>

<!--
{{Ask in advance: has everyone already got a GitHub account and Copilot enabled?}} Do this step before workshop day. If your GitHub Education application hasn't been approved yet when we start, the Copilot Free tier is enough to complete today's activity.
-->

---

# Applying for GitHub Education

<div class="text-[0.72em] leading-snug">

1. Go to `education.github.com` and sign in (or create a free account first).
2. Click **Get benefits** and choose **Student**.
3. Use your school email if you have one; otherwise upload a photo of your student ID or another proof of enrollment.
4. Submit the application and wait for a decision — approval can take **1–2 days**, so apply well before the workshop.
5. Once approved, Copilot access upgrades automatically. No extra step needed.

</div>

<p class="mt-6 text-center text-[0.65em] rte-card" style="max-width:600px; margin-left:auto; margin-right:auto;">It's workshop day. If you don't have approval yet, don't worry: use Copilot Free (see previous slide) and switch later.</p>

---

# Day of the Workshop: Checklist

<div class="text-[0.8em] leading-snug">

- Signed in to GitHub in the browser.
- Opened the workshop repository and started a Codespace (**Code &rarr; Codespaces &rarr; Create codespace**).
- VS Code opened in the browser, project loaded.
- Opened the **Copilot Chat** panel.
- Selected **Agent** mode in the chat panel (not "Ask" or "Edit").

</div>

<p class="mt-8 text-center text-[0.75em] opacity-70">If Copilot Chat isn't visible, look for the Copilot icon in the VS Code sidebar or activity bar.</p>

---
layout: section
---

# Part 2: Hands-On Activity

---

# Activity Goal

<p class="text-[0.85em]">Build a simple web application called <b>Seed Tracker</b> from an empty repository using GitHub Codespaces and GitHub Copilot Agent mode.</p>

<div class="rte-flow mt-6 text-[0.6em]" style="flex-wrap:wrap;">
  <div class="rte-flow-step">IDEA</div><div>&rarr;</div>
  <div class="rte-flow-step">BRAINSTORM</div><div>&rarr;</div>
  <div class="rte-flow-step">SPECIFICATION</div><div>&rarr;</div>
  <div class="rte-flow-step">CONTEXT</div><div>&rarr;</div>
  <div class="rte-flow-step">PLAN</div><div>&rarr;</div>
  <div class="rte-flow-step">BUILD</div><div>&rarr;</div>
  <div class="rte-flow-step">TEST</div><div>&rarr;</div>
  <div class="rte-flow-step" style="border-color:var(--rte-accent); color:var(--rte-accent);">IMPROVE</div>
</div>

<p class="mt-6 text-center text-[0.7em] rte-card" style="max-width:560px; margin-left:auto; margin-right:auto;">You direct the AI and make the decisions. The coding agent handles most of the implementation.</p>

---

# Step 1: Create a Repository and Open a Codespace

<div class="grid grid-cols-2 gap-6 mt-4 text-[0.75em]">
<div>

1. We create a new, empty repository on GitHub.
2. **Code &rarr; Codespaces &rarr; Create codespace**.
3. VS Code opens in the browser.
4. We open GitHub Copilot Chat.
5. We select **Agent** mode.

</div>
<div class="rte-card" style="font-family:monospace;">
seed-tracker/<br/>
&nbsp;&nbsp;&nbsp;&nbsp;README.md
</div>
</div>

<p class="mt-6 text-center text-[0.75em] opacity-80">"This is our starting point. We have an idea, but we do not have an application."</p>

---

# Step 2: Brainstorm the Requirements

<div class="rte-prompt mt-4 text-[0.58em]">
We want to build a simple web application called Seed Tracker
for keeping track of a collection of seeds.

Help me refine the idea before we write any code.

Ask me questions one at a time about: users, data, features,
rules, and important edge cases.

Keep the scope small enough to build a prototype in about
15 minutes. Do not write code yet.
</div>

<p class="mt-3 text-center text-[0.65em] font-bold" style="color:var(--rte-accent);">The specification should emerge from discussion, not be assumed at the start.</p>

<ExtendedNotes>
Discuss the questions with the class. Possible decisions: users are community garden volunteers; a seed has a name, category, quantity, and unit; actions are view, add, use, and restock; quantity can never go negative, and 5 or fewer units counts as low stock.
</ExtendedNotes>

<!--
{{Discuss the questions with the class as they come up.}} Possible decisions: users are community garden volunteers; a seed has a name, category, quantity, and unit; actions are view, add, use, and restock; quantity can never go negative, and 5 or fewer units counts as low stock.
-->

---

# Step 3: Create the Specification

<div class="rte-prompt mt-4 text-[0.58em]">
Based on our discussion, summarize the agreed design as a
concise SPEC.md.

Include: purpose, users, data we track, features, business
rules, important edge cases, acceptance criteria, and
explicitly out-of-scope features.

Do not implement anything yet.
</div>

<p class="mt-3 text-center text-[0.7em] opacity-80">"This document tells us what 'correct' means."</p>

<ExtendedNotes>
Checkpoint: the repository should now contain README.md and SPEC.md, with agreed rules such as: quantity cannot be negative, using more than what's available is rejected, seed names can't be empty, and 5 or fewer units is low stock.
</ExtendedNotes>

<!--
{{Checkpoint: repo should now contain README.md and SPEC.md.}} Agreed rules typically include: quantity cannot be negative, using more than what's available is rejected, seed names can't be empty, and 5 or fewer units is low stock.
-->

---

# Step 4: Give the Agent Project Instructions

<div class="rte-prompt mt-4 text-[0.58em]">
Create an AGENTS.md file for this project. Include:

- Keep the application simple.
- Use HTML, CSS, and JavaScript.
- Avoid unnecessary libraries and frameworks.
- Follow SPEC.md. Do not add features outside it.
- Quantity must never become negative.
- Keep the interface simple and easy to use.
- Test important inventory behavior.
</div>

<div class="rte-flow mt-4 text-[0.6em]">
  <div class="rte-flow-step">SPEC.md<br/><span class="opacity-70">what we're building</span></div>
  <div class="rte-flow-step" style="border-color:var(--rte-accent); color:var(--rte-accent);">AGENTS.md<br/><span class="opacity-70">how the agent should work</span></div>
</div>

---

# Step 5: Ask the Agent to Plan

<div class="rte-prompt mt-4 text-[0.58em]">
Read SPEC.md and AGENTS.md.

Create a short implementation plan for building the Seed
Tracker from scratch. Identify which files need to be
created, what each file should do, and how we will verify
the important business rules.

Do not write the implementation yet.
</div>

<p class="mt-3 text-center text-[0.7em] opacity-80">"We started with an idea. Now the agent has a concrete plan for turning it into software."</p>

---

# Step 6: Build the Application

<div class="rte-prompt mt-4 text-[0.58em]">
Implement the approved plan. Build the complete Seed
Tracker described in SPEC.md, following AGENTS.md.

Include a few example seeds so we can immediately see the
application working.

When finished, run the application so we can test it.
</div>

<p class="mt-3 text-center text-[0.7em] opacity-80">"A few minutes ago the repository was empty. We described what we wanted, and the agent turned the specification into a working application."</p>

---

# Step 7: Try to Break It

<div class="text-[0.8em] leading-snug">

Use the application. Try to:

- increase and decrease a quantity
- add a seed
- repeatedly click minus
- try unusual or invalid input

</div>

<p class="mt-6 text-center text-[0.85em]">What happens when the quantity reaches zero?</p>

<p class="mt-4 text-center text-[0.9em] font-bold" style="color:var(--rte-accent);">It looks like it works. But appearances aren't enough. AI makes mistakes.</p>

---

# Step 8: Test the Important Rules

<div class="rte-prompt mt-4 text-[0.58em]">
Review SPEC.md and identify the most important inventory
behaviors that should be tested.

Add automated tests for: increasing quantity, decreasing
quantity, quantity reaching zero, and quantity never
becoming negative.

Run the tests. If a test fails, investigate and fix the
implementation. Do not change the specification just to
make the test pass.
</div>

<div class="rte-flow mt-3 text-[0.55em]" style="flex-direction:column;">
  <div class="rte-flow-step">SPECIFICATION</div><div>&darr;</div>
  <div class="rte-flow-step">TESTS</div><div>&darr;</div>
  <div class="rte-flow-step">FEEDBACK</div><div>&darr;</div>
  <div class="rte-flow-step" style="border-color:var(--rte-accent); color:var(--rte-accent);">CODE</div>
</div>

---

# Step 9: Change the Requirements

<p class="mt-3 text-[0.75em]">New requirement: <i>volunteers want to search for seeds by name.</i></p>

<p class="mt-3 text-[0.75em]">What should we do before asking the AI to code? <span class="opacity-70">Clarify the requirement and update the specification first.</span></p>

<div class="rte-prompt mt-4 text-[0.56em]">
We have a new requirement: volunteers need to search the
inventory by seed name.

Before coding, identify any ambiguity in this requirement
and ask me what you need to know.
</div>

<p class="mt-3 text-[0.7em] font-bold" style="color:var(--rte-accent);">Software development is iterative. Requirements change, and our specification, code, and tests change with them.</p>

<ExtendedNotes>
Decide together: search should be case-insensitive, partial, and an empty search shows all seeds. Then ask the agent to update the implementation, add tests, and verify existing requirements still work.
</ExtendedNotes>

<!--
Decide together: search should be case-insensitive, partial, and an empty search shows all seeds. Then ask the agent to update the implementation, add tests, and verify existing requirements still work.
-->

---
layout: statement
---

# AI Changes How We Build Software

<div class="grid grid-cols-2 gap-8 mt-6 text-[0.65em] text-left">
<div class="rte-card">

**The human decides**
- What to build
- What "correct" means
- What the requirements are
- Whether the result is acceptable

</div>
<div class="rte-card">

**The agent can help with**
- Exploring
- Planning
- Coding
- Running tools, testing, fixing problems

</div>
</div>

<p class="mt-8 text-[0.8em] font-bold" style="color:var(--rte-accent);">AI does not replace the software-development process. It changes who does more of the work.</p>

---
layout: statement
---

# Thank You

<p class="text-[0.9em] opacity-80 mt-2">Reboot the Earth &middot; Doha 2026</p>
