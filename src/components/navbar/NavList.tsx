import { SVGS } from "@/assets/SVGS";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NavList({
  setIsSidebarVisible,
  handleLogout
}: {
  setIsSidebarVisible: (val: boolean) => void;
  handleLogout: ()=> void;
}) {
  const showSidebar = () => {
    setIsSidebarVisible(true);
  };
  
  return (
    <>
      <button onClick={showSidebar} className="flex lg:hidden">
        <SVGS.MenuIcon />
      </button>
      <div className="hidden lg:flex items-center gap-4">
        <Link href={""}>
          <div className="bg-transparent hover:bg-gray-200 transition-all duration-500 h-10 w-10 rounded-full flex items-center justify-center">
            <SVGS.BellIcon />
          </div>
        </Link>
        <button
          onClick={handleLogout}
          className="bg-transparent rounded-lg hover:bg-gray-200 transition-all duration-500 h-10 px-4 flex items-center justify-center"
        >
          <SVGS.LogoutIcon />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </>
  );
}

export default NavList;
