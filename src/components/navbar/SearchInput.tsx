import { SVGS } from "@/assets/SVGS";
import { showOverlay } from "@/features/overlay/overlaySlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ISearchInput {
  className?: string;
}

function SearchInput({ className = "" }: ISearchInput) {
  const dispatch = useDispatch();
  const overlay = useSelector((state: any) => state.overlay);
  const [cmdList, setCmdList] = useState<string[]>([]);
  const [cmdTimeout, setCmdTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.addEventListener("keydown", showSearchOverlayByShortcut);
    return () => {
      document.removeEventListener("keydown", showSearchOverlayByShortcut);
    };
  }, []);

  useEffect(() => {
    if (cmdList.length === 2) {
      console.log(cmdList);
      if (cmdList[0] === "Control" && cmdList[1] === "/") {
        showSearchOverlay();
      }
    }
    if (
      overlay.name === "search-navigation-overlay" &&
      cmdList.includes("Escape")
    ) {
      hideSearchOverlay();
    }
  }, [cmdList]);

  const showSearchOverlayByShortcut = (e: any) => {
    if (cmdTimeout) {
      clearTimeout(cmdTimeout);
    }
    const keyPressed = e.key;
    setCmdList((prevCmd) => {
      if (prevCmd.length === 2) {
        return [prevCmd[1], keyPressed];
      }
      return [...prevCmd, keyPressed];
    });

    const timeout = setTimeout(() => {
      setCmdList((prev) => []);
    }, 2000);

    setCmdTimeout((prevTimeout) => {
      if (prevTimeout) {
        clearTimeout(prevTimeout);
      }
      return timeout;
    });
  };

  const showSearchOverlay = () => {
    dispatch(
      showOverlay({
        name: "search-navigation-overlay",
        data: hideSearchOverlay,
      })
    );
  };

  const hideSearchOverlay = () => {
    dispatch(
      showOverlay({
        name: "",
      })
    );
  };

  return (
    <div className="relative w-auto">
      <div
        onClick={showSearchOverlay}
        className="group mx-5 w-auto lg:w-[300px] relative"
      >
        <span className="absolute cursor-pointer top-[12px] left-[14px]">
          <SVGS.SearchIcon color="#AAA" size="22" />
        </span>
        <input
          disabled
          type="text"
          placeholder="Quick search..."
          className={`transition-all duration-300 border-2 focus:border-dark text-dark outline-none h-11 rounded-lg bg-[#00000000] border-gray-300 placeholder:text-gray-800 group-hover:bg-gray-100 group-hover:cursor-pointer pl-10 pr-3 w-full ${className}`}
        />
        <span className="bg-gray-200 p-1 rounded-md text-xs cursor-pointer absolute bottom-2.5 right-3">
          Ctrl + /
        </span>
      </div>
    </div>
  );
}

export default SearchInput;
