import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, LogIn, Star, Lock, Mail, AlertCircle, CheckCircle } from 'lucide-react'
import './LoginPage.css'

const DEMO_CREDENTIALS = { email: 'parent@demo.com', password: 'demo1234' }

export default function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm]       = useState({ email: '', password: '', remember: false })
  const [showPw, setShowPw]   = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (error) setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!form.email || !form.password) {
      setError('Please fill in both email and password.')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // Demo: accept the demo credentials OR any filled-in form
      if (
        form.email === DEMO_CREDENTIALS.email &&
        form.password === DEMO_CREDENTIALS.password
      ) {
        setSuccess(true)
        setTimeout(() => navigate('/'), 2000)
      } else {
        setError('Invalid email or password. Try the demo credentials below.')
      }
    }, 1400)
  }

  return (
    <div className="login-page">
      {/* Left panel — branding */}
      <div className="login-panel-left">
        <div className="lp-left-inner">
          {/* Logo */}
          <Link to="/" className="lp-logo">
            <div className="lp-logo-icon">
              <Star size={22} fill="white" color="white" />
            </div>
            <div>
              <div className="lp-logo-name">Little Stars</div>
              <div className="lp-logo-sub">Childcare</div>
            </div>
          </Link>

          {/* Headline */}
          <div className="lp-headline">
            <h1>Welcome back,<br /><span>Parent!</span></h1>
            <p>
              Log in to your Parent Portal to check daily updates,
              view photos, communicate with teachers, and manage your child's profile.
            </p>
          </div>

          {/* Feature list */}
          <ul className="lp-features">
            {[
              { emoji: '📸', label: 'Daily photos & activity updates' },
              { emoji: '💬', label: 'Message teachers directly' },
              { emoji: '📋', label: 'View health & progress reports' },
              { emoji: '💳', label: 'Manage payments & invoices' },
              { emoji: '📅', label: 'View schedule & upcoming events' },
            ].map((f) => (
              <li key={f.label}>
                <span className="lp-feat-emoji">{f.emoji}</span>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>

          {/* Decorative circles */}
          <div className="lp-deco">
            <div className="lp-deco-circle lp-deco-1" />
            <div className="lp-deco-circle lp-deco-2" />
            <div className="lp-deco-circle lp-deco-3" />
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="login-panel-right">
        <div className="lp-form-wrap">
          {success ? (
            /* ── Success state ── */
            <div className="lp-success">
              <div className="lp-success-icon">
                <CheckCircle size={44} />
              </div>
              <h2>Login Successful!</h2>
              <p>Welcome back! Redirecting you to the home page…</p>
            </div>
          ) : (
            <>
              <div className="lp-form-header">
                <h2>Parent Portal</h2>
                <p>Sign in to your account</p>
              </div>

              {/* Demo hint */}
              <div className="lp-demo-hint">
                <span className="lp-demo-tag">Demo</span>
                Use <strong>parent@demo.com</strong> / <strong>demo1234</strong> to try it out
              </div>

              <form className="lp-form" onSubmit={handleSubmit} noValidate>
                {/* Error banner */}
                {error && (
                  <div className="lp-error">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                {/* Email */}
                <div className="lp-field">
                  <label htmlFor="lp-email">Email Address</label>
                  <div className="lp-input-wrap">
                    <Mail size={17} className="lp-input-icon" />
                    <input
                      id="lp-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="lp-field">
                  <div className="lp-label-row">
                    <label htmlFor="lp-password">Password</label>
                    <button type="button" className="lp-forgot">
                      Forgot password?
                    </button>
                  </div>
                  <div className="lp-input-wrap">
                    <Lock size={17} className="lp-input-icon" />
                    <input
                      id="lp-password"
                      name="password"
                      type={showPw ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                    />
                    <button
                      type="button"
                      className="lp-pw-toggle"
                      onClick={() => setShowPw((v) => !v)}
                      aria-label={showPw ? 'Hide password' : 'Show password'}
                    >
                      {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </div>
                </div>

                {/* Remember me */}
                <label className="lp-remember">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                  />
                  <span className="lp-checkbox-box" />
                  <span>Keep me signed in</span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="lp-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="lp-spinner" />
                      Signing in…
                    </>
                  ) : (
                    <>
                      <LogIn size={17} />
                      Sign In
                    </>
                  )}
                </button>
              </form>

              {/* Footer */}
              <div className="lp-footer-note">
                <span>Not enrolled yet?</span>
                <Link to="/#contact" onClick={() => navigate('/')}>
                  Apply for enrollment →
                </Link>
              </div>

              <div className="lp-back">
                <Link to="/">← Back to Little Stars website</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
