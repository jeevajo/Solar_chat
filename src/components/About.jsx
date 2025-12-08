export default function About() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* ===== PAGE TITLE ===== */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            About Kyarr Incorp
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Powering a Brighter Future Through Solar Innovation
          </p>
        </div>

        {/* ===== INTRO SECTION ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kyarr Incorp was established in 2011 and has over 13+ years of
              strong industry experience in solar energy and lighting
              solutions. For the past 15 years, we have been actively involved
              in government contract works and for the last 10+ years, we have
              been specializing in solar street light manufacturing,
              installation, and maintenance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have successfully supplied and installed more than 2,500+
              solar street lights for government projects, private layouts,
              residential houses, gardens, and commercial properties.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              Quick Company Info
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li><b>Company Name:</b> KYARR INCORP</li>
              <li><b>Established:</b> 2011</li>
              <li><b>Phone:</b> +91 9944261439</li>
              <li><b>Email:</b> kyarrincorp@gmail.com</li>
              <li><b>Location:</b> Dindigul, Tamil Nadu</li>
            </ul>
          </div>
        </div>

        {/* ===== OUR JOURNEY & R&D ===== */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Our Journey & Innovation
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            In our early years, we noticed that most failures were not due to
            solar panels, but because of low-quality batteries and incompatible
            solar controllers supplied by different vendors. Even suppliers
            failed to offer proper service due to unknown specifications.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            To solve this industry-wide problem, we invested over 4 years in
            continuous research and development. We identified that by
            accurately measuring solar panel voltage, battery voltage, and
            light-burning voltage, most failures could be eliminated.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Using advanced technology, we successfully developed our own
            intelligent solar controllers.
          </p>
        </div>

        {/* ===== CONTROLLER TECHNOLOGY ===== */}
        <div className="bg-gray-50 p-10 rounded-3xl shadow mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Our Advanced Solar Controller Technology
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✅ Multiple dimmable options</li>
            <li>✅ Remote configuration capability</li>
            <li>✅ On-site adjustment even after 2–3 years</li>
            <li>✅ 16–20 hours backup even at 30–50% battery</li>
            <li>✅ Automatic sunlight-based charging</li>
            <li>✅ Safe operation at 24–26W high voltage</li>
            <li>✅ Automatic discharge dimming</li>
            <li>✅ Full battery life optimization</li>
          </ul>

          <p className="mt-6 text-gray-700 leading-relaxed">
            With this innovation, battery failures under warranty have reduced
            drastically. We confidently provide a 5-year warranty, ensuring
            long-lasting performance and customer satisfaction.
          </p>
        </div>

        {/* ===== PRODUCTS & SERVICES ===== */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Products & Services
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <p>• Solar Street Lights Manufacturing</p>
            <p>• Solar Panels</p>
            <p>• Lithium Battery Packs</p>
            <p>• LED Lights</p>
            <p>• Government Tender & Contract Works</p>
            <p>• Installation & Maintenance Services</p>
            <p>• Battery Assessment & Repacking</p>
            <p>• O&M Monthly Contract Services</p>
            <p>• Supply & Installation of Poles</p>
            <p>• Servicing All Brand Solar Lights</p>
          </div>
        </div>

        {/* ===== GOVERNMENT PROJECTS ===== */}
        <div className="bg-blue-700 text-white p-10 rounded-3xl mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Government Project Expertise
          </h2>

          <p className="leading-relaxed mb-4">
            We accept subcontracting for government projects, including
            roadside solar light installations and long-term maintenance
            contracts.
          </p>

          <p className="leading-relaxed">
            Since roadside solar panels collect dust quickly, we provide
            periodic cleaning, dedicated maintenance staff during warranty,
            and continuous performance monitoring.
          </p>
        </div>

        {/* ===== WHY CHOOSE US ===== */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why Choose Kyarr Incorp?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <p>✅ 13+ Years Experience</p>
            <p>✅ 2500+ Street Lights Installed</p>
            <p>✅ Government Project Expertise</p>
            <p>✅ Advanced In-House Controller Tech</p>
            <p>✅ High Durability & Quality</p>
            <p>✅ Fast & Reliable Service</p>
          </div>
        </div>

        {/* ===== CLOSING STATEMENT ===== */}
        <div className="text-center bg-gray-100 p-10 rounded-3xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            When you choose Kyarr Incorp, your customers receive long-lasting
            performance, government departments get reliable service, and
            your reputation remains strong. We deliver peace of mind through
            quality, innovation, and trust.
          </p>
        </div>

      </div>
    </div>
  );
}
