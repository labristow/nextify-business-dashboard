import ProductHeader from "@/layouts/products/ProductHeader";
import ProductList from "@/layouts/products/ProductList";
import React, { useEffect, useState } from "react";
import productsData from "@/mock/products.json";
import ProductNavigation from "@/layouts/products/ProductNavigation";
import ProductCategory from "@/layouts/products/ProductCategory";

export interface IProductProps {
  id?: string;
  status: string;
  oldprice?: string;
  price: string;
  name: string;
  description: string;
  category: string;
  images: (string | File)[];
  url: string;
  currency: string;
}
export interface IProductStatusProps {
  all: number;
  active: number;
  draft: number;
  discount: number;
}

function Index() {
  const [activeStatus, setActiveStatus] = useState("active");
  const [showCategories, setShowCatgories] = useState<boolean>(false);
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [currentProducts, setCurrentProducts] = useState<IProductProps[]>([]);
  const [metrics, setMetrics] = useState<IProductStatusProps>({
    all: 0,
    active: 0,
    draft: 0,
    discount: 0,
  });

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const viewProductStatusHandler = (status: string) => {
    if (status === "all") {
      setActiveStatus("all");
      setCurrentProducts(products);
    } else {
      const matchedProduct = products.filter(
        (product) => product.status === status
      );
      setActiveStatus(status);
      setCurrentProducts(matchedProduct);
    }
  };

  useEffect(() => {
    let _metrics = {
      all: 0,
      active: 0,
      draft: 0,
      discount: 0,
    };
    products.forEach(({ status }) => {
      _metrics.all = _metrics.all + 1;
      switch (status) {
        case "active":
          _metrics.active = _metrics.active + 1;
          break;
        case "draft":
          _metrics.draft = _metrics.draft + 1;
          break;
        case "discount":
          _metrics.discount = _metrics.discount + 1;
          break;
      }
    });
    setMetrics(_metrics);
  }, [products]);

  useEffect(() => {
    viewProductStatusHandler(activeStatus);
  }, [products]);

  return (
    <div className="slide-up py-5 rounded-lg">
      <ProductHeader
        metrics={metrics}
        activeStatus={activeStatus}
        showCategories={showCategories}
        setShowCatgories={setShowCatgories}
        viewProductStatusHandler={viewProductStatusHandler}
      />
      <ProductCategory showCategories={showCategories} />
      <ProductList currentProducts={currentProducts} />
      <ProductNavigation />
    </div>
  );
}

export default Index;
