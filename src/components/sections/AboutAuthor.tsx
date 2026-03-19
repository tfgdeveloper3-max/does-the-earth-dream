'use client'
import { useEffect, useRef } from 'react'
import { FaLeaf, FaBook, FaStar, FaPalette, FaMoon, FaPen, FaQuoteLeft } from 'react-icons/fa'

const tags = [
  { icon: FaLeaf,    text: 'Nature Lover'   },
  { icon: FaBook,    text: 'Storyteller'    },
  { icon: FaStar,    text: 'Dream Chaser'   },
  { icon: FaPalette, text: 'Creative Soul'  },
]

export default function AboutAuthor() {
  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <section id="author" ref={ref} className="section-base relative overflow-hidden">
      {/* Top divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--dream-violet), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(180deg, rgba(107,93,211,0.08), transparent)' }} />

      <div className="orb w-80 h-80 top-10 left-10 opacity-15" style={{ background: 'var(--dream-pink)' }} />
      <div className="orb w-64 h-64 bottom-10 right-10 opacity-10" style={{ background: 'var(--dream-violet)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="reveal font-accent text-xl text-dream-lavender mb-3">~ The Mind Behind the Magic ~</p>
          <h2 className="reveal font-display font-bold text-dream-star" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            About the Author
          </h2>
        </div>

        <div className="reveal rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-10 items-center"
          style={{
            background: 'rgba(45,40,128,0.2)',
            border: '1px solid rgba(155,143,232,0.2)',
            boxShadow: '0 0 80px rgba(107,93,211,0.15), inset 0 0 60px rgba(107,93,211,0.05)',
          }}>

          {/* Avatar */}
          <div className="reveal flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full flex items-center justify-center animate-float"
                style={{
                  background: 'linear-gradient(135deg, #3d3aaa, #6b5dd3, #c084b0)',
                  boxShadow: '0 0 60px rgba(107,93,211,0.6), 0 0 120px rgba(107,93,211,0.2)',
                }}>
                <FaMoon className="text-6xl text-white/85"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(232,228,255,0.9))' }} />
              </div>
              {/* Pen badge */}
              <div className="absolute -bottom-2 -right-2 w-13 h-13 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #2d2880, #6b5dd3)',
                  border: '2px solid rgba(155,143,232,0.4)',
                  boxShadow: '0 0 20px rgba(107,93,211,0.5)',
                }}>
                <FaPen className="text-dream-lavender text-lg"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(155,143,232,0.8))' }} />
              </div>
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full -z-10"
                style={{ background: 'radial-gradient(ellipse, rgba(107,93,211,0.2) 0%, transparent 70%)' }} />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <h3 className="reveal font-display font-bold text-3xl text-dream-star mb-1">
              Author Name
            </h3>
            <p className="reveal font-accent text-dream-lavender text-lg mb-5">
              Children's Book Author & Storyteller
            </p>

            {/* Quote icon */}
            <FaQuoteLeft className="text-dream-violet text-2xl mb-3 opacity-60"
              style={{ filter: 'drop-shadow(0 0 8px rgba(107,93,211,0.6))' }} />

            <p className="reveal font-body text-base leading-relaxed mb-4" style={{ color: 'rgba(232,228,255,0.82)' }}>
              A passionate storyteller who believes every child deserves to see the world through
              wonder-filled eyes. With a deep love for nature, poetry, and the magic of bedtime
              stories, this author crafts tales that linger in little hearts long after the lights go out.
            </p>
            <p className="reveal font-body text-base leading-relaxed mb-7" style={{ color: 'rgba(232,228,255,0.82)' }}>
              Inspired by starlit nights and curious conversations with children,{' '}
              <em className="text-dream-lavender">Does the Earth Dream?</em> was born from a simple
              question whispered at bedtime — and grew into a lyrical celebration of our beautiful,
              dreaming planet.
            </p>

            {/* Tags */}
            <div className="reveal flex flex-wrap gap-3">
              {tags.map(({ icon: Icon, text }) => (
                <span key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-semibold text-dream-lavender transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(107,93,211,0.15)',
                    border: '1px solid rgba(155,143,232,0.25)',
                    boxShadow: '0 0 12px rgba(107,93,211,0.15)',
                  }}>
                  <Icon className="text-dream-lavender" style={{ filter: 'drop-shadow(0 0 5px rgba(155,143,232,0.7))' }} />
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
