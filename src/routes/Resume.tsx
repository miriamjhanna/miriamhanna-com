import { PageLayout } from '../components/layout/PageLayout'
import { resumeSections } from '../data/resumeContent'
import styles from './Resume.module.css'

export function Resume() {
  return (
    <PageLayout>
      <div className={styles.resume}>
        {resumeSections.map((section) => (
          <section key={section.id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.entries.map((entry, index) => (
              <div key={index} className={styles.entry}>
                {entry.subtitle && <h3 className={styles.entrySubtitle}>{entry.subtitle}</h3>}
                {entry.date && <p className={styles.entryDate}>{entry.date}</p>}
                {entry.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
                {entry.bullets && (
                  <ul>
                    {entry.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}
      </div>
    </PageLayout>
  )
}
