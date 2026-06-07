import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Sarah Thompson',
    role: 'Mother of Lily, 3 years',
    initials: 'ST',
    color: '#FF6B35',
    rating: 5,
    text: "Little Stars has been an absolute blessing for our family. Lily went from being shy to a confident, social little girl. The teachers know her by heart and we always feel informed and included. Best decision we ever made!",
  },
  {
    name: 'James & Maria Chen',
    role: 'Parents of Ethan, 18 months',
    initials: 'JM',
    color: '#8B5CF6',
    rating: 5,
    text: "Leaving our baby for the first time was terrifying, but the infant care team made us feel so at ease. The daily updates, photos, and genuine warmth from every staff member — we couldn't ask for more.",
    featured: true,
  },
  {
    name: 'Priya Sharma',
    role: 'Mother of Aanya, 4 years',
    initials: 'PS',
    color: '#2ECC71',
    rating: 5,
    text: "Aanya has thrived here! Her language skills, creativity, and social confidence have grown tremendously. The preschool curriculum is excellent and the staff communication is outstanding. Five stars without hesitation.",
  },
  {
    name: 'David & Lisa Park',
    role: 'Parents of Noah, 2 years',
    initials: 'DP',
    color: '#38BDF8',
    rating: 5,
    text: "The facility is spotless, the food is healthy, and the activities are thoughtful. Noah comes home happy and excited every day. The parent portal keeps us connected — it's like having a window into his day.",
  },
  {
    name: 'Amanda Wright',
    role: 'Mother of twins, 5 years',
    initials: 'AW',
    color: '#EC4899',
    rating: 5,
    text: "Managing twins is a challenge but Little Stars handles our boys with such individual attention. Both are now fully ready for kindergarten. The teachers truly see and celebrate each child for who they are.",
  },
  {
    name: 'Michael Torres',
    role: 'Father of Sofia, 3 years',
    initials: 'MT',
    color: '#FFB703',
    rating: 5,
    text: "What sets Little Stars apart is the genuine love the staff has for the children. Sofia sings the songs at home, talks about her friends, and runs in every morning without looking back. That says everything!",
  },
]

function StarRating({ count }) {
  return (
    <div className="star-rating">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#FFB703" color="#FFB703" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-bg" />
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title" style={{ color: 'white' }}>
            Loved by
            <span style={{ color: 'var(--accent)' }}> Thousands</span> of Families
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Don't just take our word for it — hear from the families whose children call Little Stars their second home.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div className={`testimonial-card ${t.featured ? 'featured' : ''}`} key={t.name}>
              <div className="testimonial-quote">
                <Quote size={20} />
              </div>
              <p className="testimonial-text">{t.text}</p>
              <StarRating count={t.rating} />
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div className="author-info">
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="overall-rating">
          <div className="overall-inner">
            <div className="overall-score">4.9</div>
            <div className="overall-stars">
              <StarRating count={5} />
              <div className="overall-label">Based on 200+ reviews</div>
            </div>
            <div className="overall-divider" />
            <div className="overall-platforms">
              <div className="platform-item">Google ⭐ 4.9</div>
              <div className="platform-item">Facebook ⭐ 5.0</div>
              <div className="platform-item">Yelp ⭐ 4.8</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
