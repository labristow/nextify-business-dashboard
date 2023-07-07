import { SVGS } from "@/assets/SVGS";
import Link from "next/link";
import React from "react";
interface INavItemProps {
  text?: string;
  link: string;
  Icon?: any;
  isActive?: boolean;
}
function NavItem({ text, link, Icon, isActive }: INavItemProps) {
  return (
    <div className="px-4 py-0.5">
      <Link href={link}>
        <li
          className={`flex items-center gap-x-1.5 ${
            isActive
              ? "bg-primary-blue hover:bg-primary-blue"
              : "hover:bg-gray-50"
          } rounded-lg h-14 px-4 transition-all duration-500`}
        >
          <Icon color={isActive ? "#FFFFFF" : "#333333"} />
          <span
            className={`font-medium text-[15px] ${
              isActive ? "text-white" : "text-dark"
            }`}
          >
            {text}
          </span>
        </li>
      </Link>
    </div>
  );
}

export default NavItem;
