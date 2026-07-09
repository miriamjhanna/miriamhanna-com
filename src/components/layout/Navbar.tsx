import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from '../ui/NavLink'
import { projects } from '../../data/projects'
import logo from '../../assets/images/logo.png'
import styles from './Navbar.module.css'

/**
 * Projects dropdown toggles on click with aria-expanded, instead of the original site's
 * hover-only reveal — architecture doc §3.6 flags hover-only dropdowns as not touch/keyboard
 * accessible.
 */
export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!dropdownOpen) return

    function handlePointerDown(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setDropdownOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dropdownOpen])

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logoAndName}>
        <img className={styles.logo} src={logo} alt="Miriam Hanna logo" />
        <span className={styles.siteOwnerName}>Miriam Hanna</span>
      </Link>

      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/#home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/#about">About</NavLink>
        </li>
        <li>
          <NavLink to="/#skills">Skills</NavLink>
        </li>
        <li className={styles.dropdown} ref={dropdownRef}>
          <button
            type="button"
            className={styles.dropdownTrigger}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((open) => !open)}
          >
            Projects
          </button>
          {dropdownOpen && (
            <ul className={styles.dropdownContent}>
              <li>
                <Link to="/projects" onClick={() => setDropdownOpen(false)}>
                  All Projects
                </Link>
              </li>
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link to={project.path} onClick={() => setDropdownOpen(false)}>
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}
