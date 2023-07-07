import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo-blue.svg";
import Link from "next/link";
import Topbar from "../topbar/Topbar";

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
  return (
    <div
      className={`w-full h-auto bg-white backdrop-blur-none bg-opacity-95 transition-all duration-300 fixed- top-0 z-50`}
    >
      <Topbar />
      <nav className="navbar h-[88px] w-full px-[80px] flex items-center justify-between">
        <div className="h-full flex items-center">
          <Link href={"/"}>
            <Image src={Logo} alt="" className="w-32" />
          </Link>
        </div>
        <ul className="nav-items hidden md:flex items-center gap-14">
          {navItems.map(({ text, path }, id) => (
            <Link href={path} key={id}>
              <span className="flex whitespace-nowrap text-primary-dark">
                {text}
              </span>
            </Link>
          ))}
        </ul>

        <div className="call-to-action hidden md:flex items-center gap-x-3">
          <Link href={"login"}>
            <span className="text-primary-dark rounded-xl border-2 border-primary-dark whitespace-nowrap h-12 w-[96px] flex items-center justify-center">
              Log In
            </span>
          </Link>
          <Link href={"register"}>
            <span className="bg-primary-dark border-2 border-transparent text-white rounded-xl whitespace-nowrap h-12 w-[96px] navbar-btn flex items-center justify-center">
              Sign Up
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
