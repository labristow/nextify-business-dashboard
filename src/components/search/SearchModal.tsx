import { SVGS } from "@/assets/SVGS";
import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

const allshortcuts = [
  {
    path: "Settings -> Website settings",
    description: "Customize your website look and feel.",
  },
  {
    path: "Settings -> Social media",
    description:
      "Help your customers to reach you on your social media platforms.",
  },
  {
    path: "Settings -> Order settings",
    description: "Help your customers to order seamlessly from you.",
  },
];
function SearchModal() {
  const hideSearchOverlay = useSelector((state: any) => state.overlay.data);
  const [searchResult, setSearchResult] = useState<
    { path: string; description: string }[]
  >([]);
  const [recentSearches] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeResult, setActiveResult] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length >= 3) {
      setIsLoading(true);
      const matchedResults = allshortcuts.filter(
        ({ path, description }) =>
          path.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
          description.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setTimeout(() => {
        setIsLoading(false);
        setSearchResult(matchedResults);
      }, 2000);
    } else {
      setSearchResult([]);
    }
    setSearchValue(value);
  };
  return (
    <div className="w-full lg:w-[758px] rounded-lg mt-24 mx-auto bg-white min-h-[32vh]">
      <div className="w-full relative h-[56px] px-[1.25rem] flex items-center border-b border-gray-200">
        {isLoading ? (
          <span className="w-5 h-5 rounded-full border-2 border-gray-800 border-t-transparent animate-spin"></span>
        ) : (
          <SVGS.SearchIcon />
        )}
        <input
          value={searchValue}
          type="text"
          onChange={handleInputChange}
          className="absolute top-0 left-0 w-full h-full bg-transparent outline-none px-14 placeholder:text-gray-700 focus:px-[60px] duration-300"
          placeholder="Search dashboard for pages and functionality"
        />
        <button
          onClick={hideSearchOverlay}
          className="absolute top-4 right-4 bg-black text-white uppercase text-[10px] h-7 w-9 rounded-lg"
        >
          ESC
        </button>
      </div>
      <div className="w-full border-b border-gray-200 min-h-[152px] max-h-[400px] overflow-y-auto flex items-center justify-center">
        {recentSearches.length || searchResult.length ? (
          <ul className="w-full h-full flex flex-col gap-y-2.5 p-[1.25rem]">
            {searchResult.map(({ path, description }, index) => (
              <li
                onMouseEnter={() => setActiveResult(index)}
                key={index}
                className={`${
                  activeResult === index ? "bg-[#2026D2]" : "bg-white"
                } px-5 w-full h-[72px] border border-gray-200 rounded-xl flex items-center cursor-pointer transition-all duration-300`}
              >
                <div
                  className={`w-7 h-7 p-1.5 ${
                    activeResult === index ? "bg-transparent" : "bg-white"
                  } border border-gray-300 rounded-lg flex items-center justify-center`}
                >
                  <SVGS.HashIcon
                    color={activeResult === index ? "#FFFFFF" : "#555555"}
                  />
                </div>
                <div className="flex flex-col px-3">
                  <p
                    className={`${
                      activeResult === index ? "text-white" : "text-dark-700"
                    } text-sm font-medium`}
                  >
                    {path}
                  </p>
                  <h5
                    className={`${
                      activeResult === index ? "text-white" : "text-gray-700"
                    } text-sm`}
                  >
                    {description}
                  </h5>
                </div>
                <span className="w-10 h-10 ml-auto rounded-full text-white font-bold flex items-center justify-center">
                  →
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <span className="text-[16px]">No recent searches</span>
        )}
      </div>
      <div className="w-full relative h-[56px] px-[1.25rem] flex items-center"></div>
    </div>
  );
}

export default SearchModal;
