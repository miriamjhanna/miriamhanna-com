/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { INTRO_PLAYED_KEY } from '../hooks/useIntroPlayedOnce'

interface IntroContextValue {
  /** False while the home intro is mid-play and the nav links should stay hidden. */
  navRevealed: boolean
  setNavRevealed: (revealed: boolean) => void
  /** Bumped by replayIntro() — Home keys its content on this to remount and replay. */
  introVersion: number
  /**
   * Logo click → replay the intro from scratch. Replaces the original site's
   * location.reload() hard refresh (architecture doc §3.2).
   */
  replayIntro: () => void
}

const IntroContext = createContext<IntroContextValue | null>(null)

export function IntroProvider({ children }: { children: ReactNode }) {
  const [navRevealed, setNavRevealed] = useState(true)
  const [introVersion, setIntroVersion] = useState(0)

  const replayIntro = useCallback(() => {
    sessionStorage.removeItem(INTRO_PLAYED_KEY)
    setIntroVersion((version) => version + 1)
  }, [])

  const value = useMemo(
    () => ({ navRevealed, setNavRevealed, introVersion, replayIntro }),
    [navRevealed, introVersion, replayIntro],
  )

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
}

export function useIntro(): IntroContextValue {
  const context = useContext(IntroContext)
  if (!context) throw new Error('useIntro must be used within IntroProvider')
  return context
}
