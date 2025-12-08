import products from '../data/products'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div className="pt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">Products</h2>
        <p className="text-gray-600 mt-2">Complete range of KYARR solar street lights.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-white rounded shadow p-4">
              <img src={p.image} alt={p.title} className="h-40 w-full object-cover rounded" />
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.panel} • {p.battery}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link to={`/products/${p.id}`} className="text-kyarrBlue font-semibold">View details</Link>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
