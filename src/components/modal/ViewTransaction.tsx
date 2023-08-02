import React from "react";
import ModalHeader from "../header/ModalHeader";
import { SVGS } from "@/assets/SVGS";
import toast from "react-hot-toast";
import html2canvas from "html2canvas";

function TransactionRow({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="w-full h-14">
      <span className="label text-[13px]">{title}</span>
      <h5 className="font-semibold text-[16px]">{subTitle}</h5>
    </div>
  );
}

function ViewTransaction({ data }: any) {
  const receiptRef = React.useRef<HTMLDivElement>(null);

  const convertReceiptTo = async (type: string) => {
    if (type === "image" && receiptRef.current) {
      // const response = await html2canvas(receiptRef.current);
      // const image = response.toDataURL("image/png");
      return "image";
    }
  };
  const shareReceipt = async () => {
    const _toast = toast.loading("Converting...");
    const receipt = await convertReceiptTo("image");
    if (window.navigator.share && receipt) {
      toast.dismiss(_toast);
      window.navigator.share({
        title: "Transaction Details",
        // files: receipt,
      });
    } else {
      toast.error("Your browser does not support sharing");
    }
  };
  return (
    <div
      ref={receiptRef}
      className="w-full lg:w-[480px] bg-white min-h-[365px] mx-auto mt-10 shadow-sm rounded-lg py-7 px-5 relative"
    >
      <ModalHeader
        Icon={SVGS.TransactionIcon}
        title="Transaction details"
        subtitle="View more details of your transaction"
      />
      <div className="w-full mt-10 mb-20 grid grid-cols-2">
        <TransactionRow
          title="Amount"
          subTitle={`${data.currency}${data.amount}`}
        />
        <TransactionRow title="Transaction Status" subTitle={data.status} />
        <TransactionRow title="Transaction Type" subTitle={data.type} />
        <TransactionRow title="Transaction Date" subTitle={data.date} />
        <TransactionRow
          title="Beneficiary Name"
          subTitle={data.recipientName}
        />
        <TransactionRow
          title="Beneficiary Number"
          subTitle={data.recipientNumber}
        />
      </div>

      <div className="action-buttons w-full absolute left-0 bottom-5 flex items-center justify-center">
        <button
          onClick={shareReceipt}
          className="border border-gray-200 bg-gray-200 hover:bg-transparent h-14 px-4 rounded-md text-sm flex items-center gap-x-2 duration-500"
        >
          <span className="flex w-6 h-12">
            <SVGS.ShareIcon />
          </span>
          Share Screenshot
        </button>
      </div>
    </div>
  );
}

export default ViewTransaction;
