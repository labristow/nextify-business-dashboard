import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import product1 from "@/assets/product/1.jpg";
import product2 from "@/assets/product/2.jpg";
import product3 from "@/assets/product/3.jpg";
import product4 from "@/assets/product/4.jpg";
import { SVGS } from "@/assets/SVGS";
import SellerDetails from "./SellerDetails";
import IconButton from "@mui/material/IconButton"

function ProductDetails() {
  const [currentImage, setCurrentImage] = useState(product1);
  const [productImages] = useState([product1, product2, product3, product4]);
  const viewImage = (img: StaticImageData) => setCurrentImage(img);
  return (
    <div className="col-span-6 grid grid-cols-5 items-center border border-gray-300 relative">
      {/* <div className="image-thumbnail h-full w-[64px]">abc</div> */}
      <div className="product-image col-span-2 h-full p-5">
        <div className="overflow-hidden w-full h-[350px] border border-gray-200 relative">
          <Image
            src={currentImage}
            alt="product-name"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex items-center gap-x-3 pr-5">
          {productImages.map((image, index) => (
            <IconButton>
              <Image
                onClick={() => viewImage(image)}
                key={index}
                src={image}
                alt="product-name"
                width={60}
                height={60}
                className={`border-2 ${
                  image === currentImage
                    ? "border-primary-blue"
                    : "border-transparent"
                } p-1 rounded-lg cursor-pointer`}
              />
            </IconButton>
          ))}
        </div>
      </div>
      <div className="product-details col-span-3 h-full p-5">
        <h5 className="text-xl font-medium">
          Lenovo AMD RYZEN 3 1TB 12GB RAM 1TB HDD 2.6 To 3.4ghz Win 10+ 32GB
          Flash
        </h5>
        <div className="grid grid-cols-2">
          <div className="my-3">
            <p className="text-xs uppercase text-gray-700">Brand</p>
            <h5 className="font-semibold text-lg">Skyway</h5>
          </div>
          <div className="my-3">
            <p className="text-xs uppercase text-gray-700">Product Code</p>
            <h5 className="font-semibold text-lg">5695872</h5>
          </div>
        </div>
        <hr />
        <div className="my-3">
          <p className="text-[13.33px] text-gray-700 mb-3">
            Description Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quae labore aspernatur quo repudiandae totam repellendus,
            temporibus dolore pariatur esse voluptates dolor voluptas, natus
            ratione facere laudantium ut doloribus impedit ex.
          </p>
          <h5 className="font-bold text-3xl">₦ 212,800</h5>
        </div>
        <div className="flex items-center gap-5">
          <button className="w-[150px] h-12 uppercase rounded bg-primary-blue text-white text-sm flex items-center justify-center">
            <span>
              <SVGS.OrderIcon color="white" />
            </span>
            Add to cart
          </button>
          <button className="w-[150px] h-12 uppercase rounded border-2 border-primary-blue text-primary-blue text-sm flex items-center justify-center">
            <span>
              <SVGS.TransactionIcon color="#2026D2" />
            </span>
            Buy now
          </button>
        </div>
        <div className="my-5">
          <SellerDetails />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
