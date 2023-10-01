import React, { RefObject, useEffect, useRef, useState } from "react";
import WhatWeDoCard from "./WhatWeDoCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import InventoryImage from "@/assets/svg/inventory.svg";
import CustomizeImage from "@/assets/svg/customize.svg";
import EazySetupImage from "@/assets/svg/easy-setup.svg";
import SecurePaymentImage from "@/assets/svg/secure-payment.svg";
import AboutImage from "@/assets/images/login-hero-hero.avif";
import Image from "next/image";
import CaretRightArrow from "@/components/arrow/CaretRightArrow";

gsap.registerPlugin(ScrollTrigger);
const colors = ["#FCECE5", "#e5fbfc", "#fbe5fc", "#e5e5fc"];
// const cardLists = ;

function WhatWeDo() {
  const [features] = useState([
    {
      Icon: InventoryImage,
      title: "Effortless Product Management",
      subtitle:
        "Manage inventory, listings, and shipping easily with intuitive tools.",
      buttonText: "Manage Now",
    },
    {
      Icon: CustomizeImage,
      title: "Customize Your Online Store",
      subtitle:
        "Match your brand and offerings with our easy-to-use website builder.",
      buttonText: "Create Store",
    },
    {
      Icon: EazySetupImage,
      title: "Quick and Easy Setup",
      subtitle:
        "Get your online store running in minutes with our simple setup.",
      buttonText: "Start Selling",
    },
    {
      Icon: SecurePaymentImage,
      title: "Accept Secure Payments",
      subtitle: "Offer various payment options for increased trust and sales.",
      buttonText: "Accept Payments",
    },
  ]);
  return (
    <div className="w-full min-h-screen py-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-28">
        <div className="left-container lg:pr-12">
          <h2 className="text-4xl lg:text-7xl font-semibold font-secondary">
            Empowering <span className="font-primary font-light">your</span>{" "}
            ambition
          </h2>
          <h5 className="text-2xl lg:text-4xl font-medium mt-5">
            Get the funds you need with our hassle-free loan services, designed
            to support your dreams and aspirations..
          </h5>
        </div>
        <div className="right-container py-10 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {features.map(({ Icon, title, subtitle, buttonText }, index) => (
              <div
                key={index}
                className={`group w-full p-10 min-h-72 rounded-3xl bg-white border border-gray-200 hover:shadow-2xl hover:bg-purple-50 hover:border-primary duration-500`}
              >
                <Image
                  src={Icon}
                  alt="icon_image"
                  className="w-14 h-14 mb-5 border border-primary bg-primary rounded-full p-2.5"
                />
                <h4 className="text-xl font-secondary h-14">{title}</h4>
                <p className="text-sm">{subtitle}</p>
                <button className="border px-6 inline-block h-12 mt-5 group-hover:bg-primary duration-500 text-left text-sm uppercase rounded-full group-hover:text-white hover:animate-pulse">
                  {buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
