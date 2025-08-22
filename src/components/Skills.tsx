"use client"
const Skills = () => {
  const personalSkills = [
    { name: 'Leadership', percentage: 85 },
    { name: 'Communication', percentage: 90 },
    { name: 'Logical Thinking', percentage: 92 },
    { name: 'Decision Making', percentage: 80 },
  ]

  const technicalSkills = [
    'ReactJs, Redux, Bootstrap,',
    'Materialize, HTML, CSS, Flutter,',
    'Android, Android Studio, Visual',
    'Studio, NetBeans, Linux, Github,',
    'Slack, Photoshop'
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
  ]

  return (
    <section className="skills">
      <div className="skills-content">
        <div className="personal-skills">
          <h3>PERSONAL SKILLS</h3>
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

        <div className="hobbies-section">
          <h3>
            Hobbies <span className="heart">💛</span>
          </h3>
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-card">
                <div className="hobby-icon">{hobby.icon}</div>
                <div className="hobby-name">{hobby.name}</div>
              </div>
            ))}
          </div>
          <button className="cta-button">MY WORK 📁</button>
        </div>
      </div>
    </section>
  )
}

export default Skills
