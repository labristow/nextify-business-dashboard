import { SVGS } from "@/assets/SVGS";
import React from "react";

function ToggleButton() {
  return (
    <button className="absolute flex items-center justify-center -right-3 rounded-full h-8 w-8 top-16 bg-dark shadow border-2 border-gray-100">
      <SVGS.CaretRightIcon color="white" />
    </button>
  );
}

export default ToggleButton;
