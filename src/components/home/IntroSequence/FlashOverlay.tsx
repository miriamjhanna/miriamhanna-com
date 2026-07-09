import styles from './IntroSequence.module.css'

/** Camera-flash burst at t=0 of the intro timeline. Animated via the `intro-flash` class. */
export function FlashOverlay() {
  return <div className={`${styles.flash} intro-flash`} aria-hidden="true" />
}
