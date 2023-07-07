import Image from "next/image";
import React from "react";

const adsList = [
  "https://ng.jumia.is/cms/0-1-cpr/2022/june-14/free-delivery_218x184.png",
  "https://ng.jumia.is/cms/0-1-initiatives/jforce/2023/JForce.png",
];
function RightAds() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {adsList.map((adImage, index) => (
        <Image key={index} width={218} height={184} src={adImage} alt="" className="rounded-md"/>
      ))}
    </div>
  );
}

export default RightAds;
