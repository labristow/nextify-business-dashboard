import { SVGS } from "@/assets/SVGS";
import React, { useState } from "react";
import ModalHeader from "../header/ModalHeader";
import TextInput from "../input/TextInput";
import ButtonForm from "../button/ButtonForm";
import { SelectChangeEvent } from "@mui/material";
import SingleFileUpload from "../fileuploader/SingleFileUpload";

interface ICategoryData {
  name: string;
  image: string | File;
}
function AddProductCategory() {
  const [categoryData, setCategoryData] = useState<ICategoryData>({
    name: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setCategoryData({
      ...categoryData,
      [name]: value,
    });
  };
  const handleFileUpload = (data: string | File) => {
    console.log(data);
    setCategoryData({
      ...categoryData,
      ["image"]: data,
    });
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(categoryData));
  };
  return (
    <div className="w-full md:w-[480px] lg:w-[460px] bg-white min-h-[335px] mx-auto mt-10 shadow-sm rounded-lg py-7 px-5 relative">
      <ModalHeader
        Icon={SVGS.ProductIcon}
        title="Add new product category"
        subtitle="Help your customers to easily locate what they want"
      />
      <form
        method="POST"
        autoComplete="off"
        onSubmit={handleSubmit}
        className="mt-5"
      >
        <div className="w-full">
          <div className="w-full row-span-4 px-5">
            <div>
              <TextInput
                value={categoryData.name}
                name="name"
                type="text"
                onChange={handleChange}
                label="Category name"
                placeholder="Enter your category name"
              />
            </div>

            <div className="mt-3">
              <SingleFileUpload handleFileUpload={handleFileUpload} />
            </div>
            <div className="mt-3">
              <ButtonForm
                type="submit"
                text="Create new product"
                className="w-full h-14 bg-primary-blue"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProductCategory;
