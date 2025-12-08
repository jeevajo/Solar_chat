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
          <div className="mt-6 flex gap-4">
  <button
    type="button"
    onClick={() => {
      const message = `Hello, I would like to request a quote for: ${p.title}`;
      const url = `https://wa.me/917904294362?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
    className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
  >
    Request Quote
  </button>

  <button
    type="button"
    onClick={() => {
      window.location.href = "/contact";
    }}
    className="px-5 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100"
  >
    Contact Sale
  </button>
</div>

        </div>
      </div>
    </div>
  )
}
