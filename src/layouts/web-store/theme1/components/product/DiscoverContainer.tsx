import React, { useState, useEffect } from "react";
import DiscoverContent from "./DiscoverContent";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const DiscoverContainer = () => {
  const [slideview, setSlideView] = useState(0);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1500) {
      setSlideView(3);
    } else if (windowWidth > 1000 && windowWidth < 1500) {
      setSlideView(2);
    } else if (windowWidth < 1000) {
      setSlideView(1);
    }
  };
  return (
    <div className="px-20 py-5">
      <div className="header mb-10">
        <h3 className="text-4xl font-semibold">
          Discover more.{" "}
          <span className="text-gray-500">
            {" "}
            Good things are waiting for you
          </span>
        </h3>
      </div>
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={100}
          slidesPerView={slideview}
          navigation
          loop
          // autoplay
          direction="horizontal"
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Array(7)
            .fill("")
            .map((_, index) => (
              <SwiperSlide key={index}>
                <DiscoverContent />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscoverContainer;
