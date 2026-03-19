"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaGlobe, FaHeart } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'

const quickLinks = ['#home', '#about-book', '#author', '#blog', '#newsletter', '#contact']
const socials = [
  { icon: FaFacebookF, label: 'Facebook', handle: '@EarthDreamsBook', color: '#6b5dd3' },
  { icon: FaInstagram, label: 'Instagram', handle: '@earth.dreams', color: '#c084b0' },
  { icon: FaTwitter, label: 'Twitter', handle: '@EarthDreams', color: '#9b8fe8' },
  { icon: FaYoutube, label: 'YouTube', handle: 'Earth Dreams', color: '#d4a0c8' },
]

export default function Footer() {
  return (
    <footer className="relative z-10"
      style={{ borderTop: '1px solid rgba(107,93,211,0.2)' }}>

      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--dream-violet), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaGlobe className="text-2xl text-dream-lavender"
                style={{ filter: 'drop-shadow(0 0 8px rgba(155,143,232,0.7))' }} />
              <div>
                <span className="font-display text-xl font-bold text-dream-star block leading-tight">Does the Earth</span>
                <span className="font-accent text-dream-lavender text-lg">Dream?</span>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(232,228,255,0.55)' }}>
              A whimsical children's picture book inviting young readers to discover our
              planet's dreaming soul — one rhyme at a time.
            </p>
            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm font-body font-semibold text-dream-lavender hover:text-dream-white transition-colors group"
            >
              <span className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-dream"
                style={{ background: 'rgba(107,93,211,0.2)', border: '1px solid rgba(155,143,232,0.25)' }}>
                <FiArrowUp className="text-dream-lavender group-hover:text-white transition-colors" />
              </span>
              Back to Top
            </button>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-dream-star mb-5 text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(href => (
                <li key={href}>
                  <a href={href}
                    className="font-body text-sm capitalize transition-all duration-200 hover:text-dream-white hover:translate-x-1 inline-flex items-center gap-2"
                    style={{ color: 'rgba(155,143,232,0.7)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-dream-violet opacity-60" />
                    {href.replace('#', '').replace('-', ' ')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display font-bold text-dream-star mb-5 text-lg">Follow the Dream</h4>
            <div className="flex flex-col gap-4">
              {socials.map(({ icon: Icon, label, handle, color }) => (
                <div key={label}
                  className="flex items-center gap-3 group cursor-pointer transition-all duration-200 hover:translate-x-1">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: `${color}18`,
                      border: `1px solid ${color}30`,
                      boxShadow: `0 0 0 ${color}00`,
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${color}50`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 ${color}00`}
                  >
                    <Icon className="text-sm" style={{ color, filter: `drop-shadow(0 0 4px ${color}80)` }} />
                  </div>
                  <div>
                    <div className="font-body text-xs" style={{ color: 'rgba(155,143,232,0.5)' }}>{label}</div>
                    <div className="font-body text-sm text-dream-star group-hover:text-dream-lavender transition-colors">{handle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(107,93,211,0.12)' }}>
          <p className="font-body text-xs" style={{ color: 'rgba(155,143,232,0.45)' }}>
            © {new Date().getFullYear()} Does the Earth Dream? — All Rights Reserved
          </p>
          <p className="flex items-center gap-1.5 font-body text-xs" style={{ color: 'rgba(155,143,232,0.4)' }}>
            Made By Ubaidullah <FaHeart className="text-dream-pink text-xs" style={{ filter: 'drop-shadow(0 0 4px rgba(192,132,176,0.7))' }} />
          </p>
        </div>
      </div>
    </footer>
  )
}
