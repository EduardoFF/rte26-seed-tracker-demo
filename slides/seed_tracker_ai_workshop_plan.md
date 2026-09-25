# Slide Deck + Lesson Plan: Build Your First App with AI

## Session Overview

**Title:** Build Your First App with AI  
**Subtitle:** From idea to a working Seed Tracker in 30 minutes

**Audience:** High-school students and participants with little or no programming experience

**Total duration:** 40 minutes
- 10 minutes: introduction slides
- 30 minutes: hands-on activity

**Tools:** GitHub Codespaces + GitHub Copilot Agent mode

**Core message:**

> AI can write code, but it can also make mistakes. Coding agents can inspect a project, modify files, run tools, and iterate. We can make them more useful by giving them clear requirements, persistent project context, and ways to check their work.

---

# Part 1 — Introduction Slides — 10 minutes

The introduction should be fast and visual. Avoid detailed technical explanations. The goal is to give students just enough context to understand what they are about to do.

Use the existing **Software Engineering with AI** deck as the primary source for the conceptual material.

## Slide 1 — AI Can Write Code

### Content

**Code is a language**

- LLMs can learn programming patterns from source code.
- Modern models can generate increasingly complex programs from natural-language descriptions.

### Visual

Adapt the existing **"Code Generation with LLMs"** slide from page 18 of the reference deck.

### Speaker notes

Most of you have probably seen AI generate a few lines of code. Today we're going to take that a step further. Instead of asking AI for one function, we're going to ask it to help us build a complete, small application.

**Time:** 1 minute

---

## Slide 2 — AI Makes Mistakes

### Content

- AI-generated code can be incorrect.
- It can misunderstand what we ask for.
- Generated code still needs to be checked.

### Highlight

> **AI is powerful, but it is not automatically correct.**

### Visual

Adapt the existing **"LLMs are far from perfect"** slide from page 10.

### Speaker notes

AI can write code very quickly, but that doesn't mean the code is correct. So the important question is not only "Can AI write code?" It is also "How do we use AI when it can make mistakes?"

**Time:** 1 minute

---

## Slide 3 — From Coding Assistant to Coding Agent

### Content

### Coding assistant

- Generates code
- Explains code
- Suggests changes

### Coding agent

- Explores the project
- Modifies files
- Runs commands and tools
- Iterates based on results

### Visual

Adapt the existing **"Programming assistants vs coding agents"** slide from page 20.

### Speaker notes

A coding assistant helps us write code. A coding agent can take a goal, look around the project, change files, run the application or tests, see what happened, and continue working.

**Time:** 1.5 minutes

---

## Slide 4 — The Agent Loop

### Content

```text
GOAL
  ↓
PLAN
  ↓
ACT
  ↓
OBSERVE
  ↺
```

**Repeat until the task is complete.**

### Visual

Adapt the **"From workflows to agents"** diagram from page 13.

### Speaker notes

This is the basic idea behind an agent. We give it a goal. It decides what to do, takes an action, observes the result, and continues.

Today we're going to see this happen while we build an application.

**Time:** 1.5 minutes

---

## Slide 5 — Give the Agent Context

### Content

```text
PROMPT
"Add this feature"

        +

AGENTS.md
"Here is how this project works"

        ↓

More consistent AI work
```

### Supporting text

- AI agents need context about a project.
- Persistent project instructions can live in the repository.
- `AGENTS.md` is a simple Markdown file for coding-agent instructions.

### Visual

Adapt slides 22–24 from the reference deck.

### Speaker notes

Instead of explaining the same project rules in every conversation, we can put them in the project itself.

`AGENTS.md` is a simple file that tells coding agents how we want them to work on this project.

**Time:** 2 minutes

---

## Slide 6 — From an Idea to a Specification

### Main visual

```text
"Build a seed tracker"
          ↓
     Ask questions
          ↓
 Make decisions
          ↓
 Consider edge cases
          ↓
   Define what "done"
        means
          ↓
       SPEC.md
```

### Example

**Idea**

> Track seeds for a community garden.

**Questions**

> Who uses it?  
> What is a seed inventory item?  
> What can users do?  
> What happens at zero?  
> What counts as low stock?

**Specification**

> Features + rules + acceptance criteria

### Speaker notes

A good specification does not come from simply making the prompt longer. It comes from asking questions and making decisions.

Before we ask the AI to build something, we need to agree on what we're building.

**Time:** 1.5 minutes

---

## Slide 7 — Let's Build It

### Title

# Let's Build a Seed Tracker

### Visual

```text
🌱 Seed Tracker

My Seeds

Tomato       12 packets    −  +
Basil          4 packets   −  +
Sunflower     20 seeds     −  +

             + Add Seed
```

### Bottom

```text
30 minutes
GitHub Codespaces
GitHub Copilot
```

### Speaker notes

We're going to start with an empty project. No application, no source code.

By the end, we want a small working Seed Tracker.

**Time:** 1.5 minutes

---

