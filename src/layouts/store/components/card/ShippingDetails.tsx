import Image from "next/image";
import React, { useState, useEffect } from "react";
import PrimeLogo from "@/assets/prime-logo.png";
import TextSelect from "@/components/select/TextSelect";
import statesData from "@/mock/states.json";
import { SelectChangeEvent } from "@mui/material";

function ShippingDetails() {
  const [shippingData, setShippingData] = useState<{
    state: string;
    lga: string;
    address: string;
  }>({
    state: "",
    lga: "",
    address: "",
  });
  const [allStates, setAllStates] = useState<
    { label: string; value: string }[]
  >([]);
  const [selectedLGA, setSelectedLGA] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const states = statesData.map(({ code, name }) => ({
      label: name,
      value: code,
    }));
    setAllStates(states);
  }, []);

  const handleShippingDetailsChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setShippingData({
      ...shippingData,
      [name]: value,
    });
    if (name === "state") {
      const lga = statesData
        .filter(({ code }) => code === value)[0]
        .lgas.map((lga: string) => ({
          label: lga,
          value: lga,
        }));
      setSelectedLGA(lga);
    }
  };

  return (
    <div className=" h-[76vh] border border-gray-300">
      <nav className="w-full flex items-center justify-center h-12 text-sm uppercase text-white bg-primary-blue border-b border-gray-200">
        Delivery & Returns
      </nav>
      <div className="px-3">
        <div className="border-b border-gray-200 py-3">
          <Image src={PrimeLogo} width={48} alt="" />
          <p className="text-sm mt-2">
            <b>Enjoy free and fast delivery</b> on all your orders within Lagos,
            Ibadan & Abuja.
          </p>
        </div>

        <div className="w-full shipping py-3">
          <h5 className="text-sm uppercase">Choose your location</h5>
          <p className="text-xs text-gray-500">
            Where will you want your product delivered to?
          </p>

          <div className="mt-5">
            <TextSelect
              label="State"
              name={"state"}
              value={shippingData.state}
              options={allStates}
              handleChange={handleShippingDetailsChange}
            />
          </div>
          <div className="mt-5">
            <TextSelect
              disabled={selectedLGA.length === 0}
              label="Local government"
              name={"lga"}
              value={shippingData.lga}
              options={selectedLGA}
              handleChange={handleShippingDetailsChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;
