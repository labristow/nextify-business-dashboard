import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { SVGS } from "@/assets/SVGS";

interface IProps {
  value: string;
  name: string;
  onChange: (e: any) => void;
  label: string;
  placeholder: string;
  className?: string;
}
function PasswordInput({
  value,
  name,
  onChange,
  label = "Password",
  placeholder = "Enter your password",
  className,
  ...restProps
}: IProps) {
  const [type, setType] = useState("password");

  const toggleType = () =>
    setType((prev) => (prev === "password" ? "text" : "password"));
  return (
    <div className="relative">
      <TextField
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        variant="outlined"
        className={`w-full ${className}`}
        InputProps={{ className: `w-full ${className}` }}
        {...restProps}
      />
      <button
        onClick={toggleType}
        className={`absolute right-3 top-3 flex items-center w-6 ${
          type === "password" ? "opacity-30" : "opacity-100"
        }`}
      >
        <SVGS.EyeIcon />
      </button>
    </div>
  );
}

export default PasswordInput;
