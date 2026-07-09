import { motion } from 'framer-motion'
import polaroidDeveloped from '../../assets/images/polaroid_developed.png'
import aboutMeLabel from '../../assets/images/about_me.png'
import projectsPolaroid from '../../assets/images/projects_polaroid.png'
import myProjectsLabel from '../../assets/images/my_projects.png'
import styles from './Polaroid.module.css'

const VARIANTS = {
  about: { frame: polaroidDeveloped, label: aboutMeLabel, labelAlt: 'About Me' },
  projects: { frame: projectsPolaroid, label: myProjectsLabel, labelAlt: 'My Projects' },
} as const

interface PolaroidProps {
  variant: keyof typeof VARIANTS
  /**
   * Shared-element id. The ONE about-polaroid renders wherever it logically lives (intro
   * stage → hero → About slot) and Framer Motion animates the move automatically — replacing
   * the original's manual getBoundingClientRect math + DOM reparenting, the site's most
   * fragile piece (architecture doc §3.2).
   */
  layoutId?: string
  rotate?: number
  onClick?: () => void
  className?: string
  /** Skip the move animation (the original's "teleport" path for nav-link jumps). */
  instant?: boolean
  /** Fade in this many seconds after mount (the projects polaroid's late reveal). */
  fadeInDelay?: number
}

export function Polaroid({
  variant,
  layoutId,
  rotate = 0,
  onClick,
  className,
  instant = false,
  fadeInDelay,
}: PolaroidProps) {
  const { frame, label, labelAlt } = VARIANTS[variant]

  return (
    <motion.div
      layoutId={layoutId}
      className={[styles.polaroid, onClick ? styles.clickable : '', className]
        .filter(Boolean)
        .join(' ')}
      initial={fadeInDelay !== undefined ? { opacity: 0, rotate } : false}
      animate={{ opacity: 1, rotate }}
      whileHover={onClick ? { rotate: 0, scale: 1.06 } : undefined}
      transition={
        instant
          ? { duration: 0 }
          : {
              layout: { type: 'spring', stiffness: 90, damping: 16 },
              rotate: { type: 'spring', stiffness: 120, damping: 14 },
              opacity: { duration: 0.5, delay: fadeInDelay ?? 0 },
            }
      }
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onClick()
              }
            }
          : undefined
      }
    >
      <img className={styles.frame} src={frame} alt="" />
      <img className={styles.label} src={label} alt={labelAlt} />
    </motion.div>
  )
}
