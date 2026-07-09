import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { projects } from '../../data/projects'
import { CameraFlash, type CameraFlashHandle } from './CameraFlash'
import { ProjectSlide } from './ProjectSlide'
import { MemorySlide } from './slides/MemorySlide'
import { WorkItSlide } from './slides/WorkItSlide'
import { CatfeSlide } from './slides/CatfeSlide'
import cameraBase from '../../assets/images/digital_camera.png'
import arrowBack from '../../assets/images/arrow_back.png'
import arrowForward from '../../assets/images/arrow_forward.png'
import styles from './CameraCarousel.module.css'

const SLIDE_COMPONENTS: Record<string, () => React.JSX.Element> = {
  memory: MemorySlide,
  'work-it': WorkItSlide,
  'catfe-au-lait': CatfeSlide,
}

// projects.ts is the single source of truth (order, titles, paths); the carousel just needs
// each project's matching screen component.
const slides = projects.map((project) => ({
  project,
  Slide: SLIDE_COMPONENTS[project.slug],
}))

export function CameraCarousel() {
  const navigate = useNavigate()
  const flashRef = useRef<CameraFlashHandle>(null)
  const [{ index, direction }, setState] = useState({ index: 0, direction: 0 })

  const go = (step: number) => {
    flashRef.current?.fire()
    setState(({ index: current }) => ({
      index: (current + step + slides.length) % slides.length,
      direction: step,
    }))
  }

  const { project, Slide } = slides[index]

  return (
    <div className={styles.wrapper}>
      <CameraFlash ref={flashRef} />

      <div className={styles.camera}>
        <img className={styles.cameraBase} src={cameraBase} alt="" />

        <div className={styles.screen}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <ProjectSlide key={project.slug} direction={direction}>
              <Slide />
            </ProjectSlide>
          </AnimatePresence>
        </div>

        {/* Clickable hotspots over the camera's baked-in D-pad arrows and buttons. The
            original overlaid redundant copies of the arrow/button PNGs; here the arrows are
            thin wiggling affordances and the view/home hotspots are transparent. */}
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowBack}`}
          onClick={() => go(-1)}
          aria-label="Previous project"
        >
          <img src={arrowBack} alt="" />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowForward}`}
          onClick={() => go(1)}
          aria-label="Next project"
        >
          <img src={arrowForward} alt="" />
        </button>

        <button
          type="button"
          className={`${styles.hotspot} ${styles.viewButton}`}
          onClick={() => navigate(project.path)}
          aria-label={`View ${project.title}`}
        />
        <button
          type="button"
          className={`${styles.hotspot} ${styles.homeButton}`}
          onClick={() => navigate('/')}
          aria-label="Back to home"
        />
      </div>

      <p className={styles.caption}>
        {project.title} — {project.tagline}
      </p>

      {/* Touch-friendly controls for small screens, where the camera's baked-in D-pad and
          buttons are too small to tap reliably. Hidden on desktop, where the hotspots suffice. */}
      <div className={styles.mobileControls}>
        <button type="button" onClick={() => go(-1)} aria-label="Previous project">
          &laquo; Prev
        </button>
        <button type="button" onClick={() => navigate(project.path)}>
          View
        </button>
        <button type="button" onClick={() => navigate('/')}>
          Home
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next project">
          Next &raquo;
        </button>
      </div>
    </div>
  )
}
