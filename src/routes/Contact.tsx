import { PageLayout } from '../components/layout/PageLayout'
import { SocialLinks } from '../components/layout/SocialLinks'
import { ContactForm } from '../components/contact/ContactForm'
import styles from './Contact.module.css'

/**
 * Own route per architecture doc §8.1. The form posts to Formspree (no email address anywhere
 * on the site); GitHub/LinkedIn are the only other contact surface — no mailto link.
 */
export function Contact() {
  return (
    <PageLayout>
      <div className={styles.contact}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.underline} />
        <p className={styles.note}>
          Have a question or want to work together? Send me a message.
        </p>
        <ContactForm />
        <p className={styles.orReach}>Or reach me on</p>
        <SocialLinks />
      </div>
    </PageLayout>
  )
}
