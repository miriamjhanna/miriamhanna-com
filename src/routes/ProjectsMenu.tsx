import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { projects } from '../data/projects'
import styles from './ProjectsMenu.module.css'

/**
 * Plain project grid for now — the digital-camera carousel (architecture doc §3.4) is a
 * separate implementation pass. This establishes the route and real project data first.
 */
export function ProjectsMenu() {
  return (
    <PageLayout>
      <div className={styles.projectsMenu}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link key={project.slug} to={project.path} className={styles.card}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardTagline}>{project.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
