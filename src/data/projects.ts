export type ProjectTheme = 'default' | 'memory' | 'catfe'

export interface VideoWalkthrough {
  source: 'file' | 'youtube'
  /** File path (public/) or YouTube id, per source. */
  src: string
  /** Poster image shown before playback (long-form video is not preloaded). */
  poster: string
}

export interface Project {
  slug: string
  path: string
  title: string
  tagline: string
  theme: ProjectTheme
  /** Muted "live screen" loop shown in the device mockup. Compressed .mp4 under public/videos. */
  video?: string
  /** Long-form narrated walkthrough section (architecture doc §8.2). */
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
    video: '/videos/memory-demo.mp4',
    repoUrl: 'https://github.com/miriamjhanna/Memory',
  },
  {
    slug: 'work-it',
    path: '/projects/work-it',
    title: 'Work It!',
    tagline: 'Android workout tracker with Firebase-backed exercise logging.',
    theme: 'default',
    video: '/videos/workit-demo.mp4',
    repoUrl: 'https://github.com/miriamjhanna/Work-It',
  },
  {
    slug: 'catfe-au-lait',
    path: '/projects/catfe-au-lait',
    title: 'Catfe Au Lait',
    tagline: '2D Unity café game with hand-crafted art direction.',
    theme: 'catfe',
    // One asset in two roles: the muted mockup loop and the narrated walkthrough (§8.2).
    video: '/videos/catfe-walkthrough.mp4',
    walkthrough: {
      source: 'file',
      src: '/videos/catfe-walkthrough.mp4',
      poster: '/videos/catfe-walkthrough-poster.jpg',
    },
  },
]
