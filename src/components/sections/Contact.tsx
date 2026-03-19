'use client'
import { useEffect, useRef, useState } from 'react'
import {
  FaEnvelope, FaGlobe, FaInstagram, FaMapMarkerAlt,
  FaPaperPlane, FaCheckCircle, FaUser, FaCommentDots,
} from 'react-icons/fa'

const info = [
  { icon: FaEnvelope,      label: 'Email',    val: 'hello@earthdreams.com',   color: '#9b8fe8' },
  { icon: FaGlobe,         label: 'Website',  val: 'www.earthdreams.com',     color: '#6b5dd3' },
  { icon: FaInstagram,     label: 'Social',   val: '@EarthDreamsBook',        color: '#c084b0' },
  { icon: FaMapMarkerAlt,  label: 'Location', val: 'The Dreaming Universe',   color: '#9b8fe8' },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [status,  setStatus]  = useState<'idle' | 'success'>('idle')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 120))
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
    setLoading(false)
  }

  return (
    <section id="contact" ref={ref} className="section-base relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--dream-violet), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(180deg, rgba(107,93,211,0.06), transparent)' }} />
      <div className="orb w-72 h-72 bottom-10 left-10 opacity-12" style={{ background: 'var(--dream-indigo)' }} />
      <div className="orb w-64 h-64 top-20 right-10 opacity-10" style={{ background: 'var(--dream-pink)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="reveal font-accent text-xl text-dream-lavender mb-3">~ Let's Connect ~</p>
          <h2 className="reveal font-display font-bold text-dream-star" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="reveal rounded-2xl p-6"
              style={{
                background: 'rgba(45,40,128,0.2)',
                border: '1px solid rgba(155,143,232,0.2)',
                boxShadow: '0 0 40px rgba(107,93,211,0.1)',
              }}>
              <h3 className="font-display font-bold text-xl text-dream-star mb-2">Say Hello</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(232,228,255,0.65)' }}>
                Whether you're a bookseller, educator, parent, or just a fan of dreaming planets —
                we'd love to hear from you!
              </p>
            </div>

            {info.map(({ icon: Icon, label, val, color }) => (
              <div key={label}
                className="reveal flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  background: 'rgba(45,40,128,0.2)',
                  border: '1px solid rgba(155,143,232,0.15)',
                  boxShadow: '0 0 0 rgba(107,93,211,0)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${color}30`
                  ;(e.currentTarget as HTMLElement).style.borderColor = `${color}40`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 rgba(107,93,211,0)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(155,143,232,0.15)'
                }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}20`, boxShadow: `0 0 15px ${color}30` }}>
                  <Icon className="text-lg" style={{ color, filter: `drop-shadow(0 0 6px ${color}80)` }} />
                </div>
                <div>
                  <div className="font-body text-xs font-bold uppercase tracking-wider mb-0.5"
                    style={{ color: 'rgba(155,143,232,0.6)' }}>{label}</div>
                  <div className="font-body text-dream-star text-sm">{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="reveal rounded-3xl p-8"
              style={{
                background: 'rgba(45,40,128,0.2)',
                border: '1px solid rgba(155,143,232,0.2)',
                boxShadow: '0 0 80px rgba(107,93,211,0.12), inset 0 0 50px rgba(107,93,211,0.04)',
              }}>
              {status === 'success' ? (
                <div className="text-center py-12">
                  <FaCheckCircle className="text-6xl mx-auto mb-5 text-dream-lavender"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(155,143,232,0.8))' }} />
                  <h3 className="font-display font-bold text-2xl text-dream-star mb-2">Message Sent!</h3>
                  <p className="font-body text-dream-lavender">
                    Thank you for reaching out. We'll get back to you within the stars' next orbit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                        <FaUser className="text-xs" /> Name
                      </label>
                      <input name="name" type="text" className="dream-input" placeholder="Your name" onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                        <FaEnvelope className="text-xs" /> Email
                      </label>
                      <input name="email" type="email" className="dream-input" placeholder="your@email.com" onChange={handleChange} required />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                      <FaCommentDots className="text-xs" /> Subject
                    </label>
                    <select name="subject" className="dream-input" onChange={handleChange} required>
                      <option value="" style={{ background: '#1a1650' }}>Select a topic...</option>
                      <option value="press"   style={{ background: '#1a1650' }}>Press & Media</option>
                      <option value="schools" style={{ background: '#1a1650' }}>Schools & Libraries</option>
                      <option value="events"  style={{ background: '#1a1650' }}>Events & Appearances</option>
                      <option value="general" style={{ background: '#1a1650' }}>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                      <FaCommentDots className="text-xs" /> Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="dream-input resize-none"
                      placeholder="Tell us what's on your mind..."
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" disabled={loading} className="btn-dream w-full justify-center text-lg py-4 gap-2">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
