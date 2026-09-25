# Build Your First App with AI

Slidev deck for the "Reboot the Earth" workshop (Doha, 2026). This folder is a
standalone Slidev project — it does not depend on anything outside itself, so
it can be copied out of this repo and used on its own.

## Setup

Node **20.19+** is required — older 20.x patch releases (e.g. 20.16) are
missing a platform-binary feature that one of Slidev's native dependencies
needs, and `npm install` will silently skip it, which then breaks `dev` and
`export` with a confusing "Cannot find module '...rolldown-binding...'" error.

```bash
nvm install --lts   # one-time; installs a current LTS (well past 20.19)
nvm use --lts         # in every new terminal before running anything below
```

If `dev`/`export` ever fails with that rolldown error, it means the active
Node is too old — run `node --version`, then `nvm use --lts` and reinstall.

Install dependencies once, from this folder:

```bash
npm install
```

## Running the deck

```bash
npm run dev
```

Open the printed `localhost:3030` URL. Edits to `slides.md` hot-reload automatically.

## Exporting to PDF

Plain export (what you'd present or post publicly):

```bash
npm run export
```

Produces `slides-export.pdf` in this folder.

### "With lecture notes" export

Every slide with a note carries a public-facing `<ExtendedNotes>` block. To
print those onto the slides themselves:

```bash
npm run export:notes
```

This produces `rte-workshop-notes.pdf`. It's a two-step process under the
hood (see the script in `package.json`): Slidev's `src:` import mechanism
(used by `slides-notes.md` to pull in `slides.md` at a taller page size so
notes aren't clipped) produces a harmless phantom blank first page, which
`pdftk cat 2-end` strips off.

## Structure

```
rte-workshop/
├── package.json        # standalone dependencies (@slidev/cli, playwright-chromium)
├── slides.md            # the deck — present from this
├── slides-notes.md      # wrapper entry, only used for the notes-PDF export
├── theme/                # local Slidev theme (dark, "Reboot the Earth" branding)
│   ├── layouts/          # default, cover, section, statement
│   ├── components/       # Footer, ExtendedNotes
│   └── styles/           # colors, prompt/window/card components
└── public/images/        # deck illustrations and logos
```

## Known quirks worth knowing

- Never use `vh`-based sizing for images (`h-[50vh]`) — renders unreliably in
  Slidev's static export. Use a fixed pixel height instead
  (`class="... h-[NNNpx] max-w-full"`).
- After any layout change, export the affected slide to PNG and look at it —
  don't trust the markup alone:
  ```bash
  npx slidev export slides.md --format png --range N --output /tmp/slide-check
  ```
