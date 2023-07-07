import React from "react";
import Hr from "./Hr";
import TableColumn from "./TableColumn";

interface TablePartition {
  data: any;
  title: string;
  showDetailsHandler: (transaction: any) => void;
}
function TablePartition({ data, title, showDetailsHandler }: TablePartition) {
  return (
    <div className="w-full h-auto">
      <Hr title={title} />
      <div className="flex flex-col">
        {data?.map((transaction: any, index: number) => (
          <TableColumn
            onClick={() => showDetailsHandler(transaction)}
            key={index}
            data={transaction}
          />
        ))}
      </div>
    </div>
  );
}

export default TablePartition;
