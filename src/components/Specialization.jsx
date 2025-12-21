import { useState, useRef, useEffect } from 'react'

const sections = [
  {
    key: 'solar-panels',
    title: 'Solar Panels',
    images: ['/images/specialization/solar-panels.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies and installs high-quality Monocrystalline Solar Panels with
          advanced Mono PERC cell technology for solar street lights, high mast lights, and
          solar CCTV systems. These panels are carefully selected to deliver high efficiency,
          stable performance, and long-term reliability in all weather conditions.
        </p>
        <p className="mt-3">
          Mono PERC (Passivated Emitter and Rear Cell) technology enhances light absorption
          and improves electrical performance, ensuring maximum power generation even under
          low sunlight and high temperature conditions.
        </p>

        <h3 className="font-semibold mt-4">Technical Features & Specifications :</h3>
        <ul className="list-disc ml-6">
          <li>Mono PERC Cell Technology for higher power output</li>
          <li>High efficiency panels with superior energy conversion</li>
          <li>High open circuit voltage (Voc)</li>
          <li>Optimized operating voltage</li>
          <li>Low temperature coefficient</li>
          <li>Low degradation rate</li>
          <li>Expected lifespan: 25+ years</li>
        </ul>

        <h3 className="font-semibold mt-4">Our Commitment :</h3>
        <p>
          By providing tested Mono PERC panels, we ensure efficient energy generation and
          dependable solar lighting solutions.
        </p>
      </>
    )
  },

  {
    key: 'controller',
    title: 'Solar Charge Controller (MPPT / PWM)',
    images: ['/images/specialization/solar-controller.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies and installs advanced MPPT and PWM solar charge controllers
          that manage charging, discharging, and power supply for solar lighting systems.
        </p>

        <h3 className="font-semibold mt-4">Key Features :</h3>
        <ul className="list-disc ml-6">
          <li>20–30% higher efficiency with MPPT</li>
          <li>Automatic dusk-to-dawn operation</li>
          <li>Overcharge & over-discharge protection</li>
          <li>Adaptive wattage control</li>
        </ul>

        <p className="mt-3">
          Our controller intelligently adjusts lighting output based on battery health and
          sunlight conditions.
        </p>
      </>
    )
  },

  {
    key: 'battery',
    title: 'Battery System (LiFePO4)',
    images: ['/images/specialization/lifepo4-battery.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          We use LiFePO4 lithium batteries that provide long life, excellent safety, and
          high efficiency for solar street lights and CCTV systems.
        </p>

        <ul className="list-disc ml-6 mt-3">
          <li>3,000–5,000+ cycles</li>
          <li>5–10+ years lifespan</li>
          <li>80–100% usable capacity</li>
          <li>Low self-discharge</li>
        </ul>
      </>
    )
  },

  {
    key: 'battery-box',
    title: 'Battery Box (IP67 Certified)',
    images: ['/images/specialization/battery-box.jpg'],
    content: (
      <>
        <p>
          IP67 certified battery boxes protect batteries from rain, dust, heat, and corrosion.
          Available in HDPE, MS powder-coated, and SS variants.
        </p>
      </>
    )
  },

  {
    key: 'led-luminaire',
    title: 'LED Luminaire (Solar Street Light)',
    images: ['/images/specialization/led-luminaire.jpg'],
    content: (
      <>
        <p>
          High-efficiency LED luminaires using 5050 / 3030 LED chips with uniform light
          distribution and long service life.
        </p>
      </>
    )
  },

  {
    key: 'pcb',
    title: 'PCB Board',
    images: ['/images/specialization/pcb-board.jpg'],
    content: (
      <>
        <p>
          Aluminium PCB boards (1.6–2.0 mm) provide excellent heat dissipation and improve LED
          lifespan up to 50,000 hours.
        </p>
      </>
    )
  },

  {
    key: 'pole',
    title: 'Pole & Mounting Structure',
    images: ['/images/specialization/pole-mounting.jpg'],
    content: (
      <>
        <p>
          Hot-dip galvanized round and octagonal poles ensure strong, rust-free support for
          solar street lights.
        </p>
      </>
    )
  },

  {
    key: 'housing',
    title: 'LED Housing',
    images: ['/images/specialization/led-housing.jpg'],
    content: (
      <>
        <p>
          Die-cast aluminium LED housing with IP65/IP66 protection and powder-coated finish
          ensures long-term outdoor durability.
        </p>
      </>
    )
  },

  {
    key: 'all-in-one',
    title: 'All-in-One Solar Panel Housing',
    images: ['/images/specialization/all-in-one-housing.jpg'],
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>High-strength MS construction</li>
          <li>Weatherproof & anti-theft design</li>
          <li>Efficient heat dissipation</li>
          <li>Low maintenance</li>
        </ul>
      </>
    )
  },

  {
    key: 'lens',
    title: 'Polycarbonate Lens',
    images: ['/images/specialization/polycarbonate-lens.jpg'],
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>High impact resistance</li>
          <li>90–95% light transmission</li>
          <li>UV & weather resistant</li>
          <li>Long service life</li>
        </ul>
      </>
    )
  },

  {
    key: 'wiring',
    title: 'Electrical Wiring & Cables',
    images: ['/images/specialization/wiring-cables.jpg'],
    content: (
      <>
        <p>
          High-quality copper/aluminium wiring with PVC/XLPE insulation for safe and reliable
          power transmission.
        </p>
      </>
    )
  },

  {
    key: 'jbolts',
    title: 'J-Bolts, Nuts & Fasteners',
    images: ['/images/specialization/j-bolts.jpg'],
    content: (
      <>
        <p>
          Hot-dip galvanized J-bolts and fasteners ensure strong foundation fixing and
          structural safety.
        </p>
      </>
    )
  },

  {
    key: 'installation',
    title: 'Installation & AMC',
    images: ['/images/specialization/installation.jpg'],
    content: (
      <>
        <p>
          Complete installation, commissioning, and AMC services including panel cleaning,
          battery health checks, and system maintenance.
        </p>
      </>
    )
  }
]

