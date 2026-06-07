import { Clock, Users, ArrowRight } from 'lucide-react'
import './Programs.css'

const PROGRAMS = [
  {
    emoji: '👶',
    age: '6 weeks – 12 months',
    name: 'Infant Care',
    tagline: 'Gentle beginnings',
    desc: 'A loving and responsive environment for your littlest ones. Personalized routines, sensory play, and constant one-on-one bonding.',
    color: '#FF6B35',
    bg: 'linear-gradient(135deg, #FFF0EB, #FFD4C2)',
    ratio: '1:3',
    hours: 'Full & Part Day',
    highlights: ['Sensory exploration', 'Tummy time', 'Lullaby & bonding', 'Diaper routines'],
    featured: false,
  },
  {
    emoji: '🧒',
    age: '1 – 3 years',
    name: 'Toddler Program',
    tagline: 'Curious explorers',
    desc: 'Fueling the natural curiosity of toddlers through hands-on activities, language development, social skills, and creative play.',
    color: '#8B5CF6',
    bg: 'linear-gradient(135deg, #F3F0FF, #DDD6FE)',
    ratio: '1:4',
    hours: 'Full Day',
    highlights: ['Language & literacy', 'Art & creativity', 'Music & movement', 'Social skills'],
    featured: true,
  },
  {
    emoji: '🎒',
    age: '3 – 5 years',
    name: 'Preschool',
    tagline: 'School-ready stars',
    desc: 'A rich, structured curriculum that prepares children for kindergarten. Focus on literacy, numeracy, science, and social-emotional growth.',
    color: '#2ECC71',
    bg: 'linear-gradient(135deg, #EDFBF3, #C3F0D5)',
    ratio: '1:6',
    hours: 'Full & Half Day',
    highlights: ['Pre-reading skills', 'Math concepts', 'Science experiments', 'Kindergarten prep'],
    featured: false,
  },
  {
    emoji: '🌙',
    age: 'School Age',
    name: 'After School',
    tagline: 'Homework to playtime',
    desc: 'Safe, engaging after-school care with homework help, recreational activities, and enrichment programs for school-age children.',
    color: '#FFB703',
    bg: 'linear-gradient(135deg, #FFFBEB, #FEF08A)',
    ratio: '1:8',
    hours: '3 PM – 6 PM',
    highlights: ['Homework help', 'STEM projects', 'Sports & games', 'Snack & rest time'],
    featured: false,
  },
]

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Programs</span>
          <h2 className="section-title">
            Care & Learning for
            <span className="highlight"> Every Stage</span>
          </h2>
          <p className="section-subtitle">
            From infants to school-age children, our age-appropriate programs are designed to nurture development at every milestone.
          </p>
        </div>

        <div className="programs-grid">
          {PROGRAMS.map((prog) => (
            <div
              className={`program-card ${prog.featured ? 'featured' : ''}`}
              key={prog.name}
            >
              {prog.featured && <div className="featured-badge">Most Popular</div>}

              <div className="program-header" style={{ background: prog.bg }}>
                <span className="program-emoji">{prog.emoji}</span>
                <div className="program-age">{prog.age}</div>
                <div className="program-tagline" style={{ color: prog.color }}>{prog.tagline}</div>
              </div>

              <div className="program-body">
                <h3 className="program-name">{prog.name}</h3>
                <p className="program-desc">{prog.desc}</p>

                <div className="program-meta">
                  <div className="meta-item">
                    <Users size={14} />
                    <span>Ratio {prog.ratio}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={14} />
                    <span>{prog.hours}</span>
                  </div>
                </div>

                <ul className="program-highlights">
                  {prog.highlights.map((h) => (
                    <li key={h} style={{ '--dot-color': prog.color }}>
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="program-cta"
                  style={{ color: prog.color, borderColor: prog.color }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Learn More <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
