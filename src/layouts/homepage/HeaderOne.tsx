import React from "react";

interface HeaderOne {
  title?: string;
  subTitle?: string;
  color?: string;
}
function HeaderOne({ title, subTitle, color }: HeaderOne) {
  return (
    <div className="flex flex-col items-center justify-center px-5 lg:px-0">
      <h2
        style={{ color: color }}
        className="title font-secondary text-white text-center lg:text-left mix-blend-difference text-5xl lg:text-7xl font-semibold"
      >
        {title}
      </h2>
      <h4
        style={{ color: color }}
        className="title text-center lg:text-left text-2xl lg:text-3xl font-medium text-gray-100"
      >
        {subTitle}
      </h4>
    </div>
  );
}

export default HeaderOne;
