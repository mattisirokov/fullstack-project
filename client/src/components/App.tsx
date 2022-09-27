import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Product from 'pages/Product'
import { MantineProvider } from '@mantine/core';


const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/products/:id" element={<Product/>} />
      </Routes>
    </BrowserRouter>
    </MantineProvider>
  )
}
export default App
