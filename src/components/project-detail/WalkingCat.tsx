import styles from './WalkingCat.module.css'

export function WalkingCat() {
  return (
    <div className={styles.cat} aria-hidden="true">
      <div className={styles.sprite} />
    </div>
  )
}
