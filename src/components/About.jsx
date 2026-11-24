import { Link } from 'react-router-dom'

const companyFacts = [
  ['2011', 'Established'],
  ['2,500+', 'Solar street lights supplied and installed'],
  ['4+ years', 'Dedicated research and development'],
  ['5-year', 'Warranty commitment'],
]

const services = [
  'Solar Street Lights Manufacturing', 'Solar Panels', 'Lithium Battery Packs',
  'LED Lights', 'Government Tender & Contract Works', 'Installation & Maintenance Services',
  'Battery Assessment & Repacking', 'O&M Monthly Contract Services',
  'Supply & Installation of Poles', 'Servicing All Brand Solar Lights',
]

const controllerFeatures = [
  'Multiple dimmable options', 'Remote configuration capability',
  'On-site adjustment even after 2–3 years', '16–20 hours backup even at 30–50% battery',
  'Automatic sunlight-based charging', 'Safe operation at 24–26W high voltage',
  'Automatic discharge dimming', 'Full battery life optimization',
]

export default function About() {
  return (
    <main className="pt-24 bg-white text-slate-800">
      <section className="relative overflow-hidden bg-[#0a2540] text-white">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 80% 20%, #d9b44a 0, transparent 34%), radial-gradient(circle at 10% 90%, #0b6ef6 0, transparent 38%)'}} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[.22em] text-[#e4c66f]">About KYARR INCORP</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Powering a brighter future through <span className="text-[#e4c66f]">solar innovation.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Our journey in solar energy, lighting solutions, manufacturing, installation and long-term maintenance began in 2011.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_.85fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">Who we are</p>
            <h2 className="mb-6 text-3xl font-bold text-[#0a2540] md:text-4xl">Experience built around dependable solar solutions.</h2>
            <p className="mb-5 text-base leading-8 text-slate-600">Kyarr Incorp was established in 2011 and has over 13+ years of strong industry experience in solar energy and lighting solutions. For the past 15 years, we have been actively involved in government contract works and for the last 10+ years, we have been specializing in solar street light manufacturing, installation, and maintenance.</p>
            <p className="text-base leading-8 text-slate-600">We have successfully supplied and installed more than 2,500+ solar street lights for government projects, private layouts, residential houses, gardens, and commercial properties.</p>
          </div>
          <aside className="rounded-3xl border border-blue-100 bg-slate-50 p-7 shadow-sm md:p-9">
            <p className="mb-5 text-lg font-bold text-[#0a2540]">Quick company info</p>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-slate-200 pb-3"><dt className="text-slate-500">Company</dt><dd className="text-right font-semibold">KYARR INCORP</dd></div>
              <div className="flex justify-between gap-4 border-b border-slate-200 pb-3"><dt className="text-slate-500">Established</dt><dd className="font-semibold">2011</dd></div>
              <div className="flex justify-between gap-4 border-b border-slate-200 pb-3"><dt className="text-slate-500">Phone</dt><dd className="font-semibold">+91 9944261439</dd></div>
              <div className="flex justify-between gap-4 border-b border-slate-200 pb-3"><dt className="text-slate-500">Email</dt><dd className="break-all text-right font-semibold">kyarrincorp@gmail.com</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-slate-500">Location</dt><dd className="text-right font-semibold">Dindigul, Tamil Nadu</dd></div>
            </dl>
          </aside>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {companyFacts.map(([value, label]) => <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><strong className="block text-3xl font-extrabold text-blue-700">{value}</strong><span className="mt-2 block text-sm leading-6 text-slate-600">{label}</span></div>)}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">Our journey & innovation</p>
          <h2 className="mb-8 max-w-3xl text-3xl font-bold text-[#0a2540] md:text-4xl">Research shaped by real field challenges.</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-7 shadow-sm"><span className="mb-4 block text-2xl font-black text-[#d1a832]">01</span><p className="leading-7 text-slate-600">In our early years, we noticed that most failures were not due to solar panels, but because of low-quality batteries and incompatible solar controllers supplied by different vendors. Even suppliers failed to offer proper service due to unknown specifications.</p></article>
            <article className="rounded-2xl bg-white p-7 shadow-sm"><span className="mb-4 block text-2xl font-black text-[#d1a832]">02</span><p className="leading-7 text-slate-600">To solve this industry-wide problem, we invested over 4 years in continuous research and development. We identified that by accurately measuring solar panel voltage, battery voltage, and light-burning voltage, most failures could be eliminated.</p></article>
            <article className="rounded-2xl bg-white p-7 shadow-sm"><span className="mb-4 block text-2xl font-black text-[#d1a832]">03</span><p className="leading-7 text-slate-600">Using advanced technology, we successfully developed our own intelligent solar controllers.</p></article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="rounded-3xl bg-[#0a2540] p-8 text-white md:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e4c66f]">In-house technology</p>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Our advanced solar controller technology</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {controllerFeatures.map(feature => <li key={feature} className="flex gap-3 rounded-xl bg-white/10 p-4 leading-6"><span className="text-[#e4c66f]">✓</span><span>{feature}</span></li>)}
          </ul>
          <p className="mt-8 max-w-4xl leading-8 text-slate-200">With this innovation, battery failures under warranty have reduced drastically. We confidently provide a 5-year warranty, ensuring long-lasting performance and customer satisfaction.</p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">What we do</p>
          <h2 className="mb-8 text-3xl font-bold text-[#0a2540] md:text-4xl">Products & services</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => <div key={service} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5"><span className="text-sm font-bold text-blue-700">{String(i + 1).padStart(2, '0')}</span><span className="font-semibold text-slate-700">{service}</span></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-[#0a2540] p-8 text-white md:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e4c66f]">Project experience</p>
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">Government project expertise</h2>
          <p className="mb-4 max-w-4xl leading-8 text-blue-50">We accept subcontracting for government projects, including roadside solar light installations and long-term maintenance contracts.</p>
          <p className="max-w-4xl leading-8 text-blue-50">Since roadside solar panels collect dust quickly, we provide periodic cleaning, dedicated maintenance staff during warranty, and continuous performance monitoring.</p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="mb-8 text-3xl font-bold text-[#0a2540] md:text-4xl">Why choose Kyarr Incorp?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['13+ Years Experience', '2500+ Street Lights Installed', 'Government Project Expertise', 'Advanced In-House Controller Tech', 'High Durability & Quality', 'Fast & Reliable Service'].map(item => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold text-slate-700 shadow-sm"><span className="mr-2 text-blue-700">✓</span>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="rounded-3xl border border-[#e7d49b] bg-[#fffaf0] p-8 text-center md:p-12">
          <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-700">When you choose Kyarr Incorp, your customers receive long-lasting performance, government departments get reliable service, and your reputation remains strong. We deliver peace of mind through quality, innovation, and trust.</p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-[#0a2540] px-7 py-3 font-semibold text-white transition hover:bg-blue-700">Contact KYARR</Link>
        </div>
      </section>
    </main>
  )
}
