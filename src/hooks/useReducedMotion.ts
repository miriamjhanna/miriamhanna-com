import { useEffect, useState } from 'react'

/**
 * Tracks prefers-reduced-motion so JS-driven animation (GSAP timelines, tsParticles motion,
 * Framer Motion) can skip straight to an end/static state. The original site never checked
 * this at all (architecture doc §6, rule 6).
 */
export function useReducedMotion(): boolean {
  const query = '(prefers-reduced-motion: reduce)'
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches)
    mediaQueryList.addEventListener('change', listener)
    return () => mediaQueryList.removeEventListener('change', listener)
  }, [])

  return reduced
}
