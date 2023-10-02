import React from "react";
import Logo from "@/assets/web-assets/logo.png";
import Image from "next/image";
import { SVGS } from "@/assets/SVGS";
import SearchInput from "../input/SearchInput";

function Navbar() {
  return (
    <div className="sticky shadow top-0 w-full h-auto md:h-[100px] bg-white bg-opacity-95 backdrop-blur-lg z-20 flex items-center justify-between flex-wrap px-4 md:px-20">
      <div className="flex items-center gap-5">
        <div className="w-[80px] h-[80px] flex-center">
          <Image
            src={Logo}
            className="object-cover flex justify-start"
            alt="abc"
            unoptimized
          />
        </div>
        <div className="w-full">
          <SearchInput />
        </div>
      </div>
      <div className="w-full md:w-auto flex mt-6 mb-5 md:mb-0 md:mt-0 items-center justify-between gap-x-14 col-span-2">
        <div className="flex gap-1 items-center">
          <SVGS.ProfileIcon size="28" />
          <div className="flex flex-col items-start">
            <p className="text-sm -mb-1">Hello, sign in</p>
            <h5 className="font-semibold">Your account</h5>
          </div>
        </div>
        <div className="flex gap-1 items-center relative pr-5">
          <span className="counter-label rounded-full bg-red-600 text-white px-1 font-semibold absolute bottom-7 left-1.5 text-xs">
            0
          </span>
          <SVGS.OrderIcon size="28" />
          <div className="flex items-center">
            <p className="text-sm uppercase-">Carts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
