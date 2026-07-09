import preview from '../../../assets/images/catfe_au_lait_preview.png'
import styles from './CatfeSlide.module.css'

export function CatfeSlide() {
  return (
    <div className={styles.slide}>
      <img className={styles.image} src={preview} alt="Catfe Au Lait" />
    </div>
  )
}
