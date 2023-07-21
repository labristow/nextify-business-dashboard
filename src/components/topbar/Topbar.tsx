import React, { useState } from "react";
import Image from "next/image";
import { SVGS } from "@/assets/SVGS";
import { gsap } from "gsap";
import CaretRightArrow from "../arrow/CaretRightArrow";
import Link from "next/link";

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
    <div className="topbar topbar-bg flex w-full h-10 absolute items-center justify-center bg-black">
      <Link href={""}>
        <div className="group w-full flex items-center justify-center relative z-20">
          <p className="text-xs lg:text-sm text-white font-medium">
            **Refer a client to us and receive up to $25 in rewards.
          </p>
          <span className="hidden lg:block">
            <CaretRightArrow color="white" />
          </span>
        </div>
      </Link>
      <button
        onClick={hideTopbar}
        className="topbar-close-btn absolute right-2 z-20"
      >
        <SVGS.CloseIcon color="white" />
      </button>
    </div>
  );
}

export default Topbar;
