'use client'
import { useEffect, useRef, useState } from 'react'
import { FaBook, FaCamera, FaRecycle, FaGift, FaPaperPlane, FaCheckCircle, FaEnvelope, FaUser } from 'react-icons/fa'

const perks = [
  { icon: FaBook,    text: 'Exclusive excerpts'    },
  { icon: FaCamera,  text: 'Behind the scenes'     },
  { icon: FaRecycle, text: 'Eco tips for families' },
  { icon: FaGift,    text: 'Launch surprises'      },
]

export default function Newsletter() {
  const ref = useRef<HTMLDivElement>(null)
  const [email,   setEmail]   = useState('')
  const [name,    setName]    = useState('')
  const [status,  setStatus]  = useState<'idle' | 'success'>('idle')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 150))
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
    setLoading(false)
    setEmail('')
    setName('')
  }

  return (
    <section id="newsletter" ref={ref} className="section-base relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--dream-lavender), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(180deg, rgba(155,143,232,0.06), transparent)' }} />
      <div className="orb w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-15"
        style={{ background: 'var(--dream-violet)' }} />

      <div className="max-w-3xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-12">
          <p className="reveal font-accent text-xl text-dream-lavender mb-3">~ Stay in the Loop ~</p>
          <h2 className="reveal font-display font-bold text-dream-star mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            Join Our Newsletter
          </h2>
          <p className="reveal font-body text-lg" style={{ color: 'rgba(232,228,255,0.72)' }}>
            Get book updates, dreamy stories, eco-parenting tips, and exclusive content
            delivered straight to your inbox.
          </p>
        </div>

        {/* Main card */}
        <div className="reveal rounded-3xl p-8 md:p-12"
          style={{
            background: 'rgba(45,40,128,0.2)',
            border: '1px solid rgba(155,143,232,0.2)',
            boxShadow: '0 0 80px rgba(107,93,211,0.15), inset 0 0 50px rgba(107,93,211,0.05)',
          }}>

          {status === 'success' ? (
            <div className="text-center py-10">
              <FaCheckCircle className="text-6xl mx-auto mb-5 text-dream-lavender"
                style={{ filter: 'drop-shadow(0 0 20px rgba(155,143,232,0.8))' }} />
              <h3 className="font-display font-bold text-2xl text-dream-star mb-2">You're in!</h3>
              <p className="font-body text-dream-lavender">
                Welcome to the dreaming Earth family. Check your inbox for a welcome surprise!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                    <FaUser className="text-xs" /> Your Name
                  </label>
                  <input
                    type="text"
                    className="dream-input"
                    placeholder="Your-Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                    <FaEnvelope className="text-xs" /> Email Address
                  </label>
                  <input
                    type="email"
                    className="dream-input"
                    placeholder="you@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-dream w-full justify-center text-lg py-4 gap-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane className="text-base" />
                    Subscribe & Dream With Us
                  </>
                )}
              </button>

              <p className="text-center font-body text-xs" style={{ color: 'rgba(155,143,232,0.45)' }}>
                No spam, ever. Unsubscribe anytime. Your magic inbox is safe with us.
              </p>
            </form>
          )}
        </div>

        {/* Perks */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {perks.map(({ icon: Icon, text }) => (
            <div key={text}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(45,40,128,0.2)',
                border: '1px solid rgba(155,143,232,0.15)',
                boxShadow: '0 0 15px rgba(107,93,211,0.1)',
              }}>
              <Icon className="text-xl text-dream-lavender"
                style={{ filter: 'drop-shadow(0 0 8px rgba(155,143,232,0.6))' }} />
              <p className="font-body text-xs text-dream-lavender">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
