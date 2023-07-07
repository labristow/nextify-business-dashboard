import React from "react";
import data from "@/components/table/transactionTable/data.json";
import TableTop from "@/components/table/shared/TableTop";
import TablePartition from "../shared/TablePartition";
import { useDispatch } from "react-redux";
import { showOverlay } from "@/features/overlay/overlaySlice";

function TransactionTable() {
  const dispatch = useDispatch();
  const showDetailsHandler = (transaction: any) => {
    // alert(JSON.stringify(transaction));
    dispatch(
      showOverlay({
        name: "view-transaction-overlay",
        data: transaction,
      })
    );
  };
  return (
    <div className="w-full overflow-x-auto bg-white h-[80vh] border border-gray-200 rounded-xl px-8 py-3">
      <TableTop link={"#"} title={"Recent transactions"} />
      <div className="w-full  min-w-[350px] h-[calc(80vh_-_150px)] overflow-y-scroll custom__scrollbar pr-6">
        {data.transactions.today && (
          <TablePartition
            showDetailsHandler={showDetailsHandler}
            data={data.transactions.today}
            title="Today"
          />
        )}
        {data.transactions.yesterday && (
          <TablePartition
            showDetailsHandler={showDetailsHandler}
            data={data.transactions.yesterday}
            title="Yesterday"
          />
        )}
        {data.transactions.others && (
          <TablePartition
            showDetailsHandler={showDetailsHandler}
            data={data.transactions.others}
            title="Others"
          />
        )}
      </div>
    </div>
  );
}

export default TransactionTable;
