"use client"

// Custom event for navigation
const navigateToHome = () => {
  // Dispatch a custom event that App component will listen to
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('navigate-to-section', { 
      detail: { section: 'home' } 
    }));
  }
};

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div 
          className="profile-circle" 
          onClick={navigateToHome}
          role="button"
          tabIndex={0}
          title="Go to Home"
        >
          <img src="/images/personal-photo.jpg" alt="Mohammad Irshad Aalam" />
        </div>
      </div>
    </header>
  )
}

export default Header
