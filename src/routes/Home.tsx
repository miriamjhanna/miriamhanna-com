import { PageLayout } from '../components/layout/PageLayout'
import styles from './Home.module.css'

/**
 * Placeholder — the camera/polaroid GSAP intro sequence (architecture doc §3.1/§3.2) and the
 * categorized skills-chip layout (§3.3/§7) are separate implementation passes. This pass
 * establishes the route, shared layout, and the anchor targets the Navbar already links to.
 */
export function Home() {
  return (
    <PageLayout>
      <section id="home" className={styles.section}>
        <h1>Hi, I'm Miriam Hanna.</h1>
        <p className={styles.note}>
          The camera/polaroid intro animation is coming in the next implementation pass.
        </p>
      </section>
      <section id="about" className={styles.section}>
        <h2>About</h2>
        <p className={styles.note}>Coming soon.</p>
      </section>
      <section id="skills" className={styles.section}>
        <h2>Skills</h2>
        <p className={styles.note}>Coming soon.</p>
      </section>
    </PageLayout>
  )
}
