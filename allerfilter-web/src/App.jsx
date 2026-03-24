import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Main from './pages/main/Main'
import Search from './pages/search/Search'
import ProductDetail from './pages/productDetail/ProductDetail'
import MainLayout from './layout/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
