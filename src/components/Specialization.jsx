import { useState } from 'react'

const sections = [
  {
    key: 'solar-panels',
    title: 'Solar Panels (Mono PERC)',
    content: (
      <>
        <p>
          Our company supplies and installs high-quality <strong>Monocrystalline Solar Panels</strong>
          with advanced <strong>Mono PERC (Passivated Emitter and Rear Cell)</strong> technology for
          solar street lights, high mast lights, and solar CCTV systems. These panels are carefully
          selected to deliver high efficiency, stable performance, and long-term reliability in all
          weather conditions.
        </p>

        <p className="mt-3">
          Mono PERC technology enhances light absorption and improves electrical performance, ensuring
          maximum power generation even under low sunlight and high temperature conditions.
        </p>

        <h4 className="font-semibold mt-4">Technical Features & Specifications</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Mono PERC cell technology for higher power output</li>
          <li>High efficiency panels with superior energy conversion</li>
          <li>High open circuit voltage (Voc) for system stability</li>
          <li>Optimized operating (closed circuit) voltage</li>
          <li>Low temperature coefficient</li>
          <li>Low degradation rate</li>
          <li>Expected lifespan: 25+ years</li>
        </ul>

        <h4 className="font-semibold mt-4">Why We Use Monocrystalline Panels</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Reliable power for night-long lighting operation</li>
          <li>Ideal for government, highway, and industrial projects</li>
          <li>High durability with low maintenance</li>
        </ul>
      </>
    )
  },

  {
    key: 'controller',
    title: 'Solar Charge Controller (MPPT / PWM)',
    content: (
      <>
        <p>
          Our company supplies and installs advanced <strong>MPPT and PWM solar charge controllers</strong>
          that manage the complete operation of solar lighting systems. The controller plays a critical
          role in charging the battery, controlling discharge, and ensuring stable power to LED luminaires.
        </p>

        <h4 className="font-semibold mt-4">Advanced Features</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>MPPT & PWM technology for efficient energy management</li>
          <li>Perfect battery charging control (prevents overcharging)</li>
          <li>Efficient discharge control for continuous night lighting</li>
          <li>Automatic dusk-to-dawn ON / OFF</li>
          <li>Automatic voltage & wattage control</li>
          <li>Advanced dimming configuration</li>
        </ul>

        <h4 className="font-semibold mt-4">What is MPPT?</h4>
        <p>
          MPPT (Maximum Power Point Tracking) continuously tracks the optimal voltage of the solar panel
          and converts it efficiently to the required battery voltage, delivering
          <strong> 20–30% higher energy output</strong> compared to PWM controllers.
        </p>

        <p className="mt-3 italic">
          Our controller intelligently analyzes battery health and site conditions and adjusts lighting
          output to ensure uninterrupted operation throughout the night.
        </p>
      </>
    )
  },

  {
    key: 'battery',
    title: 'Battery System (LiFePO4)',
    content: (
      <>
        <p>
          We supply and install high-quality <strong>LiFePO4 (Lithium Iron Phosphate) batteries</strong>
          for solar street lights, high mast lights, and solar CCTV systems. These batteries are known
          for excellent safety, stability, and long service life.
        </p>

        <h4 className="font-semibold mt-4">Key Features & Benefits</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>3,000–5,000+ charge/discharge cycles</li>
          <li>5–10+ years lifespan in daily solar use</li>
          <li>80–100% usable depth of discharge</li>
          <li>High efficiency (90–98%)</li>
          <li>Low self-discharge (2–3% per month)</li>
          <li>Wide temperature operating range</li>
        </ul>

        <p className="mt-3">
          Batteries are installed in shaded locations inside IP67 enclosures to reduce heat stress
          and significantly extend battery lifespan.
        </p>
      </>
    )
  },

  {
    key: 'battery-box',
    title: 'Battery Box (IP67)',
    content: (
      <>
        <p>
          We supply <strong>IP67 certified battery boxes</strong> designed to protect batteries from
          rain, dust, heat, corrosion, and environmental exposure.
        </p>

        <h4 className="font-semibold mt-4">Battery Box Types</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>HDPE:</strong> Lightweight, UV resistant, corrosion-free</li>
          <li><strong>MS Powder Coated:</strong> Strong, anti-rust, tamper-proof</li>
          <li><strong>SS (304 / 316):</strong> Ideal for coastal & industrial environments</li>
        </ul>
      </>
    )
  },

  {
    key: 'pcb',
    title: 'PCB Board',
    content: (
      <>
        <p>
          We use high-quality <strong>aluminium PCB boards</strong> specifically designed for solar LED
          street lighting applications to ensure excellent heat dissipation and electrical stability.
        </p>

        <h4 className="font-semibold mt-4">PCB Specifications</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Recommended thickness: <strong>1.6 mm – 2.0 mm</strong></li>
          <li>Efficient heat dissipation</li>
          <li>Prevents PCB bending or warping</li>
          <li>Improves LED lifespan (50,000+ hours)</li>
          <li>Stable performance in harsh outdoor conditions</li>
        </ul>
      </>
    )
  },

  {
    key: 'led-housing',
    title: 'LED Housing & All-in-One Housing',
    content: (
      <>
        <p>
          We supply LED luminaires with <strong>die-cast aluminium housing</strong> designed for outdoor
          solar street lighting applications. The housing ensures protection, heat dissipation, and
          long service life.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>IP65 / IP66 weatherproof rating</li>
          <li>Powder-coated, corrosion-resistant finish</li>
          <li>Efficient heat dissipation design</li>
          <li>UV resistant and fade-proof</li>
        </ul>

        <p className="mt-3">
          For all-in-one solar street lights, we use <strong>high-strength MS housing</strong> with
          powder coating, anti-theft design, and easy maintenance layout.
        </p>
      </>
    )
  },

  {
    key: 'lens',
    title: 'Polycarbonate Lens',
    content: (
      <>
        <p>
          Polycarbonate lenses play a critical role in protecting LED modules and ensuring efficient
          light distribution in solar street lights.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>High impact resistance and shatter-proof</li>
          <li>90–95% light transmission</li>
          <li>UV stabilized – prevents yellowing</li>
          <li>Custom beam angles for road & pathway lighting</li>
          <li>Long service life with minimal maintenance</li>
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
          We use high-quality electrical wiring, cables, J-bolts, nuts, and fasteners to ensure safe,
          stable, and long-lasting installations.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Copper / aluminium cables with PVC / XLPE insulation</li>
          <li>Weather & UV resistant wiring</li>
          <li>Proper earthing and electrical safety compliance</li>
          <li>Hot-dip galvanized J-bolts & fasteners</li>
          <li>Strong foundation fixing for wind resistance</li>
        </ul>
      </>
    )
  },

  {
    key: 'installation',
    title: 'Installation, Commissioning & AMC',
    content: (
      <>
        <p>
          We undertake complete <strong>installation, commissioning, and AMC services</strong> for
          solar street lights, high mast lights, and solar CCTV systems.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Site inspection and system planning</li>
          <li>Panel mounting, alignment & wiring</li>
          <li>Battery, controller & luminaire installation</li>
          <li>System testing and commissioning</li>
          <li>Periodic panel cleaning and maintenance</li>
          <li>Government O&M contracts with dedicated staff</li>
        </ul>
      </>
    )
  }
]