export default function Specialization() {
  const [activeKey, setActiveKey] = useState(sections[0].key)
  const tabRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateArrows = () => {
    const el = tabRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 0)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
  }

  useEffect(() => {
    updateArrows()
  }, [])

  const scrollTabs = dir => {
    tabRef.current.scrollBy({ left: dir * 240, behavior: 'smooth' })
    setTimeout(updateArrows, 300)
  }

  const active = sections.find(s => s.key === activeKey)

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold text-center mb-8">
          Solar Street Light Specialization – KYARR INCORP
        </h1>

        {/* DESKTOP TABS WITH ARROWS */}
        <div className="hidden md:flex items-center gap-3 mb-6 group">
          <button
            onClick={() => scrollTabs(-1)}
            disabled={!canLeft}
            className={`p-2 rounded-full border bg-white transition
              ${canLeft ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}
            `}
          >
            <span className="block transition-transform duration-300 group-hover:-translate-x-1 group-hover:scale-110">◀</span>
          </button>

          <div
            ref={tabRef}
            onScroll={updateArrows}
            className="flex gap-3 overflow-x-auto scrollbar-hide"
          >
            {sections.map(s => (
              <button
                key={s.key}
                onClick={() => setActiveKey(s.key)}
                className={`px-4 py-2 whitespace-nowrap rounded-full border transition
                  ${activeKey === s.key ? 'bg-kyarrBlue text-white' : 'bg-white hover:bg-gray-100'}
                `}
              >
                {s.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTabs(1)}
            disabled={!canRight}
            className={`p-2 rounded-full border bg-white transition
              ${canRight ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}
            `}
          >
            <span className="block transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">▶</span>
          </button>
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-xl shadow p-6 leading-7 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">{active.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {active.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={active.title}
                className="w-full h-60 object-cover rounded"
              />
            ))}
          </div>

          {active.content}
        </div>

      </div>
    </div>
  )
}
