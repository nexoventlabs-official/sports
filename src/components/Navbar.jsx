import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const nav = useNavigate()
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled ? 'bg-navy border-transparent shadow-[0_4px_20px_rgba(0,0,0,.3)]' : 'bg-transparent border-white/10'}`}>
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between py-3 gap-4">
        <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="ISYDCI" className="w-12 h-12 rounded-full object-contain" />
          <div className="font-heading font-extrabold text-white leading-tight">
            ISYDCI
            <small className="block font-medium text-white/70 text-[11.5px] tracking-wider">International Sports & Youth Development</small>
          </div>
        </Link>
        <div className={`hidden md:flex gap-1.5 flex-wrap ${open ? '!flex flex-col absolute top-full left-0 right-0 bg-navy border-b border-white/10 p-3' : ''}`}>
          {navLinks.map(l => (
            <NavLink
              key={l.to} to={l.to} end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 rounded-lg font-semibold text-sm text-white transition-colors ${isActive ? 'bg-green-900/40 text-accent-2' : 'hover:bg-white/10 hover:text-accent-2'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <button className="btn-gradient text-white px-5 py-2.5 rounded-full font-semibold text-sm cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(47,158,68,.35)] transition-all" onClick={() => { setOpen(false); nav('/contact') }}>Donate</button>
          <button className="md:hidden bg-transparent border-0 text-2xl text-white cursor-pointer" onClick={() => setOpen(v => !v)}>☰</button>
        </div>
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
