# AGENTS.md: How the AI agent should work on this project

`SPEC.md` says **what** the app should do. This file says **how** you, the coding agent, should work on it.

> Sections marked **🌍 Reboot the Earth** are extra rules we added for the Reboot the Earth hackathon.

## General

- **Follow `SPEC.md`.** Don't add features that are not in the spec. If something is unclear or missing, **ask us** instead of guessing.
- **Keep it simple.** The people maintaining this app are volunteers, not professional programmers. Prefer simple, readable code over clever code.
- **Plan before building.** Before writing code, propose a short plan and wait for our approval.
- **Work in small steps.** After each step, tell us what changed and how to try it.

## Technology

- Use **plain HTML, CSS and JavaScript**: no frameworks, no build step.
- Save data in the browser with **`localStorage`**. No server, no database.
- **Avoid unnecessary dependencies.** Ask before adding any library.
- The app must run by opening `index.html` in a browser, or with a simple static server in Codespaces (`python3 -m http.server 8000`).
- Keep the **business rules** (quantities, stock status, validation) in their own file with no web page code, so they can be tested on their own.

## Testing

- **Write automated tests for the business rules and acceptance criteria** in `SPEC.md` (especially quantities and stock status).
- Use Node's **built-in test runner** (`node --test`), which needs no extra packages.
- **If a test fails, fix the code, not the spec.** Never change `SPEC.md` or weaken a test just to make it pass. If you think the spec is wrong, tell us and let us decide.

## When requirements change

- Before changing code, **list the ambiguities** in the new requirement and ask us to decide.
- **Update `SPEC.md` first**, then the code, then the tests.

---

> [!IMPORTANT]
> ## 🌍 Reboot the Earth additions
>
> ### 1. Good documentation
> - Every file starts with a short comment explaining what it is for.
> - Every function has a short comment (JSDoc style): what it does, its inputs, and what it returns.
> - Write comments for **beginners**: explain *why*, not only *what*.
> - Keep a `README.md` that explains what the app is, how to run it, how to run the tests, and how the files fit together.
>
> ### 2. Prefer open-source dependencies
> - If a dependency is really needed, choose a **well-maintained open-source** one with a permissive license (MIT, Apache-2.0, BSD). Explain why it is needed and ask us first.
> - Never use paid or closed-source services, and don't send user data to external services.
> - Don't load fonts, icons or scripts from external CDNs. Use system fonts and plain CSS.
>
> ### 3. Black and blue theme
> - Use a **dark theme**: black or very dark background, **blue** as the main accent color (buttons, links, headings), and white or light gray text.
> - Keep enough **contrast** to be readable (accessibility), and use color **plus text** for statuses (don't rely on color alone).
> - Put colors in CSS variables at the top of `style.css` so they are easy to change.
>
> ### 4. Connect features to the SDGs
> - Link every feature to the **UN Sustainable Development Goals (SDGs)** it supports:
>   - **SDG 2 Zero Hunger** (target 2.5: keep the genetic diversity of seeds): tracking seed varieties
>   - **SDG 11 Sustainable Cities and Communities** (target 11.7: green public spaces): supporting a community garden
>   - **SDG 12 Responsible Consumption and Production**: using what we have and buying only what is needed (low-stock warnings)
>   - **SDG 15 Life on Land**: keeping a variety of plants growing
> - Mention the related SDG in code comments for each feature, in `README.md`, and in a short "Why this matters" section in the app itself.
