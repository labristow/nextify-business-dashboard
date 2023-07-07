import { SVGS } from "@/assets/SVGS";
import React, { ChangeEvent, useRef, useState } from "react";

interface DetailsBox {
  Icon: React.FunctionComponent;
  label: string;
  value: string;
  name: string;
  type?: string;
  isEditable?: boolean;
  onChange?: (props: { name: string; value: string }) => void;
}
function DetailsBox(props: DetailsBox) {
  const {
    Icon,
    label,
    value,
    name,
    type = "text",
    isEditable = false,
    onChange,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isReadOnly, setIsReadOnly] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState(value ? value : "");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue(value);
    if (onChange) {
      onChange({
        name,
        value,
      });
      console.log(name, value);
    }
  };

  const toggleReadOnlyState = () => {
    setIsReadOnly((prev) => !prev);
    console.log(isReadOnly);
    if (isReadOnly && inputRef.current) {
      inputRef.current?.focus();
      // Set the cursor position at the end of the text
      const { value } = inputRef.current;
      inputRef.current.setSelectionRange(value.length, value.length);
    }
  };

  const handleOnBlur = () => {
    setIsReadOnly(true);
  };
  return (
    <div className="my-5">
      <div className="flex items-center gap-x-2">
        <span>
          <Icon />
        </span>
        <p className="text-[15px] font-semibold">{label}</p>
        {isEditable && (
          <button
            onClick={toggleReadOnlyState}
            className="w-6 h-6 scale-100 hover:scale-125 duration-500 flex items-center justify-center rounded-full bg-black"
          >
            <SVGS.EditIcon color="white" size="18" />
          </button>
        )}
      </div>
      {isEditable ? (
        <input
          ref={inputRef}
          readOnly={isReadOnly}
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type={type}
          className="ml-8 w-full bg-transparent outline-none text-sm"
          name={name}
          value={inputValue}
        />
      ) : (
        <h5 className="ml-8 text-sm mt-0.5">admin@happycoffeenigeria.com</h5>
      )}
    </div>
  );
}

export default DetailsBox;
