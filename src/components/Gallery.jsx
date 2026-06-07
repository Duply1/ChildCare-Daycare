import './Gallery.css'

const GALLERY_ITEMS = [
  { emoji: '🎨', label: 'Art & Crafts', color: '#FF6B35', bg: 'linear-gradient(135deg, #FF6B35, #FF8C61)', span: 'tall' },
  { emoji: '📚', label: 'Reading Time', color: '#8B5CF6', bg: 'linear-gradient(135deg, #8B5CF6, #A78BFA)', span: 'normal' },
  { emoji: '🌿', label: 'Garden Play', color: '#2ECC71', bg: 'linear-gradient(135deg, #2ECC71, #54D98C)', span: 'normal' },
  { emoji: '🎵', label: 'Music Class', color: '#FFB703', bg: 'linear-gradient(135deg, #FFB703, #FFC837)', span: 'wide' },
  { emoji: '🧪', label: 'Science Fun', color: '#38BDF8', bg: 'linear-gradient(135deg, #38BDF8, #7DD3FC)', span: 'normal' },
  { emoji: '🏃', label: 'Outdoor Fun', color: '#EC4899', bg: 'linear-gradient(135deg, #EC4899, #F472B6)', span: 'tall' },
  { emoji: '🍎', label: 'Snack Time', color: '#10B981', bg: 'linear-gradient(135deg, #10B981, #34D399)', span: 'normal' },
  { emoji: '🧩', label: 'Puzzle Games', color: '#F97316', bg: 'linear-gradient(135deg, #F97316, #FB923C)', span: 'normal' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">
            A Day in the Life at
            <span className="highlight"> Little Stars</span>
          </h2>
          <p className="section-subtitle">
            Every moment is a chance to learn, laugh, and grow. Peek into our joyful, vibrant environment.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`gallery-item gallery-item-${item.span}`}
            >
              <div className="gallery-inner" style={{ background: item.bg }}>
                <div className="gallery-emoji">{item.emoji}</div>
                <div className="gallery-decoration">
                  <div className="deco-circle deco-1" />
                  <div className="deco-circle deco-2" />
                  <div className="deco-star">✦</div>
                </div>
                <div className="gallery-overlay">
                  <div className="gallery-label">{item.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p className="gallery-cta-text">Want to see more? Schedule a visit and experience our center in person!</p>
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Tour
          </button>
        </div>
      </div>
    </section>
  )
}
