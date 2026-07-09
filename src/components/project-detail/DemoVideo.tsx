import styles from './DemoVideo.module.css'

interface DemoVideoProps {
  src: string
}

/**
 * The muted autoplay loop shown inside a device mockup's screen — a "live screenshot"
 * (architecture doc §3.5). object-fit: cover fills the screen cutout regardless of the
 * video's exact aspect ratio.
 */
export function DemoVideo({ src }: DemoVideoProps) {
  return <video className={styles.video} src={src} autoPlay loop muted playsInline />
}
