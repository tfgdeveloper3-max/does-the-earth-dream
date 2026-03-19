'use client'
import { useEffect, useRef } from 'react'
import { FaBookOpen, FaBell, FaMoon, FaChild, FaLeaf, FaMusic, FaGlobe } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => {
      el.querySelectorAll('.reveal').forEach((c, i) =>
        setTimeout(() => c.classList.add('visible'), i * 200)
      )
    }, 100)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-base pt-32">
      {/* Glow orbs */}
      <div className="orb w-[500px] h-[500px] top-0 left-0 opacity-30" style={{ background: 'var(--dream-violet)' }} />
      <div className="orb w-96 h-96 bottom-10 right-0 opacity-25" style={{ background: 'var(--dream-pink)' }} />
      <div className="orb w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" style={{ background: 'var(--dream-cobalt)' }} />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto text-center px-4">

        {/* Badge */}
        <div className="reveal inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full"
          style={{
            background: 'rgba(107,93,211,0.15)',
            border: '1px solid rgba(155,143,232,0.3)',
            boxShadow: '0 0 30px rgba(107,93,211,0.2)',
          }}>
          <FaLeaf className="text-dream-lavender text-base" />
          <span className="text-dream-lavender font-body font-semibold text-sm tracking-widest uppercase">
            A Children's Picture Book
          </span>
          <FaMoon className="text-dream-lavender text-base" />
        </div>

        {/* Title */}
        <h1 className="reveal font-display font-black mb-4 leading-tight"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}>
          Does the
          <span className="block italic" style={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(135deg, #9b8fe8, #c084b0, #e8e4ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(155,143,232,0.6))',
          }}>
            Earth Dream?
          </span>
        </h1>

        {/* Subtitle */}
        <p className="reveal font-accent text-2xl text-dream-lavender mb-6">
          ~ Where nature meets imagination ~
        </p>

        {/* Description */}
        <p className="reveal font-body text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: 'rgba(232,228,255,0.8)' }}>
          A playful, poetic journey that invites young readers to imagine our planet as a
          dreaming, feeling being — from sunbathing with the sun to dancing with the moon.
        </p>

        {/* CTAs */}
        <div className="reveal flex flex-wrap gap-4 justify-center mb-16">
          <a href="#about-book" className="btn-dream text-base px-8 py-4 gap-2">
            <FaBookOpen /> Explore the Book
          </a>
          <a href="#newsletter" className="btn-outline text-base px-8 py-4 gap-2">
            <FaBell /> Get Updates
          </a>
        </div>

        {/* Stat cards */}
        <div className="reveal flex flex-wrap gap-5 justify-center">
          {[
            { icon: FaMoon,    val: 'Bedtime',  label: 'Perfect Read'  },
            { icon: FaChild,   val: 'Ages 3–8', label: 'Ideal For'     },
            { icon: FaLeaf,    val: 'Eco',      label: 'Awareness'     },
            { icon: FaMusic,   val: 'Lyrical',  label: 'Rhyming Story' },
          ].map(({ icon: Icon, val, label }) => (
            <div key={val} className="flex flex-col items-center px-6 py-4 rounded-2xl min-w-[110px] transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(45,40,128,0.25)',
                border: '1px solid rgba(155,143,232,0.2)',
                boxShadow: '0 0 20px rgba(107,93,211,0.15)',
              }}>
              <Icon className="text-2xl text-dream-lavender mb-2" />
              <div className="font-display font-bold text-dream-star text-lg">{val}</div>
              <div className="font-body text-dream-lavender text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-50">
        <span className="font-body text-xs text-dream-lavender tracking-widest uppercase">Scroll</span>
        <FiChevronDown className="text-dream-lavender text-2xl" />
      </div>
    </section>
  )
}
