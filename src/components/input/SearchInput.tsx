import { SVGS } from "@/assets/SVGS";
import React from "react";
interface IProps {
  isRequired?: boolean;
  title?: string;
}
function SearchInput({ isRequired = true, title = "Company" }: IProps) {
  return (
    <div className="flex flex-col relative">
      <label
        htmlFor=""
        className="text-sm font-semibold flex items-center gap-x-0.5"
      >
        {title} {isRequired && <span className="text-primary text-lg">*</span>}
      </label>
      <span className="absolute bottom-[11px] left-3">
        <SVGS.SearchIcon />
      </span>
      <input
        required
        placeholder="Product Designer"
        className="outline-none focus:border-primary placeholder:font-normal valid:border-primary invalid:border-gray-300 h-12 rounded-md px-9 font-semibold border-2 border-gray-300 transition-all duration-500"
      />
    </div>
  );
}

export default SearchInput;
