# Implementation plan

Based on `SPEC.md` (what to build) and `AGENTS.md` (how to build it).

## Technology choices

| Choice | Why |
|---|---|
| Plain **HTML + CSS + JavaScript** | Nothing to install, runs in any browser, easy for beginners to read. |
| **`localStorage`** for saving data | Built into every browser. No server or database needed (spec: one device). |
| **Node's built-in test runner** (`node --test`) | Open source, already installed in Codespaces, no extra packages. |
| No external libraries | Keeps the project simple (`AGENTS.md`). |

## Files

```
index.html        The page: layout, forms and the seed table
style.css         Black and blue theme (colors in CSS variables)
inventory.js      Business rules only: quantities, stock status, validation (no web page code)
app.js            Connects the page to inventory.js and saves to localStorage
README.md         What the app is, how to run it, how files fit together, SDG links
tests/            Automated tests for the business rules (added after the sprints)
```

`inventory.js` has no web page code, so the rules in `SPEC.md` can be tested on their own.

## Sprints

We build the app in **three small sprints**. After each sprint the app runs and we can try it.

### Sprint 1: See the inventory (F1, F5)
- Create `index.html`, `style.css` (black and blue theme) and `inventory.js`.
- Add the **example seeds** (AC1), including one with 5 packets and one with 0 packets so every status shows up.
- Show the seed table: name, variety, packets and **stock status** (Out of stock / Low stock / In stock) (AC7).
- Add the "Why this matters" SDG section and a first `README.md`.
- **Try it:** open the page and check the list and the statuses.

### Sprint 2: Use and restock (F3, F4)
- Add **Use** and **Restock** controls to each row.
- Enforce rules R1–R3: whole numbers ≥ 1, never use more than available, never negative (AC2–AC6).
- Show a clear message when something is refused.
- **Save to `localStorage`** so changes survive a reload (AC10).
- **Try it:** use and restock seeds, try to break it with too many, 0, negative and decimal amounts, then reload the page.

### Sprint 3: Add new seeds (F2) and polish
- Add a form to **add a new seed** with name, optional variety and starting packets.
- Enforce R5–R7: name required, no duplicates (ignoring case), starting quantity can be 0 (AC8, AC9).
- Add a **"Reset to example data"** button so we can restart the demo.
- Documentation pass: file headers, function comments, SDG notes, complete `README.md`.
- **Try it:** add seeds, try an empty name and a duplicate.

### After the sprints: automated tests
- Write tests in `tests/` for the business rules and acceptance criteria, and run them with `node --test`.

## Out of scope (from `SPEC.md`)
Login, several devices, deleting seeds, search, history, extra seed fields.
