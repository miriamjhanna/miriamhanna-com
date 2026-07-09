import { PageLayout } from '../components/layout/PageLayout'
import { CameraCarousel } from '../components/projects-menu/CameraCarousel'
import styles from './ProjectsMenu.module.css'

export function ProjectsMenu() {
  return (
    <PageLayout>
      <div className={styles.projectsMenu}>
        <CameraCarousel />
      </div>
    </PageLayout>
  )
}
