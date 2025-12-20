import { useState } from 'react'

const tabs = [
  {
    key: 'solar-panels',
    title: 'Solar Panels',
    content: (
      <>
        <p>
          Our company supplies and installs high-quality <strong>Monocrystalline Solar Panels</strong>
          with advanced <strong>Mono PERC technology</strong> for solar street lights, high mast lights,
          and solar CCTV systems. These panels deliver high efficiency, stable performance, and long-term
          reliability in all weather conditions.
        </p>

        <p className="mt-3">
          Mono PERC technology improves light absorption and electrical performance, ensuring maximum
          power generation even under low sunlight and high temperature conditions.
        </p>

        <h4 className="font-semibold mt-4">Technical Features & Specifications</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Mono PERC cell technology for higher power output</li>
          <li>High efficiency and superior energy conversion</li>
          <li>High open circuit voltage (Voc)</li>
          <li>Optimized operating voltage</li>
          <li>Low temperature coefficient</li>
          <li>Low degradation rate</li>
          <li>Expected lifespan: 25+ years</li>
        </ul>

        <h4 className="font-semibold mt-4">Why We Use Monocrystalline Panels</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Reliable power for night-long lighting</li>
          <li>Ideal for government & highway projects</li>
          <li>High durability with low maintenance</li>
        </ul>
      </>
    )
  },

  {
    key: 'controller',
    title: 'Solar Charge Controller',
    content: (
      <>
        <p>
          We supply advanced <strong>MPPT & PWM solar charge controllers</strong> that manage charging,
          discharging, and lighting control automatically.
        </p>

        <h4 className="font-semibold mt-4">Advanced Features</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>MPPT technology delivers 20–30% higher energy output</li>
          <li>Dusk-to-dawn automatic ON / OFF</li>
          <li>Battery overcharge & over-discharge protection</li>
          <li>Automatic voltage & wattage control</li>
          <li>Advanced dimming configuration</li>
        </ul>

        <p className="mt-3 italic">
          Our MPPT controller intelligently adapts to battery health and environmental
          conditions to ensure uninterrupted lighting throughout the night.
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
          We use high-quality <strong>LiFePO4 lithium batteries</strong> for solar lighting systems,
          ensuring long life, safety, and reliable performance.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>3,000–5,000+ charge/discharge cycles</li>
          <li>80–100% usable depth of discharge</li>
          <li>Built-in BMS protection</li>
          <li>High efficiency (90–98%)</li>
          <li>Low self-discharge</li>
        </ul>

        <p className="mt-3">
          Batteries are installed in shaded, IP67-protected enclosures to extend lifespan.
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
          We provide <strong>IP67 certified battery boxes</strong> to protect batteries from rain,
          dust, heat, and corrosion.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>HDPE – lightweight & corrosion-free</li>
          <li>MS powder-coated – strong & tamper-proof</li>
          <li>SS (304/316) – ideal for coastal & industrial areas</li>
        </ul>
      </>
    )
  },

  {
    key: 'led',
    title: 'LED Luminaire',
    content: (
      <>
        <p>
          We supply LED luminaires using <strong>5050 & 3030 LED chips</strong> for solar street lighting.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Up to 50,000 hours lifespan</li>
          <li>High lumen output with low power consumption</li>
          <li>Uniform light distribution</li>
          <li>Weather-resistant housing</li>
        </ul>
      </>
    )
  },

  {
    key: 'installation',
    title: 'Installation & AMC',
    content: (
      <>
        <p>
          We undertake complete <strong>installation, commissioning, and AMC services</strong>
          for solar lighting projects.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Site inspection & system planning</li>
          <li>Professional installation & testing</li>
          <li>Periodic maintenance & panel cleaning</li>
          <li>Government O&M contracts</li>
        </ul>
      </>
    )
  }
]

export default function Specialization() {
  const [activeTab, setActiveTab] = useState(tabs[0].key)
  const [openAccordion, setOpenAccordion] = useState(null)

  const activeContent = tabs.find(t => t.key === activeTab)

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Our Specialization
        </h1>

        {/* ================= DESKTOP TABS ================= */}
        <div className="hidden md:block">
          <div className="flex gap-3 overflow-x-auto mb-8">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 whitespace-nowrap rounded-full border transition
                  ${
                    activeTab === tab.key
                      ? 'bg-kyarrBlue text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow p-6 leading-7 text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              {activeContent.title}
            </h2>
            {activeContent.content}
          </div>
        </div>

        {/* ================= MOBILE ACCORDION ================= */}
        <div className="md:hidden space-y-4">
          {tabs.map(tab => (
            <div
              key={tab.key}
              className="border rounded-lg bg-white shadow"
            >
              <button
                onClick={() =>
                  setOpenAccordion(
                    openAccordion === tab.key ? null : tab.key
                  )
                }
                className="w-full flex justify-between items-center px-4 py-3 font-semibold"
              >
                {tab.title}
                <span>{openAccordion === tab.key ? '−' : '+'}</span>
              </button>

              {openAccordion === tab.key && (
                <div className="px-4 pb-4 text-gray-700 leading-7">
                  {tab.content}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
