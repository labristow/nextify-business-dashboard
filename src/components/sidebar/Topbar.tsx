import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo-blue.svg";

export default function Topbar() {
  return (
    <nav className="h-20 flex items-center px-5">
      <Image src={Logo} width={110} alt="" />
    </nav>
  );
}
