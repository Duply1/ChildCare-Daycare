import { useState, useEffect } from 'react'
import { Menu, X, Star, Phone } from 'lucide-react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="logo-icon">
            <Star size={18} fill="white" color="white" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Little Stars</span>
            <span className="logo-sub">Childcare</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="nav-cta">
          <a href="tel:+15551234567" className="nav-phone">
            <Phone size={15} />
            (555) 123-4567
          </a>
          <a
            href="#contact"
            className="btn-primary nav-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Enroll Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-cta">
          <a href="tel:+15551234567" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
            <Phone size={15} />
            (555) 123-4567
          </a>
          <a
            href="#contact"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  )
}