export default function Specialization() {
  const [activeTab, setActiveTab] = useState(sections[0].key)
  const [openAccordion, setOpenAccordion] = useState(null)

  const activeContent = sections.find(s => s.key === activeTab)

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Our Specialization
        </h1>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
         <div className="hidden md:flex items-center gap-2 mb-8">
  
  {/* Left Arrow */}
  <button
  onClick={scrollLeft}
  className="group p-2 rounded-full border bg-white hover:bg-gray-100 transition
             disabled:opacity-40 disabled:cursor-not-allowed"
  aria-label="Scroll left"
>
  <span
    className="block transform transition-transform duration-300
               group-hover:-translate-x-1"
  >
    ◀
  </span>
</button>


  {/* Tabs */}
  <div
    ref={tabScrollRef}
    className="flex gap-3 overflow-x-auto scrollbar-hide"
  >
    {sections.map(sec => (
      <button
        key={sec.key}
        onClick={() => setActiveTab(sec.key)}
        className={`px-4 py-2 whitespace-nowrap rounded-full border transition
          ${
            activeTab === sec.key
              ? 'bg-kyarrBlue text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
      >
        {sec.title}
      </button>
    ))}
  </div>

  {/* Right Arrow */}
  <button
  onClick={scrollRight}
  className="group p-2 rounded-full border bg-white hover:bg-gray-100 transition
             disabled:opacity-40 disabled:cursor-not-allowed"
  aria-label="Scroll right"
>
  <span
    className="block transform transition-transform duration-300
               group-hover:translate-x-1"
  >
    ▶
  </span>
</button>


</div>


          <div className="bg-white rounded-xl shadow p-6 leading-7 text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              {activeContent.title}
            </h2>
            {activeContent.content}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {sections.map(sec => (
            <div key={sec.key} className="border rounded-lg bg-white shadow">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === sec.key ? null : sec.key)
                }
                className="w-full flex justify-between items-center px-4 py-3 font-semibold"
              >
                {sec.title}
                <span>{openAccordion === sec.key ? '−' : '+'}</span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500
                  ${openAccordion === sec.key ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-4 pb-4 leading-7 text-gray-700">
                  {sec.content}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
