import lineart from '../../../assets/images/work_it_lineart.png'
import styles from './WorkItSlide.module.css'

export function WorkItSlide() {
  return (
    <div className={styles.slide}>
      <h2 className={styles.title}>Work It!</h2>
      <img className={styles.lineart} src={lineart} alt="Work It! line art" />
    </div>
  )
}
