import Navbar from "@/components/navbar/Navbar";
import OverlayContainer from "@/components/overlay/OverlayContainer";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
interface IDashboardLayoutProps {
  children: JSX.Element;
}
function DashboardLayout({ children }: IDashboardLayoutProps) {
  return (
    <div className="w-full flex">
      <OverlayContainer />
      <Sidebar />
      <div className="w-full md:w-[calc(100%_-_210px)] bg-gray-50">
        <Navbar />
        <div className="pb-5 px-1 md:pl-6 md:pr-6 h-[calc(100vh_-_80px)] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
