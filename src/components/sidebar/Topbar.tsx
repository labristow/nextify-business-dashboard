import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo-blue.svg";
import { SVGS } from "@/assets/SVGS";

export default function Topbar({
  setIsSidebarVisible,
}: {
  setIsSidebarVisible: (val: boolean) => void;
}) {
  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };
  return (
    <nav className="h-20 flex items-center justify-between px-5 relative">
      <Image src={Logo} width={110} alt="" />

      <button className={`block lg:hidden`} onClick={closeSidebar}>
        <SVGS.CloseIcon />
      </button>
    </nav>
  );
}