# Part 2 — Hands-On Activity — 30 minutes

## Activity Goal

Build a simple web application called **Seed Tracker** from an empty repository using GitHub Codespaces and GitHub Copilot Agent mode.

Students should not need to write code manually. They will:

1. Describe the application.
2. Brainstorm requirements with the AI.
3. Create a specification.
4. Give the project persistent instructions.
5. Ask the agent to plan and implement the application.
6. Ask the agent to test important behavior.
7. Change one requirement and update the application.

---

## Activity Workflow

```text
IDEA
  ↓
BRAINSTORM
  ↓
SPECIFICATION
  ↓
PROJECT CONTEXT
  ↓
PLAN
  ↓
BUILD
  ↓
TEST
  ↓
IMPROVE
```

### Key principle

Students should direct the AI and make decisions, while the coding agent handles most of the implementation.

---

# Step 1 — Open the Codespace

**Time:** 0–3 minutes

### Student actions

1. Open the provided GitHub repository.
2. Select **Code → Codespaces → Create codespace**.
3. Wait for VS Code to open in the browser.
4. Open GitHub Copilot Chat.
5. Select **Agent** mode.

### Starting repository

```text
seed-tracker/
└── README.md
```

### Instructor message

> This is our starting point. We have an idea, but we do not have an application.

### Checkpoint

Everyone should have an empty project open in Codespaces.

---

# Step 2 — Brainstorm the Requirements

**Time:** 3–7 minutes

### Give Copilot this prompt

```text
We want to build a simple web application called Seed Tracker
for keeping track of a collection of seeds.

We have not decided exactly how the application should work.

Help me refine the idea before we write any code.

Ask me questions one at a time about:
- users
- data
- features
- rules
- important edge cases

When useful, give me 2–3 reasonable options.

Keep the scope small enough to build a prototype in about 15 minutes.

Do not write code yet.
```

### Instructor interaction

Discuss the questions with the class.

Possible decisions:

**Users**
- Community garden volunteers

**Seed information**
- Name
- Category
- Quantity
- Unit

**Actions**
- View inventory
- Add seed
- Use seeds
- Restock seeds

**Rules**
- Quantity cannot be negative.
- Quantity can be zero.
- Using more seeds than available is not allowed.
- Seed name cannot be empty.
- Quantity of 5 or less is considered low stock.

### Important teaching point

> **The specification should emerge from discussion, not be assumed at the beginning.**

---

# Step 3 — Create the Specification

**Time:** 7–10 minutes

### Prompt

```text
Based on our discussion, summarize the agreed design as a concise
SPEC.md.

Include:
1. Purpose
2. Users
3. Data we track
4. Features
5. Business rules
6. Important edge cases
7. Acceptance criteria
8. Explicitly out-of-scope features

Do not implement anything yet.
```

### Expected specification

```md
# Seed Tracker Specification

## Purpose

Help volunteers at a community garden keep track of
the seeds currently available.

## Users

Community garden volunteers.

## Seed

Each seed variety has:

- Name
- Category
- Quantity
- Unit

## Features

### View inventory

Volunteers can see all seeds and their current quantities.

### Add seed

Volunteers can add a new seed variety.

### Use seeds

Volunteers can decrease the available quantity.

### Restock seeds

Volunteers can increase the available quantity.

### Low stock

A seed is marked LOW STOCK when 5 or fewer units remain.

## Business Rules

- Quantity cannot be negative.
- Quantity can be zero.
- New seeds cannot have a negative starting quantity.
- Using more seeds than are available is not allowed.
- Seed names cannot be empty.

## Acceptance Criteria

Given Tomato has 10 packets,
when 3 packets are used,
7 packets remain.

Given Tomato has 2 packets,
when someone tries to use 3,
the operation is rejected and quantity remains 2.

Given Basil has 5 packets,
it is displayed as LOW STOCK.

Given Basil has 6 packets,
it is not displayed as LOW STOCK.

## Out of Scope

- User accounts
- Database
- Multiple gardens
- Suppliers
- Expiration dates
- Cloud deployment
```

### Instructor message

> This document tells us what "correct" means.

### Checkpoint

Repository now contains:

```text
README.md
SPEC.md
```

---

# Step 4 — Give the Agent Project Instructions

**Time:** 10–12 minutes

### Prompt

```text
Create an AGENTS.md file for this project.

Include these instructions:

- Keep the application simple.
- Use HTML, CSS, and JavaScript.
- Avoid unnecessary libraries and frameworks.
- Follow SPEC.md.
- Do not add features outside the specification.
- Quantity must never become negative.
- Keep the interface simple and easy to use.
- Test important inventory behavior.
```

### Visual checkpoint

```text
SPEC.md
"What are we building?"

AGENTS.md
"How should the agent work?"
```

### Instructor message

> SPEC.md tells the agent what we are building. AGENTS.md tells the agent how to work on the project.

---

# Step 5 — Ask the Agent to Plan

**Time:** 12–14 minutes

