import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled ? 'bg-navy border-transparent shadow-[0_4px_20px_rgba(0,0,0,.3)]' : 'bg-transparent border-white/10'}`}>
      <div className="max-w-[1400px] mx-auto px-5 flex items-center py-2.5 gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0 cursor-pointer" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="ISYDCI" className="w-10 h-10 rounded-full object-contain" />
          <div className="font-heading font-extrabold text-white text-sm leading-tight whitespace-nowrap">
            ISYDCI
            <small className="block font-medium text-white/70 text-[10px] tracking-wider">International Sports and Youth Development Campaign of India</small>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map(l => (
            <NavLink
              key={l.to} to={l.to} end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg font-semibold text-[13px] text-white transition-colors whitespace-nowrap ${isActive ? 'bg-green-900/40 text-accent-2' : 'hover:bg-white/10 hover:text-accent-2'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <button className="md:hidden ml-auto bg-transparent border-0 text-2xl text-white cursor-pointer" onClick={() => setOpen(v => !v)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col bg-navy border-t border-white/10 p-3">
          {navLinks.map(l => (
            <NavLink
              key={l.to} to={l.to} end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 rounded-lg font-semibold text-sm text-white ${isActive ? 'bg-green-900/40 text-accent-2' : 'hover:bg-white/10'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
