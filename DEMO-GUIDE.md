# Presenter guide: branch map

Every branch builds on the previous one, so `git diff step-X step-Y` always shows exactly what one step added.

| Branch | Stage | What to open / show |
|---|---|---|
| `main` | 0: Idea | `README.md`: one sentence, nothing else |
| `step-3` | 1–3: Idea → Brainstorm → Spec | `demo/step-3-brainstorm.md` (Q&A), then `SPEC.md` |
| `step-4` | 4: Project context | `AGENTS.md` (Reboot the Earth box at the bottom), `demo/step-4-agents.md` |
| `step-5` | 5: Plan | `demo/step-5-plan.md` (human asks for 3 sprints), `PLAN.md` |
| `step-6a` | 6: Sprint 1 | App: list and statuses. `demo/step-6-build.md` |
| `step-6b` | 6: Sprint 2 | App: Use / Restock, try to break it, reload |
| `step-6c` | 6: Sprint 3 | App: add seed, duplicate, empty name, reset button |
| `step-8` | 8: Tests | `demo/step-8-tests.md`: failing test → reasoning → 1-char fix |
| `step-9` | 9: Change | `demo/step-9-change.md`: 10 ambiguities → decisions → SPEC diff → code |
| `step-10` | Final | Clean repo: app, tests, `SPEC.md`, `AGENTS.md`, `README.md` |

## Switching branches live

```bash
git checkout step-6b
python3 -m http.server 8000     # leave running; just refresh the browser after each checkout
npm test                        # from step-8 on
```

Useful diffs:

```bash
git diff step-6c step-8 -- inventory.js   # the bug fix and the test export
git diff step-8 step-9 -- SPEC.md         # the spec change for search
```

## The planted bug (don't reveal before step 8)

From `step-6a` to `step-6c`, `getStockStatus()` uses `<` instead of `<=`, so **Tomato San Marzano (5 packets) shows "In stock"** instead of "Low stock". It's visible in the app from step 6a. If someone in the audience spots it early, great: "Let's see if the tests catch it too."

## Tips

- Data is saved in the browser's `localStorage`, so it carries over between branches. Click **Reset to example data** (from `step-6c`) to start fresh. On `step-6a`/`6b`, clear site data or use a private window.
- Step 7 (manual "try to break it") is folded into the step 6b/6c "Try to break it" notes.
