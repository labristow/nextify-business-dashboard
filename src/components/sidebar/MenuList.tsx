import React from "react";
import NavItem from "./NavItem";
import { SVGS } from "@/assets/SVGS";
import { useRouter } from "next/router";

const menulist = [
  { text: "Dashboard", Icon: SVGS.HomeIcon, link: "/home" },
  { text: "Products", Icon: SVGS.ProductIcon, link: "/products" },
  { text: "Manage Orders", Icon: SVGS.OrderIcon, link: "/orders" },
  { text: "Customers", Icon: SVGS.ProfileIcon, link: "/customers" },
  { text: "My Profile", Icon: SVGS.ProfileIcon, link: "/profile" },
  { text: "Setting", Icon: SVGS.SettingIcon, link: "/setting" },
];
function MenuList() {
  const router = useRouter();
  const activeRoute = router.pathname;
  return (
    <ul className="mt-10">
      {menulist.map((menu, index) => (
        <NavItem key={index} {...menu} isActive={menu.link === activeRoute} />
      ))}
    </ul>
  );
}

export default MenuList;
