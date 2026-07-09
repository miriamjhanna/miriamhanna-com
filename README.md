# miriamhanna.com

Personal portfolio site for Miriam Hanna — a React rebuild of a previous Neocities site, with a
camera/polaroid visual theme, an animated intro sequence, and pages for projects, résumé, and
contact.

**Live site:** not yet deployed — link goes here once the custom domain is attached.

> Status: early scaffold. The app skeleton, tooling, and repo are set up; the actual pages and
> animations have not been built yet.

## Tech stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- React Router
- [GSAP](https://gsap.com/) (sequenced intro animation) + [Framer Motion](https://www.framer.com/motion/) (shared-element transitions, micro-interactions)
- CSS Modules
- [Formspree](https://formspree.io/) (contact form — no email address is stored in this repo)
- ESLint + Prettier
- Docker (multi-stage build → nginx) for deployment

## Local development

```
npm install
npm run dev       # start the dev server
npm run build     # type-check and produce a production build in dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
npm run format    # run Prettier
```

Requires Node 24 (see `.nvmrc`).

## Project structure

```
src/
  routes/        # one file per page/route
  components/    # organized by feature area (home, skills, projects-menu, project-detail, contact, layout, ui)
  hooks/
  data/          # typed content: skills, projects, résumé
  styles/        # global styles + design tokens
  assets/
```

## Deployment

Built as a static site and served via a multi-stage Docker build (Node build stage → nginx
runtime stage). See `Dockerfile` (added once the app is ready to deploy) for details.

## License

No license — all rights reserved. This repository is public for portfolio/demonstration
purposes only; the code may not be copied, reused, modified, or redistributed without
permission.

© 2026 Miriam Hanna.
