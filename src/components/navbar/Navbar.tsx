import React from "react";
import DateTime from "./DateTime";
import NavList from "./NavList";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <nav className="h-20 w-full justify-between shadow-sm flex items-center px-5">
      <div className="flex items-center gap-x-4">
        <DateTime />
        <SearchInput />
      </div>
      <NavList />
    </nav>
  );
}

export default Navbar;
