import Hero from "@/layouts/homepage/Hero";
import WhatWeDo from "@/layouts/homepage/WhatWeDo";
import React from "react";
import HomeLayout from "@/layouts/homepage/HomeLayout";

function Index() {
  return (
    <HomeLayout>
      <React.Fragment>
        <Hero />
        <WhatWeDo />
      </React.Fragment>
    </HomeLayout>
  );
}

export default Index;
