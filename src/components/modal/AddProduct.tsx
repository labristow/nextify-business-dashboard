import { SVGS } from "@/assets/SVGS";
import React, { useState } from "react";
import ModalHeader from "../header/ModalHeader";
import TextInput from "../input/TextInput";
import TextSelect from "../select/TextSelect";
import FileUpload from "../fileuploader/FileUpload";
import TextareaInput from "../input/TextareaInput";
import ButtonForm from "../button/ButtonForm";
import { SelectChangeEvent } from "@mui/material";

interface IProductData {
  name: string;
  price: string;
  category: string;
  description: string;
  currency: string;
  images: (string | File)[];
}
const categories = [
  {
    value: "electronics",
    label: "Electronics",
  },
  {
    value: "clothing",
    label: "Clothing",
  },
  {
    value: "home-appliances",
    label: "Home Appliances",
  },
  {
    value: "furniture",
    label: "Furniture",
  },
  {
    value: "beauty",
    label: "Beauty",
  },
  {
    value: "sports",
    label: "Sports",
  },
  {
    value: "books",
    label: "Books",
  },
  {
    value: "toys",
    label: "Toys",
  },
  {
    value: "food-and-beverage",
    label: "Food & Beverage",
  },
  {
    value: "jewelry",
    label: "Jewelry",
  },
];
function AddProduct() {
  const [productData, setProductData] = useState<IProductData>({
    name: "",
    price: "",
    category: "",
    description: "",
    currency: "$",
    images: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    if (name === "price") {
      // Remove any non-numeric characters from the input value
      const numericValue = value.replace(/[^0-9.]/g, "");
      setProductData({
        ...productData,
        [name]: numericValue
          ? `${productData.currency} ${parseInt(numericValue).toLocaleString()}`
          : "",
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
  };
  const handleFileUpload = (data: (string | File)[]) => {
    setProductData({
      ...productData,
      ["images"]: data,
    });
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(productData));
  };
  return (
    <div className="w-[480px] bg-white min-h-[565px] mx-auto mt-10 shadow-sm rounded-lg py-7 px-5 relative">
      <ModalHeader
        Icon={SVGS.ProductIcon}
        title="Add new product"
        subtitle="Tell your customers about your new product"
      />
      <form
        method="POST"
        autoComplete="off"
        onSubmit={handleSubmit}
        className="mt-5"
      >
        <div>
          <TextInput
            value={productData.name}
            name="name"
            type="text"
            onChange={handleChange}
            label="Product name"
            placeholder="Enter your product name"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <TextInput
            value={productData.price}
            onChange={handleChange}
            name="price"
            type="text"
            label="Price"
            placeholder="Enter your product price"
          />
          <TextSelect
            options={categories}
            label="Category"
            name="category"
            value={productData.category}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <TextareaInput
            value={productData.description}
            onChange={handleChange}
            name="description"
            type="text"
            label="Description"
            placeholder="Enter your product description"
          />
        </div>
        <div className="mt-3">
          <FileUpload handleFileUpload={handleFileUpload} />
        </div>
        <div className="mt-3">
          <ButtonForm
            type="submit"
            text="Create new product"
            className="w-full h-14 bg-primary-blue"
          />
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
