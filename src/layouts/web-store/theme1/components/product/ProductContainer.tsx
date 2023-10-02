import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { toast } from "react-hot-toast";
export interface IProduct {
  id: number;
  image: string;
  name: string;
  price: string;
  description: string;
  quantity: number;
}
[];
function ProductContainer() {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetchAllProducts();
  }, []);
  const fetchAllProducts = async () => {
    const _products = await axios.get("/mock/all-products.json");
    setProducts(_products.data);
  };
  const addToCart = (_product: IProduct) => {
    if (cart.includes(_product)) {
      toast("Product already in your cart");
    } else {
      // Add 1 quantity to product
      _product["quantity"] = 1;
      setCart([...cart, _product]);
      toast.success("Product added successfully");
    }
  };

  const removeFromCart = (id: number) => {
    let updatedCart: IProduct[] = [];
    cart.forEach((c) => {
      if (c.id !== id) {
        updatedCart.push(c);
      }
    });
    return updatedCart;
    // setCart([...updatedCart]);
  };

  const increaseQuantity = (id: number) => {
    let updatedCart = cart.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          quantity: c.quantity && c.quantity + 1,
        };
      } else return c;
    });
    console.log(updatedCart);
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    let updatedCart: IProduct[] = [];
    cart.forEach((c) => {
      if (c.id === id) {
        if (c.quantity > 1) {
          updatedCart.push({
            ...c,
            quantity: c.quantity && c.quantity - 1,
          });
        } else {
          // replace updatedCart initial value with the new value of removeFromCart
          updatedCart = removeFromCart(id);
        }
      } else updatedCart.push(c);
    });
    setCart(updatedCart);
  };

  return (
    <div className="px-5 md:px-20 py-10 bg-gray-50 mt-10">
      <div className="header mb-10">
        <h3 className="text-4xl font-semibold">What's trending now.</h3>
        <p className="text-gray-500 text-xl mt-2">
          Discover the most trending products in our store.
        </p>

        <div className="w-full mt-8">
          <div className="tabs flex items-center gap-3">
            <button className="py-3 px-5 font-medium text-[16px] text-white bg-dark rounded-full">
              All Items
            </button>
            <button className="py-3 px-5 font-medium text-[16px] text-white bg-dark rounded-full">
              Trending
            </button>
          </div>
          <hr className="w-full my-4" />
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap gap-y-10">
        {products.map((product, id) => (
          <ProductCard
            key={id}
            product={product}
            quantity={cart.find((c) => c.id === product.id)?.quantity ?? 0}
            addToCart={addToCart}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;
