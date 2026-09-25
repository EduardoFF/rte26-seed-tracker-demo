# Step 4: Project context (`AGENTS.md`)

`SPEC.md` = **what** the software should do.
`AGENTS.md` = **how** the AI agent should work on this project. The agent reads it every time.

## Prompt

> **Human:** Create an `AGENTS.md` file with instructions for you, the coding agent. Tell yourself to: follow `SPEC.md` and ask when something is unclear, keep the implementation simple (plain HTML, CSS and JavaScript, no frameworks), avoid unnecessary dependencies, propose a plan before coding, and write tests for the important business rules. If a test fails, fix the code, not the spec.

## Follow-up prompt (Reboot the Earth additions)

> **Human:** We're building this for the Reboot the Earth hackathon. Add a clearly highlighted section with these extra rules:
> 1. The code should have good documentation that beginners can follow.
> 2. Prefer open-source dependencies (if any).
> 3. Use a black and blue theme.
> 4. Connect each feature to the UN Sustainable Development Goals (SDGs).

## What to point out

- The first part applies to **any** project. The highlighted part is specific to **our** hackathon.
- Nothing in `AGENTS.md` changes *what* the app does. It changes *how* the agent builds it (style, docs, tools, colors).
- From now on we don't need to repeat these instructions in every prompt.
