import React from "react";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ProductCard from "./components/product/ProductCard";
import DiscoverContainer from "./components/product/DiscoverContainer";
import ProductContainer from "./components/product/ProductContainer";
import Footer from "./components/footer/Footer";

function ThemeOne() {
  return (
    <div className="w-full h-screen min-h-screen overflow-y-auto">
      <Topbar />
      <Navbar />
      <DiscoverContainer />
      <ProductContainer />
      <Footer />
      {/* <Hero />
      <ProductCard /> */}
    </div>
  );
}

export default ThemeOne;
