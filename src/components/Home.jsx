import { Link } from 'react-router-dom'
import WhatsAppButton from './WhatsAppButton'

const products = [
  { title: 'KYARR 30W Solar Street Light', spec: '30W LED · 80W Panel · 12.8V 30Ah LiFePO4', image: '/images/product-1.png', path: '/products/kyarr-30w-33', tag: 'Compact solution' },
  { title: 'KYARR 80W Solar Street Light', spec: '80W LED · 180W Panel · 12.8V 80Ah LiFePO4', image: '/images/product-4.png', path: '/products/kyarr-80w-33', tag: 'High performance' },
  { title: 'KYARR 100W All-in-One', spec: '100W LED · 200W Panel · 12.8V 100Ah LiFePO4', image: '/images/product-11.png', path: '/products/kyarr-100w-aio', tag: 'Integrated design' },
]

const highlights = [
  ['01', 'Solar lighting solutions', 'Reliable solar street lighting for roads, communities and infrastructure.'],
  ['02', 'Smart connectivity', 'Connected lighting technology with remote communication and monitoring.'],
  ['03', 'Project support', 'Solutions spanning product supply, installation and maintenance.'],
]

export default function Home() {
  return (
    <div className="overflow-hidden pt-20">
      <WhatsAppButton />
      <section className="home-hero relative isolate">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,22,43,.94)_0%,rgba(5,22,43,.78)_48%,rgba(5,22,43,.18)_100%)]" />
        <div className="mx-auto grid min-h-[590px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className="max-w-2xl text-white">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-blue-100"><span className="h-2 w-2 rounded-full bg-amber-400" /> Powering a brighter tomorrow</span>
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Smarter solar.<br /><span className="text-amber-300">Brighter communities.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-blue-50/85 sm:text-lg">Explore dependable solar lighting and connected energy technology designed to bring intelligent illumination to every space.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/products" className="rounded-full bg-amber-400 px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-xl shadow-amber-900/20 transition hover:-translate-y-1 hover:bg-amber-300">Explore Products <span aria-hidden="true">→</span></Link>
              <Link to="/smartgrid" className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">Discover SmartGrid</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/20 pt-6">
              <div><div className="text-2xl font-black text-white">2011</div><div className="mt-1 text-xs font-medium text-blue-100/75">Established</div></div>
              <div><div className="text-2xl font-black text-white">Solar</div><div className="mt-1 text-xs font-medium text-blue-100/75">Lighting solutions</div></div>
              <div><div className="text-2xl font-black text-white">Smart</div><div className="mt-1 text-xs font-medium text-blue-100/75">Connected technology</div></div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-400/20 blur-3xl" />
            <img src="/images/product-hero.png" alt="KYARR solar lighting solution" className="relative max-h-[440px] w-full rounded-[2rem] object-contain drop-shadow-2xl" />
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-2xl sm:left-0"><div className="text-xs font-bold uppercase tracking-widest text-kyarrBlue">KYARR INCORP</div><div className="mt-1 text-sm font-extrabold text-kyarrDark">The Royal Power Of A New Era</div></div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Explore KYARR</p><h2 className="section-title">Technology that moves<br className="hidden sm:block" /> communities forward.</h2></div><Link to="/products" className="text-sm font-bold text-kyarrBlue hover:underline">View all products →</Link></div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map(([number, title, desc]) => <article key={number} className="feature-panel"><span className="text-sm font-black tracking-widest text-amber-500">{number}</span><h3 className="mt-5 text-xl font-extrabold text-kyarrDark">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Featured collection</p><h2 className="section-title">Lighting built for the future.</h2><p className="mt-3 max-w-2xl text-slate-600">Discover selected KYARR solar street lighting models.</p></div><Link to="/products" className="text-sm font-bold text-kyarrBlue hover:underline">Browse catalogue →</Link></div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => <article key={product.path} className="product-card"><Link to={product.path} className="product-image-wrap group"><span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-kyarrBlue">{product.tag}</span><img src={product.image} alt={product.title} className="h-64 w-full object-contain p-5 transition duration-500 group-hover:scale-105" /></Link><div className="p-6"><h3 className="text-lg font-extrabold text-kyarrDark">{product.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{product.spec}</p><Link to={product.path} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-kyarrBlue">View details <span>→</span></Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="smart-cta"><div className="max-w-2xl"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-amber-300">Connected lighting ecosystem</p><h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Meet KYARR SMARTGRID</h2><p className="mt-4 leading-7 text-blue-100/80">Take a closer look at connected solar lighting, wireless communication and intelligent monitoring capabilities.</p><Link to="/smartgrid" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-extrabold text-kyarrDark transition hover:-translate-y-1">Explore SmartGrid →</Link></div><img src="/images/smartgrid-brochure-1.jpg" alt="KYARR connected solar lighting network" className="hidden max-h-64 rounded-2xl object-contain shadow-2xl lg:block" /></div></section>

      <section className="border-t border-slate-100 py-16"><div className="mx-auto max-w-4xl px-5 text-center"><p className="eyebrow">About KYARR INCORP</p><h2 className="section-title">A trusted name in solar energy and lighting.</h2><p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">Established in 2011, Kyarr Incorp is a manufacturer and service provider in solar energy and lighting solutions. The company specializes in solar street lights, panels, lithium battery packs, LED lights, and government project execution with installation and maintenance.</p><Link to="/about" className="mt-7 inline-flex font-extrabold text-kyarrBlue hover:underline">Know more about us →</Link></div></section>
    </div>
  )
}
