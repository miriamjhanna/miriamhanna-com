import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import styles from './NotFound.module.css'

/**
 * The original 404 page linked to a nonexistent /style.css and rendered completely unstyled
 * (architecture doc §3.6). This one uses the shared layout/theme like every other route.
 */
export function NotFound() {
  return (
    <PageLayout>
      <div className={styles.notFound}>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </PageLayout>
  )
}
