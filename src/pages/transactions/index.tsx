import TransactionTable from "@/components/table/transactionTable/TransactionTable";
import React from "react";

function Index() {
  return (
    <div className="w-full slide-up px-6 md:px-0">
      <div className="header py-8">
        <h3 className="text-3xl uppercase font-bold">All transactions</h3>
        <p className="text-sm">
          View all transaction records and details here.
        </p>
      </div>
      <TransactionTable />
    </div>
  );
}

export default Index;
