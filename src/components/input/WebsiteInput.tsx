import { SVGS } from "@/assets/SVGS";
import React from "react";
interface IProps {
  isRequired?: boolean;
  title?: string;
}
function WebsiteInput({ isRequired = true, title = "Website" }: IProps) {
  return (
    <div className="flex flex-col relative">
      <label
        htmlFor=""
        className="text-sm font-semibold flex items-center gap-x-0.5"
      >
        {title} {isRequired && <span className="text-primary text-lg">*</span>}
      </label>
      <span className="absolute bottom-0 h-12 flex items-center  justify-center left-3 text-md font-semibold">
        <SVGS.ScanIcon />
      </span>
      <input
        required
        placeholder="Product Designer"
        className="outline-none focus:border-primary placeholder:font-normal valid:border-primary invalid:border-gray-300 h-12 rounded-md px-11 font-semibold border-2 border-gray-300 transition-all duration-500"
      />
    </div>
  );
}

export default WebsiteInput;
