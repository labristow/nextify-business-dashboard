import React from "react";

function ButtonContainer({ children }: { children: JSX.Element }) {
  return (
    <div className="w-full flex items-center justify-end py-8 gap-2">{children}</div>
  );
}

export default ButtonContainer;
