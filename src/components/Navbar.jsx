import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  ['Home', '/'],
  ['Products', '/products'],
  ['Specialization', '/specialization'],
  ['SmartGrid', '/smartgrid'],
  ['About', '/about'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-blue-50 text-kyarrBlue' : 'text-slate-600 hover:bg-slate-50 hover:text-kyarrBlue'}`

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img src="/images/logo.jpg" alt="KYARR" className="h-12 w-auto object-contain" />
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-kyarrDark">KYARR INCORP</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[.18em] text-slate-500">The Royal Power Of A New Era</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} className={navClass}>{label}</NavLink>)}
          <NavLink to="/contact" className="ml-3 rounded-full bg-kyarrBlue px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">Contact Us</NavLink>
        </nav>

        <button type="button" className="rounded-xl border border-slate-200 p-2 text-kyarrDark md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d={menuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} strokeLinecap="round" /></svg>
        </button>
      </div>
      {menuOpen && <nav className="border-t border-slate-100 bg-white px-5 py-3 shadow-lg md:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} className={navClass} onClick={() => setMenuOpen(false)}>{label}</NavLink>)}
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-kyarrBlue px-4 py-3 text-center text-sm font-bold text-white">Contact Us</Link>
        </div>
      </nav>}
    </header>
  )
}
