import OrderSetting from "@/layouts/setting/OrderSetting";
import SettingHeader from "@/layouts/setting/SettingHeader";
import SocialMediaSetting from "@/layouts/setting/SocialMediaSetting";
import APIKeys from "@/layouts/setting/APIKeys";
import WebsiteSetting from "@/layouts/setting/WebsiteSetting";
import React, { useState } from "react";

function Index() {
  const [activeStatus, setActiveStatus] = useState("website-settings");
  const [productMetrics] = useState<
    { text: string; count: number; name: string; Content: () => JSX.Element }[]
  >([
    {
      text: "Website Settings",
      count: -1,
      name: "website-settings",
      Content: WebsiteSetting,
    },
    {
      text: "Social Media",
      count: -1,
      name: "social-media",
      Content: SocialMediaSetting,
    },
    {
      text: "API Keys",
      count: -1,
      name: "api-keys",
      Content: APIKeys,
    },
    {
      text: "Order settings",
      count: -1,
      name: "order-settings",
      Content: OrderSetting,
    },
  ]);

  const viewSettingStatusHandle = (status: string) => {
    setActiveStatus(status);
  };
  return (
    <div className="slide-up bg-gray-50 py-5 rounded-lg px-6 md:px-0">
      <SettingHeader
        productMetrics={productMetrics}
        activeStatus={activeStatus}
        viewSettingStatusHandle={viewSettingStatusHandle}
      />
      <div className="bg-white p-5">
        {productMetrics.map(
          ({ name, Content }, id) =>
            activeStatus === name && <Content key={id} />
        )}
      </div>
    </div>
  );
}

export default Index;
