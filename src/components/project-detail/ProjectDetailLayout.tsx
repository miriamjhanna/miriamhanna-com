import type { ReactNode } from 'react'
import { PageLayout } from '../layout/PageLayout'
import type { AmbientBackgroundVariant } from '../layout/AmbientBackground'
import type { Project } from '../../data/projects'
import styles from './ProjectDetailLayout.module.css'

interface ProjectDetailLayoutProps {
  project: Project
  background?: AmbientBackgroundVariant
  children: ReactNode
}

/**
 * Shared chrome for every project page — title, tagline, optional repo link, and the page
 * body — so the three routes differ only by which mockup/sections they pass as children
 * (architecture doc §3.5). repoUrl is optional: Catfe has none, matching the original site.
 */
export function ProjectDetailLayout({
  project,
  background = 'particles',
  children,
}: ProjectDetailLayoutProps) {
  return (
    <PageLayout theme={project.theme} background={background}>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
          {project.repoUrl && (
            <a className={styles.repoLink} href={project.repoUrl} target="_blank" rel="noreferrer">
              View code on GitHub
            </a>
          )}
        </header>
        {children}
      </div>
    </PageLayout>
  )
}
