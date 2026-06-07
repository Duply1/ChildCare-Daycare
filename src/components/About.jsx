import { CheckCircle, Heart, Users, Leaf } from 'lucide-react'
import './About.css'

const VALUES = [
  {
    icon: <Heart size={20} />,
    title: 'Love & Warmth',
    desc: 'Every child is embraced with genuine care and affection every single day.',
    color: '#FF6B35',
    bg: '#FFF0EB',
  },
  {
    icon: <Users size={20} />,
    title: 'Community',
    desc: 'We build strong bonds between families, children, and our caring staff.',
    color: '#8B5CF6',
    bg: '#F3F0FF',
  },
  {
    icon: <Leaf size={20} />,
    title: 'Growth',
    desc: 'We cultivate curiosity, creativity, and confidence in every child.',
    color: '#2ECC71',
    bg: '#EDFBF3',
  },
]

const POINTS = [
  'Certified and experienced educators',
  'Play-based learning curriculum',
  'Nutritious meals & snacks provided',
  'Low child-to-teacher ratio',
  'Regular parent communication',
  'Outdoor play & nature activities',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        {/* Left visual */}
        <div className="about-visual">
          <div className="about-img-wrapper">
            <div className="about-img-main">
              <div className="about-img-inner">
                <span className="about-scene-emoji">🌈</span>
                <div className="about-scene">
                  <div className="scene-row">
                    <div className="scene-card sc-yellow">
                      <span>🎨</span>
                      <span>Art Time</span>
                    </div>
                    <div className="scene-card sc-green">
                      <span>📖</span>
                      <span>Story Time</span>
                    </div>
                  </div>
                  <div className="scene-row">
                    <div className="scene-card sc-blue">
                      <span>🎵</span>
                      <span>Music Fun</span>
                    </div>
                    <div className="scene-card sc-purple">
                      <span>🧩</span>
                      <span>Puzzles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-img-side">
              <div className="about-img-side-inner">
                <div className="side-stat">
                  <div className="side-stat-num">15+</div>
                  <div className="side-stat-label">Years of<br />Excellence</div>
                </div>
                <div className="side-divider" />
                <div className="side-stat">
                  <div className="side-stat-num">30</div>
                  <div className="side-stat-label">Dedicated<br />Staff</div>
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="about-badge">
              <div className="badge-inner">
                <div className="badge-emoji">🏆</div>
                <div className="badge-text">Award Winning</div>
                <div className="badge-sub">Childcare Center</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="about-content">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">
            A Place Where Children
            <span className="highlight"> Thrive & Flourish</span>
          </h2>
          <p className="section-subtitle about-intro">
            Founded in 2009, Little Stars Childcare has been a trusted partner for families
            in our community. We create a warm, home-like atmosphere where children feel
            safe to explore, learn, and express themselves freely.
          </p>

          {/* Values */}
          <div className="about-values">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-icon" style={{ background: v.bg, color: v.color }}>
                  {v.icon}
                </div>
                <div className="value-text">
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Points */}
          <div className="about-points">
            {POINTS.map((point) => (
              <div className="point-item" key={point}>
                <CheckCircle size={17} className="point-icon" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <button className="btn-primary" onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  )
}
