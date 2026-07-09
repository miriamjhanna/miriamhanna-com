import { NavLink as RouterNavLink, type NavLinkProps } from 'react-router-dom'
import styles from './NavLink.module.css'

export function NavLink({ className, ...props }: NavLinkProps) {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) =>
        [styles.link, isActive ? styles.linkActive : '', typeof className === 'string' ? className : '']
          .filter(Boolean)
          .join(' ')
      }
    />
  )
}
