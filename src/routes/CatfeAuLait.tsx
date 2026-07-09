import { PageLayout } from '../components/layout/PageLayout'
import { projects } from '../data/projects'
import styles from './ProjectDetail.module.css'

const project = projects.find((p) => p.slug === 'catfe-au-lait')!

/**
 * Placeholder — the computer-mockup device frame, walking-cat sprite animation, and video
 * walkthrough (architecture doc §3.5/§8.2) are a separate implementation pass. Catfe has no
 * repoUrl, matching the original site's actual behavior (architecture doc §4).
 */
export function CatfeAuLait() {
  return (
    <PageLayout theme={project.theme} background="none">
      <div className={styles.projectDetail}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.tagline}>{project.tagline}</p>
      </div>
    </PageLayout>
  )
}
