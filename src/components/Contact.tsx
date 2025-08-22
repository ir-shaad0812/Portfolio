"use client"
import { useState } from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Github, Send, Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [sending, setSending] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = (field: string) => {
    setFocused(field)
  }

  const handleBlur = () => {
    setFocused(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    
    // Simulate sending delay
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSending(false)
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section className="contact">
      <div className="section-header">
        <h2 className="section-title" data-text="CONTACT">
          GET IN <span className="highlight">TOUCH</span>
        </h2>
      </div>

      <div className="contact-content modern">
        <div className="contact-info">
          <div className="contact-info-header">
            <h3>Let's Connect</h3>
            <div className="contact-divider"></div>
          </div>
          
          <p className="contact-description">
            Feel free to reach out if you're looking for a developer, have a question, 
            or just want to connect.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div className="contact-text">
                <div className="contact-label">Email</div>
                <div className="contact-value">irshad.aalam0812@gmail.com</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div className="contact-text">
                <div className="contact-label">Phone</div>
                <div className="contact-value">+977 9702647314</div>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-text">
                <div className="contact-label">Location</div>
                <div className="contact-value">Kathmandu, Nepal</div>
              </div>
            </div>
          </div>

          <div className="social-links">
            <p className="social-title">Find me on</p>
            <div className="social-icons">
              <a href="#" className="social-link" title="Facebook"><Facebook size={18} /></a>
              <a href="#" className="social-link" title="Instagram"><Instagram size={18} /></a>
              <a href="#" className="social-link" title="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="social-link" title="Twitter"><Twitter size={18} /></a>
              <a href="#" className="social-link" title="GitHub"><Github size={18} /></a>
            </div>
          </div>
        </div>

        <div className="contact-form modern-form">
          <div className="form-header">
            <h4>Send me a message</h4>
            <p>I'll respond as soon as possible</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className={`input-container ${focused === 'name' ? 'focused' : ''} ${formData.name ? 'has-value' : ''}`}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                />
              </div>
              
              <div className={`input-container ${focused === 'email' ? 'focused' : ''} ${formData.email ? 'has-value' : ''}`}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                />
              </div>
            </div>
            
            <div className={`input-container ${focused === 'subject' ? 'focused' : ''} ${formData.subject ? 'has-value' : ''}`}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                onFocus={() => handleFocus('subject')}
                onBlur={handleBlur}
                required
              />
            </div>
            
            <div className={`input-container textarea ${focused === 'message' ? 'focused' : ''} ${formData.message ? 'has-value' : ''}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`submit-button ${sending ? 'sending' : ''}`}
              disabled={sending}
            >
              <span className="button-text">{sending ? 'SENDING...' : 'SEND MESSAGE'}</span>
              <span className="button-icon">
                <Send size={18} className="send-icon" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
