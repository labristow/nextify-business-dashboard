import React from "react";
import Topbar from "./Topbar";
import MenuList from "./MenuList";
import ProfileItem from "./ProfileItem";

function Sidebar({
  setIsSidebarVisible
}: {setIsSidebarVisible: (val: boolean)=> void}) {

  return (
    <div className="w-[270px] lg:w-[210px] absolute left-0 top-0 lg:relative bg-white flex flex-col justify-between h-screen shadow z-20">
      <div>
        <Topbar setIsSidebarVisible={setIsSidebarVisible}/>
        <MenuList />
      </div>
      <ProfileItem />
    </div>
  );
}

export default Sidebar;
