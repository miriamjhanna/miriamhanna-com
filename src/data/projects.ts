export type ProjectTheme = 'default' | 'memory' | 'catfe'

export interface VideoWalkthrough {
  source: 'file' | 'youtube'
  src: string
  poster: string
}

export interface Project {
  slug: string
  path: string
  title: string
  tagline: string
  theme: ProjectTheme
  /** Ambient "live screen" loop shown in the device mockup. Not yet ported/compressed — see architecture doc §8.2. */
  video?: string
  /** Long-form walkthrough section. Not yet wired up — see architecture doc §8.2. */
  walkthrough?: VideoWalkthrough
  /**
   * Optional — Catfe Au Lait's original site has no repo link at all, so this isn't
   * speculative, it matches today's real behavior (architecture doc §4).
   */
  repoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'memory',
    path: '/projects/memory',
    title: 'Memory',
    tagline: 'Android card-matching game with dynamic boards and swappable themes.',
    theme: 'memory',
    repoUrl: 'https://github.com/miriamjhanna/Memory',
  },
  {
    slug: 'work-it',
    path: '/projects/work-it',
    title: 'Work It!',
    tagline: 'Android workout tracker with Firebase-backed exercise logging.',
    theme: 'default',
    repoUrl: 'https://github.com/miriamjhanna/Work-It',
  },
  {
    slug: 'catfe-au-lait',
    path: '/projects/catfe-au-lait',
    title: 'Catfe Au Lait',
    tagline: '2D Unity café game with hand-crafted art direction.',
    theme: 'catfe',
  },
]
