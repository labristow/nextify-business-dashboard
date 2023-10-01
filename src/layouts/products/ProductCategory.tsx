import { SVGS } from "@/assets/SVGS";
import { showOverlay } from "@/features/overlay/overlaySlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function ProductCategory({ showCategories }: { showCategories?: boolean }) {
  const dispatch = useDispatch();
  const [categories] = useState([
    { imgUrl: "", name: "Fashion & Accessories" },
    { imgUrl: "", name: "Electronics" },
    { imgUrl: "", name: "Food & Beverages" },
    { imgUrl: "", name: "Fashion & Accessories" },
    { imgUrl: "", name: "Electronics" },
    { imgUrl: "", name: "Food & Beverages" },
  ]);

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
      <div className="w-full mb-4">
        <h5 className="text-xl font-semibold">Product Category List</h5>
        <p className="text-sm text-gray-600">
          Below are the list of all product categories in your store
        </p>
      </div>
      <ul className="p-10 border border-gray-500 flex flex-wrap gap-8">
        {categories.map(({ imgUrl, name }, id) => (
          <li
            key={id}
            className="group pl-3 pr-1 h-10 flex-center bg-gray-200 rounded-lg text-sm text-black relative"
          >
            <span className="w-16 h-16 bg-white border border-gray-50 shadow rounded-full -ml-8"></span>
            <p className="ml-2">{name}</p>
            <button className="h-6 w-0 group-hover:w-6 duration-300 flex-center bg-red-700 ml-3 rounded-full">
              <SVGS.CloseIcon color="white" />
            </button>
          </li>
        ))}
        <button onClick={showAddCategoryModalHandler} className="h-12 flex-center px-4 rounded-md bg-black text-sm text-white">
          <SVGS.EditIcon color="white"/> Create product Category
        </button>
      </ul>
    </div>
  );
}

export default ProductCategory;
