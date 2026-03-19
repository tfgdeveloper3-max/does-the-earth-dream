'use client'
import { useEffect, useRef } from 'react'
import { FaLeaf, FaBook, FaStar, FaPalette, FaMoon, FaPen, FaQuoteLeft, FaTwitter, FaInstagram } from 'react-icons/fa'

const tags = [
  { icon: FaLeaf, text: 'Nature Lover', color: '#9b8fe8' },
  { icon: FaBook, text: 'Storyteller', color: '#6b5dd3' },
  { icon: FaStar, text: 'Dream Chaser', color: '#c084b0' },
  { icon: FaPalette, text: 'Creative Soul', color: '#9b8fe8' },
]

export default function AboutAuthor() {
  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <section id="author" ref={ref} className="section-base relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--dream-violet), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(180deg, rgba(107,93,211,0.07), transparent)' }} />

      <div className="orb w-96 h-96 top-0 left-0 opacity-12" style={{ background: 'var(--dream-pink)' }} />
      <div className="orb w-72 h-72 bottom-0 right-0 opacity-10" style={{ background: 'var(--dream-violet)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="reveal font-accent text-xl text-dream-lavender mb-3">~ The Mind Behind the Magic ~</p>
          <h2 className="reveal font-display font-bold text-dream-star" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            About the Author
          </h2>
        </div>

        <div className="reveal rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-10 items-center"
          style={{
            background: 'rgba(45,40,128,0.18)',
            border: '1px solid rgba(155,143,232,0.2)',
            boxShadow: '0 0 100px rgba(107,93,211,0.12), inset 0 0 80px rgba(107,93,211,0.04)',
          }}>

          {/* Avatar */}
          <div className="reveal flex justify-center">
            <div className="relative">
              {/* Rotating ring 1 */}
              <div className="absolute -inset-6 rounded-full border border-dream-lavender/15 animate-spin"
                style={{ animationDuration: '10s' }} />
              {/* Rotating ring 2 */}
              <div className="absolute -inset-10 rounded-full border border-dream-violet/10 animate-spin"
                style={{ animationDuration: '16s', animationDirection: 'reverse' }} />

              {/* Avatar circle */}
              <div className="w-44 h-44 rounded-full flex items-center justify-center animate-float relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #2d2880, #6b5dd3, #c084b0)',
                  boxShadow: '0 0 60px rgba(107,93,211,0.6), 0 0 120px rgba(107,93,211,0.2)',
                }}>
                <FaMoon className="text-6xl text-white/90"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(232,228,255,1))' }} />
              </div>

              {/* Pen badge */}
              <div className="absolute -bottom-1 -right-1 w-12 h-12 rounded-full flex items-center justify-center z-20"
                style={{
                  background: 'linear-gradient(135deg, #2d2880, #6b5dd3)',
                  border: '2px solid rgba(155,143,232,0.5)',
                  boxShadow: '0 0 25px rgba(107,93,211,0.6)',
                }}>
                <FaPen className="text-lg text-dream-lavender"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(155,143,232,0.9))' }} />
              </div>

              {/* Glow base */}
              <div className="absolute -inset-4 rounded-full -z-10"
                style={{ background: 'radial-gradient(ellipse, rgba(107,93,211,0.25) 0%, transparent 70%)' }} />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <h3 className="reveal font-display font-bold text-3xl text-dream-star mb-1"
              style={{ textShadow: '0 0 30px rgba(232,228,255,0.15)' }}>
              Author Name
            </h3>
            <p className="reveal font-accent text-dream-lavender text-lg mb-2"
              style={{ filter: 'drop-shadow(0 0 6px rgba(155,143,232,0.3))' }}>
              Children's Book Author & Storyteller
            </p>

            {/* Social row */}
            <div className="reveal flex gap-3 mb-5">
              {[FaTwitter, FaInstagram].map((Icon, i) => (
                <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(107,93,211,0.2)',
                    border: '1px solid rgba(155,143,232,0.25)',
                    boxShadow: '0 0 10px rgba(107,93,211,0.2)',
                  }}>
                  <Icon className="text-sm text-dream-lavender" />
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="reveal relative mb-5 pl-4"
              style={{ borderLeft: '3px solid rgba(107,93,211,0.5)' }}>
              <FaQuoteLeft className="text-dream-violet text-lg mb-2 opacity-60"
                style={{ filter: 'drop-shadow(0 0 8px rgba(107,93,211,0.6))' }} />
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(232,228,255,0.82)' }}>
                A passionate storyteller who believes every child deserves to see the world through
                wonder-filled eyes. With a deep love for nature, poetry, and the magic of bedtime
                stories, this author crafts tales that linger in little hearts long after the lights go out.
              </p>
            </div>

            <p className="reveal font-body text-base leading-relaxed mb-7" style={{ color: 'rgba(232,228,255,0.78)' }}>
              Inspired by starlit nights and curious conversations with children,{' '}
              <em className="text-dream-lavender" style={{ filter: 'drop-shadow(0 0 5px rgba(155,143,232,0.4))' }}>
                Does the Earth Dream?
              </em>{' '}
              was born from a simple question whispered at bedtime — and grew into a lyrical
              celebration of our beautiful, dreaming planet.
            </p>

            {/* Tags */}
            <div className="reveal flex flex-wrap gap-3">
              {tags.map(({ icon: Icon, text, color }) => (
                <span key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    boxShadow: `0 0 15px ${color}15`,
                    color,
                  }}>
                  <Icon style={{ filter: `drop-shadow(0 0 5px ${color}80)` }} />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
