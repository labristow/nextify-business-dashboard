import React from "react";
import ModalHeader from "../header/ModalHeader";
import { SVGS } from "@/assets/SVGS";

function ViewTransaction({ data }: any) {
  return (
    <div className="w-full lg:w-[480px] bg-white min-h-[565px] mx-auto mt-10 shadow-sm rounded-lg py-7 px-5 relative">
      <ModalHeader
        Icon={SVGS.TransactionIcon}
        title="Transaction details"
        subtitle="View more details of your transaction"
      />
      {/* {JSON.stringify(data)} */}

      <div className="w-full mt-10 flex flex-wrap">
        <div className="w-full h-14">
          <span className="label text-sm">Transaction Status</span>
          <h5 className="font-semibold text-[16px]">{data.status}</h5>
        </div>
        <div className="w-full h-14">
          <span className="label text-sm">Transaction Type</span>
          <h5 className="font-semibold text-[16px]">{data.type}</h5>
        </div>
        <div className="w-full h-14">
          <span className="label text-sm">Transaction Date</span>
          <h5 className="font-semibold text-[16px]">{data.date}</h5>
        </div>
        <div className="w-full h-14">
          <span className="label text-sm">Beneficiary Name</span>
          <h5 className="font-semibold text-[16px]">{data.recipientName}</h5>
        </div>
        <div className="w-full h-14">
          <span className="label text-sm">Beneficiary Number</span>
          <h5 className="font-semibold text-[16px]">{data.recipientNumber}</h5>
        </div>
      </div>

      <div className="action-buttons w-full absolute left-0 bottom-5 flex items-center justify-center">
        <button className="text-sm flex items-center gap-x-2">
          <SVGS.ImageIcon /> Share Screenshot
        </button>
      </div>
    </div>
  );
}

export default ViewTransaction;
