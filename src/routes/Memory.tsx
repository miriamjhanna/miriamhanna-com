import { PageLayout } from '../components/layout/PageLayout'
import { projects } from '../data/projects'
import styles from './ProjectDetail.module.css'

const project = projects.find((p) => p.slug === 'memory')!

/**
 * Placeholder — the phone-mockup + demo-video device frame (architecture doc §3.5) is a
 * separate implementation pass, shared across Memory/Work It!/Catfe via <DeviceMockup>.
 */
export function Memory() {
  return (
    <PageLayout theme={project.theme}>
      <div className={styles.projectDetail}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.tagline}>{project.tagline}</p>
        {project.repoUrl && (
          <a
            className={styles.repoLink}
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            View code on GitHub
          </a>
        )}
      </div>
    </PageLayout>
  )
}
