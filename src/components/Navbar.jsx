import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <header className="bg-white shadow fixed w-full z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo-placeholder.jpeg" alt="KYARR" className="h-10"/>
          <div>
            <div className="text-xl font-bold text-kyarrBlue">KYARR INCORP</div>
            <div className="text-xs text-gray-500">The Royal Power Of A New Era</div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link className="text-gray-700 hover:text-kyarrBlue" to="/">Home</Link>
          <Link className="text-gray-700 hover:text-kyarrBlue" to="/products">Products</Link>
          <Link className="text-gray-700 hover:text-kyarrBlue" to="/about">About</Link>
          <Link className="px-3 py-2 bg-kyarrBlue text-white rounded" to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}
