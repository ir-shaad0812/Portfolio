"use client"

const About = () => {
  const stats = [
    { number: '3+', label: 'YEARS OF\nEXPERIENCE' },
    { number: '20+', label: 'COMPLETED\nPROJECTS' },
    { number: '05+', label: 'AWARDS\nWON' },
  ]

  const skills = [
    { name: 'Frontend Development', percentage: 70 },
    { name: 'Backend Development', percentage: 80 },
    { name: 'Cloud Computing', percentage: 70 },
    { name: 'Team Leadership', percentage: 75 },
    { name: 'Mobile Development', percentage: 85 },
    { name: 'UI/UX Design', percentage: 75 },
    { name: 'DevOps', percentage: 65 },
    { name: 'Data Analytics', percentage: 72 },
    { name: 'Machine Learning', percentage: 68 },
    { name: 'Database Management', percentage: 78 }
  ]

  return (
    <section className="about">
      <div className="section-header ">
        <h2 className="section-title " data-text="REACH ME">
          ABOUT <span className="highlight">ME</span>
        </h2>
      </div>
      
      <div className="about-content">
        <div className="personal-info">
          <h3>PERSONAL INFOS</h3>
          
          <div className="about-bio">
            <p>
              I am a passionate and dedicated Software Engineer with a strong focus on creating elegant, 
              efficient, and user-friendly solutions to complex problems. With over 3+ years of experience, 
              I specialize in full-stack development and enjoy transforming ideas into reality through code.
            </p>
            <p>
              My journey in tech started with a deep curiosity about how digital systems work, which evolved into 
              a career building applications that make a difference. Whether it's developing responsive web applications, 
              optimizing backend systems, or implementing cloud solutions, I approach each project with enthusiasm and attention to detail.
            </p>
          </div>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">First Name:</span>
              <span className="info-value">Mohammad Irshad</span>
            </div>
            <div className="info-item">
              <span className="info-label">Last Name:</span>
              <span className="info-value">Aalam</span>
            </div>
            <div className="info-item">
              <span className="info-label">Address:</span>
              <span className="info-value">Rajbiraj, Nepal</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">+977-9702647314</span>
            </div>
            <div className="info-item">
              <span className="info-label">Nationality:</span>
              <span className="info-value">Nepalese</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">irshad.aalam0812@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Freelance:</span>
              <span className="info-value highlight">Available</span>
            </div>
          </div>
          <div className="about-buttons">
            <button 
              className="cta-button"
              onClick={() => {
                const resumeSection = document.querySelector('.resume');
                if (resumeSection) {
                  resumeSection.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState({}, '', '#resume');
                }
              }}
            >
              MY RESUME
            </button>
            <a 
              href="/Irsad_CV.pdf" 
              download 
              className="cta-button secondary"
              style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h3>MY SKILLS</h3>
        <div className="skills-header">
          <p className="skills-intro">
            With expertise across various domains of software development, I bring a versatile skill set to any project. 
            Here are my core competencies:
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-circle">
              <div className="circle-progress" style={{'--percentage': `${skill.percentage * 3.6}deg`} as React.CSSProperties}>
                <div className="circle-inner">
                  <span className="percentage">{skill.percentage}%</span>
                </div>
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
        
        <div className="tech-stack-section">
          <h3>TECHNOLOGIES I WORK WITH</h3>
          <div className="tech-categories">
            <div className="tech-category">
              <h4>Frontend</h4>
              <div className="tech-list">
                <div className="tech-item">React</div>
                <div className="tech-item">Next.js</div>
                <div className="tech-item">Vue</div>
                <div className="tech-item">Angular</div>
                <div className="tech-item">Tailwind</div>
                <div className="tech-item">SASS</div>
              </div>
            </div>
            
            <div className="tech-category">
              <h4>Backend</h4>
              <div className="tech-list">
                <div className="tech-item">Node.js</div>
                <div className="tech-item">Express</div>
                <div className="tech-item">Django</div>
                <div className="tech-item">Flask</div>
                <div className="tech-item">Spring Boot</div>
                <div className="tech-item">GraphQL</div>
              </div>
            </div>
            
            <div className="tech-category">
              <h4>Database</h4>
              <div className="tech-list">
                <div className="tech-item">MongoDB</div>
                <div className="tech-item">PostgreSQL</div>
                <div className="tech-item">MySQL</div>
                <div className="tech-item">Redis</div>
                <div className="tech-item">Firebase</div>
              </div>
            </div>
            
            <div className="tech-category">
              <h4>DevOps</h4>
              <div className="tech-list">
                <div className="tech-item">Docker</div>
                <div className="tech-item">AWS</div>
                <div className="tech-item">CI/CD</div>
                <div className="tech-item">Kubernetes</div>
                <div className="tech-item">GitHub</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
