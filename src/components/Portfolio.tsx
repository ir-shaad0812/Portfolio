"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'

// We'll use Next.js Image component instead of progressive loading
// as it handles optimization better

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/placeholder.jpg",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Mobile Development",
      image: "/placeholder.jpg",
      description: "Cross-platform mobile app built with React Native",
      technologies: ["React Native", "Firebase", "Redux"]
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      category: "Data Science",
      image: "/placeholder.jpg",
      description: "Interactive dashboard for business intelligence",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL"]
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      category: "DevOps",
      image: "/placeholder.jpg",
      description: "Scalable cloud infrastructure using AWS and Kubernetes",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform"]
    },
    {
      id: 5,
      title: "AI Chatbot",
      category: "Machine Learning",
      image: "/placeholder.jpg",
      description: "Intelligent chatbot with natural language processing",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"]
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      category: "Blockchain",
      image: "/placeholder.jpg",
      description: "Secure cryptocurrency wallet application",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"]
    }
  ]

  const categories = ["All", "Web Development", "Mobile Development", "Data Science", "DevOps", "Machine Learning", "Blockchain"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="portfolio">
      <div className="section-header">
        <h2 className="section-title" data-text="WORKS">
          MY <span className="highlight">PORTFOLIO</span>
        </h2>
      </div>

      <div className="portfolio-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <div className="portfolio-image">
              <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                <Image 
                  src={project.image || "/placeholder.jpg"} 
                  alt={project.title} 
                  title={`${project.title} - ${project.description}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  quality={75} // Good quality with smaller file size
                  priority={project.id <= 2} // Load first 2 images with high priority
                />
              </div>
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="portfolio-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="portfolio-actions">
                    <button className="portfolio-btn">View Details</button>
                    <button className="portfolio-btn secondary">Live Demo</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-info">
              <span className="portfolio-category">{project.category}</span>
              <h4 className="portfolio-title">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
