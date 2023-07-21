import { SVGS } from "@/assets/SVGS";
import Link from "next/link";
import React from "react";

function NavList({
  setIsSidebarVisible,
}: {
  setIsSidebarVisible: (val: boolean) => void;
}) {
  const showSidebar = () => {
    setIsSidebarVisible(true);
  };
  return (
    <>
      <button onClick={showSidebar} className="flex lg:hidden">
        <SVGS.MenuIcon />
      </button>
      <div className="hidden lg:flex items-center gap-8">
        <Link href={""}>
          <div className="bg-white hover:bg-gray-200 transition-all duration-500 h-10 w-10 rounded-full flex items-center justify-center">
            <SVGS.BellIcon />
          </div>
        </Link>
        <Link href={"/profile"}>
          <div className="bg-white hover:bg-gray-200 transition-all duration-500 h-10 w-10 rounded-full flex items-center justify-center">
            <SVGS.ProfileIcon />
          </div>
        </Link>
        <Link href={""}>
          <div className="bg-white hover:bg-gray-200 transition-all duration-500 h-10 w-10 rounded-full flex items-center justify-center">
            <SVGS.WalletIcon />
          </div>
        </Link>
      </div>
    </>
  );
}

export default NavList;
