import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import './Contact.css'

const CONTACT_INFO = [
  {
    icon: <MapPin size={20} />,
    label: 'Our Location',
    value: '123 Sunshine Lane, Maplewood, NJ 07040',
    color: '#FF6B35',
    bg: '#FFF0EB',
  },
  {
    icon: <Phone size={20} />,
    label: 'Call Us',
    value: '(555) 123-4567',
    color: '#8B5CF6',
    bg: '#F3F0FF',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email Us',
    value: 'hello@littlestarscare.com',
    color: '#2ECC71',
    bg: '#EDFBF3',
  },
  {
    icon: <Clock size={20} />,
    label: 'Hours',
    value: 'Mon–Fri: 6:00 AM – 6:00 PM',
    color: '#FFB703',
    bg: '#FFFBEB',
  },
]

const AGE_GROUPS = ['6 weeks – 12 months', '1–2 years', '2–3 years', '3–5 years', 'School Age (After Care)']

export default function Contact() {
  const [form, setForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    ageGroup: '',
    startDate: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1400)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Ready to Join the
            <span className="highlight"> Little Stars Family?</span>
          </h2>
          <p className="section-subtitle">
            Enrollment spots fill fast! Reach out today to schedule a tour and secure your child's spot.
          </p>
        </div>

        <div className="contact-layout">
          {/* Info */}
          <div className="contact-info">
            <div className="info-cards">
              {CONTACT_INFO.map((info) => (
                <div className="contact-info-card" key={info.label}>
                  <div className="contact-icon" style={{ background: info.bg, color: info.color }}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="contact-info-label">{info.label}</div>
                    <div className="contact-info-value">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="map-placeholder">
              <div className="map-inner">
                <MapPin size={32} className="map-pin-icon" />
                <div className="map-text">
                  <div className="map-title">Little Stars Childcare</div>
                  <div className="map-addr">123 Sunshine Lane, Maplewood, NJ</div>
                </div>
                <div className="map-dot-grid">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="map-dot" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">
                  <CheckCircle size={40} />
                </div>
                <h3 className="success-title">Thank You!</h3>
                <p className="success-msg">
                  We've received your inquiry and will be in touch within 24 hours.
                  We can't wait to welcome your family to Little Stars! 🌟
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '8px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Enrollment Inquiry</h3>
                <p className="form-subtitle">Fill out the form and we'll contact you within 24 hours.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="parentName">Parent/Guardian Name *</label>
                    <input
                      id="parentName"
                      name="parentName"
                      type="text"
                      placeholder="Your full name"
                      value={form.parentName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="childName">Child's Name *</label>
                    <input
                      id="childName"
                      name="childName"
                      type="text"
                      placeholder="Child's first name"
                      value={form.childName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="ageGroup">Age Group *</label>
                    <select
                      id="ageGroup"
                      name="ageGroup"
                      value={form.ageGroup}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select age group</option>
                      {AGE_GROUPS.map((ag) => (
                        <option key={ag} value={ag}>{ag}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="startDate">Desired Start Date</label>
                    <input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={form.startDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Any questions or special considerations..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Inquiry
                    </>
                  )}
                </button>

                <p className="form-privacy">
                  🔒 Your information is safe with us. We never share your data with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
