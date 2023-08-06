import { SVGS } from "@/assets/SVGS";
import ButtonForm from "@/components/button/ButtonForm";
import MultiSelect from "@/components/select/MultiSelect";
import states from "@/mock/states.json";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

function OrderSetting() {
  const [orderData, setOrderData] = useState<{
    supportAllState: string;
    supportedStates: string[];
    paymentGateways: string[];
    shippingMethods: string[];
  }>({
    supportAllState: "yes",
    supportedStates: [],
    paymentGateways: [],
    shippingMethods: [],
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    const { value, name } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };
  const handleSelectChange = (value: string[], name: string) => {
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="header flex items-start gap-3 mt-5">
        <div className="mt-2">
          <SVGS.SettingIcon />
        </div>
        <div>
          <h4 className="text-[20px] font-semibold">Order setting</h4>
          <p className="-mt-2 text-sm">
            Help your customers to order seamlessly from you.
          </p>
        </div>
      </div>
      <div className="mt-10 _w-[440px] grid grid-cols-2 gap-10 px-5">
        <div className="select-supported-states">
          <h5 className="font-semibold">Supported States</h5>
          <p className="text-sm">
            Do you want to deliver to all states in Nigeria?
          </p>

          <FormControl className="w-[200px]">
            <RadioGroup
              onChange={handleChange}
              aria-labelledby="support-all-states-radio-buttons-group-label"
              defaultValue="yes"
              name="supportAllState"
            >
              <div className="grid grid-cols-2">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </div>
            </RadioGroup>
          </FormControl>
          {orderData.supportAllState === "no" && (
            <div className="state-selection-container w-full">
              <MultiSelect
                name="supportedStates"
                value={orderData.supportedStates}
                options={states}
                onChange={handleSelectChange}
              />
            </div>
          )}
        </div>
        <div className="payment-gateway-container w-full">
          <h5 className="font-semibold">Payment Gateways</h5>
          <p className="text-sm">
            Choose the payment gateway you wish to process your payment
          </p>

          <MultiSelect
            name="paymentGateways"
            value={orderData.paymentGateways}
            options={[
              { value: "stripe", label: "Stripe Payment" },
              { value: "flutterwave", label: "Flutterwave Payment" },
            ]}
            onChange={handleSelectChange}
          />
        </div>

        <div className="shipping-method-container w-full">
          <h5 className="font-semibold">Shipping method</h5>
          <p className="text-sm">Choose the method for your business</p>

          <MultiSelect
            name="shippingMethods"
            value={orderData.shippingMethods}
            options={[
              { value: "pay-on-delivery", label: "Pay on delivery" },
              { value: "pay-before-delivery", label: "Pay before delivery" },
            ]}
            onChange={handleSelectChange}
          />
        </div>
      </div>
      <div className="w-[440px] px-5 mt-3">
        <ButtonForm
          type="submit"
          text="Save order settings"
          className="w-full h-14 bg-primary-blue"
        />
      </div>
    </div>
  );
}

export default OrderSetting;
