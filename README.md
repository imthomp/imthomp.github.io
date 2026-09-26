# imthomp.com

Personal site and research portfolio for Isaac Thompson, built with [Astro](https://astro.build) and Tailwind CSS. Deployed to GitHub Pages at [imthomp.com](https://imthomp.com).

## Structure

```text
src/
├── data/          # site content: bio, publications, CV entries
├── layouts/       # shared page shell (nav, footer, theme)
├── components/    # Nav, Footer
└── pages/         # index (about), research, cv
```

Content lives in `src/data/*.ts` — edit those files to update the bio, publications, or CV rather than the page templates.

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------- |
| `npm install`      | Install dependencies                         |
| `npm run dev`       | Start local dev server at `localhost:4321`   |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview the production build locally         |

Pushes to `main` auto-deploy via GitHub Actions (`.github/workflows/deploy.yml`).
