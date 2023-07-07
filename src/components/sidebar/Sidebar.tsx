import React from "react";
import Topbar from "./Topbar";
import MenuList from "./MenuList";
import ProfileItem from "./ProfileItem";

function Sidebar() {
  return (
    <div className="w-[210px] hidden md:flex flex-col justify-between h-screen shadow">
      <div>
        <Topbar />
        <MenuList />
      </div>
      <ProfileItem />
    </div>
  );
}

export default Sidebar;
