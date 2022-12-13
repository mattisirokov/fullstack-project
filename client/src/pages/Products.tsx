import Navbar from "components/Navbar";
import Search from "components/Search";
import Footer from "components/Footer";
import ProductCards from "components/ProductCards";

const Products = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <ProductCards />
      <Footer />
    </div>
  );
};

export default Products;
