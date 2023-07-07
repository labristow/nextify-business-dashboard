import React, { RefObject, useEffect, useRef, useState } from "react";
import WhatWeDoCard from "./WhatWeDoCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const colors = ["#FCECE5", "#e5fbfc", "#fbe5fc", "#e5e5fc"];
const cardLists = [
  {
    title: "Start Managing Your Products Easily",
    subtitle:
      "Effortlessly manage your inventory, product listings, and shipping details with our intuitive product management tools. Keep track of your stock levels, easily update product information, and streamline your shipping process all in one place.",
    buttonText: "Manage Products Now",
  },
  {
    title: "Create Your Custom Online Store Now",
    subtitle:
      "Customize your online store to match your branding and product offerings with our easy-to-use website builder. Choose from a variety of customizable templates and themes, and easily add your own logo, images, and content to make your store stand out from the crowd.",
    buttonText: "Create Your Store",
  },
  {
    title: "Get Started with Our Easy Setup Process",
    subtitle:
      "Get your online store up and running in no time with our easy setup process. Our platform requires no technical knowledge, and our step-by-step setup guide will help you get started quickly and easily. With our platform, you can start selling your products and reaching new customers in just minutes.",
    buttonText: "Start Selling Now",
  },
  {
    title: "Start Accepting Payments Today",
    subtitle:
      "Offer a variety of secure and user-friendly payment options to increase customer trust and sales. Choose from a range of payment gateways, including credit/debit card, PayPal, or Stripe, and let your customers pay the way they want. Our platform also includes a simple and streamlined checkout process to ensure your customers can complete their purchase quickly and easily.",
    buttonText: "Accept Payments Now",
  },
];

function WhatWeDo() {
  const WhatWeDoCardRef = useRef<RefObject<HTMLDivElement>[]>(
    Array(4)
      .fill(null)
      .map((element) => useRef<HTMLDivElement>(element))
  );
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    if (isRendered) {
      const tl = gsap.timeline();
      tl.to("#card-container", {
        scrollTrigger: {
          scrub: true,
          trigger: WhatWeDoCardRef.current[0].current,
          start: "top 70px",
          end: () => `${windowHeight * 4} ${windowHeight - 10*3}`,
          pin: true,
          pinSpacing: false,
          // markers: true,
        },
      })
        .to(WhatWeDoCardRef.current[0].current, {
          scaleX: "0.85",
          scrollTrigger: {
            scrub: true,
            trigger: WhatWeDoCardRef.current[0].current,
            start: "top 70px",
            end: () => `${windowHeight * 4} ${windowHeight - 10*3}`,
          },
        })
        .to("#card-container", {
          scrollTrigger: {
            scrub: true,
            trigger: WhatWeDoCardRef.current[1].current,
            start: "top 90px",
            end: () => `${windowHeight * 3} ${windowHeight - 10*2}`,
            pin: true,
            pinSpacing: false,
            // markers: true,
          },
        })
        .to(WhatWeDoCardRef.current[1].current, {
          scaleX: "0.90",
          scrollTrigger: {
            scrub: true,
            trigger: WhatWeDoCardRef.current[1].current,
            start: "top 90px",
            end: () => `${windowHeight * 3} ${windowHeight - 10*2}`,
          },
        })
        .to("#card-container", {
          scrollTrigger: {
            scrub: true,
            trigger: WhatWeDoCardRef.current[2].current,
            start: "top 110px",
            end: () => `${windowHeight * 2} ${windowHeight - 10*1}`,
            pin: true,
            pinSpacing: false,
            // markers: true,
          },
        })
        .to(WhatWeDoCardRef.current[2].current, {
          scaleX: "0.95",
          scrollTrigger: {
            scrub: true,
            trigger: WhatWeDoCardRef.current[2].current,
            start: "top 110px",
            end: () => `${windowHeight * 2} ${windowHeight - 10*1}`,
          },
        })
        .to("#card-container", {
          scrollTrigger: {
            scrub: true,
            trigger: WhatWeDoCardRef.current[3].current,
            start: "top 130px",
            end: () => `${windowHeight * 1} ${windowHeight - 10*0}`,
            pin: true,
            pinSpacing: false,
            // markers: true,
          },
        })
        .to(WhatWeDoCardRef.current[3].current, {
          // scaleX: "0.95",
          scrollTrigger: {
            scrub: true,
            trigger: WhatWeDoCardRef.current[3].current,
            start: "top 130px",
            end: () => `${windowHeight * 1} ${windowHeight - 10*0}`,
          },
        });
    }
  }, [isRendered]);

  return (
    <div className="w-full py-10">
      <h2 className="title text-6xl text-outline font-semibold text-center mb-20">
        Explore Features
      </h2>
      <div
        id="card-container"
        className="bg-white w-full grid grid-cols-1 gap-10 h-[400vh] px-[90px]"
      >
        {cardLists.map((cardDetails, index) => (
          <WhatWeDoCard
            cardDetails={cardDetails}
            index={index}
            color={colors[index]}
            ref={WhatWeDoCardRef.current[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
