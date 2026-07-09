import cameraTop from '../../../assets/images/camera_top.png'
import cameraBottom from '../../../assets/images/camera_bottom.png'
import cameraWhole from '../../../assets/images/camera_whole.png'
import polaroidBlank from '../../../assets/images/polaroid_blank.png'
import grain from '../../../assets/images/grain.png'
import styles from './IntroSequence.module.css'

/**
 * The camera pieces + blank polaroid + film-grain "developing" window. Purely presentational —
 * every `intro-*` class is a GSAP target driven by useIntroTimeline.
 */
export function PolaroidPrinter() {
  return (
    <>
      <img className={`${styles.cameraBottom} intro-camera-bottom`} src={cameraBottom} alt="" />
      <div className={`${styles.polaroidBlank} intro-blank`}>
        <img src={polaroidBlank} alt="" />
        <div className={styles.grainWindow}>
          <div
            className={`${styles.grain} intro-grain`}
            style={{ backgroundImage: `url(${grain})` }}
          />
        </div>
      </div>
      <img className={`${styles.cameraTop} intro-camera-top`} src={cameraTop} alt="" />
      <img className={`${styles.cameraWhole} intro-camera-whole`} src={cameraWhole} alt="" />
    </>
  )
}
