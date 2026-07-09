import { useCallback, useState } from 'react'

export const INTRO_PLAYED_KEY = 'introPlayed'

/**
 * Session-scoped "has the camera intro already played?" flag. Replaces the original site's
 * ?skip=true query param + finalizePolaroidAnimationNoCallbacks() duplication (architecture
 * doc §3.2): navigating back to Home within the same tab skips straight to the settled state,
 * while a fresh visit (new tab/session) plays the intro once.
 */
export function useIntroPlayedOnce() {
  const [played, setPlayed] = useState(() => sessionStorage.getItem(INTRO_PLAYED_KEY) === 'true')

  const markPlayed = useCallback(() => {
    sessionStorage.setItem(INTRO_PLAYED_KEY, 'true')
    setPlayed(true)
  }, [])

  return { played, markPlayed }
}
