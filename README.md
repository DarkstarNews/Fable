# New Marigold Secondary School — website

A fast, hand-crafted website for a community school in the Annapurna foothills
of Nepal. It does two jobs: it lets the school tell its own story, and it makes
great teachers around the world want to come teach a term.

Built with [Astro](https://astro.build) as a fully static site — no database,
no CMS, no server. It loads fast on village bandwidth, hosts for free, and a
non-developer can edit most of what matters by changing two data files.

## Quick start

```bash
npm install
npm run dev        # local preview at http://localhost:4321
npm run build      # static output in dist/
npm run check:images  # verify every photo URL still resolves
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/pages/` | One file per page: home, story, academics, teach, visit, support, contact, 404 |
| `src/data/site.ts` | School facts in one place — name, numbers, email, phone, map position |
| `src/data/images.json` | Every photo on the site: URL, backup URL, alt text, tone |
| `src/styles/global.css` | The whole design system (palette, type, components) |
| `src/components/` | Nav, footer, smart image, ridge dividers, prayer flags, logo |
| `scripts/check-images.mjs` | Link-checks every photo; CI runs it on each push |

## The image system

Photos are hot-linked from Unsplash and defined only in `src/data/images.json`.
Every slot has three layers:

1. the primary URL,
2. a backup URL that loads automatically if the primary dies,
3. a designed placeholder (ridge-line art on a toned gradient, with the
   caption) if both fail — the site never shows a broken-image icon.

**To replace a photo** — for example with the school's real photographs —
change the URL in `images.json` and update the `alt` text. Nothing else.
CI re-verifies all links on every push.

## Deploying

The included GitHub Actions workflow (`.github/workflows/site.yml`) builds the
site and deploys it to GitHub Pages from `main`. One-time setup: in the repo's
**Settings → Pages**, set the source to **GitHub Actions**. For a custom
domain (e.g. `newmarigold.edu.np`), add it in the same settings screen and
remove the `BASE_PATH` env from the workflow.

Self-hosted fonts (via Fontsource) mean there are no third-party font requests
— the only external dependency at runtime is the photography.

## A note on the content

Names of people are deliberately absent and the figures (enrollment, pass
rates, costs, dates) are realistic placeholders for the school to correct.
Treat `src/data/site.ts` and the page copy as a first draft written with love,
awaiting facts from the people who actually live there.
