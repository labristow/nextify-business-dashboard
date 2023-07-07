import React from "react";
import ModalHeader from "../header/ModalHeader";
import { SVGS } from "@/assets/SVGS";

function ViewTransaction({ data }: any) {
  return (
    <div className="w-[480px] bg-white min-h-[565px] mx-auto mt-10 shadow-sm rounded-lg py-7 px-5 relative">
      <ModalHeader
        Icon={SVGS.TransactionIcon}
        title="Transaction details"
        subtitle="View more details of your transaction"
      />
      {JSON.stringify(data)}
    </div>
  );
}

export default ViewTransaction;
