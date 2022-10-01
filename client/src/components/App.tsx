import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import ProductPage from 'pages/ProductPage'
import Product from 'pages/Product'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element= {<ProductPage/>} />
        <Route  path="/products/:id" element={<Product/>} />
        
      </Routes>
    </BrowserRouter>
   
  )
}
export default App
  