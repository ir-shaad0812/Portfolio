"use client"
import { User } from 'lucide-react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero = ({ setActiveSection }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape"></div>
      </div>
      <div className="hero-content">
        <div className="hero-image">
          <div className="image-frame">
            <img src="/images/personal-photo.jpg" alt="Mohammad Irshad Aalam" />
          </div>
          <div className="image-decoration"></div>
        </div>
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="greeting-text">HI THERE !</span>
            <div className="greeting-line"></div>
          </div>
          <h1 className="hero-title">
            I'M <span className="highlight">MOHAMMAD IRSHAD AALAM</span>
          </h1>
          <p className="hero-description">
            A results-driven Senior Software Engineer with over 3+  years of experience
            in full-stack development, cloud computing, and leadership. I specialize in
            designing and delivering scalable, user-centric solutions using modern
            technologies like React, Node.js, Golang, AWS, and Kubernetes. From
            leading cross-functional teams to mentoring aspiring developers, I thrive
            on solving complex challenges and building innovative products.
          </p>
          <button 
            className="cta-button with-icon"
            onClick={() => setActiveSection('about')}
          >
            MORE ABOUT ME
            <User className="button-icon" size={18} />
          </button>
        </div>
      </div>

      {/* Scroll-Down  Button  */}

      {/* <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div> */}
      
    </section>
  )
}

export default Hero
