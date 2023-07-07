import React from "react";

function Hr({ title = "Today" }) {
  return (
    <div className="flex items-center mb-[12.5px]">
      <hr className="bg-gray-200 w-full border border-gray-200" />
      <div className="mx-2 font-medium">{title}</div>
      <hr className="bg-gray-200 w-full border border-gray-200" />
    </div>
  );
}

export default Hr;
