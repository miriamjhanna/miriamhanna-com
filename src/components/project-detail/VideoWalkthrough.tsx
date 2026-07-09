import { useState } from 'react'
import type { VideoWalkthrough as VideoWalkthroughData } from '../../data/projects'
import styles from './VideoWalkthrough.module.css'

interface VideoWalkthroughProps {
  /** Undefined → renders the "coming soon" placeholder (architecture doc §8.2). */
  walkthrough?: VideoWalkthroughData
  title: string
}

/**
 * Long-form narrated walkthrough. Supports self-hosted files and YouTube from day one via the
 * `source` field, so switching hosts is a one-line data change (architecture doc §8.2). The
 * player is a click-to-play facade: nothing heavy loads until the visitor opts in — the file
 * video isn't preloaded, and the YouTube iframe isn't mounted until play.
 */
export function VideoWalkthrough({ walkthrough, title }: VideoWalkthroughProps) {
  const [playing, setPlaying] = useState(false)

  if (!walkthrough) {
    return (
      <section className={styles.section}>
        <h2 className={styles.heading}>Video Walkthrough</h2>
        <div className={`${styles.frame} ${styles.placeholder}`}>
          <p>Full walkthrough coming soon.</p>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Video Walkthrough</h2>
      <div className={styles.frame}>
        {!playing ? (
          <button
            type="button"
            className={styles.poster}
            style={{ backgroundImage: `url(${walkthrough.poster})` }}
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title} walkthrough`}
          >
            <span className={styles.playIcon} aria-hidden="true" />
          </button>
        ) : walkthrough.source === 'youtube' ? (
          <iframe
            className={styles.player}
            src={`https://www.youtube-nocookie.com/embed/${walkthrough.src}?autoplay=1`}
            title={`${title} walkthrough`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            className={styles.player}
            src={walkthrough.src}
            poster={walkthrough.poster}
            controls
            autoPlay
            preload="none"
          />
        )}
      </div>
    </section>
  )
}
