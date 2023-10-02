import { SVGS } from "@/assets/SVGS";
import React, { ChangeEvent, useState } from "react";

function SearchInput() {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const hideOverlay = () => {
    setShowOverlay(false);
  };

  const handleSearchProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 3) {
      setShowOverlay(true);
    }
  };
  return (
    <div className="w-full relative z-30">
      {showOverlay && (
        <div
          onClick={hideOverlay}
          className="overlay z-20 fixed w-full h-screen top-0 left-0 bg-dark bg-opacity-30"
        ></div>
      )}
      <input
        required
        onChange={handleSearchProduct}
        type="search"
        placeholder="Search for products..."
        className={`relative z-30 w-full bg-transparent valid:bg-white focus:bg-white bg-opacity-50 px-4 outline-primary-blue transition-all duration-500 font-semibold h-14 border border-gray-300 rounded-lg`}
      />
      {showOverlay && (
        <div className="w-full z-30 h-[40vh] bg-white absolute rounded-lg mt-1">
          <ul className="w-full">
            <li className="border border-gray-200 h-12 px-2 flex items-center rounded-lg">
              <SVGS.SearchIcon />
              <span className="truncate">Universal Laptops</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
