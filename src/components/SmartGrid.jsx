import { Link } from 'react-router-dom'

const technologies = [
  {
    number: '01',
    title: 'Smart Solar Communication Router',
    tag: 'CONNECTED LIGHTING',
    description:
      'A communication layer designed to connect solar lighting assets with a remote monitoring and control platform.',
    features: [
      'SIM-based connectivity',
      'Wi-Fi communication',
      'Remote communication with field devices',
      'Outdoor-ready IP66 enclosure'
    ],
    icon: 'router'
  },
  {
    number: '02',
    title: 'Smart Wi-Fi MPPT Solar Charge Controller',
    tag: 'INTELLIGENT CONTROL',
    description:
      'A smart controller that brings solar charging, lighting control and device-level performance information together.',
    features: [
      'MPPT solar charging',
      'Individual streetlight monitoring',
      'Remote brightness adjustment',
      'Individual light ON/OFF control'
    ],
    icon: 'sun'
  },
  {
    number: '03',
    title: 'Wi-SUN Communication Gateway',
    tag: 'NETWORK MANAGEMENT',
    description:
      'A gateway for coordinating connected field devices and linking the lighting network with a central platform.',
    features: [
      'Wi-SUN wireless networking',
      '4G, Ethernet and Wi-Fi connectivity',
      'GPS / BeiDou positioning support',
      'MQTT / HTTP platform integration'
    ],
    icon: 'gateway'
  }
]

const capabilities = [
  {
    icon: 'activity',
    title: 'Live device monitoring',
    text: 'View available operating information from connected lighting devices.'
  },
  {
    icon: 'battery',
    title: 'Battery & solar status',
    text: 'Keep track of battery and solar charging information.'
  },
  {
    icon: 'sliders',
    title: 'Remote lighting control',
    text: 'Adjust brightness and control individual lights remotely.'
  },
  {
    icon: 'clock',
    title: 'Historical information',
    text: 'Review recorded device and performance information where supported.'
  },
  {
    icon: 'network',
    title: 'Connected network',
    text: 'Bring multiple field devices into a centrally managed network.'
  },
  {
    icon: 'map',
    title: 'Location visibility',
    text: 'Use supported positioning features to identify deployed equipment.'
  }
]

