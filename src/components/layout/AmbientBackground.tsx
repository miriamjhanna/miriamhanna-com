import { useMemo } from 'react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine, ISourceOptions } from '@tsparticles/engine'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export type AmbientBackgroundVariant = 'particles' | 'none'

interface AmbientBackgroundProps {
  variant: AmbientBackgroundVariant
  /** Ties the particle color to the route's accent — e.g. Memory's pink. */
  color?: string
}

// Must be a single stable reference across the app's lifetime — ParticlesProvider throws if
// the init callback identity changes between mounts.
async function initEngine(engine: Engine) {
  await loadSlim(engine)
}

/**
 * Replaces particles.js (unmaintained since ~2015) with the actively-maintained
 * @tsparticles/react fork — architecture doc §3.6/§5. A single component covers every page
 * that used particles.js in the original site; Memory's bespoke SVG-goo bubble background is
 * retired in favor of this, re-themed to its pink accent, per architecture doc §7.
 */
export function AmbientBackground({ variant, color = '#ffffff' }: AmbientBackgroundProps) {
  const reducedMotion = useReducedMotion()

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      particles: {
        number: {
          value: 355,
          density: { enable: true, width: 1920, height: 1080 },
        },
        color: { value: color },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0, max: 0.49 },
          animation: { enable: !reducedMotion, speed: 0.25, sync: false },
        },
        size: {
          value: { min: 0, max: 2 },
          animation: { enable: !reducedMotion, speed: 0.5, sync: false },
        },
        links: { enable: false },
        move: {
          enable: !reducedMotion,
          speed: 0.1,
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: !reducedMotion, mode: 'bubble' },
          onClick: { enable: !reducedMotion, mode: 'push' },
          resize: { enable: true },
        },
        modes: {
          bubble: { distance: 125, size: 2, duration: 2, opacity: 1 },
          push: { quantity: 4 },
        },
      },
      detectRetina: true,
    }),
    [color, reducedMotion],
  )

  if (variant === 'none') return null

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id="ambient-background"
        options={options}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -5,
          pointerEvents: reducedMotion ? 'none' : undefined,
        }}
      />
    </ParticlesProvider>
  )
}
