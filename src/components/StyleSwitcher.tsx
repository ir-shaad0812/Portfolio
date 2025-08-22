"use client"
import { useTheme } from '../App'

interface StyleSwitcherProps {
  onClose: () => void
}

const StyleSwitcher = ({ onClose }: StyleSwitcherProps) => {
  const { setTheme } = useTheme()

  const colors = [
    { name: 'Blue', value: '#3b82f6', class: 'blue' },
    { name: 'Red', value: '#ef4444', class: 'red' },
    { name: 'Purple', value: '#8b5cf6', class: 'purple' },
    { name: 'Cyan', value: '#06b6d4', class: 'cyan' },
    { name: 'Orange', value: '#f97316', class: 'orange' },
    { name: 'Pink', value: '#ec4899', class: 'pink' },
    { name: 'Green', value: '#10b981', class: 'green' },
    { name: 'Yellow', value: '#eab308', class: 'yellow' },
    { name: 'Lime', value: '#84cc16', class: 'lime' },
    { name: 'Indigo', value: '#6366f1', class: 'indigo' },
  ]

  const handleColorChange = (colorClass: string) => {
    setTheme(colorClass)
  }

  return (
    <div className="style-switcher">
      <div className="switcher-header">
        <h3>STYLE SWITCHER</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="color-options">
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-option"
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorChange(color.class)}
            title={color.name}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default StyleSwitcher
