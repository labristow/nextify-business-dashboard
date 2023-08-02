
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
  handleColorSelect,
  removeSelectedColor,
}: BrandColorSelection) {
  return (
    <div className={`w-full duration-500 overflow-hidden accordion-body`}>
      <ColorPicker
        selectedColor={websiteSetting.brandColor}
        onSelect={handleColorSelect}
        removeSelectedColor={removeSelectedColor}
      />
    </div>
  );
}

export default BrandColorSelection;
