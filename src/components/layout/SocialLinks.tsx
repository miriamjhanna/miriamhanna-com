import { IconButton } from '../ui/IconButton'
import githubIcon from '../../assets/images/github.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import styles from './SocialLinks.module.css'

/**
 * The only two contact surfaces on the site besides the /contact form — no email address,
 * per architecture doc §8.1. Rendered once here and reused wherever social links are needed
 * (Footer, Contact page) rather than duplicated raw markup with clashing ids, which is what
 * the original site did (architecture doc §3.6).
 */
export function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <IconButton href="https://github.com/miriamjhanna" label="GitHub">
        <img src={githubIcon} alt="" />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/miriam-7300a9185" label="LinkedIn">
        <img src={linkedinIcon} alt="" />
      </IconButton>
    </div>
  )
}
