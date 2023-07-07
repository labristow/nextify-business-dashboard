import React from "react";

function TextFocusOne({ children }: { children: string }) {
  return (
    <div className="relative inline-block">
      <span className="inline-block mix-blend-difference z-10 before:absolute before:left-0 before:bottom-4 before:h-2.5 before:w-full before:bg-primary-blue"></span>
      <p className="relative z-20 inline-block">{children}</p>
    </div>
  );
}

export default TextFocusOne;
