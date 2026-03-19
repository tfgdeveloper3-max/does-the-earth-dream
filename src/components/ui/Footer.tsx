'use client'
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
    <footer className="relative z-10" style={{ borderTop: '1px solid rgba(107,93,211,0.2)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--dream-violet), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-16"
        style={{ background: 'linear-gradient(180deg, rgba(107,93,211,0.06), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <FaGlobe className="text-2xl text-dream-lavender"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(155,143,232,0.8))' }} />
                <div className="absolute inset-0 rounded-full animate-ping opacity-15"
                  style={{ background: 'var(--dream-violet)', animationDuration: '4s' }} />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-dream-star block leading-tight">Does the Earth</span>
                <span className="font-accent text-dream-lavender text-lg"
                  style={{ filter: 'drop-shadow(0 0 5px rgba(155,143,232,0.4))' }}>Dream?</span>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'rgba(232,228,255,0.52)' }}>
              A whimsical children's picture book inviting young readers to discover our
              planet's dreaming soul — one rhyme at a time.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm font-body font-semibold text-dream-lavender hover:text-dream-white transition-all duration-300 group"
            >
              <span className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-dream"
                style={{
                  background: 'rgba(107,93,211,0.2)',
                  border: '1px solid rgba(155,143,232,0.25)',
                  boxShadow: '0 0 15px rgba(107,93,211,0.15)',
                }}>
                <FiArrowUp className="text-dream-lavender transition-transform duration-300 group-hover:-translate-y-0.5" />
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
                    className="font-body text-sm capitalize inline-flex items-center gap-2 transition-all duration-250 hover:text-dream-white hover:translate-x-2"
                    style={{ color: 'rgba(155,143,232,0.65)' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'var(--dream-violet)', boxShadow: '0 0 5px rgba(107,93,211,0.6)' }} />
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
                  className="flex items-center gap-3 group cursor-pointer transition-all duration-250 hover:translate-x-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `${color}18`, border: `1px solid ${color}28` }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}55`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
                  >
                    <Icon className="text-sm" style={{ color, filter: `drop-shadow(0 0 5px ${color}80)` }} />
                  </div>
                  <div>
                    <div className="font-body text-xs" style={{ color: 'rgba(155,143,232,0.48)' }}>{label}</div>
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
          <p className="font-body text-xs" style={{ color: 'rgba(155,143,232,0.42)' }}>
            © {new Date().getFullYear()} Does the Earth Dream? — All Rights Reserved
          </p>
          <p className="flex items-center gap-1.5 font-body text-xs" style={{ color: 'rgba(155,143,232,0.38)' }}>
            Made By Ubaidullah
            <FaHeart className="text-dream-pink animate-pulse"
              style={{ filter: 'drop-shadow(0 0 5px rgba(192,132,176,0.8))', animationDuration: '1.5s' }} />
          </p>
        </div>
      </div>
    </footer>
  )
}
