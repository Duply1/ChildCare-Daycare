import { Star, Heart, Phone, Mail, MapPin, Share2, Camera, MessageSquare } from 'lucide-react'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Why Choose Us', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const PROGRAMS_LIST = [
  'Infant Care (6wk–12mo)',
  'Toddler Program (1–3yr)',
  'Preschool (3–5yr)',
  'After School Care',
  'Summer Camp',
  'Holiday Programs',
]

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      {/* CTA band */}
      <div className="footer-cta-band">
        <div className="container footer-cta-inner">
          <div className="footer-cta-text">
            <h3>Ready to Give Your Child the Best Start?</h3>
            <p>Limited spots available. Enroll today and secure your child's place at Little Stars!</p>
          </div>
          <div className="footer-cta-actions">
            <a
              href="#contact"
              className="btn-white"
              onClick={(e) => handleScroll(e, '#contact')}
            >
              Enroll Now
            </a>
            <a href="tel:+15551234567" className="footer-phone-btn">
              <Phone size={16} />
              (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Star size={16} fill="white" color="white" />
              </div>
              <div>
                <div className="footer-logo-name">Little Stars</div>
                <div className="footer-logo-sub">Childcare</div>
              </div>
            </div>
            <p className="footer-tagline">
              Nurturing bright futures with love, care, and joyful learning since 2009.
            </p>
            <div className="footer-social">
              <a href="#" className="social-btn" aria-label="Facebook">
                <Share2 size={17} />
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                <Camera size={17} />
              </a>
              <a href="#" className="social-btn" aria-label="Twitter">
                <MessageSquare size={17} />
              </a>
            </div>
            <div className="footer-license">
              <span className="license-badge">✓ State Licensed</span>
              <span className="license-badge">✓ NAEYC Accredited</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Programs</h4>
            <ul className="footer-links">
              {PROGRAMS_LIST.map((p) => (
                <li key={p}>
                  <a href="#programs" onClick={(e) => handleScroll(e, '#programs')}>
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={15} className="footer-contact-icon" />
                <span>123 Sunshine Lane,<br />Maplewood, NJ 07040</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} className="footer-contact-icon" />
                <a href="tel:+15551234567">(555) 123-4567</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={15} className="footer-contact-icon" />
                <a href="mailto:hello@littlestarscare.com">hello@littlestarscare.com</a>
              </div>
            </div>
            <div className="footer-hours">
              <div className="hours-title">Operating Hours</div>
              <div className="hours-row">
                <span>Mon – Fri</span>
                <span>6:00 AM – 6:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Saturday</span>
                <span>8:00 AM – 2:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} Little Stars Childcare. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <Heart size={13} fill="#FF6B35" color="#FF6B35" /> for our little stars
          </p>
        </div>
      </div>
    </footer>
  )
}
