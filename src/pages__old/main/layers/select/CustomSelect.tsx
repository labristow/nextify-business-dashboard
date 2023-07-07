import { ICONS } from "@/assets/Icons";
import React from "react";

function CustomSelect() {
  return (
    <div className="hover:shadow-lg transition-all duration-300 relative bg-white rounded-xl border border-gray-300">
      <span className="absolute top-[18px] left-4">
        <ICONS.SearchIcon color="#888" />
      </span>
      <input
        type="text"
        className="w-full bg-transparent h-14 px-12 font-primary text-lg outline-none"
      />
      <div className="dropdown w-full bg-white h-[200px] rounded-xl">
        <div className="header px-4 border-b border-gray-300 flex justify-between">
          <p className="font-primary w-[48px] h-10 flex items-center justify-center gap-1 font-medium border-b-2 border-gray-600 text-[16px]">
            All{" "}
            <span className="w-5 h-5 flex items-center justify-center bg-gray-100 font-primary rounded-full text-xs">
              0
            </span>
          </p>
          <button>
            <ICONS.SettingIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomSelect;
