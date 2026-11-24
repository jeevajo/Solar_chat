import products from '../data/products'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div className="pt-20 bg-slate-50">
      <section className="relative overflow-hidden bg-[#071d36] text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/product-hero-slider-9.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a30] via-[#092b4b]/95 to-[#0b4770]/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-black uppercase tracking-[.25em] text-[#ffd34e]">Engineered for brighter communities</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">Solar lighting built for <span className="text-[#ffd34e]">every possibility.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">Explore KYARR solar street lighting solutions, designed to deliver dependable illumination with efficient solar power.</p>
          <div className="mt-9 flex flex-wrap gap-3 text-sm font-semibold">
            <a href="#product-catalogue" className="rounded-full bg-[#ffc329] px-7 py-3.5 text-[#071d36] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ffd34e]">Explore catalogue <span aria-hidden="true">↓</span></a>
            <Link to="/contact" className="rounded-full border border-white/40 px-7 py-3.5 text-white transition hover:bg-white/10">Talk to our team</Link>
          </div>
          <div className="mt-14 grid max-w-xl grid-cols-3 gap-5 border-t border-white/20 pt-7">
            <div><p className="text-2xl font-black md:text-3xl">11+</p><p className="mt-1 text-xs text-blue-100 md:text-sm">Lighting models</p></div>
            <div><p className="text-2xl font-black md:text-3xl">20–100W</p><p className="mt-1 text-xs text-blue-100 md:text-sm">LED options</p></div>
            <div><p className="text-2xl font-black md:text-3xl">Solar</p><p className="mt-1 text-xs text-blue-100 md:text-sm">Powered solutions</p></div>
          </div>
        </div>
      </section>

      <section id="product-catalogue" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-blue-600">Our products</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a2540] md:text-4xl">Find the right light for your project</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">Compare our solar street light range and explore the specifications for each model.</p>
          </div>
          <p className="text-sm font-semibold text-slate-500">{products.length} models in the catalogue</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, index) => (
            <article key={p.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(10,37,64,.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(10,37,64,.12)]">
              <Link to={`/products/${p.id}`} className="relative block overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 p-5">
                <span className="absolute left-5 top-5 z-10 rounded-full border border-blue-100 bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-blue-700">KYARR Solar</span>
                <img src={p.image} alt={p.title} loading="lazy" className="h-56 w-full object-contain transition duration-500 group-hover:scale-105" />
                <span className="absolute bottom-4 right-4 rounded-full bg-[#0a2540] px-4 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:opacity-100">View details →</span>
              </Link>
              <div className="p-6">
                <p className="text-[11px] font-black uppercase tracking-[.18em] text-blue-600">Model {String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 min-h-[3.5rem] text-lg font-extrabold leading-snug text-[#0a2540]">{p.title}</h3>
                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
                  <div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">LED power</p><p className="mt-1 text-sm font-bold text-slate-800">{p.led}</p></div>
                  <div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Solar panel</p><p className="mt-1 text-sm font-bold text-slate-800">{p.panel}</p></div>
                  <div className="col-span-2"><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Battery</p><p className="mt-1 text-sm font-bold text-slate-800">{p.battery}</p></div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <Link to={`/products/${p.id}`} className="text-sm font-extrabold text-[#0a2540] transition hover:text-blue-600">Explore specifications <span aria-hidden="true">→</span></Link>
                  <a href={`https://wa.me/919944261439?text=${encodeURIComponent(`Hello, I want to enquire about: ${p.title}`)}`} target="_blank" rel="noreferrer" className="rounded-full bg-[#ffc329] px-4 py-2.5 text-xs font-black text-[#071d36] transition hover:bg-[#ffd34e]">Enquire</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#0a2540] p-8 text-white md:flex-row md:items-center md:p-12">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-[#ffd34e]">Need help choosing?</p><h2 className="mt-3 text-2xl font-black md:text-3xl">Let's find the right solar solution.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">Tell us about your site and lighting requirements. Our team can help you identify a suitable model.</p></div>
          <Link to="/contact" className="shrink-0 rounded-full bg-[#ffc329] px-7 py-3.5 text-sm font-black text-[#071d36] transition hover:bg-[#ffd34e]">Contact KYARR <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </div>
  )
}
