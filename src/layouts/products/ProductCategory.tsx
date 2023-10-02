import { SVGS } from "@/assets/SVGS";
import { showOverlay } from "@/features/overlay/overlaySlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function ProductCategory({ showCategories }: { showCategories?: boolean }) {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([
    { imgUrl: "", name: "Fashion & Accessories" },
    { imgUrl: "", name: "Electronics" },
    { imgUrl: "", name: "Food & Beverages" },
    { imgUrl: "", name: "Fashion & Accessories" },
    { imgUrl: "", name: "Electronics" },
    { imgUrl: "", name: "Food & Beverages" },
  ]);

  const removeCategory = (id: number) => {
    const newCategories = categories.filter((_, index) => index !== id);
    setCategories(newCategories);
  };
  // const addCategory = (newCategory: { imgUrl: string; name: string }) => {
  //   const newCategories = [...categories, newCategory];
  //   setCategories(newCategories);
  // };

  const showAddCategoryModalHandler = () => {
    dispatch(
      showOverlay({
        name: "add-product-category-overlay",
        // data: { ...props },
      })
    );
  };
  return (
    <div className={`px-5 ${showCategories ? "block" : "hidden"}`}>
      <div className="w-full my-5">
        <h5 className="text-xl font-semibold">Product Category List</h5>
        <p className="text-sm text-gray-600">
          Below are the list of all product categories in your store
        </p>
      </div>
      <ul className="p-8 border border-gray-400 rounded-lg flex flex-wrap gap-8">
        {categories.map(({ imgUrl, name }, id) => (
          <li
            key={id}
            className="group pl-3 pr-1 h-10 flex-center bg-gray-200 rounded-lg text-sm text-black relative"
          >
            <span className="w-14 h-14 bg-primary-blue shadow rounded-full -ml-8 font-semibold text-2xl flex-center text-white border border-gray-300">
              {imgUrl ? imgUrl : name.slice(0, 1)}
            </span>
            <p className="ml-2">{name}</p>
            <button
              onClick={() => removeCategory(id)}
              className="h-6 w-0 group-hover:w-6 duration-300 flex-center bg-red-700 ml-3 rounded-full"
            >
              <SVGS.CloseIcon color="white" />
            </button>
          </li>
        ))}
        <button
          onClick={showAddCategoryModalHandler}
          className="h-12 flex-center px-4 rounded-md bg-black text-sm text-white"
        >
          <SVGS.EditIcon color="white" /> Create product Category
        </button>
      </ul>
    </div>
  );
}

export default ProductCategory;
