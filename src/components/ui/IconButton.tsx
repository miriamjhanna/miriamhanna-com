import type { ReactNode } from 'react'
import styles from './IconButton.module.css'

interface IconButtonProps {
  href: string
  label: string
  children: ReactNode
}

export function IconButton({ href, label, children }: IconButtonProps) {
  return (
    <a
      href={href}
      className={styles.iconButton}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
