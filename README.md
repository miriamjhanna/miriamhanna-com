# miriamhanna.com

Personal portfolio site for Miriam Hanna — a React rebuild of a previous Neocities site, with a
camera/polaroid visual theme, an animated intro sequence, and pages for projects, résumé, and
contact.

**Live site:** not yet deployed — link goes here once the custom domain is attached.

> Status: the signature camera/polaroid intro is live — a ~16s GSAP sequence (skippable, and
> played once per session) that hands off to Framer Motion shared-element transitions: the
> printed polaroid settles into the hero, and clicking it carries it down into the About
> section. The Skills section shows 20 skills as categorized chips, and the Projects page is a
> working digital-camera carousel (flash + slide transitions, touch controls on mobile). Still
> to come: project detail pages with device mockups + demo videos, and the contact form.

## Tech stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- React Router
- [@tsparticles/react](https://particles.js.org/) for the ambient background
- [GSAP](https://gsap.com/) (`@gsap/react`) for the sequenced camera/polaroid intro timeline
- [Framer Motion](https://www.framer.com/motion/) for shared-element polaroid transitions (`layoutId`) and micro-interactions
- CSS Modules
- [Formspree](https://formspree.io/) (contact form — no email address is stored in this repo) — not wired in yet
- [simple-icons](https://simpleicons.org/) (dev-only) — source glyphs for the generated React/Node.js/GCP/n8n skill badges; the AWS badge comes from [Devicon](https://devicon.dev/) (both MIT-licensed)
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
    home/        # IntroSequence/ (GSAP timeline), Polaroid, TypedTextReveal, ArrowPointer
    skills/      # SkillsSection, SkillCategory, SkillChip (categorized chip layout)
    projects-menu/   # CameraCarousel, CameraFlash, ProjectSlide, slides/ (per-project screens)
    project-detail/, contact/   # added as each is built out
  context/       # IntroContext (nav reveal timing, logo-click intro replay)
  hooks/         # useTypedText, useIntroPlayedOnce, useReducedMotion
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
