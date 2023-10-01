import HeroImg1 from "@/assets/images/register-bg-image.jpg";
import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import { Power3, gsap } from "gsap";

function OnboardingLayout({
  children,
  backgroundImage = HeroImg1,
}: {
  children: JSX.Element;
  backgroundImage?: StaticImageData;
}) {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#onboard-image-cover",
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 0.8,
        ease: Power3.easeInOut,
      }
    )
      .fromTo(
        "#onboard-image",
        {
          scale: 1.2,
        },
        { scale: 1, duration: 0.8 },
        0
      )
      .fromTo(
        "#onboard-form-cover",
        { width: "100%" },
        { width: 0, ease: Power3.easeInOut, duration: 1 },
        0
      );
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-0 lg:px-44">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="w-full hidden lg:flex min-h-screen overflow-hidden relative">
          <div
            id="onboard-image-cover"
            className="w-full h-full bg-white absolute z-20 right-0 top-0"
          ></div>
          <Image
            src={backgroundImage}
            alt=""
            id="onboard-image"
            className="relative w-full h-full object-cover z-10"
          />
        </div>
        <div className="w-full relative px-5 lg:px-10 pb-20 lg:pb-0 pt-40 md:pt-52 flex flex-col justify-center md:justify-start bg-white">
          <div
            id="onboard-form-cover"
            className="w-full h-full bg-white absolute z-20 left-0 top-0"
          ></div>

          {children}
        </div>
      </div>
    </div>
  );
}

export default OnboardingLayout;
