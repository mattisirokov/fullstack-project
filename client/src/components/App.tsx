import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import ProductPage from "pages/ProductPage";
import AdminConsole from "pages/AdminConsole";
import Product from "pages/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/search/:term" element={<ProductPage />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/console" element={<AdminConsole />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
