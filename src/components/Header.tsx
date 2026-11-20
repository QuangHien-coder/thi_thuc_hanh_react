import { NavLink } from 'react-router'

function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'font-bold text-orange-500 underline' : 'hover:underline'

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <NavLink to="/" end className="text-lg font-bold text-orange-500">
          FPT Aptech
        </NavLink>

        <nav className="flex gap-5 text-sm text-gray-700">
          <NavLink to="/about-us" className={linkClass}>About Us</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/booking" className={linkClass}>Booking</NavLink>
          <NavLink to="/locations" className={linkClass}>Locations</NavLink>
        </nav>

        <div className="flex gap-2">
          <NavLink to="/sign-in" className="rounded bg-orange-500 px-3 py-1.5 text-sm text-white">
            Sign In
          </NavLink>
          <NavLink to="/sign-up" className="rounded border border-blue-500 px-3 py-1.5 text-sm text-gray-700">
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
