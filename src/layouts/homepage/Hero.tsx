import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

function Hero() {
  return (
    <div className="w-full h-auto bg-white">
      <div className="w-full grid grid-cols-2 h-[80vh]">
        <LeftHero />
        <RightHero />
      </div>
    </div>
  );
}

export default Hero;
