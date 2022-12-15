import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Products from "pages/Products";
import Dashboard from "pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
