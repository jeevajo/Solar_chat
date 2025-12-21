import { useState, useRef, useEffect } from 'react'

const sections = [
  {
    key: 'solar-panels',
    title: 'Solar Panels',
    images: [
      '/images/specialization/solar-panels/1.jpg',
      '/images/specialization/solar-panels/2.jpg'
    ],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies and installs high-quality Monocrystalline Solar Panels with advanced Mono PERC cell technology for solar street lights, high mast lights, and solar CCTV systems. These panels are carefully selected to deliver high efficiency, stable performance, and long-term reliability in all weather conditions.
        </p>
        <p>
          Mono PERC (Passivated Emitter and Rear Cell) technology enhances light absorption and improves electrical performance, ensuring maximum power generation even under low sunlight and high temperature conditions.
        </p>

        <h3 className="font-semibold mt-4">Technical Features & Specifications :</h3>
        <ul className="list-disc ml-6">
          <li>Mono PERC Cell Technology for higher power output</li>
          <li>High Efficiency Panels with superior energy conversion</li>
          <li>High Open Circuit Voltage (Voc) for system stability</li>
          <li>Optimized Operating (Closed Circuit) Voltage for continuous night operation</li>
          <li>Low Temperature Co-efficient for better performance in hot and cold climates</li>
          <li>Low Degradation Rate for long-term energy consistency</li>
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

        <h3 className="font-semibold mt-4">Why We Use Monocrystalline Panels :</h3>
        <ul className="list-disc ml-6">
          <li>Reliable power for night-long lighting operation</li>
          <li>Ideal for government, highway, and industrial projects</li>
          <li>High durability and low maintenance requirement</li>
          <li>Ensures uninterrupted operation of solar street lights and CCTV systems</li>
        </ul>

        <h3 className="font-semibold mt-4">Our Commitment :</h3>
        <p>
          By providing tested, certified Mono PERC monocrystalline solar panels, our company ensures efficient energy generation, long service life, and dependable solar lighting solutions for all projects.
        </p>
      </>
    )
  },

  {
    key: 'controller',
    title: 'Solar Charge Controller (Advanced Technology)',
    images: [
      '/images/specialization/controller-mppt/1.jpg',
      '/images/specialization/controller-mppt/2.jpg'
    ],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies and installs advanced solar charge controllers (MPPT and PWM) that manage the complete operation of the solar lighting system. The controller plays a key role in charging the battery, controlling discharge, and ensuring a stable power supply to the LED luminaire.
        </p>

        <h3 className="font-semibold mt-4">Advanced Features We Provide :</h3>
        <ul className="list-disc ml-6">
          <li>MPPT (Maximum Power Point Tracking) and PWM (Pulse Width Modulation) Technology for efficient energy management</li>
          <li>Advanced Technology Controller for smooth system operation</li>
          <li>Perfect Battery Charging Control, preventing overcharging</li>
          <li>Efficient Discharging Performance for continuous night lighting</li>
          <li>Automatic ON/OFF Control (dusk-to-dawn operation)</li>
          <li>Automatic Voltage Control for system safety and stability</li>
          <li>Advanced Wattage Setting Options based on load requirement</li>
        </ul>

        <h3 className="font-semibold mt-4">What is MPPT?</h3>
        <p>
          MPPT (Maximum Power Point Tracking) is an advanced solar charge controller technology that extracts the maximum possible power from solar panels and efficiently delivers it to the battery or load.
        </p>
        <p>
          Solar panel voltage and current vary with sunlight intensity and temperature. MPPT continuously tracks the optimal operating voltage of the solar panel. It converts this power to the required battery/system voltage with minimum energy loss.
        </p>
        <p>
          This results in 20–30% higher energy output compared to PWM controllers.
        </p>
        <h3 className="font-semibold mt-4">Key Features of MPPT</h3>

<ul className="list-disc ml-6 space-y-2">
  <li>
    <strong>Higher Energy Harvesting Efficiency</strong><br />
    Maximizes power generation even in low-light or cloudy conditions
  </li>

  <li>
    <strong>Fast and Efficient Battery Charging</strong><br />
    Improves charging speed and extends battery life
  </li>

  <li>
    <strong>Wide Voltage Compatibility</strong><br />
    Suitable for 12V / 24V / 36V / 48V solar systems
  </li>

  <li>
    <strong>Reduced Power Loss</strong><br />
    High conversion efficiency with minimal energy wastage
  </li>
</ul>

<h3 className="font-semibold mt-4">Advanced Protection Functions</h3>
<ul className="list-disc ml-6">
  <li>Overcharge protection</li>
  <li>Over-discharge protection</li>
  <li>Short-circuit protection</li>
  <li>Reverse polarity protection</li>
</ul>


        <h3 className="font-semibold mt-4">Our Assurance :</h3>
        <p>
          Our MPPT controller, taking into account the battery’s lifespan and storage capacity, intelligently analyzes the environmental conditions at the installation site (customer location) and adjusts the light output to ensure uninterrupted lighting throughout the night.
        </p>
      </>
    )
  },

  {
    key: 'battery',
    title: 'Battery System (LiFePO4)',
    images: [
      '/images/specialization/battery-lifepo4/1.jpg',
      '/images/specialization/battery-lifepo4/2.jpg'
    ],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies and installs high-quality LiFePO4 batteries for solar street lights, high mast lights, and solar CCTV systems. To ensure long battery life, efficient performance, and reliable night-time operation, we follow proper installation practices.
        </p>

        <h3 className="font-semibold mt-4">What is a LiFePO4 Solar Battery?</h3>
        <p>
          LiFePO4 stands for Lithium Iron Phosphate — a type of lithium-ion battery chemistry used for solar energy storage. These batteries use iron phosphate as the cathode material, making them very stable, safe, and efficient compared to many other battery types.
        </p>

        <h3 className="font-semibold mt-4">Key Features & Benefits</h3>
        <ul className="list-disc ml-6">
          <li>Long Lifespan & Cycle Life (3,000–5,000+ cycles)</li>
          <li>5–10+ years operational life</li>
          <li>Excellent safety and thermal stability</li>
          <li>High usable capacity (80–100% DoD)</li>
          <li>High charge/discharge efficiency (90–98%)</li>
          <li>Low self-discharge (2–3% per month)</li>
          <li>Wide temperature operating range</li>
          <li>Compact & lightweight design</li>
        </ul>

        <h3 className="font-semibold mt-4">Installation Method & Protection :</h3>
        <p>
          Batteries are installed in a cool and shaded location, housed in IP67-rated waterproof enclosures, fully protected from rain, dust, and environmental exposure.
        </p>

        <h3 className="font-semibold mt-4">Our Assurance :</h3>
        <p>
          By installing batteries in cool, protected IP67 enclosures, our company ensures extended battery life, efficient energy storage, and dependable solar lighting operation.
        </p>
      </>
    )
  },

  {
    key: 'battery-box',
    title: 'Battery Box (IP67 Certified)',
    images: [
      '/images/specialization/battery-box/hdpe.jpg',
      '/images/specialization/battery-box/ms.jpg',
      '/images/specialization/battery-box/ss.jpg'
    ],
    content: (
      <>
        <h3 className="font-semibold">Explanation :</h3>
        <p>
          Our company supplies and installs IP67 certified battery boxes specially designed for solar street lights, high mast lights, and solar CCTV systems. These battery boxes protect the battery from environmental damage and ensure safe, long-term operation.
        </p>

        <h3 className="font-semibold mt-4">Battery Box Types</h3>
        <ul className="list-disc ml-6">
          <li>HDPE Battery Box – Weatherproof, UV-resistant, corrosion-free</li>
          <li>MS Powder Coated Battery Box – Strong, durable, tamper-proof</li>
          <li>SS Battery Box – Suitable for coastal and industrial environments</li>
        </ul>

        <h3 className="font-semibold mt-4">Our Assurance :</h3>
        <p>
          By providing high-quality, IP67 certified, corrosion-resistant battery boxes, our company ensures maximum safety, durability, and long battery life for all solar lighting systems.
        </p>
      </>
    )
  },

  {
    key: 'installation-amc',
    title: 'Installation & AMC',
    images: [
      '/images/specialization/installation/1.jpg',
      '/images/specialization/amc/1.jpg'
    ],
    content: (
      <>
        <h3 className="font-semibold">Installation & Commissioning :</h3>
        <p>
          Our company undertakes complete installation and commissioning of solar street lights, high mast lights, and solar CCTV systems. All works are carried out by trained and experienced technicians following standard safety and technical guidelines.
        </p>

        <h3 className="font-semibold mt-4">AMC – Annual Maintenance Contract :</h3>
        <p>
          Our company offers AMC (Annual Maintenance Contract) services to ensure continuous and trouble-free operation of solar lighting systems. AMC services include periodic system inspection, solar panel cleaning, battery health checks, controller and LED performance checks, fault identification, and rectification.
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

        <div className="hidden md:flex items-center gap-3 mb-6 group">
          <button
            onClick={() => scrollTabs(-1)}
            disabled={!canLeft}
            className={`p-2 rounded-full border bg-white transition ${canLeft ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}
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
                className={`px-4 py-2 whitespace-nowrap rounded-full border transition ${activeKey === s.key ? 'bg-kyarrBlue text-white' : 'bg-white hover:bg-gray-100'}`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTabs(1)}
            disabled={!canRight}
            className={`p-2 rounded-full border bg-white transition ${canRight ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}
          >
            <span className="block transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">▶</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6 leading-7 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">{active.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {active.images.map((img, i) => (
              <img key={i} src={img} alt={active.title} className="w-full h-60 object-cover rounded" />
            ))}
          </div>

          {active.content}
        </div>
      </div>
    </div>
  )
}
