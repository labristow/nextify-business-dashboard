import ButtonTab from "@/components/button/ButtonTab";
import React, { useEffect, useState } from "react";
import { IOrderStatusProps } from "@/pages/orders";

interface OrderHeader {
  metrics: IOrderStatusProps;
  activeStatus: string;
  viewOrderStatusHandler: (status: string) => void;
}
function OrderHeader({
  metrics,
  activeStatus,
  viewOrderStatusHandler,
}: OrderHeader) {
  const [productMetrics, setProductMetrics] = useState<
    { text: string; count: number; name: string }[]
  >([]);
  useEffect(() => {
    setProductMetrics([
      { text: "All", count: metrics.all, name: "all" },
      { text: "Pending", count: metrics.pending, name: "pending" },
      { text: "Processing", count: metrics.processing, name: "processing" },
      { text: "Successful", count: metrics.successful, name: "successful" },
      { text: "Cancelled", count: metrics.cancelled, name: "cancelled" },
      { text: "Failed", count: metrics.failed, name: "failed" },
    ]);
  }, [metrics]);

  // const viewHandler = (status: string) => setActiveStatus(status);
  return (
    <div className="w-full bg-gray-50">
      <h4 className="font-bold text-3xl uppercase">Orders</h4>
      <p className="text-sm">
        Streamlining and Tracking Your Customer Purchases
      </p>
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap items-center gap-3 my-6">
          {productMetrics.map((element, index) => (
            <ButtonTab
              key={index}
              element={element}
              activeStatus={activeStatus}
              onClick={() => viewOrderStatusHandler(element.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderHeader;
