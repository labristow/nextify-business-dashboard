import ButtonTab from "@/components/button/ButtonTab";
import React, { useState } from "react";

function SettingHeader({
  viewSettingStatusHandle,
  activeStatus,
  productMetrics
}: {
  viewSettingStatusHandle: (status: string) => void;
  activeStatus: string;
  productMetrics: {text: string; count: number; name: string}[]
}) {
  return (
    <div className="w-full">
      <h4 className="font-bold text-3xl uppercase">Settings</h4>
      <p className="text-sm">
        Customizing and Fine-Tuning Your Store's Configuration
      </p>
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap items-center gap-3 my-6">
          {productMetrics.map((element, index) => (
            <ButtonTab
              key={index}
              element={element}
              activeStatus={activeStatus}
              onClick={() => viewSettingStatusHandle(element.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SettingHeader;
