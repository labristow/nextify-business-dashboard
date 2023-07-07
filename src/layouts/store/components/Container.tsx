import React from "react";
import ProductDetails from "./card/ProductDetails";
import RightSidebar from "./sidebar/RightSidebar";

function Container() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-8 gap-5 py-5">
        <ProductDetails />
        <RightSidebar />
      </div>
      <div className="w-full h-[320px] mb-5 border border-primary-blue rounded"></div>
    </div>
  );
}

export default Container;
