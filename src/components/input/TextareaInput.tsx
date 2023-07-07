import React from "react";
import TextField from "@mui/material/TextField";

interface IProps {
  value: string;
  name: string;
  type: string;
  onChange: (e: any) => void;
  label: string;
  placeholder: string;
}
function TextareaInput({
  value,
  name,
  type,
  onChange,
  label = "Product name",
  placeholder = "Enter your product name",
}: IProps) {
  return (
    <div>
      <TextField
        multiline
        rows={4}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        variant="outlined"
        className="w-full h-32"
      />
    </div>
  );
}

export default TextareaInput;
