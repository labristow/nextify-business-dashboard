import { createSlice } from "@reduxjs/toolkit";
import products from "@/mock/products.json";

interface IProductProps {
  // color: string;
  oldprice: string;
  price: string;
  name: string;
  images: string[];
  url: string;
}
interface IProductSliceProps {
  products: null[] | IProductProps[];
  selectedProduct: null | IProductProps;
}
const initialState: IProductSliceProps = {
  products: [],
  selectedProduct: null,
};
const productSlice = createSlice({
  initialState,
  name: "productSlice",
  reducers: {
    getAllProducts: (state, action) => {
      state.products = products;
    },
    getSingleProduct: (state, action) => {},
  },
});
