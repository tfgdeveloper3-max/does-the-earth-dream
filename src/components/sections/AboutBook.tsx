"use client";
import { useEffect, useRef } from 'react'
import {
  FaMicrophone, FaSearch, FaLaughSquint,
  FaSeedling, FaMoon, FaChalkboardTeacher,
  FaBookOpen, FaArrowRight, FaGlobe,
} from 'react-icons/fa'
import { IoStar } from 'react-icons/io5'

const features = [
  { icon: FaMicrophone, title: 'Lyrical & Rhyming', desc: 'Fun to read aloud — every page sings with rhythm and playful cadence.' },
  { icon: FaSearch, title: 'Earth Science Concepts', desc: 'Introduces nature and weather gently through imaginative storytelling.' },
  { icon: FaLaughSquint, title: 'Age-Appropriate Humor', desc: 'Keeps kids giggling and engaged from the very first page to the last.' },
  { icon: FaSeedling, title: 'Environmental Empathy', desc: 'Sparks curiosity, care, and love for the world we call home.' },
  { icon: FaMoon, title: 'Dreamy Night Themes', desc: 'Perfect for bedtime — calming, whimsical, and wonder-filled.' },
  { icon: FaChalkboardTeacher, title: 'Classroom Ready', desc: 'Ideal for story time, nature discussions, and creative writing prompts.' },
]

export default function AboutBook() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 110))
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-book" ref={ref} className="section-base relative overflow-hidden">
      <div className="orb w-80 h-80 top-0 right-0 opacity-20" style={{ background: 'var(--dream-violet)' }} />
      <div className="orb w-64 h-64 bottom-0 left-0 opacity-20" style={{ background: 'var(--dream-pink)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="reveal font-accent text-xl text-dream-lavender mb-3">~ Discover the Story ~</p>
          <h2 className="reveal font-display font-bold text-dream-star" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            About the Book
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Book mockup */}
          <div className="reveal flex justify-center">
            <div className="relative w-72 h-96 animate-float">
              <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center p-8 text-center"
                style={{
                  background: 'linear-gradient(135deg, #2d2880 0%, #6b5dd3 50%, #c084b0 100%)',
                  boxShadow: '0 0 100px rgba(107,93,211,0.6), 0 0 40px rgba(192,132,176,0.3), 0 30px 60px rgba(0,0,0,0.5)',
                }}>
                <FaGlobe className="text-7xl text-white/90 mb-4 drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(232,228,255,0.8))' }} />
                <h3 className="font-display font-bold text-2xl text-white leading-tight mb-2">
                  Does the<br />Earth<br />Dream?
                </h3>
                <p className="font-accent text-dream-rose text-lg mt-2">A Picture Book</p>
                <div className="mt-5 flex gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <IoStar key={i} className="text-dream-rose text-lg" style={{ filter: 'drop-shadow(0 0 4px rgba(212,160,200,0.8))' }} />
                  ))}
                </div>
              </div>
              {/* Glow ring */}
              <div className="absolute -inset-6 rounded-3xl -z-10 animate-glow"
                style={{ background: 'radial-gradient(ellipse, rgba(107,93,211,0.35) 0%, transparent 70%)' }} />
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="reveal font-body text-lg leading-relaxed mb-5" style={{ color: 'rgba(232,228,255,0.85)' }}>
              <em className="font-accent text-dream-lavender text-xl">Does the Earth Dream?</em> is a playful,
              poetic children's picture book that invites young readers to imagine our planet as a dreaming, feeling being.
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
            <div className="reveal flex flex-wrap gap-3">
              <a href="#newsletter" className="btn-dream gap-2">
                <FaBookOpen /> Order Now
              </a>
              <a href="#contact" className="btn-outline gap-2">
                Learn More <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="
    reveal group p-6 rounded-2xl transition-all duration-300 
    hover:-translate-y-2 cursor-default
    hover:shadow-[0_0_40px_rgba(107,93,211,0.3)]
    hover:border-[rgba(155,143,232,0.4)]
  "
              style={{
                background: 'rgba(45,40,128,0.2)',
                border: '1px solid rgba(155,143,232,0.15)',
              }}
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                <Icon className="text-3xl text-dream-lavender" style={{ filter: 'drop-shadow(0 0 8px rgba(155,143,232,0.6))' }} />
              </div>
              <h3 className="font-display font-bold text-dream-star text-lg mb-2">{title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(232,228,255,0.65)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
