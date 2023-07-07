import React from "react";
import SellerDetails from "../card/SellerDetails";
import ShippingDetails from "../card/ShippingDetails";

function RightSidebar() {
  return (
    <div className="col-span-2 grid gap-y-5">
      <ShippingDetails />
      {/* <SellerDetails /> */}
    </div>
  );
}

export default RightSidebar;
