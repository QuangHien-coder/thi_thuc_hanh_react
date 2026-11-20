import { Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import BookingPage from './pages/BookingPage'
import LocationsPage from './pages/LocationsPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />}></Route>
        <Route path="products" element={<ProductsPage />}></Route>
        <Route path="booking" element={<BookingPage />}></Route>
        <Route path="locations" element={<LocationsPage />}></Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  )
}

export default App
