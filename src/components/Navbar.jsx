import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Star, LogIn, Home } from 'lucide-react'
import './Navbar.css'

const SECTION_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isLoginPage = location.pathname === '/login'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false) }, [location.pathname])

  const handleSectionNav = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isScrolled = scrolled || isLoginPage

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">

        {/* Logo */}
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <Star size={18} fill="white" color="white" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Little Stars</span>
            <span className="logo-sub">Childcare</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {/* Home link — always first */}
          <li>
            <Link to="/" className="nav-link nav-link-home">
              <Home size={14} />
              Home
            </Link>
          </li>

          {/* Section links (only shown on home page) */}
          {!isLoginPage && SECTION_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                onClick={(e) => handleSectionNav(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Login button */}
        <div className="nav-right">
          {isLoginPage ? (
            <Link to="/" className="btn-outline nav-login-btn">
              <Home size={15} />
              Back to Home
            </Link>
          ) : (
            <Link to="/login" className="nav-login-btn login-btn">
              <LogIn size={15} />
              Parent Login
            </Link>
          )}
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
          <li>
            <Link to="/" className="mobile-link mobile-link-home">
              <Home size={16} />
              Home
            </Link>
          </li>
          {!isLoginPage && SECTION_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-link"
                onClick={(e) => handleSectionNav(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-cta">
          {isLoginPage ? (
            <Link to="/" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              <Home size={15} />
              Back to Home
            </Link>
          ) : (
            <Link to="/login" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <LogIn size={15} />
              Parent Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
