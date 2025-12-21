import { useState } from 'react'

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
          <li>High Efficiency Panels with superior energy conversion</li>
          <li>High Open Circuit Voltage (Voc) for system stability</li>
          <li>Optimized Operating (Closed Circuit) Voltage</li>
          <li>Low Temperature Co-efficient</li>
          <li>Low Degradation Rate</li>
          <li>Expected Lifespan: 25+ years performance</li>
        </ul>

        <h3 className="font-semibold mt-4">Key Features :</h3>
        <ul className="list-disc ml-6">
          <li>High efficiency and maximum power generation</li>
          <li>Better performance in hot, cloudy, and low-light conditions</li>
          <li>Compact size with higher wattage output</li>
          <li>Consistent and reliable energy supply</li>
          <li>Long service life with minimal maintenance</li>
        </ul>

        <h3 className="font-semibold mt-4">Our Commitment :</h3>
        <p>
          By providing tested, certified Mono PERC monocrystalline solar panels, our company
          ensures efficient energy generation, long service life, and dependable solar
          lighting solutions for all projects.
        </p>
      </>
    )
  },

  {
    key: 'controller',
    title: 'Solar Charge Controller (Advanced Technology)',
    images: ['/images/specialization/solar-controller.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies and installs advanced solar charge controllers (MPPT and PWM)
          that manage the complete operation of the solar lighting system. The controller
          plays a key role in charging the battery, controlling discharge, and ensuring a
          stable power supply to the LED luminaire.
        </p>

        <h3 className="font-semibold mt-4">Advanced Features We Provide :</h3>
        <ul className="list-disc ml-6">
          <li>MPPT (Maximum Power Point Tracking) and PWM Technology</li>
          <li>Advanced technology controller for smooth system operation</li>
          <li>Perfect battery charging control (prevents overcharging)</li>
          <li>Efficient discharging performance</li>
          <li>Automatic ON/OFF control (dusk-to-dawn)</li>
          <li>Automatic voltage control</li>
          <li>Advanced wattage setting options</li>
        </ul>

        <h3 className="font-semibold mt-4">What is MPPT?</h3>
        <p>
          MPPT (Maximum Power Point Tracking) continuously tracks the optimal operating
          voltage of the solar panel and converts this power to the required battery voltage,
          resulting in 20–30% higher energy output compared to PWM controllers.
        </p>

        <h3 className="font-semibold mt-4">Our Assurance :</h3>
        <p>
          Our MPPT controller intelligently analyzes environmental conditions at the
          customer location and adjusts light output to ensure uninterrupted lighting
          throughout the night.
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
          Our company supplies and installs high-quality LiFePO4 batteries for solar street
          lights, high mast lights, and solar CCTV systems. These batteries use Lithium Iron
          Phosphate chemistry, making them stable, safe, and efficient.
        </p>

        <h3 className="font-semibold mt-4">Key Features & Benefits :</h3>
        <ul className="list-disc ml-6">
          <li>3,000–5,000+ charge/discharge cycles</li>
          <li>5–10+ years lifespan</li>
          <li>Excellent safety & thermal stability</li>
          <li>80–100% usable depth of discharge</li>
          <li>High efficiency (90–98%)</li>
          <li>Low self-discharge</li>
          <li>Wide temperature performance</li>
        </ul>

        <h3 className="font-semibold mt-4">Our Assurance :</h3>
        <p>
          By installing batteries in cool, shaded, IP67-rated enclosures, we ensure long
          battery life and reliable night-long power backup.
        </p>
      </>
    )
  },

  {
    key: 'battery-box',
    title: 'Battery Box (IP67 Certified)',
    images: ['/images/specialization/battery-box.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies and installs IP67 certified battery boxes designed to protect
          batteries from rain, dust, heat, and environmental damage.
        </p>

        <h3 className="font-semibold mt-4">Battery Box Types :</h3>
        <ul className="list-disc ml-6">
          <li>HDPE Battery Box – lightweight, rust-free, UV resistant</li>
          <li>MS Powder Coated Battery Box – strong and tamper-proof</li>
          <li>SS Battery Box (304 / 316) – ideal for coastal environments</li>
        </ul>

        <h3 className="font-semibold mt-4">Our Assurance :</h3>
        <p>
          By providing corrosion-resistant IP67 battery enclosures, we ensure maximum
          safety, durability, and battery lifespan.
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
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies high-quality LED luminaires using 5050 and 3030 LED chips
          designed for solar street lighting and outdoor applications.
        </p>

        <h3 className="font-semibold mt-4">Key Features :</h3>
        <ul className="list-disc ml-6">
          <li>High lumen output with low power consumption</li>
          <li>Uniform light distribution</li>
          <li>Up to 50,000 hours LED lifespan</li>
          <li>Weather-resistant outdoor housing</li>
        </ul>

        <h3 className="font-semibold mt-4">Our Assurance :</h3>
        <p>
          We use reputed LED chip brands such as OSRAM, CREE, Philips Lumileds, and Bridgelux
          to ensure brightness, efficiency, and long service life.
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
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company uses high-quality aluminium PCB boards designed for excellent heat
          dissipation and electrical stability.
        </p>

        <h3 className="font-semibold mt-4">Recommended Thickness :</h3>
        <ul className="list-disc ml-6">
          <li>1.6 mm – 2.0 mm aluminium PCB</li>
        </ul>

        <p className="mt-3">
          This thickness prevents PCB warping, improves LED life (50,000+ hours), and
          ensures stable performance in harsh outdoor environments.
        </p>
      </>
    )
  },

  {
    key: 'pole-mounting',
    title: 'Pole & Mounting Structure (Galvanized – Arm Type)',
    images: ['/images/specialization/pole-mounting.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies and installs arm-type hot-dip galvanized poles for solar
          street lights and high mast lighting systems.
        </p>

        <h3 className="font-semibold mt-4">Pole Types :</h3>
        <ul className="list-disc ml-6">
          <li>Round poles</li>
          <li>Octagonal poles</li>
        </ul>

        <h3 className="font-semibold mt-4">Our Assurance :</h3>
        <p>
          By using galvanized poles, we ensure rust-free, strong, and long-lasting support
          structures.
        </p>
      </>
    )
  },

  {
    key: 'led-housing',
    title: 'LED Housing',
    images: ['/images/specialization/led-housing.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our LED luminaires are supplied with alloyed aluminium housing designed to protect
          internal components and ensure long-term outdoor performance.
        </p>

        <h3 className="font-semibold mt-4">Housing Specifications :</h3>
        <ul className="list-disc ml-6">
          <li>Die-cast aluminium</li>
          <li>IP65 / IP66 protection</li>
          <li>Powder-coated surface finish</li>
        </ul>
      </>
    )
  },

  {
    key: 'all-in-one-housing',
    title: 'All-in-One Solar Panel Housing',
    images: ['/images/specialization/all-in-one-housing.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Key Special Features :</h3>
        <ul className="list-disc ml-6">
          <li>High-strength mild steel construction</li>
          <li>Powder-coated surface protection</li>
          <li>Weatherproof & dust-resistant design</li>
          <li>Efficient heat dissipation</li>
          <li>Secure and anti-theft construction</li>
          <li>Easy installation & maintenance</li>
        </ul>
      </>
    )
  },

  {
    key: 'polycarbonate-lens',
    title: 'Polycarbonate Lens',
    images: ['/images/specialization/polycarbonate-lens.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Importance of Polycarbonate Lens :</h3>
        <p>
          Polycarbonate lenses protect the LED module and control light distribution in solar
          street lights.
        </p>

        <ul className="list-disc ml-6 mt-3">
          <li>High impact resistance</li>
          <li>90–95% light transmission</li>
          <li>UV and weather resistance</li>
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
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies and installs high-quality copper and aluminium wiring with
          weather-resistant insulation.
        </p>
      </>
    )
  },

  {
    key: 'j-bolts',
    title: 'J-Bolts, Nuts & Fasteners',
    images: ['/images/specialization/j-bolts.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          We supply hot-dip galvanized J-bolts, nuts, and fasteners for strong and safe pole
          foundation fixing.
        </p>
      </>
    )
  },

  {
    key: 'installation-amc',
    title: 'Installation & AMC',
    images: ['/images/specialization/installation.jpg'],
    content: (
      <>
        <h3 className="font-semibold">Installation & Commissioning :</h3>
        <p>
          We undertake complete installation and commissioning of solar street lights and
          high mast lighting systems.
        </p>

        <h3 className="font-semibold mt-4">AMC – Annual Maintenance Contract :</h3>
        <p>
          We provide AMC services including panel cleaning, battery health checks, and system
          performance monitoring.
        </p>
      </>
    )
  }
]

export default function Specialization() {
  const [activeKey, setActiveKey] = useState(sections[0].key)
  const active = sections.find(s => s.key === activeKey)

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Solar Street Light Specialization – KYARR INCORP
        </h1>

        {/* Desktop Tabs */}
        <div className="hidden md:flex gap-3 overflow-x-auto mb-6">
          {sections.map(s => (
            <button
              key={s.key}
              onClick={() => setActiveKey(s.key)}
              className={`px-4 py-2 whitespace-nowrap rounded-full border
                ${activeKey === s.key ? 'bg-kyarrBlue text-white' : 'bg-white'}
              `}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Content */}
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
