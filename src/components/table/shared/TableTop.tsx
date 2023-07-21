import Link from "next/link";
import React from "react";

function TableTop({ title = "Recent transactions", link = "#" }) {
  return (
    <div className="w-full h-[81.5px] flex items-center justify-between">
      <h4 className="font-medium text-2xl">{title}</h4>
      <Link href={link}>
        <span className="hidden lg:flex font-medium text-primary-blue-dark text-sm">See more</span>
      </Link>
    </div>
  );
}

export default TableTop;
