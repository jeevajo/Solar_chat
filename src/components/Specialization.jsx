import { useState, useRef, useEffect } from 'react'

const sections = [
  {
    key: 'solar-panels',
    title: 'Mono PERC Solar Panels',
    content: (
      <>
        <p>
          We supply and install high-quality <strong>Monocrystalline Mono PERC solar panels</strong>
          for solar street lights, high mast lights, and solar CCTV systems. These panels provide
          high efficiency, stable performance, and long-term reliability in all weather conditions.
        </p>

        <h3 className="font-semibold mt-4">Technical Features</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>High efficiency Mono PERC cells</li>
          <li>High open circuit voltage (Voc)</li>
          <li>Optimized operating voltage</li>
          <li>Low temperature coefficient</li>
          <li>Low degradation rate</li>
          <li>25+ years expected lifespan</li>
        </ul>
      </>
    )
  },
  {
    key: 'controller',
    title: 'MPPT Solar Charge Controller',
    content: (
      <>
        <p>
          Our advanced <strong>MPPT & PWM solar charge controllers</strong> manage charging,
          discharging, and lighting operations efficiently.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>20–30% higher energy output (MPPT)</li>
          <li>Dusk-to-dawn automatic ON/OFF</li>
          <li>Battery overcharge & discharge protection</li>
          <li>Advanced dimming configuration</li>
        </ul>

        <p className="mt-3 italic">
          Our controller intelligently adapts to sunlight and battery condition to ensure
          uninterrupted night-long lighting.
        </p>
      </>
    )
  },
  {
    key: 'battery',
    title: 'LiFePO4 Battery System',
    content: (
      <>
        <p>
          We use high-quality <strong>LiFePO4 batteries</strong> for solar street lights,
          ensuring long life, safety, and stable performance.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>3,000–5,000+ charge cycles</li>
          <li>80–100% depth of discharge</li>
          <li>Built-in BMS protection</li>
          <li>5–10+ years lifespan</li>
        </ul>
      </>
    )
  },
  {
    key: 'battery-box',
    title: 'IP67 Battery Box',
    content: (
      <>
        <p>
          We provide <strong>IP67-certified battery enclosures</strong> to protect batteries
          from rain, dust, heat, and corrosion.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>HDPE – lightweight & corrosion-free</li>
          <li>MS powder-coated – strong & tamper-proof</li>
          <li>SS (304/316) – coastal & industrial use</li>
        </ul>
      </>
    )
  },
  {
    key: 'pcb',
    title: 'Aluminium PCB Board',
    content: (
      <>
        <p>
          We use high-quality <strong>aluminium PCB boards</strong> designed for excellent
          heat dissipation and long LED lifespan.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>1.6 – 2.0 mm thickness</li>
          <li>Prevents PCB warping</li>
          <li>Improves LED life (50,000+ hours)</li>
        </ul>
      </>
    )
  },
  {
    key: 'housing',
    title: 'LED & All-in-One Housing',
    content: (
      <>
        <p>
          Our luminaires use <strong>die-cast aluminium housing</strong> with IP65/IP66
          protection and powder coating.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Weather & UV resistant</li>
          <li>Efficient heat dissipation</li>
          <li>Anti-corrosion powder coating</li>
        </ul>
      </>
    )
  },
  {
    key: 'lens',
    title: 'Polycarbonate Lens',
    content: (
      <>
        <p>
          Polycarbonate lenses protect LEDs and ensure efficient light distribution.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>90–95% light transmission</li>
          <li>Impact & UV resistant</li>
          <li>Custom beam angles</li>
        </ul>
      </>
    )
  },
  {
    key: 'wiring',
    title: 'Electrical Wiring & Fasteners',
    content: (
      <>
        <p>
          We use premium wiring and mounting fasteners for safe and durable installations.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Copper / Aluminium cables</li>
          <li>PVC / XLPE insulation</li>
          <li>Hot-dip galvanized J-bolts</li>
        </ul>
      </>
    )
  },
  {
    key: 'installation',
    title: 'Installation & AMC Services',
    content: (
      <>
        <p>
          We undertake complete installation, commissioning, and AMC services for
          government and private solar projects.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Site inspection & planning</li>
          <li>Panel cleaning & maintenance</li>
          <li>Government O&M contracts</li>
        </ul>
      </>
    )
  }
]

export default function Specialization() {
  const [activeTab, setActiveTab] = useState(sections[0].key)
  const [openAccordion, setOpenAccordion] = useState(null)

  const tabRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateArrows = () => {
    const el = tabRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 0)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
  }

  useEffect(updateArrows, [])

  const scroll = dir => {
    tabRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' })
    setTimeout(updateArrows, 400)
  }

  const active = sections.find(s => s.key === activeTab)

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold text-center mb-6">
          Solar Street Light Specialization – KYARR INCORP
        </h1>

        {/* ================= DESKTOP TABS ================= */}
        <div className="hidden md:flex items-center gap-3 mb-8 group">
          <button
            onClick={() => scroll(-1)}
            disabled={!canLeft}
            className={`p-2 rounded-full border transition
              ${canLeft ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}
            `}
          >
            <span className="block transition-transform group-hover:-translate-x-1">◀</span>
          </button>

          <div
            ref={tabRef}
            onScroll={updateArrows}
            className="flex gap-3 overflow-x-auto scrollbar-hide"
          >
            {sections.map(s => (
              <button
                key={s.key}
                onClick={() => setActiveTab(s.key)}
                className={`px-4 py-2 whitespace-nowrap rounded-full border transition
                  ${
                    activeTab === s.key
                      ? 'bg-kyarrBlue text-white'
                      : 'bg-white hover:bg-gray-100'
                  }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            disabled={!canRight}
            className={`p-2 rounded-full border transition
              ${canRight ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}
            `}
          >
            <span className="block transition-transform group-hover:translate-x-1">▶</span>
          </button>
        </div>

        {/* Desktop Content */}
        <div className="hidden md:block bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">{active.title}</h2>
          <div className="leading-7 text-gray-700">{active.content}</div>
        </div>

        {/* ================= MOBILE ACCORDION ================= */}
        <div className="md:hidden space-y-4">
          {sections.map(s => (
            <div key={s.key} className="border rounded-lg bg-white shadow">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === s.key ? null : s.key)
                }
                className="w-full flex justify-between px-4 py-3 font-semibold"
              >
                {s.title}
                <span>{openAccordion === s.key ? '−' : '+'}</span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500
                  ${openAccordion === s.key ? 'max-h-[2000px]' : 'max-h-0'}
                `}
              >
                <div className="px-4 pb-4 text-gray-700 leading-7">
                  {s.content}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
