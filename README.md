# rte26-seed-tracker-demo: Seed Tracker

A simple web app that helps a community garden keep track of its seed inventory.
Built for the **Reboot the Earth** hackathon with an AI coding agent.

- What the app should do: [`SPEC.md`](SPEC.md)
- How the AI agent should work: [`AGENTS.md`](AGENTS.md)
- The build plan: [`PLAN.md`](PLAN.md)

## What it does

- Shows all seeds with the number of packets and a stock status (**In stock**, **Low stock** at 5 or fewer, **Out of stock** at 0).
- **Use** packets (never more than we have, never below zero) and **Restock** packets.
- **Add** new seeds (name required, no duplicates).
- Remembers everything in the browser, even after closing it.
- **Reset to example data** puts the demo seeds back.

## How to run it

No installation needed.

- **On your computer:** open `index.html` in a web browser.
- **In GitHub Codespaces:** run `python3 -m http.server 8000` in the terminal, then open the forwarded port 8000.

## How to run the tests

The tests use Node's built-in test runner, so there is nothing to install:

```
npm test
```

Each test is named after the acceptance criterion (AC) or rule (R) in `SPEC.md` that it checks.

## How the files fit together

```
index.html  ──loads──▶  inventory.js   (the rules: no web page code)
            ──loads──▶  app.js         (the page: buttons, table, saving)
            ──uses───▶  style.css      (black and blue theme)

tests/inventory.test.js  ──tests──▶  inventory.js
```

| File | What it does |
|---|---|
| `index.html` | The page layout: seed table, add form, SDG section |
| `style.css` | Black and blue theme. Colors are CSS variables at the top. |
| `inventory.js` | Business rules from `SPEC.md`: stock status, use/restock, adding seeds, checks |
| `app.js` | Draws the table, handles buttons and the form, saves data in the browser (`localStorage`) |
| `tests/inventory.test.js` | Automated tests for the rules in `inventory.js` |
| `package.json` | Lets you run `npm test` and `npm start` (no dependencies) |

## Why this matters: Sustainable Development Goals

| Feature | SDG |
|---|---|
| Tracking seed varieties | **SDG 2 Zero Hunger**, target 2.5: keep the genetic diversity of seeds |
| A tool for a community garden | **SDG 11 Sustainable Cities and Communities**, target 11.7: green public spaces |
| Low-stock warnings, use/restock tracking | **SDG 12 Responsible Consumption and Production**: buy only what we need, avoid waste |
| Growing many kinds of plants | **SDG 15 Life on Land**: local biodiversity |

## Status

All 3 sprints done, and 18 automated tests pass.

## License

MIT, see [`LICENSE`](LICENSE).
