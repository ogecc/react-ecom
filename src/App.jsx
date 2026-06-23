import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Auth from './pages/Auth'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'
import ProductDetails from './pages/ProductDetail'
import CartProvider from './context/CartProvider'

function App() {
  return (
    <div className='app'>
      <AuthProvider>
        <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        </CartProvider>
      </AuthProvider>
      
    </div>
  )
}

export default App
