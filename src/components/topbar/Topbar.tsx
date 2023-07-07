import React, { useState } from "react";
import Image from "next/image";
import { SVGS } from "@/assets/SVGS";
import { gsap } from "gsap";

function Topbar() {
  const hideTopbar = () => {
    const tl = gsap.timeline();
    tl.to(".topbar", {
      opacity: 0,
      animation: 1,
    })
      .to(".navbar", {
        y: -40,
      })
      .to(".topbar-close-btn", {
        display: "none",
      });
  };
  return (
    <div className="topbar topbar-bg flex w-full h-9 relative items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-opacity-20">
      <div className="w-full flex items-center justify-center relative z-20">
        <p className="text-sm text-white font-medium -ml-24">
          **Refer a client to us and receive up to $25 in rewards.
        </p>
        <SVGS.ArrowRightIcon color="white" />
      </div>
      <button
        onClick={hideTopbar}
        className="topbar-close-btn absolute right-2 z-20"
      >
        <SVGS.CloseIcon />
      </button>
    </div>
  );
}

export default Topbar;
