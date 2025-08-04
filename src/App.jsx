import React, { useState, useEffect, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import Project from './components/Project/project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { motion, AnimatePresence } from 'framer-motion'

// Lazy load components for better performance
const LazyHome = React.lazy(() => import('./components/Home/Home'))
const LazyAbout = React.lazy(() => import('./components/About/About'))
const LazyEducation = React.lazy(() => import('./components/Education/Education'))
const LazyProject = React.lazy(() => import('./components/Project/project'))
const LazySkills = React.lazy(() => import('./components/Skills/Skills'))
const LazyContact = React.lazy(() => import('./components/Contact/Contact'))

const SplashScreen = ({ onComplete }) => {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    // Phase 1: Text appears and zooms in (0-2000ms)
    const timer1 = setTimeout(() => setAnimationPhase(1), 2000)

    // Phase 2: Text splits apart (2000-3000ms)
    const timer2 = setTimeout(() => setAnimationPhase(2), 3000)

    // Phase 3: Splash screen disappears (3000-3500ms)
    const timer3 = setTimeout(() => {
      setAnimationPhase(3)
      setTimeout(onComplete, 500) // Complete after fade out
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: 'var(--color-accent)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Main text container */}
      <motion.div
        className="splash-text-container"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: animationPhase === 0 ? 1 : animationPhase === 1 ? 1.2 : animationPhase === 2 ? 2 : 3,
          opacity: animationPhase === 0 ? 1 : animationPhase === 1 ? 1 : animationPhase === 2 ? 0.8 : 0,
          x: animationPhase === 2 ? -1000 : animationPhase === 2 ? 1000 : 0
        }}
        transition={{
          duration: animationPhase === 0 ? 2 : animationPhase === 1 ? 1 : 0.5,
          ease: animationPhase === 0 ? "easeOut" : animationPhase === 1 ? "easeInOut" : "easeIn"
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Welcome text */}
        <motion.h1
          className="splash-title"
          animate={{
            y: animationPhase === 2 ? -50 : 0,
            x: animationPhase === 2 ? -200 : 0,
            opacity: animationPhase === 2 ? 0 : 1
          }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            fontWeight: '700',
            color: 'var(--color-accent)',
            margin: '0',
            textShadow: '0 0 20px var(--color-accent)',
            fontFamily: 'var(--font-main)',
            letterSpacing: '0.1em'
          }}
        >
          Welcome to my
        </motion.h1>

        <motion.h1
          className="splash-subtitle"
          animate={{
            y: animationPhase === 2 ? 50 : 0,
            x: animationPhase === 2 ? 200 : 0,
            opacity: animationPhase === 2 ? 0 : 1
          }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            fontSize: 'clamp(2.5rem, 10vw, 5rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0',
            textShadow: '0 0 30px var(--color-accent)',
            fontFamily: 'var(--font-main)',
            letterSpacing: '0.15em'
          }}
        >
          WORLD
        </motion.h1>

        {/* Loading indicator */}
        <motion.div
          className="loading-indicator"
          animate={{
            opacity: animationPhase === 0 ? 1 : 0,
            scale: animationPhase === 0 ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{
              width: '20px',
              height: '20px',
              border: '2px solid var(--color-accent)',
              borderTop: '2px solid transparent',
              borderRadius: '50%'
            }}
          />
          <span style={{ color: 'var(--color-accent)', fontSize: '1rem' }}>
            Loading...
          </span>
        </motion.div>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="splash-glow"
        animate={{
          scale: animationPhase === 0 ? 1 : animationPhase === 1 ? 1.5 : 3,
          opacity: animationPhase === 0 ? 0.3 : animationPhase === 1 ? 0.6 : 0
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          zIndex: 1
        }}
      />
    </motion.div>
  )
}

const App = () => {
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleSplashComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <AnimatePresence mode="wait">
      <div className="app-wrapper">
        {/* Skip to Content Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <div className="main-content">
          <div className={`nav ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme} />
          </div>
          <div className={`home container ${theme}`}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyHome theme={theme} />
            </Suspense>
          </div>
          <main id="main-content" className={`container ${theme}`}>
            <div className="components">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAbout theme={theme} />
              </Suspense>
            </div>
            <div className="components">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyEducation />
              </Suspense>
            </div>
            <div className="components">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyProject />
              </Suspense>
            </div>
            <div className="components">
              <Suspense fallback={<div>Loading...</div>}>
                <LazySkills />
              </Suspense>
            </div>
            <div className="components">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyContact />
              </Suspense>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  )
}

export default App
