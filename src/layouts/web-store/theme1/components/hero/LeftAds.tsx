import { SVGS } from "@/assets/SVGS";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const sideMenu = [
  {
    Icon: <SVGS.WalletIcon />,
    name: "Wallet",
    link: "",
  },
  {
    Icon: <SVGS.OrderIcon />,
    name: "Order",
    link: "",
  },
  {
    Icon: <SVGS.TransactionIcon />,
    name: "Transactions",
    link: "",
  },
];
function LeftAds() {
  return (
    <div className="grid grid-cols-1 grid-rows-2">
      <div className="bg-transparent row-span-2 w-[220px] h-[384px]">
        <h5 className="text-lg font-semibold">User Profile</h5>

        <ul className="flex flex-col gap-5 mt-5">
          {sideMenu.map(({ Icon, name, link }, id) => (
            <Link href={link} key={id}>
              <li key={id} className="flex items-center">
                {Icon}
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeftAds;