### Prompt

```text
Read SPEC.md and AGENTS.md.

Create a short implementation plan for building the
Seed Tracker from scratch.

Identify:
- which files need to be created
- what each file should do
- how we will verify the important business rules

Do not write the implementation yet.
```

### Expected plan

```text
1. Create the HTML interface.
2. Create the inventory data model.
3. Display the inventory.
4. Add new seeds.
5. Implement restocking.
6. Implement using seeds.
7. Add the low-stock indicator.
8. Add tests for inventory rules.
9. Run and verify the application.
```

### Instructor message

> We started with an idea. Now the agent has a concrete plan for turning it into software.

---

# Step 6 — Build the Application

**Time:** 14–21 minutes

### Prompt

```text
Implement the approved plan.

Build the complete Seed Tracker described in SPEC.md.

Follow the project instructions in AGENTS.md.

Keep the implementation simple.

Include a few example seeds so we can immediately see
the application working.

When finished, run the application so we can test it.
```

### Expected files

```text
seed-tracker/
├── AGENTS.md
├── SPEC.md
├── README.md
├── index.html
├── style.css
└── script.js
```

### Expected interface

```text
🌱 Seed Tracker

My Seeds

Tomato       12 packets    −  +
Basil          4 packets   −  +
Sunflower     20 seeds     −  +

             + Add Seed
```

### Instructor message

> A few minutes ago the repository was empty. We described what we wanted, and the agent turned the specification into a working application.

---

# Step 7 — Try to Break It

**Time:** 21–24 minutes

### Student actions

Use the application.

Try to:

- increase a quantity
- decrease a quantity
- add a seed
- repeatedly click minus
- try unusual or invalid input

### Instructor question

> What happens when the quantity reaches zero?

### Teaching point

> It looks like it works. But appearances aren't enough.

Connect back to the earlier slide:

> **AI makes mistakes.**

---

# Step 8 — Test the Important Rules

**Time:** 24–27 minutes

### Prompt

```text
Review SPEC.md and identify the most important inventory
behaviors that should be tested.

Add automated tests for:

1. increasing quantity
2. decreasing quantity
3. quantity reaching zero
4. quantity never becoming negative

Run the tests.

If a test fails, investigate and fix the implementation.

Do not change the specification just to make the test pass.
```

### Expected result

```text
✓ increases quantity
✓ decreases quantity
✓ allows zero quantity
✓ prevents negative quantity

4 tests passed
```

### Instructor message

> We don't have to trust the AI. We can give it feedback and check its work.

### Key idea

```text
SPECIFICATION
       ↓
    TESTS
       ↓
   FEEDBACK
       ↓
      CODE
```

---

# Step 9 — Change the Requirements

**Time:** 27–30 minutes

### New requirement

> The community garden now wants volunteers to search for seeds by name.

### First question

Ask students:

> What should we do before asking the AI to code?

Expected answer:

> Clarify the requirement and update the specification.

### Prompt

```text
We have a new requirement:

Volunteers need to search the inventory by seed name.

Before coding, identify any ambiguity in this requirement
and ask me what you need to know.
```

### Decide

Search should be:

- case-insensitive
- partial
- empty search shows all seeds

### Update specification

Add:

```md
### Search

Volunteers can search inventory by seed name.

- Search is case-insensitive.
- Partial names match.
- An empty search shows all seeds.
```

### Implementation prompt

```text
Update the implementation to satisfy the revised specification.

Add appropriate tests.

Run the tests and verify that the existing requirements
still work.
```

### Final teaching point

> Software development is iterative. Requirements change, and our specification, code, and tests change with them.

---

# Final Takeaway Slide

## Title

# AI Changes How We Build Software

### Visual

```text
IDEA
  ↓
SPECIFICATION
  ↓
PROJECT CONTEXT
  ↓
AI AGENT
  ↓
CODE
  ↓
TEST
  ↓
WORKING APP
```

### Key message

**The human decides:**
- What to build
- What "correct" means
- What the requirements are
- Whether the result is acceptable

**The agent can help with:**
- Exploring
- Planning
- Coding
- Running tools
- Testing
- Fixing problems

### Closing line

> **AI does not replace the software-development process. It changes who does more of the work.**

---

# Instructor Preparation

## Repository

Start with an essentially empty GitHub repository:

```text
seed-tracker/
└── README.md
```

Do not include the application implementation.

## Codespaces

Preconfigure the Codespace so students do not need to install development tools manually.

Students should be able to:

1. Open the repository.
2. Create a Codespace.
3. Open Copilot Agent mode.
4. Start working.

## Technology

Use:

- HTML
- CSS
- JavaScript

Avoid:

- React
- databases
- authentication
- APIs
- external services
- complicated build systems

The objective is not to teach a specific programming framework. The objective is to demonstrate an AI-assisted software-development workflow.

## Backup

Prepare screenshots or a short recording of the completed application in case Copilot or Codespaces experiences an issue during the live activity.
