import styles from './IntroSequence.module.css'

interface FastForwardButtonProps {
  onClick: () => void
}

/**
 * A real <button> (keyboard-focusable) instead of the original's click-handler div —
 * skips the intro straight to the settled state.
 */
export function FastForwardButton({ onClick }: FastForwardButtonProps) {
  return (
    <button type="button" className={styles.ffButton} onClick={onClick} aria-label="Skip intro animation">
      <span aria-hidden="true">&raquo;</span>
      <span aria-hidden="true">&raquo;</span>
    </button>
  )
}
