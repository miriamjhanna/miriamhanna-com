import { useRef } from 'react'
import { Polaroid } from '../Polaroid'
import { FlashOverlay } from './FlashOverlay'
import { PolaroidPrinter } from './PolaroidPrinter'
import { FastForwardButton } from './FastForwardButton'
import { useIntroTimeline } from './useIntroTimeline'
import styles from './IntroSequence.module.css'

interface IntroSequenceProps {
  onComplete: () => void
  onNavReveal: () => void
}

/**
 * The full camera→polaroid intro stage. The developed polaroid inside it shares
 * layoutId="about-polaroid" with the settled hero polaroid, so when this stage unmounts on
 * completion, Framer Motion animates the polaroid from its in-stage printed position to its
 * hero resting spot — no hardcoded flight offsets (architecture doc §3.2).
 *
 * GSAP animates the wrapper div (.intro-developed), never the motion element itself, so the
 * two libraries don't fight over the same transform.
 */
export function IntroSequence({ onComplete, onNavReveal }: IntroSequenceProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const { skip } = useIntroTimeline(stageRef, { onComplete, onNavReveal })

  return (
    <div ref={stageRef} className={styles.stage}>
      <FlashOverlay />
      <PolaroidPrinter />
      <div className={`${styles.developedSlot} intro-developed`}>
        <Polaroid variant="about" layoutId="about-polaroid" />
      </div>
      <FastForwardButton onClick={skip} />
    </div>
  )
}
