'use client'
import { useEffect, useRef } from 'react'
import { FaCloud, FaMoon, FaLeaf, FaArrowRight, FaClock, FaTag } from 'react-icons/fa'

const posts = [
  {
    icon: FaCloud, tag: 'Earth & Nature', date: 'March 12, 2025',
    title: 'Why Do Clouds Form? A Dreamy Explanation for Kids',
    excerpt: "Have you ever looked up and wondered if Earth chose those clouds just for you? Let's explore the magic behind cloud formation in the most whimsical way possible...",
    readTime: '4 min read', color: '#6b5dd3',
  },
  {
    icon: FaMoon, tag: 'Bedtime Stories', date: 'February 28, 2025',
    title: "The Moon as Earth's Best Friend — A Story of Tides & Dreams",
    excerpt: "Every night, Earth and the Moon share a secret dance. The tides rise and fall, stars shimmer, and somewhere in between, magic happens. Here's the story...",
    readTime: '5 min read', color: '#c084b0',
  },
  {
    icon: FaLeaf, tag: 'Eco Parenting', date: 'February 14, 2025',
    title: '5 Ways to Teach Kids Empathy for the Earth',
    excerpt: 'Building an emotional connection with nature starts early. These five simple, playful ideas will help your child feel like a true friend of our dreaming planet...',
    readTime: '3 min read', color: '#9b8fe8',
  },
]

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <section id="blog" ref={ref} className="section-base relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--dream-pink), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-28"
        style={{ background: 'linear-gradient(180deg, rgba(192,132,176,0.06), transparent)' }} />
      <div className="orb w-80 h-80 bottom-0 right-0 opacity-12" style={{ background: 'var(--dream-violet)' }} />
      <div className="orb w-64 h-64 top-0 left-0 opacity-08" style={{ background: 'var(--dream-pink)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="reveal font-accent text-xl text-dream-lavender mb-3">~ Stories & Thoughts ~</p>
          <h2 className="reveal font-display font-bold text-dream-star" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            From the Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {posts.map(({ icon: Icon, tag, date, title, excerpt, readTime, color }, i) => (
            <article key={i}
              className="reveal group rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: 'rgba(45,40,128,0.18)',
                border: '1px solid rgba(155,143,232,0.15)',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-12px)'
                el.style.boxShadow = `0 0 60px ${color}40, 0 25px 50px rgba(0,0,0,0.35)`
                el.style.borderColor = `${color}55`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                el.style.borderColor = 'rgba(155,143,232,0.15)'
              }}
            >
              {/* Card top banner */}
              <div className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(160deg, #0f0c2e 0%, ${color}22 100%)` }}>

                {/* Animated background dots */}
                {[...Array(8)].map((_, j) => (
                  <div key={j} className="absolute rounded-full animate-pulse"
                    style={{
                      width: Math.random() * 4 + 2 + 'px',
                      height: Math.random() * 4 + 2 + 'px',
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                      background: color,
                      opacity: 0.3,
                      animationDelay: `${j * 0.4}s`,
                    }} />
                ))}

                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `${color}20`,
                      border: `1px solid ${color}40`,
                      boxShadow: `0 0 30px ${color}40`,
                    }}>
                    <Icon className="text-3xl" style={{ color, filter: `drop-shadow(0 0 15px ${color})` }} />
                  </div>
                </div>

                {/* Bottom shimmer */}
                <div className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }} />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-body font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                    style={{ background: `${color}20`, color, border: `1px solid ${color}30` }}>
                    <FaTag className="text-xs" /> {tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-body" style={{ color: 'rgba(155,143,232,0.5)' }}>
                    <FaClock className="text-xs" /> {readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-dream-star text-lg leading-snug mb-3 transition-colors duration-300 group-hover:text-dream-lavender">
                  {title}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(232,228,255,0.58)' }}>
                  {excerpt}
                </p>

                <div className="flex items-center justify-between pt-4"
                  style={{ borderTop: '1px solid rgba(155,143,232,0.1)' }}>
                  <span className="text-xs font-body" style={{ color: 'rgba(155,143,232,0.4)' }}>{date}</span>
                  <span className="flex items-center gap-2 font-body font-bold text-sm transition-all duration-300 group-hover:gap-3"
                    style={{ color }}>
                    Read More <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal text-center">
          <button className="btn-outline gap-2 px-8 py-3.5">
            View All Posts <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  )
}
