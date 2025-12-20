import { Link } from 'react-router-dom'
import HeroSlider from './HeroSlider'
import WhatsAppButton from './WhatsAppButton'

export default function Home() {
  return (
    <div className="pt-24">
      <HeroSlider />
      <WhatsAppButton />

      {/* ================= FEATURED MODELS ================= */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Featured Models</h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* ===== Product 1 ===== */}
            <div className="bg-white p-4 rounded shadow transition hover:shadow-xl">
              <Link
                to="/products/kyarr-30w-33"
                className="group relative block overflow-hidden rounded"
              >
                {/* Image */}
                <img
                  src="/images/product-1.png"
                  alt="KYARR 30W Solar Street Light"
                  className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

                {/* View Details Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-semibold tracking-wide">
                    View Details
                  </span>
                </div>
              </Link>

              <h3 className="mt-3 font-semibold">KYARR 30W Solar Street Light</h3>
              <p className="text-gray-600 text-sm mt-1">
                30W LED • 80W Panel • 12.8V 30Ah LiFePO4
              </p>
            </div>

            {/* ===== Product 2 ===== */}
            <div className="bg-white p-4 rounded shadow transition hover:shadow-xl">
              <Link
                to="/products/kyarr-80w-33"
                className="group relative block overflow-hidden rounded"
              >
                <img
                  src="/images/product-4.png"
                  alt="KYARR 80W Solar Street Light"
                  className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-semibold tracking-wide">
                    View Details
                  </span>
                </div>
              </Link>

              <h3 className="mt-3 font-semibold">KYARR 80W Solar Street Light</h3>
              <p className="text-gray-600 text-sm mt-1">
                80W LED • 180W Panel • 12.8V 80Ah LiFePO4
              </p>
            </div>

            {/* ===== Product 3 ===== */}
            <div className="bg-white p-4 rounded shadow transition hover:shadow-xl">
              <Link
                to="/products/kyarr-100w-aio"
                className="group relative block overflow-hidden rounded"
              >
                <img
                  src="/images/product-11.png"
                  alt="KYARR 100W All-in-One"
                  className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-semibold tracking-wide">
                    View Details
                  </span>
                </div>
              </Link>

              <h3 className="mt-3 font-semibold">KYARR 100W All-in-One</h3>
              <p className="text-gray-600 text-sm mt-1">
                100W LED • 200W Panel • 12.8V 100Ah LiFePO4
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">
          About KYARR INCORP
        </h2>
        <p className="text-center max-w-4xl mx-auto text-gray-700 leading-7">
          Established in 2011, Kyarr Incorp is a trusted manufacturer and service provider in solar energy
          and lighting solutions. We specialize in solar street lights, panels, lithium battery packs,
          LED lights, and government project execution with installation and maintenance.
        </p>
      </section>

    </div>
  )
}
