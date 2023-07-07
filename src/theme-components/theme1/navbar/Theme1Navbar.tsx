import React from "react";
// import Topbar from "./JumiaTopbar";
import Image from "next/image";
import Logo from "../assets/jumia-logo.png";

function JumiaNavbar() {
  return (
    <nav className="w-full h-[72px] bg-white shadow-lg">
      {/* <Topbar /> */}
      <div className="w-full px-44 h-full flex items-center">
        <Image src={Logo} alt="" width={140} className="-ml-0.5 -mt-0.5"/>
      </div>
    </nav>
  );
}

export default JumiaNavbar;
