import Image from "next/image";
import React, { useState } from "react";
import { IProduct } from "./ProductContainer";
import toast from "react-hot-toast";
import { SVGS } from "@/assets/SVGS";

function ProductCard({
  quantity,
  product,
  addToCart,
  decreaseQuantity,
  increaseQuantity,
}: {
  quantity: number;
  product: IProduct;
  addToCart: (productData: IProduct) => void;
  decreaseQuantity: (id: number) => void;
  increaseQuantity: (id: number) => void;
}) {
  const isAddedToCart = quantity > 0;

  const addProductToCart = (productData: IProduct) => {
    if (productData) {
      addToCart(productData);
    }
  };

  return (
    <div className="h-[465px] w-[325px] relative shadow-sm bg-white hover:shadow-2xl p-5 rounded-xl transition-all duration-500">
      <div className="product-image w-full bg-transparent h-[302px] rounded-2xl relative shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-200 bg-gray-50">
        <Image
          fill
          src={product.image}
          className="absolute w-full h-full object-cover rounded-2xl"
          alt=""
          unoptimized
        />
      </div>
      <div className="mt-3">
        <h5
          className="font-semibold text-lg w-full truncate"
          title={product.name}
        >
          {product.name}
        </h5>
        <p className="text-sm">{product.description}</p>
        <div className="flex items-center justify-between my-2">
          <span className="rounded-lg inline-block py-2 text-[16px] text-primary-blue font-semibold">
            ₦{product.price}
          </span>
          <div>
            {isAddedToCart ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="decrease-qty py-1 px-1 bg-white border-2 border-dark text-[16px] rounded-lg text-dark"
                >
                  <SVGS.MinusIcon />
                </button>
                <button onClick={() => addProductToCart(product)}>
                  {quantity} In Cart
                </button>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="increase-qty py-1 px-1 bg-white border-2 border-dark text-[16px] rounded-lg text-dark"
                >
                  <SVGS.PlusIcon />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addProductToCart(product)}
                className="py-2 px-4 bg-dark text-[16px] rounded-lg text-white"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
