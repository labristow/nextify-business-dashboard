import OrderHeader from "@/layouts/orders/OrderHeader";
import OrderContainer from "@/layouts/orders/OrderContainer";
import React, { useEffect, useRef, useState } from "react";
import orderLists from "@/mock/orders.json";

export interface IOrderStatusProps {
  all: number;
  pending: number;
  processing: number;
  successful: number;
  cancelled: number;
  failed: number;
}
interface OrderProduct {
  name: string;
  quantity: number;
  price: number;
  category: string;
}

interface OrderDelivery {
  type: string; //"door-step" | "head-office";
  shippingAddress: string;
  billingAddress: string;
}

interface OrderCustomer {
  phoneNumber: string;
  name: string;
  email: string;
}

export interface OrderDetails {
  id: string;
  orderDate: string;
  orderTime: string;
  orderPlacedTimestamp: string;
  paymentReceivedTimestamp: string;
  orderFulfilledTimestamp: string;
  status: string; //"pending" | "successful" | "failed" | "cancel";
  deliveryStatus: string;
  paymentStatus: string; //"paid" | "pay-on-delivery";
  products: OrderProduct[];
  delivery: OrderDelivery;
  customer: OrderCustomer;
}

function Index() {
  const [metrics, setMetrics] = useState<IOrderStatusProps>({
    all: 0,
    pending: 0,
    processing: 0,
    successful: 0,
    cancelled: 0,
    failed: 0,
  });
  const navigationResetRef = useRef<any>(null);
  const [activeStatus, setActiveStatus] = useState("pending");
  const [orders, setOrders] = useState<OrderDetails[]>([]);
  const [currentOrders, setCurrentOrders] = useState<OrderDetails[]>([]);
  useEffect(() => {
    setOrders(orderLists);
  }, []);

  useEffect(() => {
    let _metrics = {
      all: 0,
      pending: 0,
      processing: 0,
      successful: 0,
      cancelled: 0,
      failed: 0,
    };
    orders.forEach(({ status }) => {
      _metrics.all = _metrics.all + 1;
      switch (status) {
        case "pending":
          _metrics.pending = _metrics.pending + 1;
          break;
        case "processing":
          _metrics.processing = _metrics.processing + 1;
          break;
        case "successful":
          _metrics.successful = _metrics.successful + 1;
          break;
        case "cancelled":
          _metrics.cancelled = _metrics.cancelled + 1;
          break;
        case "failed":
          _metrics.failed = _metrics.failed + 1;
          break;
      }
    });
    setMetrics(_metrics);
  }, [orders]);

  const viewOrderStatusHandler = (status: string) => {
    // Reset Navigation
    if (navigationResetRef.current) {
      navigationResetRef.current(1);
    }
    if (status === "all") {
      setActiveStatus("all");
      setCurrentOrders(orders);
    } else {
      const matchedOrder = orders.filter(
        (product) => product.status === status
      );
      setActiveStatus(status);
      setCurrentOrders(matchedOrder);
    }
  };

  useEffect(() => {
    viewOrderStatusHandler(activeStatus);
  }, [orders]);

  return (
    <div className="slide-up py-5 rounded-lg px-6 md:px-0">
      <OrderHeader
        metrics={metrics}
        activeStatus={activeStatus}
        viewOrderStatusHandler={viewOrderStatusHandler}
      />
      <OrderContainer
        currentOrders={currentOrders}
        navigationResetRef={navigationResetRef}
      />
    </div>
  );
}

export default Index;
