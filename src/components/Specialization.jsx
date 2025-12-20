import { useState } from 'react'

const specializations = [
  {
    key: 'solar-panels',
    title: 'Solar Panels',
    content: (
      <>
        <p className="mb-4">
          We supply and install high-quality <strong>Monocrystalline Solar Panels</strong>
          with advanced <strong>Mono PERC technology</strong> for solar street lights,
          high mast lights, and solar CCTV systems.
        </p>

        <h4 className="font-semibold mt-4">Technical Features</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Mono PERC Cell Technology</li>
          <li>High efficiency & high Voc</li>
          <li>Optimized operating voltage</li>
          <li>Low temperature coefficient</li>
          <li>25+ years expected lifespan</li>
        </ul>

        <h4 className="font-semibold mt-4">Why We Use Monocrystalline Panels</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Reliable night-long operation</li>
          <li>Ideal for government & highway projects</li>
          <li>High durability, low maintenance</li>
        </ul>
      </>
    )
  },

  {
    key: 'controller',
    title: 'Solar Charge Controller',
    content: (
      <>
        <p className="mb-4">
          We supply advanced <strong>MPPT & PWM solar charge controllers</strong> that
          manage charging, discharging, and lighting control automatically.
        </p>

        <h4 className="font-semibold mt-4">Advanced Features</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>MPPT & PWM technology</li>
          <li>Dusk-to-dawn automatic ON/OFF</li>
          <li>Battery overcharge & discharge protection</li>
          <li>20–30% higher energy output with MPPT</li>
        </ul>

        <p className="mt-4 italic text-gray-600">
          Our MPPT controller intelligently adjusts lighting based on battery health
          and environmental conditions.
        </p>
      </>
    )
  },

  {
    key: 'battery',
    title: 'Battery System (LiFePO4)',
    content: (
      <>
        <p className="mb-4">
          We use high-quality <strong>LiFePO4 batteries</strong> for long life,
          safety, and reliable night-time operation.
        </p>

        <h4 className="font-semibold mt-4">Key Benefits</h4>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>3,000–5,000+ charge cycles</li>
          <li>80–100% depth of discharge</li>
          <li>Built-in BMS protection</li>
          <li>IP67 protected installation</li>
        </ul>

        <p className="mt-4">
          Batteries are installed in cool, shaded, waterproof enclosures to
          significantly extend lifespan.
        </p>
      </>
    )
  },

  {
    key: 'battery-box',
    title: 'Battery Box (IP67)',
    content: (
      <>
        <p className="mb-4">
          We provide <strong>IP67 certified battery boxes</strong> for complete
          environmental protection.
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>HDPE, MS Powder Coated & SS variants</li>
          <li>Rust-proof, waterproof & dustproof</li>
          <li>Suitable for coastal & harsh environments</li>
        </ul>
      </>
    )
  },

  {
    key: 'installation',
    title: 'Installation & AMC',
    content: (
      <>
        <p className="mb-4">
          We undertake <strong>end-to-end installation</strong> and provide
          <strong> AMC services</strong> for long-term performance.
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Site inspection & planning</li>
          <li>Panel, battery & luminaire installation</li>
          <li>Monthly / annual maintenance contracts</li>
          <li>Government O&M services</li>
        </ul>
      </>
    )
  }
]

export default function Specialization() {
  const [active, setActive] = useState(specializations[0].key)

  const current = specializations.find(s => s.key === active)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-8">
          Our Specialization
        </h2>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-3 mb-8">
          {specializations.map(s => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`px-4 py-2 whitespace-nowrap rounded-full border transition
                ${
                  active === s.key
                    ? 'bg-kyarrBlue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow p-6 leading-7 text-gray-700">
          <h3 className="text-2xl font-semibold mb-4">{current.title}</h3>
          {current.content}
        </div>

      </div>
    </section>
  )
}
