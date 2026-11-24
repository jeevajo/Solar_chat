import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div><div className="text-xl font-black tracking-tight text-white">KYARR INCORP</div><p className="mt-2 text-xs font-semibold uppercase tracking-[.18em] text-blue-200">The Royal Power Of A New Era</p><p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">Solar lighting and connected technology for brighter, smarter communities.</p></div>
        <div><h3 className="text-sm font-extrabold text-white">Explore</h3><div className="mt-4 grid gap-3 text-sm text-slate-300"><Link className="hover:text-amber-300" to="/products">Products</Link><Link className="hover:text-amber-300" to="/specialization">Specialization</Link><Link className="hover:text-amber-300" to="/smartgrid">SmartGrid</Link><Link className="hover:text-amber-300" to="/about">About us</Link></div></div>
        <div><h3 className="text-sm font-extrabold text-white">Get in touch</h3><Link to="/contact" className="mt-4 inline-flex rounded-full bg-amber-400 px-5 py-2.5 text-sm font-extrabold text-slate-950 transition hover:bg-amber-300">Contact KYARR →</Link><p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} KYARR INCORP. All rights reserved.</p></div>
      </div>
    </footer>
  )
}
