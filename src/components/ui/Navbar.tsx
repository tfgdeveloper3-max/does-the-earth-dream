'use client'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaBookOpen, FaGlobe } from 'react-icons/fa'

const links = [
  { label: 'Home',       href: '#home'      },
  { label: 'About Book', href: '#about-book' },
  { label: 'Author',     href: '#author'     },
  { label: 'Blog',       href: '#blog'       },
  { label: 'Newsletter', href: '#newsletter' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
      style={{
        background: scrolled ? 'rgba(15,12,46,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(107,93,211,0.2)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(107,93,211,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <FaGlobe
            className="text-2xl transition-all duration-300 group-hover:rotate-12"
            style={{
              color: 'var(--dream-lavender)',
              filter: 'drop-shadow(0 0 8px rgba(155,143,232,0.7))',
            }}
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-dream-star group-hover:text-dream-lavender transition-colors">
              Does the Earth
            </span>
            <span className="font-accent text-dream-lavender text-base">Dream?</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#newsletter" className="hidden md:inline-flex btn-dream text-sm py-2.5 px-5 gap-2">
          <FaBookOpen className="text-sm" />
          Get the Book
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 transition-colors duration-200"
          style={{ color: 'var(--dream-lavender)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <FiX size={26} style={{ filter: 'drop-shadow(0 0 6px rgba(155,143,232,0.6))' }} />
            : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl p-6"
          style={{
            background: 'rgba(26,22,80,0.95)',
            border: '1px solid rgba(155,143,232,0.2)',
            boxShadow: '0 0 40px rgba(107,93,211,0.2)',
            backdropFilter: 'blur(20px)',
          }}>
          <ul className="flex flex-col gap-4">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="nav-link text-base" onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#newsletter" className="btn-dream mt-5 w-full justify-center text-sm gap-2">
            <FaBookOpen /> Get the Book
          </a>
        </div>
      )}
    </nav>
  )
}
