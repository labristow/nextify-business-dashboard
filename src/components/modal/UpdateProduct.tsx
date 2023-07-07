import { SVGS } from "@/assets/SVGS";
import React, { useEffect, useState } from "react";
import ModalHeader from "../header/ModalHeader";
import TextInput from "../input/TextInput";
import TextSelect from "../select/TextSelect";
import FileUpload from "../fileuploader/FileUpload";
import TextareaInput from "../input/TextareaInput";
import ButtonForm from "../button/ButtonForm";
import { SelectChangeEvent } from "@mui/material";
import { IProductProps } from "@/pages/products";
import { useDispatch } from "react-redux";
import { hideOverlay } from "@/features/overlay/overlaySlice";
import { toast } from "react-hot-toast";

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
function UpdateProduct({ data }: { data: IProductProps }) {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState<IProductProps>({
    ...data,
  });
  useEffect(() => {
    console.log(data);
    // let updatedProductImages: (string | File)[] = [];
    // data.images.forEach((imgLink) => updatedProductImages.push(imgLink));
    setProductData({
      ...data,
    });
  }, [data]);

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
  const handleFileUpload = (files: (string | File)[]) => {
    setProductData({
      ...productData,
      ["images"]: files,
    });
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Product successfully updated");
    alert(JSON.stringify(productData));
    dispatch(hideOverlay());
  };
  const handleSavetoDraft = () => {
    toast.success("Product saved to draft");
    // alert(JSON.stringify(productData));
    dispatch(hideOverlay());
  };
  return (
    <div className="w-[480px] bg-white min-h-[565px] mx-auto mt-10 shadow-sm rounded-lg py-7 px-5 relative">
      <ModalHeader
        Icon={SVGS.ProductIcon}
        title="Update your product"
        subtitle="Make some changes to this product"
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
            value={productData.category.toLocaleLowerCase()}
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
          <FileUpload
            value={productData.images}
            handleFileUpload={handleFileUpload}
          />
        </div>
        <div className="mt-3 flex items-center gap-x-2">
          <ButtonForm
            onClick={handleSavetoDraft}
            type="button"
            text="Save to Draft"
            bgColor={"#000000"}
            className="w-full h-14"
          />
          <ButtonForm
            type="submit"
            text="Update product"
            className="w-full h-14"
          />
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
