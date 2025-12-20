import products from '../data/products'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div className="pt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">Products</h2>
        <p className="text-gray-600 mt-2">
          Complete range of KYARR solar street lights.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div
              key={p.id}
              className="bg-white rounded shadow p-4 transition hover:shadow-xl"
            >
              {/* IMAGE WITH OVERLAY */}
              <Link
                to={`/products/${p.id}`}
                className="group relative block overflow-hidden rounded"
              >
                <img
                  src={p.image}
                  alt={p.title}
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

              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {p.panel} • {p.battery}
              </p>

              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/products/${p.id}`}
                  className="text-kyarrBlue font-semibold"
                >
                  View details
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    const message = `Hello, I want to enquire about: ${p.title}`;
                    const url = `https://wa.me/919944261439?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(url, '_blank');
                  }}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
