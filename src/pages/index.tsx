import HomeNavbar from "@/components/navbar/HomeNavbar";
import Footer from "@/layouts/homepage/Footer";
import Hero from "@/layouts/homepage/Hero";
import WhatWeDo from "@/layouts/homepage/WhatWeDo";
import React from "react";

function Index() {
  return (
    <div className="w-full">
      <HomeNavbar />
      <Hero />
      <WhatWeDo />
      <Footer />
    </div>
  );
}

export default Index;
