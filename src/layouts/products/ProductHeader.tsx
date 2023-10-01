import ButtonTab from "@/components/button/ButtonTab";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showOverlay } from "@/features/overlay/overlaySlice";
import ButtonForm from "@/components/button/ButtonForm";
import { IProductStatusProps } from "@/pages/products";
import { Switch } from "@mui/material";
interface ProductHeader {
  activeStatus: string;
  showCategories?: boolean;
  setShowCatgories: (state: boolean) => void;
  metrics: IProductStatusProps;
  viewProductStatusHandler: (status: string) => void;
}
function ProductHeader({
  metrics,
  activeStatus,
  showCategories,
  setShowCatgories,
  viewProductStatusHandler,
}: ProductHeader) {
  const dispatch = useDispatch();
  const [productMetrics, setProductMetrics] = useState<
    { text: string; count: number; name: string }[]
  >([]);
  useEffect(() => {
    setProductMetrics([
      { text: "All", count: metrics.all, name: "all" },
      { text: "Active", count: metrics.active, name: "active" },
      { text: "Draft", count: metrics.draft, name: "draft" },
      { text: "Discount", count: metrics.discount, name: "discount" },
    ]);
  }, [metrics]);

  const handleChange = () => {
    setShowCatgories(!showCategories);
  };

  return (
    <div className="w-full bg-gray-50 px-6 md:px-0">
      <div className="flex items-center justify-between">
        <div className="header">
          <h4 className="font-bold text-3xl uppercase">My Store</h4>
          <p className="text-sm">Managing Your Online Shop with Ease</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm">Show your product categories?</p>
          <Switch checked={showCategories} onChange={handleChange} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="flex flex-wrap items-center gap-3 my-6">
          {productMetrics.map((element, index) => (
            <ButtonTab
              key={index}
              element={element}
              activeStatus={activeStatus}
              onClick={() => viewProductStatusHandler(element.name)}
            />
          ))}
        </div>
        <div className="w-[200px] flex items-center">
          <ButtonForm
            className="w-full h-12 font-medium"
            text="Create new product"
            onClick={() =>
              dispatch(
                showOverlay({
                  name: "add-product-overlay",
                  data: null,
                })
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
