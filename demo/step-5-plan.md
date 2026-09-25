# Step 5: Plan

## Prompt

> **Human:** Read `SPEC.md` and `AGENTS.md`. Propose a short implementation plan: which technology, which files, and in which order you will build things. Don't write any code yet.

## Agent's first answer (summary)

The agent proposed plain HTML/CSS/JS, `localStorage` for saving, a separate `inventory.js` for the business rules (so they can be tested), and one big "build everything" step followed by tests.

## Human review → change to the plan

> **Human:** Looks good, but one big step is too much to check at once. Split the building into **3 sprints**, and after each sprint the app should run so we can try it.

The agent updated the plan. See [`PLAN.md`](../PLAN.md).

## What to point out

- **The human reviews the plan** before any code is written. That's the cheapest moment to change direction.
- Each technology choice has a **"why"** that goes back to the spec or `AGENTS.md`.
- Every sprint says **which features (F) and acceptance criteria (AC)** it covers, so we can check the work against the spec.
- Next: the human says **"Go ahead with Sprint 1."**
