import { SVGS } from "@/assets/SVGS";
import React from "react";
import ButtonLink from "../button/ButtonLink";
import { useDispatch } from "react-redux";
import { showOverlay } from "@/features/overlay/overlaySlice";
import { currencyConverter } from "@/utils/currenyConverter";
import { IProductProps } from "@/pages/products";


function ProductCard(props: IProductProps) {
  const {
    status,
    oldprice,
    price,
    name,
    description,
    category,
    images,
    url,
    currency,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="group min-w-[288px] w-full sm:w-[288px] 2xl:w-full h-[48vh] border-2 border-gray-200 rounded-2xl relative">
      <div
        className={`w-full h-[36vh] rounded-2xl overflow-hidden hover:rounded-none transition-all duration-500`}
      >
        <img
          src={typeof images[0] === "string" ? images[0] : URL.createObjectURL(images[0])}
          alt=""
          className="w-full h-full object-cover scale-100 rounded-tl-2xl rounded-tr-2xl transition-all duration-500"
        />
      </div>
      <div className="p-3">
        <h5 className="truncate w-full font-semibold uppercase">{name}</h5>
        <div className="flex items-center gap-2">
          {oldprice && oldprice !== "0" && (
            <h5 className="font-semibold text-gray-400 relative line-through decoration-primary-blue">
              <span>
                {currency}
                {currencyConverter(parseInt(oldprice))}
              </span>
              {/* <span className="strike h-[1px] w-full absolute bottom-2.5 bg-primary-blue -rotate-[10deg] flex z-20"></span> */}
            </h5>
          )}
          <h5 className="font-semibold text-primary-blue">
            {currency}
            {currencyConverter(parseInt(price))}
          </h5>
        </div>
        <div className="absolute top-0 left-0 rounded-2xl bg-[#1a57d11e] backdrop-blur-sm w-full h-full scale-x-100 scale-y-0 group-hover:scale-y-100 z-20 px-4 flex items-center justify-center flex-col gap-3 duration-200">
          <ButtonLink
            href={url}
            target="_blank"
            className="w-[180px] flex items-center justify-center h-10 bg-dark border-2 border-dark text-[12px] text-white rounded-full"
          >
            <React.Fragment>
              <span>
                <SVGS.ExternalIcon color="#FFFFFF" />
              </span>
              View Product
            </React.Fragment>
          </ButtonLink>
          <ButtonLink
            onClick={() =>
              dispatch(
                showOverlay({
                  name: "update-product-overlay",
                  data: { ...props },
                })
              )
            }
            className="w-[185px] flex items-center justify-center h-10 bg-dark text-[12px] text-white rounded-full"
          >
            <>
              <span>
                <SVGS.EditIcon color="#FFFFFF" />
              </span>
              Update Product
            </>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
