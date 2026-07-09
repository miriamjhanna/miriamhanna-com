import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { SkillsSection } from '../components/skills/SkillsSection'
import { IntroSequence } from '../components/home/IntroSequence/IntroSequence'
import { Polaroid } from '../components/home/Polaroid'
import { TypedTextReveal } from '../components/home/TypedTextReveal'
import { ArrowPointer } from '../components/home/ArrowPointer'
import { useIntroPlayedOnce } from '../hooks/useIntroPlayedOnce'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useIntro } from '../context/IntroContext'
import styles from './Home.module.css'

const HEADLINE = "Hello! I'm Miriam Hanna.\nI'm a Software Developer."

// Ported verbatim from the original js/script.js
const ABOUT_TEXT =
  'I graduated from George Mason University in 2025 with a degree in Computer Science. I’m passionate about software and app development, back-end coding, and UX/UI design—and I enjoy dabbling in graphic design, too. I love figuring out creative ways to solve problems and bring ideas to life through technology.' +
  '\n\n' +
  'When I’m not at my computer, you’ll usually find me painting, buried in a good book, or sitting at the piano. Feel free to explore my site to learn more about my work, and thanks for stopping by!'

export function Home() {
  const { introVersion } = useIntro()
  // Keyed on introVersion so a logo click remounts everything and replays the intro from
  // scratch — replacing the original's location.reload() (architecture doc §3.2)
  return (
    <PageLayout>
      <HomeContent key={introVersion} />
    </PageLayout>
  )
}

function HomeContent() {
  const { played, markPlayed } = useIntroPlayedOnce()
  const reducedMotion = useReducedMotion()
  const { setNavRevealed } = useIntro()
  const navigate = useNavigate()
  const location = useLocation()

  // Reduced-motion users skip straight to the settled state (architecture doc §6, rule 6)
  const skipIntro = played || reducedMotion
  const [phase, setPhase] = useState<'intro' | 'settled'>(skipIntro ? 'settled' : 'intro')
  // Deep-linking straight to /#about places the polaroid in its About slot from the start
  const [polaroidHome, setPolaroidHome] = useState(!(skipIntro && location.hash === '#about'))
  const [instantMove, setInstantMove] = useState(skipIntro && location.hash === '#about')
  const [headlineKey, setHeadlineKey] = useState(0)
  const moveTimeout = useRef<number | undefined>(undefined)

  // Nav links stay hidden while the intro plays; the timeline reveals them at t≈10
  useEffect(() => {
    if (phase !== 'intro') return
    setNavRevealed(false)
    return () => setNavRevealed(true)
  }, [phase, setNavRevealed])

  const handleIntroComplete = useCallback(() => {
    markPlayed()
    setPhase('settled')
  }, [markPlayed])

  // Hash navigation, applied as a render-phase adjustment on each new history entry: #about
  // jumps the polaroid to its About slot without a flight animation (the original's "teleport"
  // path); #home replays the typed headline (architecture doc §3.2)
  const [handledLocationKey, setHandledLocationKey] = useState(location.key)
  if (handledLocationKey !== location.key) {
    setHandledLocationKey(location.key)
    if (location.hash === '#about' && phase === 'settled' && polaroidHome) {
      setInstantMove(true)
      setPolaroidHome(false)
    }
    if (location.hash === '#home') {
      setHeadlineKey((key) => key + 1)
    }
  }

  // Scrolling is the effect's only job — the state updates above happen during render
  useEffect(() => {
    if (!location.hash) return
    document
      .querySelector(location.hash)
      ?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
  }, [location, reducedMotion])

  // Click path: scroll the About section into view first, then hand the polaroid to its About
  // slot — Framer Motion's layoutId animates the move with the destination fully in view
  const moveToAbout = useCallback(() => {
    if (!polaroidHome) return
    document
      .getElementById('about')
      ?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
    if (reducedMotion) {
      setInstantMove(true)
      setPolaroidHome(false)
      return
    }
    setInstantMove(false)
    moveTimeout.current = window.setTimeout(() => setPolaroidHome(false), 650)
  }, [polaroidHome, reducedMotion])

  useEffect(() => () => window.clearTimeout(moveTimeout.current), [])

  return (
    <>
      <section id="home" className={styles.hero}>
        {phase === 'intro' ? (
          <IntroSequence
            onComplete={handleIntroComplete}
            onNavReveal={() => setNavRevealed(true)}
          />
        ) : (
          <div className={styles.heroContent}>
            <div className={styles.heroText} key={headlineKey}>
              <TypedTextReveal text={HEADLINE} speedMs={40} className={styles.typedHeadline} />
              {polaroidHome && <ArrowPointer className={styles.arrow} />}
            </div>
            <div className={styles.polaroidStack}>
              <Polaroid
                variant="projects"
                rotate={-10}
                fadeInDelay={played ? 0 : 1}
                onClick={() => navigate('/projects')}
                className={styles.stackedProjects}
              />
              {polaroidHome && (
                <Polaroid
                  variant="about"
                  layoutId="about-polaroid"
                  rotate={-8}
                  onClick={moveToAbout}
                  className={styles.stackedAbout}
                />
              )}
            </div>
          </div>
        )}
      </section>

      {phase === 'settled' && (
        <>
          <section id="about" className={styles.about}>
            <div className={styles.aboutInner}>
              <div className={styles.aboutSlot}>
                {!polaroidHome && (
                  <Polaroid
                    variant="about"
                    layoutId="about-polaroid"
                    rotate={8}
                    instant={instantMove}
                  />
                )}
              </div>
              <div className={styles.aboutText}>
                {polaroidHome ? (
                  <p className={styles.aboutHint}>
                    Click the “About Me” polaroid up top to develop this section.
                  </p>
                ) : (
                  <TypedTextReveal text={ABOUT_TEXT} speedMs={25} />
                )}
              </div>
            </div>
          </section>

          <section id="skills" className={styles.skills}>
            <SkillsSection />
          </section>
        </>
      )}
    </>
  )
}
