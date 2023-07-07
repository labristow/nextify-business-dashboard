import React, { ChangeEvent, useState } from "react";
import ModalHeader from "../header/ModalHeader";
import { SVGS } from "@/assets/SVGS";
import { formatDateTime } from "@/utils/formatDateTime";
import Image from "next/image";
import TextSelect from "../select/TextSelect";
import { SelectChangeEvent } from "@mui/material";
import { toast } from "react-hot-toast";

interface Product {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
}

interface Delivery {
  type: string;
  shippingAddress: string;
  billingAddress: string;
}

interface Customer {
  phoneNumber: string;
  name: string;
  email: string;
}

interface Order {
  id: string;
  orderDate: string;
  orderTime: string;
  orderPlacedTimestamp: string;
  paymentReceivedTimestamp: string;
  orderFulfilledTimestamp: string;
  status: string;
  currency: string;
  image: string;
  deliveryStatus: string;
  paymentStatus: string;
  products: Product[];
  delivery: Delivery;
  customer: Customer;
}

function ViewOrder({ data }: { data: Order }) {
  const [updatedStatus, setUpdatedStatus] = useState<string>(data.status);
  const handleInputChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    setUpdatedStatus(value);
  };

  const saveStatusHandler = () => {
    const toastElement = toast.loading("Updating status ...");
    setTimeout(() => {
      toast.dismiss(toastElement);
      toast.success("Status updated");
    }, 2000);
  };

  const getTotalOrderAmount = (products: Product[]) => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  return (
    <div className="w-[480px] bg-white min-h-[565px] mx-auto mt-10 shadow-sm rounded-lg py-7 px-5 relative">
      <ModalHeader
        Icon={SVGS.OrderIcon}
        title="My Order details"
        subtitle="View order details and update the status"
      />
      <form
        method="POST"
        autoComplete="off"
        // onSubmit={handleSubmit}
        className="mt-5"
      >
        <div className="flex flex-col">
          <p className="text-lg font-medium">Order ID: {data.id}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Order date:{" "}
            <span className="text-black">
              {formatDateTime(data.orderDate).getDate}
            </span>
          </p>
          <p className="text-sm text-gray-500">
            Order status:
            <span
              className={`${
                updatedStatus === "pending" && "bg-yellow-100 text-yellow-700"
              } ${
                updatedStatus === "processing" && "bg-blue-100 text-blue-700"
              } ${
                updatedStatus === "successful" && "bg-green-100 text-green-700"
              } ${
                updatedStatus === "cancelled" && "bg-gray-100 text-gray-700"
              } ${
                updatedStatus === "failed" && "bg-red-100 text-red-700"
              } p-2 mx-1 text-sm rounded-full capitalize`}
            >
              {updatedStatus || data.status}
            </span>
          </p>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-y-2">
          {data.products.map(({ name, quantity, price, id, image }, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div className="avatar w-[58px] h-[58px] rounded-md bg-gray-100 border border-gray-300">
                  {image && <Image src={image} alt="product_image" />}
                </div>
                <div>
                  <h5 className="text-[16px] text-gray-700">{name}</h5>
                  <p className="text-[13px] text-gray-600 -mt-1">
                    Space Grey | 32GB | 1TB
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-[80px]">
                  <h5 className="text-[15px] font-medium">
                    {data.currency}
                    {price}
                  </h5>
                  <p className="text-[12px] text-gray-600 -mt-1">
                    Qty: {quantity}
                  </p>
                </div>
                <button
                  type="button"
                  className="w-5 flex items-center rotate-90"
                >
                  <SVGS.OutLinkIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-3" />
        <div className="status-update-container">
          <TextSelect
            label="Order status"
            value={updatedStatus ? updatedStatus : data.status}
            name="status"
            options={[
              { label: "Pending", value: "pending" },
              { label: "Processing", value: "processing" },
              { label: "Cancelled", value: "cancelled" },
              { label: "Successful", value: "successful" },
              { label: "Failed", value: "failed" },
            ]}
            onChange={handleInputChange}
          />
          <button
            onClick={saveStatusHandler}
            type="button"
            className="flex items-center text-primary-blue text-sm"
          >
            <span className="w-4 flex">
              <SVGS.PlusIcon color="blue" />
            </span>
            Save
          </button>
        </div>
        <hr className="my-3" />
        <div className="grid grid-cols-2 gap-x-">
          <div className="border-l-2 rounded border-primary-blue px-3">
            <h5 className="text-lg text-gray-700">Order Summary</h5>
            <div className="my-2 flex items-center justify-between">
              <p className="text-sm text-gray-800 -mt-1">Subtotal</p>
              <p className="text-sm text-gray-800 -mt-1">${400}</p>
            </div>
            <div className="my-2 flex items-center justify-between">
              <p className="text-[12px] text-gray-600 -mt-1">Discount</p>
              <p className="text-[12px] text-gray-600 -mt-1">(20%) - $80</p>
            </div>
            <div className="my-2 flex items-center justify-between">
              <p className="text-[12px] text-gray-600 -mt-1">Tax</p>
              <p className="text-[12px] text-gray-600 -mt-1">$15</p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-gray-800 -mt-1">Total</p>
              <p className="font-semibold text-sm text-gray-800 -mt-1">
                ${getTotalOrderAmount(data.products)}
              </p>
            </div>
          </div>
          <div className="border-l-2 rounded border-primary-blue px-3">
            <h5 className="text-lg text-gray-700">Delivery</h5>
            <p className="text-[12px] text-gray-600">Shipping Address</p>
            <p className="text-sm">{data.delivery.shippingAddress}</p>

            <p className="text-[12px] text-gray-600 mt-2">Delivery method</p>
            <p className="text-sm">Free (30 days)</p>
          </div>
        </div>
        {/* {JSON.stringify(data)} */}
      </form>
    </div>
  );
}

export default ViewOrder;
