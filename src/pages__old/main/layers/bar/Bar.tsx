import { SVGS } from "@/assets";
import React from "react";

function Bar() {
  return (
    <div className="w-full h-20 rounded-2xl border border-gray-200 flex items-center pl-4">
      <div className="menu flex items-center-gap-2">
        <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
          <SVGS.MenuIcon size="26" color="white" />
        </div>
        <div className="details mx-2 p-0.5">
          <p className="text-primary font-medium font-primary text-xs">
            Step 1/6
          </p>
          <h5 className="font-bold font-primary text-[16px] text-gray-800">
            Type of Service
          </h5>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <div className="w-full h-7 border-l border-gray-200 px-7 flex items-center justify-center">
          <SVGS.User2Icon color="#999999" size="28" />
        </div>
        <div className="w-full h-7 border-l border-gray-200 px-7 flex items-center justify-center">
          <SVGS.ExtraIcon color="#999999" size="28" />
        </div>
        <div className="w-full h-7 border-l border-gray-200 px-7 flex items-center justify-center">
          <SVGS.ImportIcon color="#999999" size="28" />
        </div>
      </div>
    </div>
  );
}

export default Bar;
