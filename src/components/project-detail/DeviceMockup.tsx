import type { CSSProperties, ReactNode } from 'react'
import styles from './DeviceMockup.module.css'

export interface ScreenRect {
  top: string
  left: string
  width: string
  height: string
}

interface DeviceMockupProps {
  /** Frame image (phone or computer). */
  frame: string
  /** Native aspect ratio of the frame image, e.g. "254 / 484". */
  aspectRatio: string
  /** Screen cutout, as percentages of the frame — so the whole mockup scales as one unit. */
  screen: ScreenRect
  /** Cap on the frame's rendered width. */
  maxWidth?: string
  children: ReactNode
}

/**
 * One reusable device frame with a video/content "screen" cut into it, shared across all three
 * project pages (architecture doc §3.5). The screen is positioned as percentages of the frame,
 * so resizing the frame scales everything inside it proportionally (architecture doc §6, rule 5)
 * — unlike the original, where each mockup hardcoded both the frame width and the screen's px rect.
 */
export function DeviceMockup({
  frame,
  aspectRatio,
  screen,
  maxWidth = '26.5rem',
  children,
}: DeviceMockupProps) {
  const containerStyle: CSSProperties = {
    aspectRatio,
    width: `min(90vw, ${maxWidth})`,
  }
  const screenStyle: CSSProperties = {
    top: screen.top,
    left: screen.left,
    width: screen.width,
    height: screen.height,
  }

  return (
    <div className={styles.mockup} style={containerStyle}>
      <img className={styles.frame} src={frame} alt="" />
      <div className={styles.screen} style={screenStyle}>
        {children}
      </div>
    </div>
  )
}
