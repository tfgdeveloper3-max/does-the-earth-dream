'use client'
import { useEffect, useRef, useState } from 'react'
import {
  FaEnvelope, FaGlobe, FaInstagram, FaMapMarkerAlt,
  FaPaperPlane, FaCheckCircle, FaUser, FaCommentDots,
  FaMoon,
} from 'react-icons/fa'
import { FaHand } from 'react-icons/fa6'
import { PiHandWavingBold } from 'react-icons/pi'

const info = [
  { icon: FaEnvelope, label: 'Email', val: 'hello@earthdreams.com', color: '#9b8fe8' },
  { icon: FaGlobe, label: 'Website', val: 'www.earthdreams.com', color: '#6b5dd3' },
  { icon: FaInstagram, label: 'Social', val: '@EarthDreamsBook', color: '#c084b0' },
  { icon: FaMapMarkerAlt, label: 'Location', val: 'The Dreaming Universe', color: '#9b8fe8' },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 100))
      })
    }, { threshold: 0.08 })
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
      <div className="absolute top-0 left-0 right-0 h-28"
        style={{ background: 'linear-gradient(180deg, rgba(107,93,211,0.06), transparent)' }} />
      <div className="orb w-80 h-80 bottom-0 left-0 opacity-10" style={{ background: 'var(--dream-indigo)' }} />
      <div className="orb w-72 h-72 top-20 right-0 opacity-10" style={{ background: 'var(--dream-pink)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="reveal font-accent text-xl text-dream-lavender mb-3">~ Let's Connect ~</p>
          <h2 className="reveal font-display font-bold text-dream-star" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="reveal rounded-2xl p-6"
              style={{
                background: 'rgba(45,40,128,0.18)',
                border: '1px solid rgba(155,143,232,0.2)',
                boxShadow: '0 0 40px rgba(107,93,211,0.1)',
              }}>
              <h3 className="font-display font-bold text-xl text-dream-star mb-2 flex items-center gap-2">
                <PiHandWavingBold />
                Say Hello
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(232,228,255,0.62)' }}>
                Whether you're a bookseller, educator, parent, or just a fan of dreaming planets —
                we'd love to hear from you!
              </p>
            </div>

            {info.map(({ icon: Icon, label, val, color }) => (
              <div key={label}
                className="reveal flex items-center gap-4 p-5 rounded-2xl cursor-default"
                style={{
                  background: 'rgba(45,40,128,0.16)',
                  border: '1px solid rgba(155,143,232,0.13)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateX(6px)'
                  el.style.boxShadow = `0 0 35px ${color}28`
                  el.style.borderColor = `${color}40`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateX(0)'
                  el.style.boxShadow = 'none'
                  el.style.borderColor = 'rgba(155,143,232,0.13)'
                }}
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, boxShadow: `0 0 20px ${color}28` }}>
                  <Icon className="text-lg" style={{ color, filter: `drop-shadow(0 0 8px ${color}90)` }} />
                </div>
                <div>
                  <div className="font-body text-xs font-bold uppercase tracking-wider mb-0.5"
                    style={{ color: 'rgba(155,143,232,0.55)' }}>{label}</div>
                  <div className="font-body text-dream-star text-sm">{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="reveal rounded-3xl p-8"
              style={{
                background: 'rgba(45,40,128,0.18)',
                border: '1px solid rgba(155,143,232,0.2)',
                boxShadow: '0 0 90px rgba(107,93,211,0.12), inset 0 0 60px rgba(107,93,211,0.04)',
              }}>
              {status === 'success' ? (
                <div className="text-center py-14">
                  <div className="relative inline-block mb-6">
                    <FaCheckCircle className="text-7xl text-dream-lavender"
                      style={{ filter: 'drop-shadow(0 0 30px rgba(155,143,232,0.9))' }} />
                    <div className="absolute -inset-4 rounded-full animate-ping opacity-20"
                      style={{ background: 'var(--dream-violet)', animationDuration: '2s' }} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-dream-star mb-2">Message Sent!</h3>
                  <p className="font-body text-dream-lavender">
                    Thank you! We'll get back to you within the stars' next orbit <FaMoon />
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                        <FaUser className="text-xs" style={{ filter: 'drop-shadow(0 0 4px rgba(155,143,232,0.7))' }} /> Name
                      </label>
                      <input name="name" type="text" className="dream-input" placeholder="Your name" onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                        <FaEnvelope className="text-xs" style={{ filter: 'drop-shadow(0 0 4px rgba(155,143,232,0.7))' }} /> Email
                      </label>
                      <input name="email" type="email" className="dream-input" placeholder="your@email.com" onChange={handleChange} required />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                      <FaCommentDots className="text-xs" style={{ filter: 'drop-shadow(0 0 4px rgba(155,143,232,0.7))' }} /> Subject
                    </label>
                    <select name="subject" className="dream-input" onChange={handleChange} required>
                      <option value="" style={{ background: '#1a1650' }}>Select a topic...</option>
                      <option value="press" style={{ background: '#1a1650' }}>Press & Media</option>
                      <option value="schools" style={{ background: '#1a1650' }}>Schools & Libraries</option>
                      <option value="events" style={{ background: '#1a1650' }}>Events & Appearances</option>
                      <option value="general" style={{ background: '#1a1650' }}>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                      <FaCommentDots className="text-xs" style={{ filter: 'drop-shadow(0 0 4px rgba(155,143,232,0.7))' }} /> Message
                    </label>
                    <textarea name="message" rows={5} className="dream-input resize-none"
                      placeholder="Tell us what's on your mind..." onChange={handleChange} required />
                  </div>
                  <button type="submit" disabled={loading}
                    className="btn-dream w-full justify-center text-lg py-4 gap-3">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <><FaPaperPlane /> Send Message</>
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
