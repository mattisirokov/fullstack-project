import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Products from "pages/Products";
import Dashboard from "pages/Dashboard";
import Edit from "pages/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:_id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
