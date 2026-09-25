# Step 6: Build in sprints

## Sprint 1 prompt (branch `step-6a`)

> **Human:** The plan looks good. Go ahead with **Sprint 1** only. Tell us when it's done and how to try it.

**Agent:** Sprint 1 is done. I created `index.html`, `style.css`, `inventory.js` and `app.js`, and updated `README.md`.
The app shows 7 example seeds with their stock status, uses the black and blue theme, and has a "Why this matters" section with the SDGs.
To try it, open `index.html`, or in Codespaces run `python3 -m http.server 8000` and open port 8000.

**What to look at:** the list, the colored status badges, and the SDG section. Do the statuses match the spec?

## Sprint 2 prompt (branch `step-6b`)

> **Human:** Sprint 1 looks good. Continue with **Sprint 2**.

**Agent:** Sprint 2 is done. Each row now has an amount box with **Use** and **Restock** buttons.
The rules live in `inventory.js` (`checkAmount`, `useSeeds`, `restockSeeds`), and `app.js` only calls them and saves the result in `localStorage`.
If an amount is refused, a red message explains why and nothing changes.

**Try to break it:** use 99 packets, use 0, type `-3`, type `2.5`, leave the box empty. Then reload the page. Are the changes still there?

## Sprint 3 prompt (branch `step-6c`)

> **Human:** Sprint 2 works, we couldn't make the numbers go negative. Continue with **Sprint 3**.

**Agent:** Sprint 3 is done:
- New **"Add a new seed"** form. `createSeed()` in `inventory.js` checks that the name isn't empty, that it isn't a duplicate (ignoring case and spaces), and that the starting packets are a whole number of 0 or more.
- **"Reset to example data"** button, so you can restart the demo.
- Documentation pass: every file has a header comment, every function has a JSDoc comment with the SDG it supports, and `README.md` now explains how to run the app, how the files fit together, and the SDG links.

**Try to break it:** add a seed with an empty name, add "tomato / cherry" (it already exists as "Tomato / Cherry"), add "Pepper" with 0 packets.
