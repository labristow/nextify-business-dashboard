import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const heroAds = [
  "https://ng.jumia.is/cms/0-1-initiatives/flashsale/2023/Slider.png",
  "https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/Nivea/New-Creatives/Desktop_Homepage_Slider__712x384.png",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w17-Best-phone-electronic/Grocery/Desktop_Homepage_Slider__712x384.png",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w17-Best-phone-electronic/diageo-SBD/Desktop_Homepage_Slider__712x384_copy_2.png",
];
function HeroSwiper() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  };

  return (
    <div className="relative w-[712px] h-[384px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        navigation
        loop
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {heroAds.map((imageLink, index) => (
          <SwiperSlide key={index}>
            <Image
              src={imageLink}
              width={712}
              height={384}
              alt=""
              // unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSwiper;
