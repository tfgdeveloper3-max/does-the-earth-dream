'use client'
import { useEffect, useRef, useState } from 'react'
import { FaBookOpen, FaBell, FaMoon, FaChild, FaLeaf, FaMusic, FaStar } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => {
      el.querySelectorAll('.reveal').forEach((c, i) =>
        setTimeout(() => c.classList.add('visible'), i * 180))
    }, 100)

    const onMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 })
    }
    window.addEventListener('mousemove', onMouse)
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-base pt-32">

      {/* Parallax orbs */}
      <div className="orb w-[600px] h-[600px] top-0 left-0 opacity-25 transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle, #6b5dd3, #2d2880)',
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
        }} />
      <div className="orb w-96 h-96 bottom-0 right-0 opacity-20 transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle, #c084b0, #6b5dd3)',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
        }} />
      <div className="orb w-80 h-80 top-1/3 right-1/4 opacity-15 transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle, #9b8fe8, #3d3aaa)',
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * -15}px)`,
        }} />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto text-center px-4">

        {/* Badge */}
        <div className="reveal inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full"
          style={{
            background: 'rgba(107,93,211,0.12)',
            border: '1px solid rgba(155,143,232,0.35)',
            boxShadow: '0 0 30px rgba(107,93,211,0.25), inset 0 0 20px rgba(107,93,211,0.05)',
          }}>
          <FaLeaf className="text-dream-lavender animate-pulse" />
          <span className="text-dream-lavender font-body font-semibold text-sm tracking-widest uppercase">
            A Children's Picture Book
          </span>
          <FaMoon className="text-dream-lavender animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Title */}
        <h1 className="reveal font-display font-black mb-4 leading-tight"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}>
          <span className="block text-dream-star" style={{ textShadow: '0 0 60px rgba(232,228,255,0.15)' }}>
            Does the
          </span>
          <span className="block italic" style={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(135deg, #9b8fe8 0%, #c084b0 50%, #e8e4ff 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 40px rgba(155,143,232,0.5))',
          }}>
            Earth Dream?
          </span>
        </h1>

        {/* Stars row */}
        <div className="reveal flex justify-center gap-2 mb-4">
          {[0, 1, 2, 3, 4].map(i => (
            <FaStar key={i} className="text-dream-rose text-sm animate-pulse"
              style={{ animationDelay: `${i * 0.2}s`, filter: 'drop-shadow(0 0 6px rgba(212,160,200,0.8))' }} />
          ))}
        </div>

        {/* Subtitle */}
        <p className="reveal font-accent text-2xl text-dream-lavender mb-6"
          style={{ textShadow: '0 0 20px rgba(155,143,232,0.4)' }}>
          ~ Where nature meets imagination ~
        </p>

        {/* Description */}
        <p className="reveal font-body text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: 'rgba(232,228,255,0.82)' }}>
          A playful, poetic journey that invites young readers to imagine our planet as a
          dreaming, feeling being — from sunbathing with the sun to dancing with the moon.
        </p>

        {/* CTAs */}
        <div className="reveal flex flex-wrap gap-4 justify-center mb-16">
          <a href="#about-book" className="btn-dream text-base px-9 py-4 gap-2 text-lg">
            <FaBookOpen /> Explore the Book
          </a>
          <a href="#newsletter" className="btn-outline text-base px-9 py-4 gap-2 text-lg">
            <FaBell /> Get Updates
          </a>
        </div>

        {/* Stat cards */}
        <div className="reveal flex flex-wrap gap-5 justify-center">
          {[
            { icon: FaMoon, val: 'Bedtime', label: 'Perfect Read', color: '#9b8fe8' },
            { icon: FaChild, val: 'Ages 3–8', label: 'Ideal For', color: '#6b5dd3' },
            { icon: FaLeaf, val: 'Eco', label: 'Awareness', color: '#9b8fe8' },
            { icon: FaMusic, val: 'Lyrical', label: 'Rhyming Story', color: '#c084b0' },
          ].map(({ icon: Icon, val, label, color }) => (
            <div key={val}
              className="group flex flex-col items-center px-7 py-5 rounded-2xl min-w-[120px] transition-all duration-400 hover:-translate-y-2 cursor-default"
              style={{
                background: 'rgba(45,40,128,0.2)',
                border: '1px solid rgba(155,143,232,0.18)',
                boxShadow: '0 0 25px rgba(107,93,211,0.12)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${color}40`
                  ; (e.currentTarget as HTMLElement).style.borderColor = `${color}60`
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(107,93,211,0.12)'
                  ; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(155,143,232,0.18)'
              }}
            >
              <Icon className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-125"
                style={{ color, filter: `drop-shadow(0 0 8px ${color}90)` }} />
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
