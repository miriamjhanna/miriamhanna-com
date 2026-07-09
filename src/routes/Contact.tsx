import { PageLayout } from '../components/layout/PageLayout'
import { SocialLinks } from '../components/layout/SocialLinks'
import styles from './Contact.module.css'

/**
 * Own route per architecture doc §8.1 (promoted off the same-page anchor the original site
 * used). The Formspree form itself is a separate implementation pass — this establishes the
 * route, shared layout, and the no-email-address contact surface (GitHub/LinkedIn) first.
 */
export function Contact() {
  return (
    <PageLayout>
      <div className={styles.contact}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.underline} />
        <p className={styles.note}>
          A contact form is on its way. In the meantime, reach out on GitHub or LinkedIn.
        </p>
        <SocialLinks />
      </div>
    </PageLayout>
  )
}
