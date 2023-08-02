import React from "react";
import DateTime from "./DateTime";
import NavList from "./NavList";
import SearchInput from "./SearchInput";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

function Navbar({
  setIsSidebarVisible,
}: {
  setIsSidebarVisible: (val: boolean) => void;
}) {
  const router = useRouter();
  const navigateTo = (pathname: string) => router.push(pathname);
  const handleLogout = () => {
    window.sessionStorage.clear();
    navigateTo("/login");
    toast.success("Logout successfully");
  };
  return (
    <nav className="h-20 w-full justify-between shadow-sm flex items-center px-5">
      <div className="flex items-center gap-x-4">
        <DateTime />
        <SearchInput />
      </div>
      <NavList setIsSidebarVisible={setIsSidebarVisible} handleLogout={handleLogout}/>
    </nav>
  );
}

export default Navbar;
