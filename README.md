# miriamhanna.com

Personal portfolio site for Miriam Hanna — a React rebuild of a previous Neocities site, with a
camera/polaroid visual theme, an animated intro sequence, and pages for projects, résumé, and
contact.

**Live site:** not yet deployed — link goes here once the custom domain is attached.

> Status: the signature camera/polaroid intro is live — a ~16s GSAP sequence (skippable, and
> played once per session) that hands off to Framer Motion shared-element transitions: the
> printed polaroid settles into the hero, and clicking it carries it down into the About
> section. The Skills section shows 20 skills as categorized chips, the Projects page is a
> working digital-camera carousel, and each project has a detail page with a device mockup
> playing its demo video (plus a click-to-play walkthrough and a walking-cat sprite on Catfe).
> The Contact page has a validated Formspree form, and the site ships with a Docker + nginx
> deployment setup. The build is feature-complete; what's left is external (create the Formspree
> form, pick a host, attach the domain).

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

### Contact form

The contact form posts to [Formspree](https://formspree.io/). Copy `.env.example` to `.env.local`
and set `VITE_FORMSPREE_ID` to your form id (the part after `/f/` in the form URL). Until it's
set, the form validates but shows a "not configured" message directing visitors to GitHub/LinkedIn.
The id is public and is not an email address, so no contact address is exposed anywhere.

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
    project-detail/  # DeviceMockup, DemoVideo, VideoWalkthrough, WalkingCat, shared layout
    contact/         # ContactForm (Formspree, client-side validation, honeypot)
  context/       # IntroContext (nav reveal timing, logo-click intro replay)
  hooks/         # useTypedText, useIntroPlayedOnce, useReducedMotion
  data/          # typed content: skills.ts, projects.ts, resumeContent.ts
  styles/        # global.css, tokens.css (theme/breakpoints)
  assets/
public/
  videos/        # compressed demo/walkthrough .mp4s + poster, served as static files
```

Demo videos are H.264 `.mp4`s compressed from the original screen recordings (the source
`.mov`s — up to 265 MB — are not in the repo). They live in `public/videos/` and are
referenced by path from `src/data/projects.ts`.

## Deployment

Built as a static site and served via a multi-stage Docker build (`Dockerfile`): a Node stage
runs `npm run build`, then an nginx stage serves the static `dist/`. `nginx.conf` handles the
SPA fallback (so client-side routes like `/projects/memory` resolve), long-cache headers for
content-hashed assets, and HTTP range requests for the videos.

```
# Build the image (pass the Formspree id so the contact form works in production):
docker build --build-arg VITE_FORMSPREE_ID=your_form_id -t miriamhanna-com .
docker run -p 8080:80 miriamhanna-com   # then open http://localhost:8080
```

Two hosting paths:

- **VPS** — `docker compose up -d` runs the app behind **Caddy** (`docker-compose.yml` +
  `Caddyfile`), which provisions and renews HTTPS certificates automatically. Point
  `miriamhanna.com`'s DNS A record at the server; `www` redirects to the apex.
- **Container platform** (Fly.io / Railway / Render) — push the image built from the
  `Dockerfile`; the platform terminates TLS and routes a custom domain to it. `docker-compose.yml`
  and `Caddyfile` aren't needed on this path.

## License

No license — all rights reserved. This repository is public for portfolio/demonstration
purposes only; the code may not be copied, reused, modified, or redistributed without
permission.

© 2026 Miriam Hanna.
