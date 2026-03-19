'use client'
import { useEffect, useRef } from 'react'
import {
  FaMicrophone, FaSearch, FaLaughSquint,
  FaSeedling, FaMoon, FaChalkboardTeacher,
  FaBookOpen, FaArrowRight, FaGlobe, FaStar,
} from 'react-icons/fa'

const features = [
  { icon: FaMicrophone, title: 'Lyrical & Rhyming', desc: 'Fun to read aloud — every page sings with rhythm and playful cadence.', color: '#9b8fe8' },
  { icon: FaSearch, title: 'Earth Science Concepts', desc: 'Introduces nature and weather gently through imaginative storytelling.', color: '#6b5dd3' },
  { icon: FaLaughSquint, title: 'Age-Appropriate Humor', desc: 'Keeps kids giggling and engaged from the very first page to the last.', color: '#c084b0' },
  { icon: FaSeedling, title: 'Environmental Empathy', desc: 'Sparks curiosity, care, and love for the world we call home.', color: '#9b8fe8' },
  { icon: FaMoon, title: 'Dreamy Night Themes', desc: 'Perfect for bedtime — calming, whimsical, and wonder-filled.', color: '#6b5dd3' },
  { icon: FaChalkboardTeacher, title: 'Classroom Ready', desc: 'Ideal for story time, nature discussions, and creative writing prompts.', color: '#c084b0' },
]

