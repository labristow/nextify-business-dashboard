import React from "react";
import TextField from "@mui/material/TextField";

interface IProps {
  className?: string;
  value: string;
  name: string;
  type: string;
  onChange: (e: any) => void;
  label: string;
  placeholder: string;
  rows?: number;
}
function TextareaInput({
  className,
  value,
  name,
  type,
  onChange,
  label = "Product name",
  placeholder = "Enter your product name",
  rows = 4,
}: IProps) {
  return (
    <div>
      <TextField
        multiline
        rows={rows}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        variant="outlined"
        className={`w-full ${className}`}      />
    </div>
  );
}

export default TextareaInput;
