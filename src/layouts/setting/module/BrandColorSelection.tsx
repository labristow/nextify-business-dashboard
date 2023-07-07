import { SVGS } from "@/assets/SVGS";
import ColorPicker from "@/components/color-picker/ColorPicker";
import React from "react";

interface BrandColorSelection {
  websiteSetting: { brandColor: string };
  toggleAccordion: (index: number) => void;
  accordionTabIndex: number;
  handleColorSelect: (color: string) => void;
  removeSelectedColor: () => void;
}
function BrandColorSelection({
  websiteSetting,
  toggleAccordion,
  accordionTabIndex,
  handleColorSelect,
  removeSelectedColor,
}: BrandColorSelection) {
  return (
    <div>
      <div className="w-full h-14 accordion-header border border-gray-200 px-3 rounded-lg flex items-center justify-between">
        <h5 className="text-lg font-medium">Choose your brand color?</h5>
        <button
          onClick={() => toggleAccordion(0)}
          className="bg-black w-7 h-7 rounded-full flex items-center justify-center"
        >
          {accordionTabIndex === 0 ? (
            <SVGS.CaretUpIcon color="white" />
          ) : (
            <SVGS.CaretDownIcon color="white" />
          )}
        </button>
      </div>
      <div
        className={`w-full ${
          accordionTabIndex === 0 ? "h-auto" : "h-0"
        } duration-500 overflow-hidden accordion-body`}
      >
        <ColorPicker
          selectedColor={websiteSetting.brandColor}
          onSelect={handleColorSelect}
          removeSelectedColor={removeSelectedColor}
        />
      </div>
    </div>
  );
}

export default BrandColorSelection;
