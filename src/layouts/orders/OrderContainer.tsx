import React from "react";
import OrderTable from "./Table";
import { OrderDetails } from "@/pages/orders";

function OrderContainer({
  currentOrders,
  navigationResetRef,
}: {
  currentOrders: OrderDetails[];
  navigationResetRef: any;
}) {
  return (
    <div className="w-full bg-white h-[calc(100vh_-_40vh)] overflow-y-auto">
      <OrderTable
        orders={currentOrders}
        navigationResetRef={navigationResetRef}
      />
    </div>
  );
}

export default OrderContainer;
