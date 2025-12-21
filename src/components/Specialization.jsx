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
        Our company supplies and installs high-quality LiFePO4 batteries for solar street lights,
        high mast lights, and solar CCTV systems. To ensure long battery life, efficient performance,
        and reliable night-time operation, we follow proper installation practices.
      </p>

      <h3 className="font-semibold mt-4">What is a LiFePO4 Solar Battery?</h3>
      <p>
        LiFePO4 stands for Lithium Iron Phosphate — a type of lithium ion battery chemistry used
        for solar energy storage. These batteries use iron phosphate as the cathode material,
        making them very stable, safe, and efficient compared to many other battery types.
      </p>

      <h3 className="font-semibold mt-4">Key Features &amp; Benefits</h3>

      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Long Lifespan &amp; Cycle Life</strong><br />
          LiFePO4 batteries typically last 3,000–5,000+ charge/discharge cycles, much higher than
          traditional lead acid batteries. This means they can operate for 5 – 10+ years in daily
          solar use without frequent replacements.
        </li>

        <li>
          <strong>Excellent Safety &amp; Stability</strong><br />
          Their chemistry is thermally stable, with low risk of overheating, fire, or explosion.
          Even under harsh conditions, they remain safe thanks to stable materials and built-in
          protective electronics (BMS).
          <ul className="list-disc ml-6 mt-2">
            <li>Monitors battery parameters – voltage, current, temperature</li>
            <li>Protects the battery – prevents overcharging, over-discharging, short circuits, and overheating</li>
            <li>Balances cells – ensures all individual cells in a battery pack charge and discharge evenly</li>
            <li>Improves lifespan and safety – keeps the battery stable and reliable over time</li>
          </ul>
        </li>

        <li>
          <strong>High Usable Capacity (Depth of Discharge – DoD)</strong><br />
          LiFePO4 batteries can be safely discharged up to 80–100% of their capacity — unlike lead
          acid batteries which are limited to around 50%. This means more usable energy per battery.
        </li>

        <li>
          <strong>High Efficiency</strong><br />
          These batteries have a high charge/discharge efficiency (often 90–98%), so most of the
          stored solar energy is actually usable.
        </li>

        <li>
          <strong>Low Self-Discharge</strong><br />
          They lose very little charge when idle (about 2–3% per month), so stored energy remains
          available even during cloudy or off-season periods.
        </li>

        <li>
          <strong>Wide Temperature Performance</strong><br />
          Works well across a broad range of temperatures — reliable in both hot and cold climates.
        </li>

        <li>
          <strong>Compact &amp; Lightweight</strong><br />
          LiFePO4 batteries are lighter and more compact than lead acid batteries with the same
          capacity, which saves space and reduces installation challenges.
        </li>
      </ul>

      <h3 className="font-semibold mt-4">Specifications We Provide :</h3>
      <ul className="list-disc ml-6">
        <li>Voltage Options: 12V, 24V, and 36V</li>
        <li>Suitable for solar street lighting and surveillance systems</li>
      </ul>

      <h3 className="font-semibold mt-4">Installation Method &amp; Protection :</h3>
      <ul className="list-disc ml-6">
        <li>Batteries are installed in a cool and shaded location, which significantly increases battery lifespan and efficiency</li>
        <li>Proper placement reduces heat stress and internal damage</li>
        <li>Batteries are housed in IP67-rated waterproof enclosures</li>
        <li>Fully protected from rain, dust, and environmental exposure</li>
      </ul>

      <h3 className="font-semibold mt-4">Client Benefits :</h3>
      <ul className="list-disc ml-6">
        <li>Longer battery lifespan due to controlled temperature</li>
        <li>Reliable night-long power backup</li>
        <li>Safe and stable operation in all weather conditions</li>
        <li>Reduced maintenance and replacement cost</li>
      </ul>

      <h3 className="font-semibold mt-4">Our Assurance :</h3>
      <p>
        By installing batteries in cool, protected, IP67 enclosures, our company ensures extended
        battery life, efficient energy storage, and dependable solar lighting operation.
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
        Our company supplies and installs IP67 certified battery boxes specially designed for
        solar street lights, high mast lights, and solar CCTV systems. These battery boxes protect
        the battery from environmental damage and ensure safe, long-term operation.
      </p>

      <h3 className="font-semibold mt-4">Battery Box Details</h3>

      <h4 className="font-semibold mt-3">HDPE Battery Box</h4>
      <ul className="list-disc ml-6">
        <li>Made from High-Density Polyethylene (HDPE)</li>
        <li>Weatherproof &amp; UV-resistant</li>
        <li>Rust-free &amp; corrosion-free</li>
        <li>Lightweight yet strong construction</li>
        <li>Suitable for outdoor solar street light installations</li>
        <li>Long life even in coastal &amp; high-humidity areas</li>
      </ul>

      <h4 className="font-semibold mt-4">MS Powder Coated Battery Box</h4>
      <ul className="list-disc ml-6">
        <li>Fabricated using Mild Steel (MS)</li>
        <li>Anti-rust powder coating for long-term protection</li>
        <li>Strong &amp; durable for heavy-duty applications</li>
        <li>Provides high impact resistance</li>
        <li>Ideal for high mast lights &amp; highway solar projects</li>
        <li>Tamper-proof design for safety</li>
      </ul>

      <h4 className="font-semibold mt-4">SS Battery Box (Stainless Steel)</h4>
      <ul className="list-disc ml-6">
        <li>Made from Stainless Steel (SS 304 / SS 316)</li>
        <li>Excellent corrosion &amp; chemical resistance</li>
        <li>Suitable for coastal, industrial &amp; harsh environments</li>
        <li>High strength with premium finish</li>
        <li>Long service life with minimal maintenance</li>
        <li>Best choice for high-end &amp; government projects</li>
      </ul>

      <h3 className="font-semibold mt-4">Key Features We Provide :</h3>
      <ul className="list-disc ml-6">
        <li>IP67 Certified – completely waterproof and dustproof</li>
        <li>Waterproof construction suitable for outdoor use</li>
        <li>Lightweight design, easy to handle and install</li>
        <li>Strong and durable structure for long service life</li>
      </ul>

      <h3 className="font-semibold mt-4">Additional Advantages :</h3>
      <ul className="list-disc ml-6">
        <li>Protects battery from rain, moisture, heat, and dust</li>
        <li>Prevents corrosion and physical damage</li>
        <li>Improves overall battery performance and lifespan</li>
        <li>Suitable for harsh outdoor and coastal environments</li>
      </ul>

      <h3 className="font-semibold mt-4">Our Assurance :</h3>
      <p>
        By providing high-quality, IP67 certified, corrosion-resistant battery boxes, our company
        ensures maximum safety, durability, and long battery life for all solar lighting systems.
      </p>
    </>
  )
},
      {
  key: 'led-luminaire',
  title: 'LED Luminaire (Solar Street Light)',
  images: [
    '/images/specialization/led-luminaire/1.jpg',
    '/images/specialization/led-luminaire/2.jpg'
  ],
  content: (
    <>
      <h3 className="font-semibold">Explanation :</h3>
      <p>
        Our company supplies and installs high-quality LED luminaires specially designed for
        solar street lighting and outdoor applications. We use advanced 5050 LED and 3050 LED
        chips to ensure high brightness, energy efficiency, and long service life.
      </p>

      <h3 className="font-semibold mt-4">LED Specifications :</h3>
      <ul className="list-disc ml-6">
        <li>LED Type: 3050 SMD LED (also available in 5050)</li>
        <li>LED Lifespan: Up to 50,000 hours</li>
        <li>High lumen output with low power consumption</li>
        <li>Uniform light distribution with minimal glare</li>
      </ul>

      <h3 className="font-semibold mt-4">LED Types We Provide :</h3>
      <ul className="list-disc ml-6">
        <li>
          <strong>5050 LED Chips</strong> – High lumen output, suitable for high-power street lights
          and wide road coverage
        </li>
        <li>
          <strong>3050 LED Chips</strong> – High efficiency with uniform light distribution and low
          power consumption
        </li>
      </ul>

      <h3 className="font-semibold mt-4">Key Features :</h3>
      <ul className="list-disc ml-6">
        <li>High brightness with excellent light spread</li>
        <li>Energy-efficient LEDs for maximum power saving</li>
        <li>Long operating life with low lumen depreciation</li>
        <li>Stable performance with solar charge controller compatibility</li>
      </ul>

      <h3 className="font-semibold mt-4">Housing &amp; Protection :</h3>
      <ul className="list-disc ml-6">
        <li>Weather-resistant outdoor luminaire body</li>
        <li>Designed for continuous night operation</li>
        <li>Suitable for all weather and environmental conditions</li>
      </ul>

      <h3 className="font-semibold mt-4">Client Benefits :</h3>
      <ul className="list-disc ml-6">
        <li>Clear, bright illumination for roads, streets, and open areas</li>
        <li>Reduced energy consumption and maintenance cost</li>
        <li>Reliable lighting performance throughout the year</li>
        <li>Energy-efficient and eco-friendly lighting</li>
        <li>Consistent brightness throughout the night</li>
        <li>Reduced maintenance and replacement cost</li>
        <li>Suitable for streets, highways, and open areas</li>
      </ul>

      <h3 className="font-semibold mt-4">Our Assurance :</h3>
      <p>
        We specialize in providing high-performance LED lighting solutions using internationally
        reputed LED chip brands such as OSRAM, CREE, Philips Lumileds, and Bridgelux. Our lighting
        systems are designed for maximum brightness, energy efficiency, and long service life,
        making them ideal for solar street lights, high mast lighting, highway projects, and
        industrial applications. By providing premium 5050 and 3030 LED-based luminaires, our
        company delivers efficient, durable, and high-performance solar street lighting solutions.
      </p>
    </>
  )
},

    {
  key: 'pcb-board',
  title: 'PCB Board',
  images: [
    '/images/specialization/pcb-board/1.jpg',
    '/images/specialization/pcb-board/2.jpg'
  ],
  content: (
    <>
      <h3 className="font-semibold">Explanation :</h3>
      <p>
        Our company uses and supplies high-quality aluminium PCB boards specially designed for
        solar LED street lighting applications. These PCB boards ensure excellent heat dissipation,
        electrical stability, and long service life of the LED system.
      </p>

      <h3 className="font-semibold mt-4">
        Best PCB Thickness (Industry Standard)
      </h3>

      <p className="mt-2">
        <strong>Recommended Thickness :</strong><br />
        1.6 mm – 2.0 mm Aluminium PCB
      </p>

      <h3 className="font-semibold mt-4">Why this thickness is best</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Handles high LED heat effectively</li>
        <li>Prevents PCB bending or warping</li>
        <li>Improves LED chip life (50,000+ hours)</li>
        <li>Stable performance in harsh outdoor &amp; coastal environments</li>
        <li>Suitable for continuous night operation</li>
      </ul>

      <h3 className="font-semibold mt-6">Power-wise Recommendation</h3>

      <div className="overflow-x-auto mt-3">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Solar Light Power</th>
              <th className="border px-4 py-2 text-left">PCB Type</th>
              <th className="border px-4 py-2 text-left">PCB Thickness</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">20W – 30W</td>
              <td className="border px-4 py-2">Aluminium PCB</td>
              <td className="border px-4 py-2">1.2 – 1.6 mm</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">40W – 60W</td>
              <td className="border px-4 py-2">Aluminium PCB</td>
              <td className="border px-4 py-2">1.6 mm</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">90W – 120W</td>
              <td className="border px-4 py-2">Aluminium PCB</td>
              <td className="border px-4 py-2">1.6 – 2.0 mm</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">High Mast</td>
              <td className="border px-4 py-2">Aluminium PCB</td>
              <td className="border px-4 py-2">2.0 mm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
},
    {
  key: 'pole-mounting',
  title: 'Pole & Mounting Structure (Galvanized – Arm Type)',
  images: [
    '/images/specialization/poles/round.jpg',
    '/images/specialization/poles/octagonal.jpg'
  ],
  content: (
    <>
      <h3 className="font-semibold">Explanation :</h3>
      <p>
        Our company supplies and installs arm-type galvanized poles for solar street lights and
        high mast lighting systems. These poles are designed for high strength, long life, and
        outdoor durability.
      </p>

      <h3 className="font-semibold mt-4">Pole Specifications We Use :</h3>
      <ul className="list-disc ml-6">
        <li>Material: Hot Dip Galvanized Steel</li>
        <li>Rust proof – corrosion resistant</li>
        <li>Long service life, suitable for all weather conditions</li>
      </ul>

      <h3 className="font-semibold mt-4">Pole Types Provided :</h3>
      <ul className="list-disc ml-6">
        <li>Round Poles</li>
        <li>Octagonal Poles</li>
      </ul>

      <h3 className="font-semibold mt-4">Key Features :</h3>
      <ul className="list-disc ml-6">
        <li>Strong arm structure for proper luminaire support</li>
        <li>Withstands wind load and environmental stress</li>
        <li>Maintenance-free and long-lasting finish</li>
        <li>Suitable for streets, highways, and open areas</li>
      </ul>

      <h3 className="font-semibold mt-4">Client Benefits :</h3>
      <ul className="list-disc ml-6">
        <li>No rusting even after long-term outdoor use</li>
        <li>High structural safety and stability</li>
        <li>Clean and professional appearance</li>
      </ul>

      <h3 className="font-semibold mt-4">Our Assurance :</h3>
      <p>
        By using hot-dip galvanized, arm-type round and octagonal poles, our company ensures
        rust-free, strong, and long-lasting support structures for solar lighting projects.
      </p>
    </>
  )
},
      {
  key: 'led-housing',
  title: 'LED Housing',
  images: [
    '/images/specialization/led-housing/1.jpg',
    '/images/specialization/led-housing/2.jpg'
  ],
  content: (
    <>
      <h3 className="font-semibold">Explanation :</h3>
      <p>
        Our company supplies LED luminaires with high-quality outdoor housing, specially designed
        to protect internal components and ensure long-term performance in all weather conditions.
        We supplies LED luminaires with alloyed aluminium housing, specially designed for outdoor
        solar street lighting applications. The housing is coated to provide extra protection,
        durability, and long service life.
      </p>

      <h3 className="font-semibold mt-4">Housing Specifications :</h3>
      <ul className="list-disc ml-6">
        <li>Housing Material: Die-cast Aluminium</li>
        <li>Corrosion Resistant &amp; Rust Proof</li>
        <li>IP Rating: IP65 / IP66 (weatherproof &amp; dustproof)</li>
        <li>Strong and lightweight body</li>
        <li>Heat dissipation design for better LED performance</li>
        <li>Surface Finish: Protective powder coating</li>
      </ul>

      <h3 className="font-semibold mt-4">Protective Features :</h3>
      <ul className="list-disc ml-6">
        <li>Protects LED, PCB, and internal wiring from rain, dust, and moisture</li>
        <li>Prevents overheating and improves LED lifespan</li>
        <li>Suitable for continuous outdoor operation</li>
        <li>Prevents corrosion and surface damage</li>
        <li>Maintains performance in high temperature and outdoor environments</li>
      </ul>

      <h3 className="font-semibold mt-4">Finish &amp; Durability :</h3>
      <ul className="list-disc ml-6">
        <li>Powder-coated surface for long life</li>
        <li>UV resistant and fade-proof</li>
        <li>Withstands high temperature, rain, and wind conditions</li>
      </ul>

      <h3 className="font-semibold mt-4">Our Assurance :</h3>
      <p>
        By providing robust, weather-resistant aluminium housing, our company ensures safe
        operation, long service life, and reliable performance of solar LED street lights.
      </p>
    </>
  )
},
      {
  key: 'all-in-one-housing',
  title: 'All In One Solar Panel Housing',
  images: [
    '/images/specialization/all-in-one-housing/1.jpg',
    '/images/specialization/all-in-one-housing/2.jpg'
  ],
  content: (
    <>
      <h3 className="font-semibold">Key Special Features :</h3>

      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>High-Strength Mild Steel Construction</strong><br />
          Manufactured using heavy-gauge MS sheets. Provides excellent mechanical strength and
          durability. Suitable for high-wind and harsh outdoor conditions.
        </li>

        <li>
          <strong>Powder-Coated Surface Protection</strong><br />
          High-quality electrostatic powder coating. Prevents rust, corrosion, and surface damage.
          Ensures long service life even in humid and industrial areas.
        </li>

        <li>
          <strong>Weatherproof &amp; Dust-Resistant Design</strong><br />
          Designed to meet IP65 / IP66 protection standards. Protects internal components from rain,
          dust, and moisture.
        </li>

        <li>
          <strong>Efficient Heat Dissipation</strong><br />
          MS housing acts as a natural heat sink. Helps maintain optimal operating temperature for
          LEDs and electronics.
        </li>

        <li>
          <strong>Secure &amp; Anti-Theft Construction</strong><br />
          Lockable design with tamper-proof fasteners. Protects battery and controller from theft
          and vandalism.
        </li>

        <li>
          <strong>Polycarbonate Lens Compatibility</strong><br />
          Supports UV-stabilized polycarbonate lenses. Ensures uniform, glare-free light distribution.
        </li>

        <li>
          <strong>Easy Installation &amp; Maintenance</strong><br />
          User-friendly internal layout. Quick access for servicing and replacement.
        </li>

        <li>
          <strong>Aesthetic &amp; Professional Finish</strong><br />
          Smooth surface with long-lasting color retention. Enhances visual appeal for public and
          commercial areas.
        </li>

        <li>
          <strong>Long Service Life with Low Maintenance</strong><br />
          Minimal maintenance required. Designed for continuous outdoor operation.
        </li>
      </ul>
    </>
  )
},
      {
  key: 'polycarbonate-lens',
  title: 'Polycarbonate Lens',
  images: [
    '/images/specialization/polycarbonate-lens/1.jpg',
    '/images/specialization/polycarbonate-lens/2.jpg'
  ],
  content: (
    <>
      <h3 className="font-semibold">
        Importance of Polycarbonate Lens in Solar Street Lights
      </h3>
      <p>
        A polycarbonate lens is a critical component in solar street lights, used to protect the
        LED module and control light distribution. It ensures durability, safety, and efficient
        illumination, especially in outdoor environments.
      </p>

      <h3 className="font-semibold mt-4">Why Polycarbonate Lens is Important</h3>
      <ul className="list-disc ml-6">
        <li>
          <strong>High Impact Resistance</strong><br />
          Polycarbonate is extremely strong and shatter-resistant. Protects LEDs from vandalism,
          falling objects, and harsh weather.
        </li>

        <li>
          <strong>Excellent Light Transmission</strong><br />
          Allows 90–95% light transmittance, ensuring bright and efficient lighting. Minimizes
          light loss and improves overall system efficiency.
        </li>

        <li>
          <strong>UV &amp; Weather Resistance</strong><br />
          UV-stabilized material prevents yellowing over time. Performs reliably under sun, rain,
          dust, and high temperatures.
        </li>

        <li>
          <strong>Long Service Life</strong><br />
          Maintains clarity and strength for many years. Reduces maintenance and replacement costs.
        </li>
      </ul>

      <h3 className="font-semibold mt-4">Special Features of Polycarbonate Lens</h3>
      <ul className="list-disc ml-6">
        <li>High optical clarity for uniform and glare-free illumination</li>
        <li>Heat resistant, suitable for high-power LEDs</li>
        <li>Lightweight, reducing overall fixture weight</li>
        <li>Custom beam angles (wide or focused) for road and pathway lighting</li>
        <li>Corrosion-free, ideal for coastal and industrial areas</li>
      </ul>
    </>
  )
},
      {
  key: 'wiring-cables',
  title: 'Electrical Wiring & Cables',
  images: [
    '/images/specialization/wiring/1.jpg',
    '/images/specialization/wiring/2.jpg'
  ],
  content: (
    <>
      <h3 className="font-semibold">Explanation :</h3>
      <p>
        Our company supplies and installs high-quality electrical wiring and cables for all solar
        street light, high mast, and solar CCTV systems. Proper wiring ensures safe power transmission,
        minimal energy loss, and long-term system reliability.
      </p>

      <h3 className="font-semibold mt-4">Wire Specifications We Provide :</h3>
      <ul className="list-disc ml-6">
        <li>Cable Type: Copper / Aluminium conductor cables</li>
        <li>Insulation: PVC / XLPE insulated (as per application)</li>
        <li>Weather resistant &amp; UV protected</li>
        <li>Suitable for outdoor and underground use</li>
      </ul>

      <h3 className="font-semibold mt-4">Safety &amp; Performance Features :</h3>
      <ul className="list-disc ml-6">
        <li>Low power loss and stable current flow</li>
        <li>Heat-resistant insulation for long life</li>
        <li>Secure connections to prevent short circuits</li>
        <li>Proper cable sizing based on system voltage and wattage</li>
      </ul>

      <h3 className="font-semibold mt-4">Installation Standards :</h3>
      <ul className="list-disc ml-6">
        <li>Neat and protected cable routing</li>
        <li>Proper earthing and safety protection</li>
        <li>Compliance with electrical safety norms</li>
      </ul>

      <h3 className="font-semibold mt-4">Client Benefits :</h3>
      <ul className="list-disc ml-6">
        <li>Safe and reliable system operation</li>
        <li>Reduced maintenance and fault issues</li>
        <li>Long-lasting performance in outdoor conditions</li>
      </ul>

      <h3 className="font-semibold mt-4">Our Assurance :</h3>
      <p>
        By providing high-quality copper wiring with weather-resistant insulation, our company
        ensures safe, efficient, and durable electrical connectivity for solar lighting systems.
      </p>
    </>
  )
},
      {
  key: 'jbolts-fasteners',
  title: 'J-Bolts, Nuts & Fasteners',
  images: [
    '/images/specialization/jbolts/1.jpg',
    '/images/specialization/jbolts/2.jpg'
  ],
  content: (
    <>
      <h3 className="font-semibold">Explanation :</h3>
      <p>
        Our company supplies and installs high-quality J-bolts, nuts, and fasteners for fixing solar
        street light poles and mounting structures. These fasteners ensure strong foundation support,
        alignment stability, and long-term safety.
      </p>

      <h3 className="font-semibold mt-4">Specifications We Provide :</h3>
      <ul className="list-disc ml-6">
        <li>J-Bolt Material: High-strength steel</li>
        <li>Finish: Hot Dip Galvanized</li>
        <li>Rust proof &amp; corrosion resistant</li>
        <li>Suitable for outdoor and long-term use</li>
      </ul>

      <h3 className="font-semibold mt-4">Application :</h3>
      <ul className="list-disc ml-6">
        <li>Used for pole foundation fixing</li>
        <li>Provides firm grip and structural stability</li>
        <li>Prevents pole movement due to wind and vibration</li>
      </ul>

      <h3 className="font-semibold mt-4">Key Benefits :</h3>
      <ul className="list-disc ml-6">
        <li>Long service life without rusting</li>
        <li>Strong anchoring and load-bearing capacity</li>
        <li>Low maintenance and high reliability</li>
      </ul>

      <h3 className="font-semibold mt-4">Our Assurance :</h3>
      <p>
        By providing hot-dip galvanized J-bolts, nuts, and fasteners, our company ensures safe,
        stable, and durable installation of solar street lighting systems.
      </p>
    </>
  )
},
      {
  key: 'installation-commissioning',
  title: 'Installation & Commissioning',
  images: [
    '/images/specialization/installation/1.jpg',
    '/images/specialization/installation/2.jpg'
  ],
  content: (
    <>
      <h3 className="font-semibold">Explanation :</h3>
      <p>
        Our company undertakes complete installation and commissioning of solar street lights,
        high mast lights, and solar CCTV systems. All works are carried out by trained and experienced
        technicians following standard safety and technical guidelines.
      </p>

      <h3 className="font-semibold mt-4">Scope of Work :</h3>
      <ul className="list-disc ml-6">
        <li>Site inspection and system planning</li>
        <li>Solar panel mounting and alignment</li>
        <li>Battery, controller, and luminaire installation</li>
        <li>Electrical connections and system testing</li>
        <li>Final commissioning and performance verification</li>
      </ul>

      <h3 className="font-semibold mt-4">Key Benefits :</h3>
      <ul className="list-disc ml-6">
        <li>Proper system functioning from day one</li>
        <li>Safe and neat installation practices</li>
        <li>Optimized performance and longer system life</li>
      </ul>

      <h3 className="font-semibold mt-4">Our Assurance :</h3>
      <p>
        We ensure error-free installation and smooth commissioning for reliable and long-term
        solar lighting operation.
      </p>
    </>
  )
},
      {
  key: 'amc',
  title: 'AMC – Annual Maintenance Contract',
  images: [
    '/images/specialization/amc/1.jpg',
    '/images/specialization/amc/2.jpg'
  ],
  content: (
    <>
      <h3 className="font-semibold">Explanation :</h3>
      <p>
        Our company offers AMC (Annual Maintenance Contract) services to ensure continuous and
        trouble-free operation of solar lighting systems after installation.
      </p>

      <h3 className="font-semibold mt-4">AMC Services Include :</h3>
      <ul className="list-disc ml-6">
        <li>Periodic system inspection</li>
        <li>Cleaning of solar panels</li>
        <li>Battery health check</li>
        <li>Controller and LED performance check</li>
        <li>Fault identification and rectification</li>
      </ul>

      <h3 className="font-semibold mt-4">Benefits of AMC :</h3>
      <ul className="list-disc ml-6">
        <li>Increased system lifespan</li>
        <li>Reduced breakdown and downtime</li>
        <li>Consistent lighting performance throughout the year</li>
        <li>Cost-effective maintenance solution</li>
      </ul>

      <h3 className="font-semibold mt-4">Our Commitment :</h3>
      <p>
        Through our AMC support, we ensure long-term reliability, efficiency, and customer
        satisfaction.
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
