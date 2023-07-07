import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo-blue.svg";
import Image from "next/image";
import { SVGS } from "@/assets/SVGS";

function AmazonNavbar() {
  return (
    <React.Fragment>
      <div className="h-[29px]"></div>
      <div className="bg-[#ffffff3f] px-5 rounded-2xl border border-gray-200 backdrop-blur-sm sticky w-full top-0 left-0 h-[70px] flex items-center justify-between z-50">
        <Link href={""}>
          <Image src={Logo} width={72} alt="logo" />
        </Link>

        <ul className="flex items-center gap-x-10">
          <li>
            <button className="h-10 rounded flex items-center gap-1">
              <SVGS.ProfileIcon />
              <span className="font-medium">Account</span>
            </button>
          </li>
          <li className="flex items-center gap-1">
            <SVGS.OrderIcon />
            <span className="font-medium">Cart</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default AmazonNavbar;
