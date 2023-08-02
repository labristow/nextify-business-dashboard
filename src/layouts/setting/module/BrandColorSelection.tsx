import ColorPicker from "@/components/color-picker/ColorPicker";
import React from "react";

interface BrandColorSelection {
  title: string;
  subTitle: string;
  value: string;
  name: string;
  handleColorSelect: (color: string, name: string) => void;
  removeSelectedColor: (name: string) => void;
}
function BrandColorSelection({
  title,
  subTitle,
  value,
  name,
  handleColorSelect,
  removeSelectedColor,
}: BrandColorSelection) {
  return (
    <div className={`w-full duration-500 overflow-hidden accordion-body`}>
      <ColorPicker
        title={title}
        subTitle={subTitle}
        name={name}
        selectedColor={value}
        onSelect={handleColorSelect}
        removeSelectedColor={removeSelectedColor}
      />
    </div>
  );
}

export default BrandColorSelection;
