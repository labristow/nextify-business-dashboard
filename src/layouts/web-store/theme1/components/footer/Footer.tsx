import Image from "next/image";
import React from "react";
import Logo from "@/assets/web-assets/logo.png";

function Footer() {
  return (
    <div className="w-full min-h-[40vh] px-10 md:px-[70px] py-20 bg-dark">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5">
        <div>
          <Image
            src={Logo}
            width={120}
            alt=""
            className="mix-blend-difference"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="footer-title text-gray-500 uppercase font-semibold text-lg">
            Visit Us
          </h4>
          <ul className="mt-3">
            <li className="text-gray-100 text-sm my-1">UNIT 6,</li>
            <li className="text-gray-100 text-sm my-1">
              SYNGEFIELD INDUSTRIAL ESTATE,
            </li>
            <li className="text-gray-100 text-sm my-1">CO. OFFALY,</li>
            <li className="text-gray-100 text-sm my-1">R42 YW61, IRELAND</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="footer-title text-gray-500 uppercase font-semibold text-lg">
            CONTACT US
          </h4>
          <ul className="mt-3">
            <li className="text-gray-100 text-sm my-1">+353 89 213 1662</li>
            <li className="text-gray-100 text-sm my-1">SALES@GERMANFLOOR.IE</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="footer-title text-gray-500 uppercase font-semibold text-lg">
            CONNECT WITH US
          </h4>
          <ul className="mt-3">
            <li className="text-gray-100 text-sm my-1">Facebook</li>
            <li className="text-gray-100 text-sm my-1">Instagram</li>
            <li className="text-gray-100 text-sm my-1">Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
