'use client'
import { useEffect, useRef } from 'react'
import { FaCloud, FaMoon, FaLeaf, FaArrowRight, FaClock, FaTag } from 'react-icons/fa'

const posts = [
  {
    icon:     FaCloud,
    tag:      'Earth & Nature',
    date:     'March 12, 2025',
    title:    'Why Do Clouds Form? A Dreamy Explanation for Kids',
    excerpt:  "Have you ever looked up and wondered if Earth chose those clouds just for you? Let's explore the magic behind cloud formation in the most whimsical way possible...",
    readTime: '4 min read',
    color:    '#6b5dd3',
  },
  {
    icon:     FaMoon,
    tag:      'Bedtime Stories',
    date:     'February 28, 2025',
    title:    "The Moon as Earth's Best Friend — A Story of Tides & Dreams",
    excerpt:  'Every night, Earth and the Moon share a secret dance. The tides rise and fall, stars shimmer, and somewhere in between, magic happens. Here\'s the story...',
    readTime: '5 min read',
    color:    '#c084b0',
  },
  {
    icon:     FaLeaf,
    tag:      'Eco Parenting',
    date:     'February 14, 2025',
    title:    '5 Ways to Teach Kids Empathy for the Earth',
    excerpt:  'Building an emotional connection with nature starts early. These five simple, playful ideas will help your child feel like a true friend of our dreaming planet...',
    readTime: '3 min read',
    color:    '#9b8fe8',
  },
]

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <section id="blog" ref={ref} className="section-base relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--dream-pink), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(180deg, rgba(192,132,176,0.06), transparent)' }} />
      <div className="orb w-72 h-72 bottom-10 right-10 opacity-15" style={{ background: 'var(--dream-violet)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="reveal font-accent text-xl text-dream-lavender mb-3">~ Stories & Thoughts ~</p>
          <h2 className="reveal font-display font-bold text-dream-star" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            From the Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map(({ icon: Icon, tag, date, title, excerpt, readTime, color }, i) => (
            <article key={i}
              className="reveal group rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-3"
              style={{
                background: 'rgba(45,40,128,0.2)',
                border: '1px solid rgba(155,143,232,0.15)',
                boxShadow: '0 0 0 rgba(107,93,211,0)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${color}40, 0 20px 40px rgba(0,0,0,0.3)`
                ;(e.currentTarget as HTMLElement).style.borderColor = `${color}60`
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 rgba(107,93,211,0)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(155,143,232,0.15)'
              }}
            >
              {/* Card hero */}
              <div className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, rgba(45,40,128,0.6), ${color}30)` }}>
                <Icon
                  className="text-6xl transition-transform duration-500 group-hover:scale-125"
                  style={{ color, filter: `drop-shadow(0 0 20px ${color}90)` }}
                />
                {/* shimmer line */}
                <div className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-body font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                    style={{ background: `${color}25`, color }}>
                    <FaTag className="text-xs" /> {tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-body" style={{ color: 'rgba(155,143,232,0.55)' }}>
                    <FaClock className="text-xs" /> {readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-dream-star text-lg leading-snug mb-3 group-hover:text-dream-lavender transition-colors duration-300">
                  {title}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'rgba(232,228,255,0.6)' }}>
                  {excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-body" style={{ color: 'rgba(155,143,232,0.45)' }}>{date}</span>
                  <span className="flex items-center gap-1.5 font-body font-bold text-sm transition-all duration-300 group-hover:gap-3"
                    style={{ color }}>
                    Read More <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal text-center">
          <button className="btn-outline gap-2">
            View All Posts <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  )
}
