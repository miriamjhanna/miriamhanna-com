# miriamhanna.com

Personal portfolio site for Miriam Hanna — a React rebuild of a previous Neocities site, with a
camera/polaroid visual theme, an animated intro sequence, and pages for projects, résumé, and
contact.

**Live site:** not yet deployed — link goes here once the custom domain is attached.

> Status: shared layout/theme system in place — navbar, footer, per-project accent theming,
> particle background, and routing all work across all 8 pages. Still to come: the camera/
> polaroid intro animation, categorized skills chips, project device mockups, and the contact
> form itself.

## Tech stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- React Router
- [@tsparticles/react](https://particles.js.org/) for the ambient background
- [GSAP](https://gsap.com/) (sequenced intro animation) + [Framer Motion](https://www.framer.com/motion/) (shared-element transitions, micro-interactions) — not wired in yet, added in a later pass
- CSS Modules
- [Formspree](https://formspree.io/) (contact form — no email address is stored in this repo) — not wired in yet
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
  components/
    layout/      # Navbar, Footer, SocialLinks, AmbientBackground, PageLayout (shared wrapper)
    ui/           # NavLink, IconButton
    home/, skills/, projects-menu/, project-detail/, contact/   # added as each is built out
  hooks/
  data/          # typed content: skills.ts, projects.ts, resumeContent.ts
  styles/        # global.css, tokens.css (theme/breakpoints)
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
