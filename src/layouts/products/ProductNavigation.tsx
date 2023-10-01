import { SVGS } from "@/assets/SVGS";
import React from "react";

function ProductNavigation() {
  return (
    <div className="h-20 flex-right">
      <div className="navigation-container flex-left gap-x-4">
        <button className="w-11 h-11 rounded-full bg-black text-white text-md flex-center">
          <SVGS.CaretLeftIcon color="white" />
        </button>
        <div className="current-page flex-left">
          <span className="w-10 flex-center">1</span>
          <span className="w-10 flex-center">2</span>
          <span className="w-10 flex-center">3</span>
        </div>
        <button className="w-11 h-11 rounded-full bg-black text-white text-md flex-center">
          <SVGS.CaretRightIcon color="white" />
        </button>
      </div>
    </div>
  );
}

export default ProductNavigation;