export default function AboutBook() {
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
    <section id="about-book" ref={ref} className="section-base relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--dream-violet), transparent)' }} />
      <div className="orb w-96 h-96 top-0 right-0 opacity-18" style={{ background: 'var(--dream-violet)' }} />
      <div className="orb w-72 h-72 bottom-0 left-0 opacity-15" style={{ background: 'var(--dream-pink)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="reveal font-accent text-xl text-dream-lavender mb-3">~ Discover the Story ~</p>
          <h2 className="reveal font-display font-bold text-dream-star" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', textShadow: '0 0 40px rgba(155,143,232,0.2)' }}>
            About the Book
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Book Cover Mockup */}
          <div className="reveal flex justify-center">
            <div className="relative">
              {/* Book shadow/depth */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-52 h-8 rounded-full"
                style={{ background: 'rgba(107,93,211,0.4)', filter: 'blur(20px)' }} />

              {/* The book */}
              <div className="relative w-64 h-[22rem] animate-float" style={{ perspective: '1000px' }}>
                {/* Book spine */}
                <div className="absolute left-0 top-2 bottom-2 w-5 rounded-l-sm"
                  style={{
                    background: 'linear-gradient(180deg, #1a1650, #2d2880, #1a1650)',
                    boxShadow: '-4px 0 15px rgba(0,0,0,0.5)',
                    transformOrigin: 'right center',
                  }} />

                {/* Book front cover */}
                <div className="absolute left-5 right-0 top-0 bottom-0 rounded-r-xl overflow-hidden flex flex-col"
                  style={{
                    background: 'linear-gradient(160deg, #0f0c2e 0%, #2d2880 35%, #6b5dd3 65%, #c084b0 100%)',
                    boxShadow: '8px 8px 40px rgba(0,0,0,0.6), 0 0 80px rgba(107,93,211,0.5), 0 0 120px rgba(107,93,211,0.2)',
                  }}>

                  {/* Stars on cover */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(18)].map((_, i) => (
                      <div key={i}
                        className="absolute rounded-full animate-pulse"
                        style={{
                          width: Math.random() * 3 + 1 + 'px',
                          height: Math.random() * 3 + 1 + 'px',
                          left: Math.random() * 100 + '%',
                          top: Math.random() * 100 + '%',
                          background: 'white',
                          animationDelay: `${Math.random() * 3}s`,
                          opacity: Math.random() * 0.8 + 0.2,
                        }} />
                    ))}
                  </div>

                  {/* Cover content */}
                  <div className="relative z-10 flex flex-col items-center justify-between h-full p-6 text-center">
                    <div>
                      <p className="font-accent text-dream-rose text-sm mb-1" style={{ filter: 'drop-shadow(0 0 6px rgba(212,160,200,0.8))' }}>
                        A Picture Book
                      </p>
                      <div className="w-12 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,200,0.6), transparent)' }} />
                    </div>

                    {/* Globe illustration */}
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full flex items-center justify-center"
                        style={{
                          background: 'radial-gradient(circle at 35% 35%, #4a90d9, #1a5c8a, #0d3d5c)',
                          boxShadow: '0 0 30px rgba(74,144,217,0.5), inset -8px -8px 20px rgba(0,0,0,0.3)',
                        }}>
                        <FaGlobe className="text-4xl" style={{ color: 'rgba(232,228,255,0.9)', filter: 'drop-shadow(0 0 10px rgba(155,143,232,0.8))' }} />
                      </div>
                      {/* Orbit ring */}
                      <div className="absolute -inset-4 rounded-full border border-dream-lavender/20 animate-spin"
                        style={{ animationDuration: '8s' }} />
                      <div className="absolute -inset-8 rounded-full border border-dream-lavender/10 animate-spin"
                        style={{ animationDuration: '14s', animationDirection: 'reverse' }} />
                    </div>

                    <div>
                      <h3 className="font-display font-black text-xl text-white leading-snug mb-2"
                        style={{ textShadow: '0 0 20px rgba(155,143,232,0.5)' }}>
                        Does the<br />Earth Dream?
                      </h3>
                      <div className="flex justify-center gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-xs text-dream-rose animate-pulse"
                            style={{ animationDelay: `${i * 0.15}s`, filter: 'drop-shadow(0 0 4px rgba(212,160,200,0.9))' }} />
                        ))}
                      </div>
                      <p className="font-body text-xs" style={{ color: 'rgba(155,143,232,0.7)' }}>Ubaidullah</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outer glow */}
              <div className="absolute -inset-10 -z-10 animate-glow"
                style={{ background: 'radial-gradient(ellipse, rgba(107,93,211,0.3) 0%, transparent 65%)', borderRadius: '50%' }} />
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="reveal font-body text-lg leading-relaxed mb-5" style={{ color: 'rgba(232,228,255,0.85)' }}>
              <em className="font-accent text-dream-lavender text-xl" style={{ filter: 'drop-shadow(0 0 8px rgba(155,143,232,0.4))' }}>Does the Earth Dream?</em>{' '}
              is a playful, poetic children's picture book that invites young readers to imagine our planet
              as a dreaming, feeling being.
            </p>
            <p className="reveal font-body text-lg leading-relaxed mb-5" style={{ color: 'rgba(232,228,255,0.8)' }}>
              From sunbathing and dancing with the moon to choosing clouds and weathering storms,
              Earth's dreams mirror the natural wonders kids see every day.
            </p>
            <p className="reveal font-body text-lg leading-relaxed mb-8" style={{ color: 'rgba(232,228,255,0.8)' }}>
              Perfect for bedtime reading, classroom story time, and curious little minds, this
              whimsical tale encourages empathy for our planet and sparks conversations about
              nature, emotions, and caring for the world we live in.
            </p>

            {/* Quote block */}
            <div className="reveal mb-8 pl-5 py-1"
              style={{ borderLeft: '3px solid rgba(107,93,211,0.6)' }}>
              <p className="font-accent text-xl text-dream-lavender italic"
                style={{ textShadow: '0 0 15px rgba(155,143,232,0.3)' }}>
                "What if our planet dreams, just like we do?"
              </p>
            </div>

            <div className="reveal flex flex-wrap gap-3">
              <a href="#newsletter" className="btn-dream gap-2 text-base px-7 py-3.5">
                <FaBookOpen /> Order Now
              </a>
              <a href="#contact" className="btn-outline gap-2 text-base px-7 py-3.5">
                Learn More <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <div key={i}
              className="reveal group p-7 rounded-2xl transition-all duration-400 hover:-translate-y-2 cursor-default"
              style={{
                background: 'rgba(45,40,128,0.18)',
                border: '1px solid rgba(155,143,232,0.15)',
                boxShadow: '0 0 0 rgba(107,93,211,0)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${color}35, inset 0 0 30px ${color}08`
                  ; (e.currentTarget as HTMLElement).style.borderColor = `${color}50`
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 rgba(107,93,211,0)'
                  ; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(155,143,232,0.15)'
              }}
            >
              <div className="mb-4 transition-all duration-400 group-hover:scale-125 group-hover:-rotate-6 inline-block">
                <Icon className="text-3xl" style={{ color, filter: `drop-shadow(0 0 10px ${color}80)` }} />
              </div>
              <h3 className="font-display font-bold text-dream-star text-lg mb-2">{title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(232,228,255,0.62)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
