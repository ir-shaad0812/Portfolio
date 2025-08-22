"use client"

import { useState, createContext, useContext, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import './App.css'

// Improved lazy loading with Next.js dynamic imports
// This adds prefetching capabilities and better code splitting
const About = dynamic(() => import('./components/About'), {
  loading: () => <div className="section-loading"><div className="loading-spinner"></div></div>,
  ssr: false // Disable server-side rendering for components not needed on first paint
})
const Resume = dynamic(() => import('./components/Resume'), {
  loading: () => <div className="section-loading"><div className="loading-spinner"></div></div>,
  ssr: false
})
const Portfolio = dynamic(() => import('./components/Portfolio'), {
  loading: () => <div className="section-loading"><div className="loading-spinner"></div></div>,
  ssr: false
})
const Contact = dynamic(() => import('./components/Contact'), {
  loading: () => <div className="section-loading"><div className="loading-spinner"></div></div>,
  ssr: false
})
const StyleSwitcher = dynamic(() => import('./components/StyleSwitcher'), {
  loading: () => <div className="loading-styles">Loading...</div>,
  ssr: false
})

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'orange',
  setTheme: () => {}
})

export const useTheme = () => useContext(ThemeContext)

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showStyleSwitcher, setShowStyleSwitcher] = useState(false)
  const [theme, setTheme] = useState('orange')
  
  // Listen for navigation events from components
  useEffect(() => {
    const handleNavigateToSection = (event: CustomEvent) => {
      if (event.detail && event.detail.section) {
        setActiveSection(event.detail.section);
      }
    };

    window.addEventListener('navigate-to-section', handleNavigateToSection as EventListener);
    
    return () => {
      window.removeEventListener('navigate-to-section', handleNavigateToSection as EventListener);
    };
  });

  // Using Next.js dynamic imports handles loading states with the config options
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />
      case 'about':
        return <About />
      case 'resume':
        return <Resume />
      case 'portfolio':
        return <Portfolio />
      case 'contact':
        return <Contact />
      default:
        return <Hero setActiveSection={setActiveSection} />
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app theme-${theme}`}>
        <Header />
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="main-content">
          {renderSection()}
        </main>
        <button 
          className="style-switcher-btn"
          onClick={() => setShowStyleSwitcher(!showStyleSwitcher)}
          title="Style Switcher"
        >
          ⚙️
        </button>
        {showStyleSwitcher && (
          <StyleSwitcher onClose={() => setShowStyleSwitcher(false)} />
        )}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
