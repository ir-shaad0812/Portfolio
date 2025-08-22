"use client"

import { Home, User, FileText, Briefcase, Mail } from 'lucide-react'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const menuItems = [
    { id: 'home', icon: Home, label: 'HOME' },
    { id: 'about', icon: User, label: 'ABOUT' },
    { id: 'resume', icon: FileText, label: 'RESUME' },
    { id: 'portfolio', icon: Briefcase, label: 'PORTFOLIO' },
    { id: 'contact', icon: Mail, label: 'CONTACT' },
  ]

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="nav-item-wrapper">
              <button
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon size={20} />
              </button>
              <div className="nav-tooltip">{item.label}</div>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
