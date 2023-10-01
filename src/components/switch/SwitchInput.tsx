import React from "react";

function SwitchInput({
  onChange,
  value,
  ...restProps
}: {
  value?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label
      className={`w-[50px] h-7 ${
        value ? "bg-gray-200" : "bg-gray-300"
      } rounded-full p-1`}
    >
      <input
        {...restProps}
        onChange={onChange}
        name="state"
        type="checkbox"
        className="hidden"
      />
      <span
        className={`w-5 h-5 rounded-full ${
          value ? "bg-primary" : "bg-white"
        } block ${value ? "ml-[22px]" : "ml-0"}`}
      ></span>
    </label>
  );
}

export default SwitchInput;
