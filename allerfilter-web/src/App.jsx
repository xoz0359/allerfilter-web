import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Main from './pages/main/Main'
import Search from './pages/search/Search'
import ProductDetail from './pages/productDetail/ProductDetail'
import MainLayout from './layout/MainLayout'
import DataImprovement from './features/dataImprovement/DataImprovement'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/data-improvement/" element={<DataImprovement />} />

          <Route path="/data-improvement/:productId" element={<DataImprovement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
