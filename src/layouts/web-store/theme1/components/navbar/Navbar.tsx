import React from "react";
import Logo from "@/assets/web-assets/logo.png";
import Image from "next/image";
import { SVGS } from "@/assets/SVGS";
import SearchInput from "../input/SearchInput";

function Navbar() {
  return (
    <div className="sticky shadow top-0 w-full h-[100px] bg-white bg-opacity-50 backdrop-blur-xl z-20 flex items-center justify-between px-20">
      <div className="w-[80px] h-[80px]">
        <Image
          src={Logo}
          className="object-cover flex justify-start"
          alt="abc"
          unoptimized
        />
      </div>
      <div className="w-1/2">
        <SearchInput />
      </div>
      <div className="flex items-center gap-x-14 col-span-2">
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
