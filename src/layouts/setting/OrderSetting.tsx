import { SVGS } from "@/assets/SVGS";
import TextInput from "@/components/input/TextInput";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";

interface Category {
  id?: number;
  name: string;
  image: string;
}
function OrderSetting() {
  const categoryImageRef = useRef<any>("");
  const [categoryPayload, setCategoryPayload] = useState({
    name: "",
    image: "",
  });
  const [productSettings, setProductSettings] = useState<{
    categories: Category[];
  }>({
    categories: [],
  });

  const handleAddCategory = (data: Category) => {
    if (data.image) {
      toast.error("Image is required");
    } else if (data.name) {
      toast.error("Category name is required");
    } else {
      data.id = productSettings.categories.length;
      let categories = [...productSettings.categories, data];
      setProductSettings({
        ...productSettings,
        categories: categories,
      });
      setCategoryPayload({
        image: "",
        name: "",
      });
    }
  };
  const handleRemoveCategory = (categoryId: number) => {
    let categories = [...productSettings.categories];
    const updatedCategories = categories.filter(
      (category) => category.id !== categoryId
    );
    setProductSettings({
      ...productSettings,
      categories: updatedCategories,
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setCategoryPayload({
        ...categoryPayload,
        [name]: URL.createObjectURL(files[0]),
      });
    } else {
      setCategoryPayload({
        ...categoryPayload,
        [name]: value,
      });
    }
  };
  return (
    <div className="w-full">
      <div className="header flex items-start gap-3 mt-5">
        <div className="mt-2">
          <SVGS.SettingIcon />
        </div>
        <div>
          <h4 className="text-[20px] font-semibold">Product setting</h4>
          <p className="-mt-2 text-sm">Setup the product categories.</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2">
        <div className="w-[400px]">
          <div className="my-5">
            <h5 className="font-semibold">Website Template</h5>
            <p className="mb-5">
              Select theme that best align with your business?
            </p>
            <TextInput
              onChange={handleInputChange}
              label="Category Name"
              name="name"
              value={categoryPayload.name}
              placeholder="Enter Category Name"
            />
          </div>

          <div>
            <h5 className="font-semibold">Category Image</h5>
            <p>Upload Category Image?</p>
            <div className="my- flex items-center justify-start gap-x-5">
              <input
                ref={categoryImageRef}
                onChange={handleInputChange}
                type="file"
                name="image"
                className="hidden"
              />
              <button
                onClick={() =>
                  categoryImageRef.current && categoryImageRef.current.click()
                }
                className="w-full min-w-[200px] h-14 rounded bg-primary-blue_ text-black flex items-center justify-start"
                type="button"
              >
                <SVGS.ImageIcon color="#000000" /> Click here to upload
              </button>
              {categoryPayload.image && (
                <div className="w-[70px] h-[70px] border border-gray-300 rounded flex flex-shrink-0 items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={categoryPayload.image}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => handleAddCategory(categoryPayload)}
            className="h-12 bg-black text-white flex items-center justify-center px-6 rounded-lg"
          >
            <SVGS.PlusIcon color="#FFFFFF" /> Add Category
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSetting;
