import { ArrowRight, Play, Shield, Award, Clock } from 'lucide-react'
import './Hero.css'

const STATS = [
  { icon: '👶', number: '500+', label: 'Happy Kids' },
  { icon: '⭐', number: '4.9', label: 'Star Rating' },
  { icon: '🎓', number: '15+', label: 'Years of Care' },
  { icon: '🏆', number: '98%', label: 'Parent Satisfaction' },
]

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      {/* Background shapes */}
      <div className="hero-bg">
        <div className="bg-circle bg-circle-1" />
        <div className="bg-circle bg-circle-2" />
        <div className="bg-circle bg-circle-3" />
        <div className="bg-dots" />
      </div>

      <div className="container hero-container">
        {/* Left content */}
        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={14} />
            Licensed & Certified Childcare
          </div>

          <h1 className="hero-title">
            Where Every Child
            <span className="hero-title-accent"> Learns, Plays</span>
            <br />& Grows with Love
          </h1>

          <p className="hero-description">
            A nurturing, safe, and joyful environment for children aged 6 weeks to 5 years.
            We believe every child deserves the best start in life, filled with discovery and laughter.
          </p>

          <div className="hero-actions">
            <button className="btn-primary hero-btn" onClick={() => handleScroll('#contact')}>
              Enroll Today
              <ArrowRight size={18} />
            </button>
            <button className="hero-tour-btn" onClick={() => handleScroll('#about')}>
              <div className="play-icon">
                <Play size={14} fill="currentColor" />
              </div>
              Take a Tour
            </button>
          </div>

          {/* Trust badges */}
          <div className="hero-trust">
            <div className="trust-item">
              <Shield size={16} className="trust-icon" />
              <span>State Licensed</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <Award size={16} className="trust-icon" />
              <span>Award Winning</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <Clock size={16} className="trust-icon" />
              <span>Open 6 AM – 6 PM</span>
            </div>
          </div>
        </div>

        {/* Right illustration */}
        <div className="hero-visual">
          {/* Main card */}
          <div className="hero-card">
            <div className="hero-illustration">
              <div className="illus-bg" />
              <div className="illus-scene">
                <div className="illus-ground" />
                <div className="illus-slide">
                  <div className="slide-pole" />
                  <div className="slide-ramp" />
                  <div className="slide-platform" />
                </div>
                <div className="illus-swing">
                  <div className="swing-rope swing-rope-l" />
                  <div className="swing-rope swing-rope-r" />
                  <div className="swing-seat" />
                </div>
                <div className="illus-tree">
                  <div className="tree-trunk" />
                  <div className="tree-top" />
                </div>
                {/* Kids */}
                <div className="kid kid-1">
                  <div className="kid-body" style={{ background: '#FF6B35' }} />
                  <div className="kid-head" />
                </div>
                <div className="kid kid-2">
                  <div className="kid-body" style={{ background: '#8B5CF6' }} />
                  <div className="kid-head" />
                </div>
                <div className="kid kid-3">
                  <div className="kid-body" style={{ background: '#2ECC71' }} />
                  <div className="kid-head" />
                </div>
                {/* Floating elements */}
                <div className="float-emoji float-1">🌟</div>
                <div className="float-emoji float-2">🎨</div>
                <div className="float-emoji float-3">📚</div>
                <div className="float-emoji float-4">🎵</div>
              </div>
            </div>

            {/* Floating info cards */}
            <div className="info-card info-card-1">
              <span className="info-card-emoji">🎉</span>
              <div>
                <div className="info-card-title">Fun Learning</div>
                <div className="info-card-sub">Play-based curriculum</div>
              </div>
            </div>

            <div className="info-card info-card-2">
              <span className="info-card-emoji">❤️</span>
              <div>
                <div className="info-card-title">Safe & Secure</div>
                <div className="info-card-sub">24/7 CCTV monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-stats">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-emoji">{stat.icon}</span>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
