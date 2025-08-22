"use client"
import { Briefcase, GraduationCap } from 'lucide-react'

const Resume = () => {
  // Function to handle click on My Work button
  const handleWorkButtonClick = () => {
    // Find the element with the Portfolio section and scroll to it
    const portfolioSection = document.querySelector('.portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update URL to reflect the portfolio section
    window.history.pushState({}, '', '#portfolio');
    
    // If you have a state management for active section, update it
    if (window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('navigate-to-section', { 
        detail: { section: 'portfolio' } 
      }));
    }
  };
  const personalSkills = [
    { name: 'Leadership', percentage: 85 },
    { name: 'Communication', percentage: 90 },
    { name: 'Logical Thinking', percentage: 92 },
    { name: 'Decision Making', percentage: 80 },
  ]

  const hobbies = [
    { name: 'Coding', icon: '💻' },
    { name: 'Reading', icon: '📚' },
    { name: 'Travel', icon: '✈️' },
    { name: 'Football', icon: '⚽' },
    { name: 'Photography', icon: '📷' },
    { name: 'Literature', icon: '📄' },
    { name: 'Cycling', icon: '🚴' },
    { name: 'Cricket', icon: '🏏' },
    { name: 'Movies', icon: '🎬' },
    { name: 'Music', icon: '🎵' },
    //Added
    { name: 'Nature-Loving', icon: '🍃' }, 
  ]

  const technicalSkills = [
    'ReactJs, Redux, Bootstrap,',
    'Materialize, HTML, CSS, Flutter,',
    'Android, Android Studio, Visual',
    'Studio, NetBeans, Linux, Github,',
    'Slack, Photoshop'
  ]

  return (
    <section className="resume">
      <div className="section-header">
        <h2 className="section-title" data-text="RESUME">
          MY <span className="highlight">RESUME</span>
        </h2>
      </div>

      <div className="resume-content">
        <div className="resume-summary">
          <div className="profile-section">
            <img src="/images/personal-photo.jpg" alt="Mohammad Irshad Aalam" className="resume-photo" />
          </div>
          <div className="summary-text">
            <h3>SUMMARY</h3>
            <p>
              With over 3+ years of professional experience, I'm driven to
              leverage my expertise in full-stack development, front-end
              technologies, and cloud solutions to drive product innovation.
              With a strong foundation in software engineering and a passion
              for data analytics, I excel at solving complex challenges,
              optimizing systems, and driving innovation.
            </p>
          </div>
        </div>

        <div className="resume-details">
          <div className="resume-sidebar">
            <div className="name-title">
              <h2>MOHAMMAD IRSHAD AALAM</h2>
              <p>Senior Software Engineer</p>
            </div>

            <div className="personal-skills-section">
              <h3>
                <span className="icon">🧠</span>
                PERSONAL SKILLS
              </h3>
              {personalSkills.map((skill, index) => (
                <div key={index} className="skill-bar">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}

              <div className="technical-skills">
                <h4>TECHNICAL SKILLS</h4>
                <p>{technicalSkills.join(' ')}</p>
              </div>
            </div>
          </div>

          <div className="resume-main">
            <div className="experience-section">
              <h3>
                <Briefcase className="section-icon" size={24} />
                WORK EXPERIENCE
              </h3>
              
              <div className="experience-item">
                <div className="experience-header">
                  <div className="date-badge">MAR 2022 - PRESENT / KATHMANDU, NEPAL</div>
                </div>
                <h4>LEAPFROG TECHNOLOGY - <span className="highlight">SENIOR SOFTWARE ENGINEER</span></h4>
                <ul>
                  <li>Developed Image Slider, Box Collision, Ant Smasher, Car Lane using DOM & canvas in plain javascript.</li>
                  <li>Developed a flappy bird game using ES6 javascript.</li>
                  <li>Developed a resume builder using plain javascript.</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <div className="date-badge">FEB 2021 - PRESENT / RAJBIRAJ, NEPAL</div>
                </div>
                <h4>Itahari INTERNATIONAL COLLEGE - <span className="highlight">ACADEMIC TUTOR</span></h4>
                <ul>
                  <li>Responsible for combining my academic experience and skills to teach a varied and stimulating IT curriculum.</li>
                  <li>Teach undergraduate students concepts of core java and inspired them to translate their academic skills to solve real world problems.</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <div className="date-badge">JUL 2019 - OCT 2019 / KATHMANDU, NEPAL</div>
                </div>
                <h4>Velocis Core <span className="highlight">JUNIOR MERN DEVELOPER</span></h4> 
                <ul>
                  <li>Worked collaboratively in providing resources and processes in the project to rapidly develop and operate the applications.</li>
                  <li>Coordinated configuring, coding, integrating and documenting specifications throughout the project.</li>
                </ul>
              </div>
            </div>

            <div className="education-section">
              <h3>
                <GraduationCap className="section-icon" size={24} />
                EDUCATION
              </h3>
              
              <div className="education-item">
                <h4><span className="highlight">Islington College</span> - Master in Data Analytics (MSc IT)</h4>
                <p>Feb 2023 - present / Kathmandu, Nepal</p>
              </div>

              <div className="education-item">
                <h4><span className="highlight">Itahari International College</span> - Bsc (Hons) Computing</h4>
                <p>Oct 2023 - Oct 2026 / Rajbiraj, Nepal</p>
              </div>

              <div className="education-item">
                <h4><span className="highlight">Sikshadeep  College </span> - +2 Science</h4> 
                <p>2020 - 2022 / Biratnagar, Nepal</p>
              </div>
            </div>

            <div className="hobbies-section">
              <h3>
                <span className="icon">💛</span>
                Hobbies
              </h3>
              <div className="hobbies-grid">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="hobby-card">
                    <div className="hobby-icon">{hobby.icon}</div>
                    <div className="hobby-name">{hobby.name}</div>
                  </div>
                ))}
              </div>
              <button 
                className="cta-button work-btn"
                onClick={handleWorkButtonClick}
              >
                MY WORK 📁
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
