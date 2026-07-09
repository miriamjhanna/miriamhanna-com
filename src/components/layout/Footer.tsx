import { SocialLinks } from './SocialLinks'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <SocialLinks />
      <p>&copy; {new Date().getFullYear()} Miriam Hanna. All Rights Reserved.</p>
    </footer>
  )
}
