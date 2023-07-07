import ProductCard from "@/components/card/ProductCard";
import React from "react";
import { IProductProps } from "@/pages/products";

function ProductList({currentProducts}: {currentProducts: IProductProps[]}) {
  return (
    <div className="flex bg-white p-5 flex-wrap 2xl:grid 2xl:grid-cols-4 items-start gap-5 h-[calc(100vh_-_40vh)] overflow-y-auto">
      {currentProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
