import Navbar from "@/components/navbar/Navbar";
import OverlayContainer from "@/components/overlay/OverlayContainer";
import Sidebar from "@/components/sidebar/Sidebar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
interface IDashboardLayoutProps {
  children: JSX.Element;
}
function DashboardLayout({ children }: IDashboardLayoutProps) {
  const router = useRouter();
  const [width, setWidth] = useState<number>(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
  useEffect(() => {
    setWidth(window.innerWidth);
    if (window.innerWidth < 520) {
      setIsSidebarVisible(false);
    } else {
      setIsSidebarVisible(true);
    }
    // document.querySelector("body")?.classList.add("custom__scrollbar");
  }, []);

  useEffect(() => {
    if (window.innerWidth < 520) {
      setIsSidebarVisible(false);
    }
  }, [router.pathname]);

  return (
    <div className="w-full flex">
      <OverlayContainer />
      {isSidebarVisible && (
        <Sidebar setIsSidebarVisible={setIsSidebarVisible} />
      )}
      <div className="w-full md:w-[calc(100%_-_210px)] bg-gray-50">
        <Navbar setIsSidebarVisible={setIsSidebarVisible} />
        <div className="pb-5 px-1 md:pl-6 md:pr-6 h-[calc(100vh_-_80px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
