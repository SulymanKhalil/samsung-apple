import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import FeaturedProducts from "./components/featuredProducts";
import Innovation from "./components/innovation";
import Lifestyle from "./components/lifeStyle";
import VisualGallery from "./components/visualGallery";
import DirectComparison from "./components/directComparison";
import CallToAction from "./components/callToAction";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <Innovation />
      <Lifestyle />
      <DirectComparison />
      <VisualGallery />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