function TechIcon({ type, className = 'h-7 w-7' }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  }

  const paths = {
    router: <><rect x="3" y="8" width="18" height="11" rx="2" /><path d="M7 8V5m10 3V5M8 13h.01M12 13h.01M16 13h.01M8 16h8" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    gateway: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M8 9h8M8 13h3m3 0h2M9 19v2m6-2v2M12 2v3" /></>,
    activity: <><path d="M3 12h4l3-8 4 16 3-8h4" /></>,
    battery: <><rect x="3" y="7" width="17" height="10" rx="2" /><path d="M23 10v4M7 10v4m4-4v4m2-7 2-3" /></>,
    sliders: <><path d="M4 6h16M4 12h16M4 18h16" /><circle cx="9" cy="6" r="2" fill="currentColor" /><circle cx="15" cy="12" r="2" fill="currentColor" /><circle cx="11" cy="18" r="2" fill="currentColor" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    network: <><rect x="9" y="2" width="6" height="5" rx="1" /><rect x="2" y="17" width="6" height="5" rx="1" /><rect x="16" y="17" width="6" height="5" rx="1" /><path d="M12 7v5M5 17v-3h14v3" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" /><path d="M9 3v15m6-12v15" /></>
  }

  return <svg {...common}>{paths[type] || paths.activity}</svg>
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-xs font-bold uppercase tracking-[0.24em] ${light ? 'text-cyan-300' : 'text-kyarrBlue'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-kyarrDark'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 leading-7 ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default function SmartGrid() {
  return (
    <div className="overflow-hidden bg-white pt-20">
      {/* Hero */}
      <section className="relative isolate bg-[#071b32] text-white">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_.9fr] md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Connected solar technology
            </div>
            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              KYARR <span className="text-cyan-300">SMARTGRID</span>
            </h1>
            <p className="mt-5 max-w-xl text-xl font-medium leading-8 text-slate-200">
              Intelligent solar lighting. Connected control. Smarter infrastructure.
            </p>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Bring solar streetlights, smart controllers and wireless communication
              together in a connected lighting ecosystem designed for remote
              monitoring and management.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#technology" className="rounded-md bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Explore the technology
              </a>
              <Link to="/contact" className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Talk to our team
              </Link>
            </div>
          </div>

          {/* Conceptual connected-network illustration */}
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
            <div className="absolute h-[88%] w-[88%] rounded-full border border-cyan-300/20" />
            <div className="absolute h-[68%] w-[68%] rounded-full border border-cyan-300/25" />
            <div className="absolute h-[48%] w-[48%] rounded-full border border-cyan-300/30" />
            <div className="absolute h-3/4 w-3/4 rounded-full border border-dashed border-cyan-200/30" />
            <div className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-3xl border border-cyan-200/40 bg-[#0d3153] shadow-[0_0_70px_rgba(34,211,238,.22)]">
              <TechIcon type="network" className="h-12 w-12 text-cyan-300" />
              <span className="mt-3 text-sm font-bold tracking-widest">SMARTGRID</span>
            </div>
            {[
              ['top-5 left-1/2 -translate-x-1/2', 'sun', 'Solar'],
              ['right-2 top-1/2 -translate-y-1/2', 'router', 'Router'],
              ['bottom-5 left-1/2 -translate-x-1/2', 'gateway', 'Gateway'],
              ['left-2 top-1/2 -translate-y-1/2', 'activity', 'Control']
            ].map(([position, icon, label]) => (
              <div key={label} className={`absolute ${position} z-20 flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-white/15 bg-[#102c49] shadow-xl`}>
                <TechIcon type={icon} className="h-7 w-7 text-cyan-300" />
                <span className="mt-1 text-[11px] font-semibold text-slate-200">{label}</span>
              </div>
            ))}
            <span className="absolute left-[22%] top-[24%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgba(103,232,249,.7)]" />
            <span className="absolute bottom-[24%] right-[22%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgba(103,232,249,.7)]" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-kyarrBlue">One connected ecosystem</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-kyarrDark sm:text-4xl">
              More than a solar streetlight.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            KYARR SmartGrid brings together smart solar charge controllers,
            communication hardware and a central management layer. The goal is
            to make connected lighting assets easier to monitor, control and
            maintain across a deployment.
          </p>
        </div>
      </section>

      {/* Technology cards */}
      <section id="technology" className="scroll-mt-24 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="The technology"
            title="Three components. One connected system."
            description="Explore the hardware building blocks behind the KYARR SmartGrid ecosystem."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {technologies.map((item) => (
              <article key={item.number} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-kyarrBlue">
                    <TechIcon type={item.icon} className="h-8 w-8" />
                  </div>
                  <span className="text-3xl font-light text-slate-200">{item.number}</span>
                </div>
                <p className="mt-7 text-[10px] font-bold tracking-[0.2em] text-kyarrBlue">{item.tag}</p>
                <h3 className="mt-2 text-xl font-bold leading-snug text-kyarrDark">{item.title}</h3>
                <p className="mt-4 min-h-[88px] text-sm leading-6 text-slate-600">{item.description}</p>
                <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1 text-cyan-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Platform capabilities"
            title="Visibility and control for connected lighting"
            description="A connected lighting platform can help operators understand field conditions and manage supported devices remotely."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 p-6 transition hover:border-cyan-300 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-kyarrBlue">
                  <TechIcon type={item.icon} />
                </div>
                <h3 className="mt-5 font-bold text-kyarrDark">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#071b32] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            light
            eyebrow="How it works"
            title="From the streetlight to the control room"
            description="A simple view of how the connected lighting ecosystem is organized."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {[
              ['01', 'Solar streetlights', 'Solar panel, battery and LED lighting assets.'],
              ['02', 'Smart controllers', 'Charging information and supported lighting controls.'],
              ['03', 'Communication gateway', 'Connects field devices to the wider network.'],
              ['04', 'Management platform', 'Central visibility and remote management.']
            ].map(([number, title, text], index) => (
              <div key={number} className="relative rounded-xl border border-white/10 bg-white/[0.06] p-6">
                <span className="text-sm font-bold tracking-widest text-cyan-300">{number}</span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                {index < 3 && <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-2xl text-cyan-300 md:block">›</span>}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            Actual connectivity, supported functions and platform screens depend on the deployed hardware and software configuration.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-8 text-white sm:p-12 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">Discover connected solar</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to make your lighting smarter?</h2>
            <p className="mt-4 leading-7 text-blue-50">
              Speak with KYARR about smart solar lighting, connected controllers and gateway solutions for your project.
            </p>
          </div>
          <Link to="/contact" className="shrink-0 rounded-md bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50">
            Contact KYARR
          </Link>
        </div>
      </section>
    </div>
  )
}
