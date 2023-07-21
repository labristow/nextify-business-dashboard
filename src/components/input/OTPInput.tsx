import React, { ChangeEvent, useRef, useState } from "react";

function OTPInput({
  length = 4,
  handleOtpChange,
}: {
  length: number;
  handleOtpChange: (value: string) => void;
}) {
  const [otpValues, setOtpValues] = useState<string[]>([]);
  const inputRef = useRef<any>(Array(length).fill(""));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const { value } = e.target;
    let newOtpValues = [...otpValues];
    newOtpValues[id] = value.slice(value.length - 1, value.length).trimStart();
    setOtpValues(newOtpValues);
    handleOtpChange(newOtpValues.join(""));

    // Move to next input
    const isNotFirstInput = id !== 0;
    const isNotLastInput = id < inputRef.current.length - 1;
    if (isNotLastInput && newOtpValues[id]) {
      inputRef.current[id + 1].focus();
    }
    // If field is changed and input is empty (we assume its backspace clicked)
    else if (isNotFirstInput && newOtpValues[id] === "") {
      inputRef.current[id - 1].focus();
    }
  };
  return (
    <>
      <div className="flex items-center gap-x-3">
        {inputRef.current.map((_: never, index: number) => (
          <input
            key={index}
            value={otpValues[index]}
            ref={(ref) => (inputRef.current[index] = ref)}
            onChange={(event) => handleInputChange(event, index)}
            placeholder="*"
            type="text"
            className="w-20 flex-shrink-0 h-[85px] focus:border-gray-700 outline-none duration-500 text-center font-bold text-5xl border-2 border-gray-300 rounded-md"
          />
        ))}
      </div>
    </>
  );
}

export default OTPInput;
