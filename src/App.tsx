import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { IntroProvider } from './context/IntroContext'
import { AppRoutes } from './router'

function App() {
  return (
    // reducedMotion="user" makes every Framer Motion animation respect prefers-reduced-motion
    <MotionConfig reducedMotion="user">
      <IntroProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </IntroProvider>
    </MotionConfig>
  )
}

export default App
