import React from "react";

function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[560px]">{children}</div>
    </div>
  );
}

export default Container;
