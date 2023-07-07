import React from "react";
import HeroSwiper from "./HeroSwiper";
import { SVGS } from "@/assets/SVGS";
import RightAds from "./RightAds";
import LeftAds from "./LeftAds";

function Hero() {
  return (
    <div className="w-full h-[64vh] flex items-start justify-center gap-5 py-5">
      <LeftAds />
      <HeroSwiper />
      <RightAds />
    </div>
  );
}

export default Hero;
