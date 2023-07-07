import React from "react";
interface IProps {
  isRequired?: boolean;
  title?: string;
  options: { label: string; value: string }[];
}
function TextSelect({ isRequired = true, title = "Title", options }: IProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor=""
        className="text-sm font-semibold flex items-center gap-x-0.5"
      >
        {title} {isRequired && <span className="text-primary text-lg">*</span>}
      </label>
      <select
        name=""
        id=""
        required
        placeholder="Product Designer"
        className="outline-none focus:border-primary valid:border-primary invalid:border-gray-300 h-12 rounded-md px-4 font-semibold border-2 border-gray-300 transition-all duration-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} className="text-sm">
            Select {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TextSelect;