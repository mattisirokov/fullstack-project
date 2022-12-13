import Navbar from "components/Navbar";
import Hero from "components/Hero";
import Logos from "components/Logos";
import Features from "components/Features";
import Footer from "components/Footer";
import FeaturedProduct from "components/FeatureProduct";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Logos />
      <FeaturedProduct />
      <Features />

      <Footer />
    </div>
  );
};

export default Home;
