import React from "react";

function NextButton({ isBtnActive }: { isBtnActive: boolean }) {
  return (
    <button
      disabled={!isBtnActive}
      className={`px-7 py-4 rounded-xl bg-primary ${
        isBtnActive ? "opacity-100" : "opacity-75"
      } text-white font-bold font-primary transition-all duration-500`}
    >
      Next Step
    </button>
  );
}

export default NextButton;
