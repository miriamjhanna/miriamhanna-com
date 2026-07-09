import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { AmbientBackground, type AmbientBackgroundVariant } from './AmbientBackground'
import styles from './PageLayout.module.css'

interface PageLayoutProps {
  children: ReactNode
  /** Sets the page's accent color — see src/styles/tokens.css. */
  theme?: 'default' | 'memory' | 'catfe'
  background?: AmbientBackgroundVariant
  /** Only meaningful when background="particles". Defaults to the theme's accent. */
  backgroundColor?: string
}

const THEME_ACCENT: Record<NonNullable<PageLayoutProps['theme']>, string> = {
  default: '#45e3e0',
  memory: '#ff6fb5',
  catfe: '#c8ac89',
}

export function PageLayout({
  children,
  theme = 'default',
  background = 'particles',
  backgroundColor,
}: PageLayoutProps) {
  return (
    <div className={styles.page} data-theme={theme === 'default' ? undefined : theme}>
      <AmbientBackground variant={background} color={backgroundColor ?? THEME_ACCENT[theme]} />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
