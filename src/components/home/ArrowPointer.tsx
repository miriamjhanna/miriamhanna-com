import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface ArrowPointerProps {
  className?: string
}

/**
 * Hand-drawn arrow pointing from the headline to the polaroid — same SVG path and
 * stroke-dashoffset draw-in as the original (architecture doc §3.1), then an idle
 * side-to-side bounce.
 */
export function ArrowPointer({ className }: ArrowPointerProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.set('.arrow-path', { strokeDashoffset: 0 })
        return
      }
      gsap.fromTo(
        '.arrow-path',
        { strokeDashoffset: 999 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(svgRef.current, {
              duration: 1,
              yoyo: true,
              repeat: -1,
              x: '+=5',
              ease: 'sine.inOut',
            })
          },
        },
      )
    },
    { scope: svgRef, dependencies: [reducedMotion] },
  )

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox="0 0 400 300"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <path
        className="arrow-path"
        d="M 40,40
           C 100,120 180,200 300,220
           M 290,215 l 10,5 l -5,10"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="999"
        strokeDashoffset="999"
      />
    </svg>
  )
}
