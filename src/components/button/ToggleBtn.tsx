import React, { useState } from "react";

interface ToggleBtn {
  handleToggle: (value: boolean, name: string) => void;
  name: string;
  status: boolean;
}
function ToggleBtn({ handleToggle, name, status }: ToggleBtn) {
  const [state, setState] = useState<boolean>(status);

  const toggleSwitch = () => {
    const _status = !state;
    setState(_status);
    handleToggle(_status, name);
  };

  return (
    <div>
      <button
        onClick={toggleSwitch}
        className={`w-[54px] h-8 rounded-full relative border border-gray-300 p-1 duration-500 ${
          status === true ? "bg-primary" : "bg-gray-200"
        }`}
      >
        <span
          className={`toggler block h-6 w-6 rounded-full duration-500 ${
            status === true ? "ml-[20px] bg-gray-200" : "ml-0 bg-black"
          }`}
        ></span>
      </button>
    </div>
  );
}

export default ToggleBtn;
