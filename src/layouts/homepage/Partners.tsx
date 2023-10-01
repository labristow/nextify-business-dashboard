import Image from "next/image";
import React from "react";
import HeaderOne from "./HeaderOne";

function Partners() {
  return (
    <div className="w-full h-auto lg:h-[70vh] flex flex-col items-center justify-center">
      <HeaderOne color="black"
        title="Trusted Partners"
        subTitle="Businesses from the world’s biggest brands use Nextify"
      />
      <div className="px-5 lg:px-0 flex items-center flex-wrap justify-between lg:justify-center mt-14 mb-14 lg:mb-0 gap-3">
        {Array(5)
          .fill("")
          .map((_, id) => (
            <div key={id} className="w-[150px] lg:w-[180px] h-[110px] flex items-center justify-center border border-gray-300 rounded-xl">
              <Image
                width="64"
                height="64"
                src={
                  "https://www.cosmos.so/wp-content/uploads/2023/06/spotify-grey.svg"
                }
                alt="brand-name"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Partners;
