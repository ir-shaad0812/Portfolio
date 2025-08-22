"use client"

const Hobbies = () => {
  const hobbies = [
    { name: 'Painting', color: 'bg-purple-500', icon: '🎨' },
    { name: 'Hiking', color: 'bg-green-500', icon: '🥾' },
    { name: 'Photography', color: 'bg-orange-500', icon: '📷' },
    { name: 'Music', color: 'bg-red-500', icon: '🎵' },
    { name: 'Traveling', color: 'bg-blue-500', icon: '✈️' },
    { name: 'Fitness', color: 'bg-teal-500', icon: '💪' },
    { name: 'Reading', color: 'bg-indigo-500', icon: '📚' },
    { name: 'Cooking', color: 'bg-yellow-500', icon: '🍳' },
    { name: 'Gardening', color: 'bg-green-600', icon: '🌱' },
    { name: 'Writing', color: 'bg-pink-500', icon: '✍️' },
    { name: 'Dancing', color: 'bg-red-400', icon: '💃' },
    { name: 'Cycling', color: 'bg-green-400', icon: '🚴' },
    { name: 'Camping', color: 'bg-teal-600', icon: '🏕️' },
    { name: 'Gaming', color: 'bg-blue-600', icon: '🎮' },

    
  ]

  return (
    <section className="hobbies">
      <div className="hobbies-content">
        <div className="section-card">
          <div className="card-header">
            <span className="card-icon">✨</span>
            <h3>Beyond the Code</h3>
          </div>
          <p className="card-description">
            Explore my interests and hobbies beyond the digital realm.
          </p>
          <div className="hobbies-tags">
            {hobbies.map((hobby, index) => (
              <span key={index} className={`hobby-tag ${hobby.color}`}>
                {hobby.name} {hobby.icon}
              </span>
            ))}
          </div>
        </div>

        <div className="section-card">
          <div className="card-header">
            <span className="card-icon">📍</span>
            <h3>My Location</h3>
          </div>
          <p className="card-description">
            Currently based in the beautiful country of Nepal.
          </p>
          <div className="location-visual">
            <div className="location-dots">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="connect-section">
        <button className="connect-button">
          Connect With Me →
        </button>
      </div>
    </section>
  )
}

export default Hobbies
