import { SVGS } from "@/assets/SVGS";
import React from "react";

function CaretRightArrow({ color = "#222222" }: { color?: string }) {
  const bgColor = {
    backgroundColor: color,
  };
  return (
    <div className="mt-1 relative h-[24px]">
      <span
        style={bgColor}
        className={`line w-0 group-hover:w-2.5 duration-500 absolute top-[10.3px] right-[9.5px] h-[1.5px] block`}
      ></span>
      <SVGS.CaretRightIcon color={color} />
    </div>
  );
}

export default CaretRightArrow;
