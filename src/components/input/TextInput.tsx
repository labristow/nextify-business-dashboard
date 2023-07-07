import React from "react";
import TextField from "@mui/material/TextField";

interface IProps {
  value: string;
  name: string;
  type: string;
  onChange: (e: any) => void;
  label: string;
  placeholder: string;
  className?: string;
  rows?: number;
  isMultiLine?: boolean;
}
function TextInput({
  value,
  name,
  type,
  onChange,
  label = "Product name",
  placeholder = "Enter your product name",
  className,
  rows,
  isMultiLine = false,
  ...restProps
}: IProps) {
  return (
    <div>
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
        multiline={isMultiLine}
        rows={isMultiLine ? rows : 1}
        {...restProps}
      />
    </div>
  );
}

export default TextInput;
