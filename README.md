# rte26-seed-tracker-demo: Seed Tracker

A simple web app that helps a community garden keep track of its seed inventory.
Built for the **Reboot the Earth** hackathon with an AI coding agent.

- What the app should do: [`SPEC.md`](SPEC.md)
- How the AI agent should work: [`AGENTS.md`](AGENTS.md)
- The build plan: [`PLAN.md`](PLAN.md)

## How to run it

No installation needed.

- **On your computer:** open `index.html` in a web browser.
- **In GitHub Codespaces:** run `python3 -m http.server 8000` in the terminal, then open the forwarded port 8000.

## How the files fit together

| File | What it does |
|---|---|
| `index.html` | The page layout |
| `style.css` | Black and blue theme |
| `inventory.js` | Business rules: stock status, use and restock, amount checks (no web page code) |
| `app.js` | Draws the seed table, handles the buttons, saves data in the browser (`localStorage`) |

## Status

Sprint 2 of 3 done: volunteers can use and restock seeds, and data is saved in the browser.
