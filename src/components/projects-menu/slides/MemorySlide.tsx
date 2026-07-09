import cardBack from '../../../assets/images/card_back.png'
import donut from '../../../assets/images/donut.png'
import styles from './MemorySlide.module.css'

// The original repeated id="card-back-img" on 8 <img> tags (invalid HTML) — here it's a
// mapped array with keys (architecture doc §3.6).
const CARDS = Array.from({ length: 8 }, (_, i) => i)

export function MemorySlide() {
  return (
    <div className={styles.slide}>
      <h2 className={styles.title}>
        <span className={styles.word}>Mem</span>
        <img className={styles.donut} src={donut} alt="o" />
        <span className={styles.word}>ry</span>
      </h2>
      <div className={styles.cards}>
        {CARDS.map((i) => (
          <img key={i} className={styles.card} src={cardBack} alt="" />
        ))}
      </div>
    </div>
  )
}
