import { Link, Outlet } from 'react-router'

function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-amber-50 p-4">
      <Link to="/" className="mb-6 text-2xl font-bold text-amber-600">
        FPT Aptech
      </Link>
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
