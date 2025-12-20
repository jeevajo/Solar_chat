import { useState } from 'react'

export default function Specialization() {
  const tabs = [
    {
      key: 'solar-panels',
      title: 'Solar Panels',
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
            Mono PERC technology enhances light absorption and improves electrical performance,
            ensuring maximum power generation even under low sunlight and high temperature conditions.
          </p>

          <h4 className="font-semibold mt-4">Technical Features & Specifications</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Mono PERC cell technology for higher power output</li>
            <li>High efficiency panels with superior energy conversion</li>
            <li>High open circuit voltage (Voc) for system stability</li>
            <li>Optimized operating voltage for continuous night operation</li>
            <li>Low temperature coefficient for hot and cold climates</li>
            <li>Low degradation rate for long-term consistency</li>
            <li>Expected lifespan: 25+ years</li>
          </ul>

          <h4 className="font-semibold mt-4">Why We Use Monocrystalline Panels</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Reliable power for night-long lighting operation</li>
            <li>Ideal for government, highway, and industrial projects</li>
            <li>High durability with low maintenance requirement</li>
          </ul>

          <p className="mt-3">
            By providing tested and certified Mono PERC solar panels, we ensure efficient energy
            generation and dependable solar lighting solutions for all projects.
          </p>
        </>
      )
    },

    {
      key: 'controller',
      title: 'Solar Charge Controller',
      content: (
        <>
          <p>
            Our company supplies and installs advanced <strong>MPPT and PWM solar charge controllers</strong>
            that manage the complete operation of solar lighting systems. The controller plays a key role
            in battery charging, discharging control, and stable power delivery to LED luminaires.
          </p>

          <h4 className="font-semibold mt-4">Advanced Features</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>MPPT & PWM technology for efficient energy management</li>
            <li>Perfect battery charging control (prevents overcharging)</li>
            <li>Efficient discharge control for continuous night lighting</li>
            <li>Automatic ON/OFF (dusk-to-dawn operation)</li>
            <li>Automatic voltage control for safety and stability</li>
            <li>Advanced wattage and dimming configuration</li>
          </ul>

          <h4 className="font-semibold mt-4">What is MPPT?</h4>
          <p>
            MPPT (Maximum Power Point Tracking) continuously tracks the optimal voltage of the solar
            panel and converts it efficiently to the required battery voltage, resulting in
            <strong> 20–30% higher energy output</strong> compared to PWM controllers.
          </p>

          <h4 className="font-semibold mt-4">Our Assurance</h4>
          <p>
            Our MPPT controller intelligently analyzes battery life and site conditions and adjusts
            lighting output to ensure uninterrupted lighting throughout the night—even with reduced
            battery capacity.
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
            for solar street lights, high mast lights, and solar CCTV systems.
          </p>

          <h4 className="font-semibold mt-4">Key Features & Benefits</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>3,000–5,000+ charge/discharge cycles</li>
            <li>5–10+ years lifespan in daily solar use</li>
            <li>80–100% usable depth of discharge</li>
            <li>High efficiency (90–98%)</li>
            <li>Low self-discharge (2–3% per month)</li>
            <li>Wide temperature operating range</li>
            <li>Compact and lightweight design</li>
          </ul>

          <p className="mt-3">
            Batteries are installed in shaded locations inside IP67 enclosures to reduce heat stress
            and significantly extend battery life.
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
            rain, dust, heat, corrosion, and environmental damage.
          </p>

          <h4 className="font-semibold mt-4">Battery Box Types</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>HDPE:</strong> Lightweight, corrosion-free, UV resistant</li>
            <li><strong>MS Powder Coated:</strong> Strong, anti-rust, tamper-proof</li>
            <li><strong>SS (304/316):</strong> Best for coastal & industrial environments</li>
          </ul>

          <p className="mt-3">
            These enclosures improve battery performance, safety, and long-term reliability.
          </p>
        </>
      )
    },

    {
      key: 'led',
      title: 'LED Luminaire',
      content: (
        <>
          <p>
            We supply high-performance LED luminaires using <strong>5050 and 3030 LED chips</strong>,
            suitable for solar street lighting and outdoor applications.
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Up to 50,000 hours LED lifespan</li>
            <li>High lumen output with low power consumption</li>
            <li>Uniform light distribution with minimal glare</li>
            <li>Weather-resistant outdoor housing</li>
          </ul>

          <p className="mt-3">
            We use reputed LED brands such as OSRAM, CREE, Philips Lumileds, and Bridgelux to ensure
            brightness, efficiency, and long service life.
          </p>
        </>
      )
    },

    {
      key: 'structure',
      title: 'Poles & Installation',
      content: (
        <>
          <p>
            We supply and install <strong>hot-dip galvanized arm-type poles</strong> for solar street
            lights and high mast lighting systems.
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Round and octagonal pole designs</li>
            <li>Rust-proof and corrosion-resistant</li>
            <li>Designed to withstand wind and environmental stress</li>
          </ul>

          <p className="mt-3">
            We also undertake complete installation, commissioning, and AMC services, including
            government operation & maintenance contracts.
          </p>
        </>
      )
    }
  ]

  const [active, setActive] = useState(tabs[0].key)
  const current = tabs.find(t => t.key === active)

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Our Specialization
        </h1>

        <div className="flex gap-3 overflow-x-auto mb-8">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-4 py-2 whitespace-nowrap rounded-full border transition
                ${
                  active === tab.key
                    ? 'bg-kyarrBlue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow p-6 leading-7 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">{current.title}</h2>
          {current.content}
        </div>
      </div>
    </div>
  )
}
