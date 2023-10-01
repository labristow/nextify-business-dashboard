import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import markdownFormatter from "@/utils/markdownFomatter";
import SwitchInput from "../switch/SwitchInput";

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
function MarkdownEditor({
  className,
  value,
  name,
  type,
  onChange,
  label = "Product name",
  placeholder = "Enter your product name",
  rows = 4,
}: IProps) {
  const [viewOutput, setViewOutput] = useState(false);

  const toggleEditor = () => setViewOutput((prevState) => !prevState);
  return (
    <div>
      <div className="w-full h-[275px]">
        {!viewOutput && (
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
            className={`w-full ${className}`}
          />
        )}
        {viewOutput && (
          <div
            className="shadow top-0 left-0 w-full h-64 p-3 overflow-y-auto"
            dangerouslySetInnerHTML={{
              __html: markdownFormatter(value),
            }}
          />
        )}
      </div>
      <div className="toggle-editor flex items-center justify-between">
        <p className="text-md">
          Toggle to {viewOutput ? "edit content" : "view end result"}
        </p>
        <SwitchInput onChange={toggleEditor} value={viewOutput} />
      </div>
    </div>
  );
}

export default MarkdownEditor;
