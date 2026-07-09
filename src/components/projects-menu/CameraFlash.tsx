import { useImperativeHandle, useRef, forwardRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './CameraFlash.module.css'

export interface CameraFlashHandle {
  fire: () => void
}

/**
 * A radial white burst behind the camera, replayed on every slide change — ported from the
 * original cameraFlash() GSAP tween (architecture doc §3.4). Exposes an imperative fire()
 * so the carousel can trigger it on each arrow click.
 */
export const CameraFlash = forwardRef<CameraFlashHandle>(function CameraFlash(_props, ref) {
  const flashRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const { contextSafe } = useGSAP({ scope: flashRef })

  const fire = contextSafe(() => {
    if (reducedMotion || !flashRef.current) return
    gsap.set(flashRef.current, { scale: 0, opacity: 0 })
    gsap
      .timeline()
      .to(flashRef.current, { duration: 0.2, scale: 1, opacity: 1, ease: 'power2.out' })
      .to(flashRef.current, { duration: 0.5, opacity: 0, ease: 'power2.in' })
  })

  useImperativeHandle(ref, () => ({ fire }), [fire])

  return <div ref={flashRef} className={styles.flash} aria-hidden="true" />
})
