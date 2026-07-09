import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import styles from './ProjectSlide.module.css'

interface ProjectSlideProps {
  children: ReactNode
  /** +1 when advancing forward, -1 when going back — drives the enter/exit direction. */
  direction: number
}

const variants = {
  enter: (direction: number) => ({ x: `${direction * 100}%`, opacity: 0 }),
  center: { x: '0%', opacity: 1 },
  exit: (direction: number) => ({ x: `${direction * -100}%`, opacity: 0 }),
}

export function ProjectSlide({ children, direction }: ProjectSlideProps) {
  return (
    <motion.div
      className={styles.slide}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
