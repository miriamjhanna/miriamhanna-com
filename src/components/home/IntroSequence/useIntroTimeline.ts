import { useCallback, useRef, type RefObject } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface IntroTimelineCallbacks {
  /** Fired once when the printing sequence finishes (or is skipped). */
  onComplete: () => void
  /** Fired mid-sequence (t=10.2, matching the original) to fade the nav links in. */
  onNavReveal: () => void
}

/**
 * The ~16s camera→polaroid printing timeline, ported step-for-step from the original
 * js/script.js mainTL (architecture doc §3.1) with two structural changes:
 * - wrapped in useGSAP so every tween is cleaned up automatically on unmount (the original
 *   had no cleanup at all)
 * - it ends when the camera shrinks away; the polaroid's flight to its resting spot is no
 *   longer a hardcoded x/y tween but a Framer Motion layoutId transition handled by the
 *   parent swapping phases (architecture doc §3.2)
 */
export function useIntroTimeline(
  stageRef: RefObject<HTMLDivElement | null>,
  { onComplete, onNavReveal }: IntroTimelineCallbacks,
) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const finishedRef = useRef(false)

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    onComplete()
  }, [onComplete])

  useGSAP(
    () => {
      const stage = stageRef.current
      if (!stage) return

      const tl = gsap.timeline({ onComplete: finish })
      timelineRef.current = tl

      // Camera flash
      tl.to('.intro-flash', { duration: 0.2, scale: 3, opacity: 1, ease: 'power2.out' }, 0).to(
        '.intro-flash',
        { duration: 0.5, opacity: 0, ease: 'power2.in' },
        0.2,
      )

      // Blank polaroid ejects downward — distance as a fraction of the stage WIDTH so it's
      // independent of the stage's aspect ratio (the original moved 360px in a 1000px-wide
      // stage = 36%)
      tl.to(
        '.intro-blank',
        { duration: 9, y: () => stage.clientWidth * 0.36, ease: 'power1.inOut' },
        1,
      )

      // Film grain fades in while drifting up and down
      tl.to(
        '.intro-grain',
        {
          duration: 9,
          opacity: 0.8,
          onStart: () => {
            gsap.to('.intro-grain', {
              duration: 2,
              backgroundPosition: '0 400px',
              repeat: -1,
              yoyo: true,
              ease: 'none',
            })
          },
        },
        1,
      )

      // Developed polaroid appears; blank strobes out with a stepped fade
      tl.to('.intro-developed', { duration: 0.2, opacity: 1 }, 10)
      tl.to('.intro-blank', { duration: 4, opacity: 0, ease: 'steps(15)' }, 10)

      // Nav links fade in mid-sequence
      tl.add(onNavReveal, 10.2)

      // Two-piece camera swaps to the whole-camera image, which shrinks away
      tl.add(() => {
        gsap.set(['.intro-camera-top', '.intro-camera-bottom'], { opacity: 0 })
        gsap.set('.intro-camera-whole', { opacity: 1 })
      }, 14)
      tl.to(
        '.intro-camera-whole',
        { duration: 2, scale: 0, opacity: 0, transformOrigin: '50% 50%', ease: 'power2.in' },
        14,
      )
    },
    { scope: stageRef },
  )

  const skip = useCallback(() => {
    timelineRef.current?.kill()
    finish()
  }, [finish])

  return { skip }
}
