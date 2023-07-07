import { ICONS } from "@/assets/Icons";
import React from "react";

function BackButton({ isBtnActive }: { isBtnActive: boolean }) {
  return (
    <button
      className={`px-7 py-4 gap-1 rounded-xl bg-transparent ${
        isBtnActive ? "flex" : "hidden"
      } text-[#555555] font-bold font-primary transition-all duration-500`}
    >
      <div>
        <ICONS.LeftArrowIcon color="#555555" />
      </div>
      <p>Back</p>
    </button>
  );
}

export default BackButton;
