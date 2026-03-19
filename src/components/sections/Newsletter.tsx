'use client'
import { useEffect, useRef, useState } from 'react'
import { FaBook, FaCamera, FaRecycle, FaGift, FaPaperPlane, FaCheckCircle, FaEnvelope, FaUser, FaStar } from 'react-icons/fa'

const perks = [
  { icon: FaBook, text: 'Exclusive excerpts', color: '#9b8fe8' },
  { icon: FaCamera, text: 'Behind the scenes', color: '#c084b0' },
  { icon: FaRecycle, text: 'Eco tips for families', color: '#9b8fe8' },
  { icon: FaGift, text: 'Launch surprises', color: '#6b5dd3' },
]

export default function Newsletter() {
  const ref = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 130))
      })
    }, { threshold: 0.08 })
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
      <div className="absolute top-0 left-0 right-0 h-28"
        style={{ background: 'linear-gradient(180deg, rgba(155,143,232,0.06), transparent)' }} />

      {/* Big central glow */}
      <div className="orb w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-08"
        style={{ background: 'radial-gradient(circle, #6b5dd3, transparent)' }} />

      <div className="max-w-3xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-12">
          <p className="reveal font-accent text-xl text-dream-lavender mb-3">~ Stay in the Loop ~</p>
          <h2 className="reveal font-display font-bold text-dream-star mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            Join Our Newsletter
          </h2>
          {/* Stars */}
          <div className="reveal flex justify-center gap-2 mb-4">
            {[0, 1, 2, 3, 4].map(i => (
              <FaStar key={i} className="text-dream-rose text-xs animate-pulse"
                style={{ animationDelay: `${i * 0.2}s`, filter: 'drop-shadow(0 0 5px rgba(212,160,200,0.8))' }} />
            ))}
          </div>
          <p className="reveal font-body text-lg" style={{ color: 'rgba(232,228,255,0.72)' }}>
            Get book updates, dreamy stories, eco-parenting tips, and exclusive content
            delivered straight to your inbox.
          </p>
        </div>

        {/* Main card */}
        <div className="reveal rounded-3xl p-8 md:p-12"
          style={{
            background: 'rgba(45,40,128,0.18)',
            border: '1px solid rgba(155,143,232,0.22)',
            boxShadow: '0 0 100px rgba(107,93,211,0.15), inset 0 0 60px rgba(107,93,211,0.04)',
          }}>

          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="relative inline-block mb-6">
                <FaCheckCircle className="text-7xl text-dream-lavender"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(155,143,232,0.9))' }} />
                <div className="absolute -inset-4 rounded-full animate-ping opacity-20"
                  style={{ background: 'var(--dream-violet)', animationDuration: '2s' }} />
              </div>
              <h3 className="font-display font-bold text-2xl text-dream-star mb-2">You're in! 🎉</h3>
              <p className="font-body text-dream-lavender">
                Welcome to the dreaming Earth family. Check your inbox for a welcome surprise!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                    <FaUser className="text-xs" style={{ filter: 'drop-shadow(0 0 4px rgba(155,143,232,0.6))' }} />
                    Your Name
                  </label>
                  <input type="text" className="dream-input" placeholder="Your Name"
                    value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                    <FaEnvelope className="text-xs" style={{ filter: 'drop-shadow(0 0 4px rgba(155,143,232,0.6))' }} />
                    Email Address
                  </label>
                  <input type="email" className="dream-input" placeholder="you@email.com"
                    value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
              </div>

              <button type="submit" disabled={loading}
                className="btn-dream w-full justify-center text-lg py-4 gap-3">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending magic your way...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane className="text-base" />
                    Subscribe & Dream With Us
                  </>
                )}
              </button>

              <p className="text-center font-body text-xs" style={{ color: 'rgba(155,143,232,0.42)' }}>
                No spam, ever. Unsubscribe anytime. Your inbox is safe with us.
              </p>
            </form>
          )}
        </div>

        {/* Perks */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {perks.map(({ icon: Icon, text, color }) => (
            <div key={text}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl text-center transition-all duration-350 hover:-translate-y-2 cursor-default"
              style={{
                background: 'rgba(45,40,128,0.18)',
                border: '1px solid rgba(155,143,232,0.14)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 35px ${color}30`
                  ; (e.currentTarget as HTMLElement).style.borderColor = `${color}40`
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(155,143,232,0.14)'
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-120"
                style={{ background: `${color}18`, boxShadow: `0 0 15px ${color}25` }}>
                <Icon className="text-base" style={{ color, filter: `drop-shadow(0 0 6px ${color}90)` }} />
              </div>
              <p className="font-body text-xs font-semibold" style={{ color: 'rgba(232,228,255,0.72)' }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
