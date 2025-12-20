import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const navClass = ({ isActive }) =>
    isActive
      ? 'text-kyarrBlue font-semibold'
      : 'text-gray-700 hover:text-kyarrBlue'

  return (
    <header className="bg-white shadow fixed w-full z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="KYARR"
            className="h-14 w-auto object-contain"
          />
          <div>
            <div className="text-xl font-bold text-kyarrBlue">
              KYARR INCORP
            </div>
            <div className="text-xs text-gray-500">
              The Royal Power Of A New Era
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navClass}>
            Products
          </NavLink>

          <NavLink to="/specialization" className={navClass}>
            Specialization
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'px-3 py-2 bg-kyarrBlue text-white rounded font-semibold'
                : 'px-3 py-2 bg-kyarrBlue text-white rounded hover:opacity-90'
            }
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
