import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-r from-kyarrBlue/10 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-kyarrDark">KYARR INCORP — The Royal Power Of A New Era</h1>
            <p className="mt-4 text-gray-700">High-performance solar street lights engineered for reliability and long battery backup. 3 years warranty, LiFePO4 battery tech.</p>
            <div className="mt-6 flex gap-4">
              <Link to="/products" className="px-6 py-3 bg-kyarrBlue text-white rounded">View Products</Link>
              <Link to="/contact" className="px-6 py-3 border rounded">Get Quote</Link>
            </div>
          </div>
          <div>
            <img src="/images/product-hero.png" alt="KYARR Solar" className="rounded-lg shadow" />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Featured Models</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/product-1.png" className="h-40 w-full object-cover rounded" />
              <h3 className="mt-3 font-semibold">KYARR 30W Solar Street Light</h3>
              <p className="text-gray-600 text-sm mt-1">30W LED • 80W Panel • 12.8V 30Ah LiFePO4</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/product-4.png" className="h-40 w-full object-cover rounded" />
              <h3 className="mt-3 font-semibold">KYARR 80W Solar Street Light</h3>
              <p className="text-gray-600 text-sm mt-1">80W LED • 180W Panel • 12.8V 80Ah LiFePO4</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/product-11.png" className="h-40 w-full object-cover rounded" />
              <h3 className="mt-3 font-semibold">KYARR 100W All-in-One</h3>
              <p className="text-gray-600 text-sm mt-1">100W LED • 200W Panel • 12.8V 100Ah LiFePO4</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
