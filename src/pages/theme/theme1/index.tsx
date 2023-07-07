import JumiaFooter from "@/theme-components/theme1/footer/Theme1Footer";
import JumiaHero from "@/theme-components/theme1/hero";
import JumiaNavbar from "@/theme-components/theme1/navbar/Theme1Navbar";
import JumiaProductGroupSlider from "@/theme-components/theme1/product-container/Theme1ProductGroupSlider";
import JumiaProducts from "@/theme-components/theme1/product-container/Theme1Products";
import React from "react";

function Index() {
  return (
    <React.Fragment>
      <JumiaNavbar />
      <JumiaHero />
      <JumiaProductGroupSlider />
      <JumiaProducts />
      <JumiaFooter />
    </React.Fragment>
  );
}

export default Index;
