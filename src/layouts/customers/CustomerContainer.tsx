import React from "react";
import { OrderDetails } from "@/pages/orders";
import CustomerTable from "./CustomerTable";

export interface ICustomer {
  id: number;
  email: string;
  phoneNumber: string;
  name: string;
  joinedDate: string;
  frequency: number;
}

function CustomerContainer({ customers }: { customers: ICustomer[] }) {
  return (
    <div className="w-full bg-white h-[calc(100vh_-_40vh)] overflow-y-auto">
      <CustomerTable
        customers={customers}
        // navigationResetRef={navigationResetRef}
      />
    </div>
  );
}

export default CustomerContainer;
