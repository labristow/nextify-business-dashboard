import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logo-blue.svg";
import Link from "next/link";
import Topbar from "../topbar/Topbar";
import { SVGS } from "@/assets/SVGS";
import CaretRightArrow from "../arrow/CaretRightArrow";
import { gsap } from "gsap";

interface INavItems {
  text: string;
  path: string;
}
const navItems: INavItems[] = [
  { text: "Use Cases", path: "#use-cases" },
  { text: "Products", path: "#products" },
  { text: "Company", path: "#company" },
  { text: "Support", path: "#support" },
];

function HomeNavbar() {
  useEffect(() => {
    gsap.fromTo(
      "#nav-item",
      { opacity: 0, y: 8, skewY: 8 },
      { opacity: 1, y: 0, stagger: 0.08, skewY: 0 }
    );
  }, []);

  return (
    <div
      className={`w-full bg-white h-auto backdrop-blur-none bg-opacity-95 transition-all duration-300 relative top-0 z-50`}
    >
      <Topbar />
      <nav className="w-full flex items-center justify-between absolute top-9 h-16 lg:h-28 bg-white px-5 lg:px-32">
        <Link href={"./"}>
          <Image src={Logo} alt="" width={120} className="" />
        </Link>

        <ul className="menu-container hidden lg:flex items-center gap-x-12">
          {navItems.map((item, id) => (
            <Link id="nav-item" href={item.path} key={id}>
              <li className="">{item.text}</li>
            </Link>
          ))}
        </ul>

        <ul className="cta-container hidden lg:flex items-center gap-x-12">
          <Link id="nav-item" href={"/login"}>
            <li className="text-gray-900 bg-gray-100 py-3 border-2 border-gray-100 font-semibold px-6 rounded-xl">Sign in</li>
          </Link>
          <Link id="nav-item" href={"/register"}>
            <li className="group flex items-center justify-center border-2 border-gray-900 bg-white bg-opacity-25 hover:bg-opacity-40 rounded-xl pl-6 pr-4 py-2.5 font-semibold text-gray-900 text-sm">
              Sign Up <CaretRightArrow />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default HomeNavbar;
