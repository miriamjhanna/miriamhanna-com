import { NavLink as RouterNavLink, type NavLinkProps } from 'react-router-dom'
import styles from './NavLink.module.css'

export function NavLink({ className, to, ...props }: NavLinkProps) {
  // Hash links (/#home, /#about, /#skills) all share the "/" path, so React Router would mark
  // them all active at once on the home page — suppress active styling for those entirely.
  const isHashLink = typeof to === 'string' && to.includes('#')
  return (
    <RouterNavLink
      {...props}
      to={to}
      className={({ isActive }) =>
        [
          styles.link,
          isActive && !isHashLink ? styles.linkActive : '',
          typeof className === 'string' ? className : '',
        ]
          .filter(Boolean)
          .join(' ')
      }
    />
  )
}
