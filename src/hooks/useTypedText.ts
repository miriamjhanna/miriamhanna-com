import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Char-by-char typewriter, replacing the original site's setTimeout-per-character typeText()
 * (architecture doc §3.1). Cleans up its interval on unmount/re-run, and shows the full text
 * immediately for users who prefer reduced motion.
 */
export function useTypedText(text: string, speedMs: number): string {
  const reducedMotion = useReducedMotion()
  const [typed, setTyped] = useState(() => ({ forText: text, count: 0 }))

  // Render-phase reset when the target text changes (React's documented "adjust state when
  // props change" pattern — avoids a setState-in-effect cascade)
  if (typed.forText !== text) {
    setTyped({ forText: text, count: 0 })
  }

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => {
      setTyped((current) => {
        if (current.count >= current.forText.length) {
          window.clearInterval(id)
          return current
        }
        return { ...current, count: current.count + 1 }
      })
    }, speedMs)
    return () => window.clearInterval(id)
  }, [text, speedMs, reducedMotion])

  if (reducedMotion) return text
  return text.slice(0, Math.min(typed.count, text.length))
}
