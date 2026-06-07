import { ShieldCheck, BookOpen, Utensils, Sun, Video, HeartPulse, Palette, Music } from 'lucide-react'
import './Features.css'

const FEATURES = [
  {
    icon: <ShieldCheck size={24} />,
    title: 'Safety First',
    desc: 'Secure entry systems, background-checked staff, and first-aid certified caregivers at all times.',
    color: '#FF6B35',
    bg: '#FFF0EB',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Expert Educators',
    desc: 'All teachers hold early childhood education degrees with ongoing professional development.',
    color: '#8B5CF6',
    bg: '#F3F0FF',
  },
  {
    icon: <Utensils size={24} />,
    title: 'Healthy Nutrition',
    desc: 'Chef-prepared, nutritionist-approved meals and snacks tailored for growing bodies.',
    color: '#2ECC71',
    bg: '#EDFBF3',
  },
  {
    icon: <Sun size={24} />,
    title: 'Outdoor Play',
    desc: 'Dedicated outdoor play areas with age-appropriate equipment and nature exploration.',
    color: '#FFB703',
    bg: '#FFFBEB',
  },
  {
    icon: <Video size={24} />,
    title: 'Parent Portal',
    desc: 'Real-time updates, photos, and progress reports through our secure parent app.',
    color: '#38BDF8',
    bg: '#F0FBFF',
  },
  {
    icon: <HeartPulse size={24} />,
    title: 'Health & Wellness',
    desc: 'Regular health checks, immunization tracking, and wellness programs for every child.',
    color: '#EC4899',
    bg: '#FDF2F8',
  },
  {
    icon: <Palette size={24} />,
    title: 'Creative Arts',
    desc: 'Rich art, drama, and crafts programs that spark imagination and self-expression.',
    color: '#F97316',
    bg: '#FFF7ED',
  },
  {
    icon: <Music size={24} />,
    title: 'Music & Movement',
    desc: 'Daily music sessions, dance, and physical activities to develop motor skills and joy.',
    color: '#10B981',
    bg: '#ECFDF5',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            Everything Your Child
            <span className="highlight"> Deserves</span>
          </h2>
          <p className="section-subtitle">
            We go above and beyond to provide a comprehensive, enriching environment where your child's wellbeing and development are always the priority.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feat) => (
            <div className="feature-card" key={feat.title}>
              <div className="feature-icon-wrap" style={{ background: feat.bg, color: feat.color }}>
                {feat.icon}
              </div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
