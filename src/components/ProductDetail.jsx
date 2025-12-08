import { useParams } from 'react-router-dom'
import products from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const p = products.find(x => x.id === id)
  if (!p) return <div className="pt-24 p-6">Product not found</div>
  return (
    <div className="pt-24 max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={p.image} alt={p.title} className="rounded shadow" />
        <div>
          <h1 className="text-2xl font-bold">{p.title}</h1>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li><strong>Panel:</strong> {p.panel}</li>
            <li><strong>Battery:</strong> {p.battery}</li>
            <li><strong>LED:</strong> {p.led}</li>
            <li><strong>Backup:</strong> {p.backup}</li>
            <li><strong>Warranty:</strong> {p.warranty} (Service: {p.serviceWarranty})</li>
          </ul>
          <div className="mt-6">
            <button className="px-5 py-2 bg-kyarrBlue text-white rounded">Request Quote</button>
            <a href="/contact" className="ml-3 text-gray-700">Contact Sales</a>

          </div>
        </div>
      </div>
    </div>
  )
}
