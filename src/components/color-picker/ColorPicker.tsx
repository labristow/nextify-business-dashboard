import { SVGS } from "@/assets/SVGS";
import React, { ChangeEvent, useState } from "react";

const colors = [
  "#F44336",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
  "#1abc9c",
  "#16a085",
  "#2ecc71",
  "#27ae60",
  "#3498db",
  "#2980b9",
  "#9b59b6",
  "#8e44ad",
  "#34495e",
  "#2c3e50",
  "#f1c40f",
  "#f39c12",
  "#e67e22",
  "#d35400",
  "#e74c3c",
  "#c0392b",
  "#ecf0f1",
  "#bdc3c7",
  "#95a5a6",
  "#7f8c8d",
  "#002b36",
  "#073642",
  "#586e75",
  "#657b83",
  "#839496",
  "#93a1a1",
  "#eee8d5",
  "#fdf6e3",
  "#b58900",
  "#cb4b16",
  "#dc322f",
  "#d33682",
  "#6c71c4",
  "#268bd2",
  "#2aa198",
  "#859900",
];

interface IProps {
  title?: string;
  subTitle?: string;
  name: string;
  selectedColor: string;
  onSelect: (color: string, name: string) => void;
  removeSelectedColor: (name: string) => void;
}
const ColorPicker = ({
  title = "Brand Color",
  subTitle = "Select your brand color",
  name,
  selectedColor,
  onSelect,
  removeSelectedColor,
}: IProps) => {
  const colorInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbColorRegex =
      /^rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})(, ?[\d.]+)?\)$/;

    if (hexColorRegex.test(value) || rgbColorRegex.test(value)) {
      onSelect(value, name);
    } else {
      onSelect("", name);
    }
  };
  return (
    <div className="w-full">
      <div className="flex items-center h-12 gap-2 mb-5">
        <div className="">
          <p className="text-lg font-medium">{title}</p>
          <p className="-mt-1.5 text-sm font-medium">{subTitle}</p>
        </div>
        <div className="inline-block border border-gray-300 p-0.5 shadow rounded-full">
          <div
            onClick={() => removeSelectedColor(name)}
            className="group rounded-full"
            style={{
              backgroundColor: selectedColor,
              width: "24px",
              height: "24px",
            }}
          >
            <span className="opacity-0 group-hover:opacity-100 duration-300 cursor-pointer">
              <SVGS.CloseIcon color="#FFFFFF" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start flex-wrap gap-1">
        {colors.map((color, index) => (
          <button
            type="button"
            className="w-6 h-6 rounded-full"
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => onSelect(color, name)}
          ></button>
        ))}
      </div>
      <div className="py-3">
        <input
          onChange={colorInputChange}
          type="text"
          placeholder="Enter your brand color code"
          className="outline-none placeholder:text-sm placeholder:font-normal font-medium border border-gray-300 h-12 rounded-md px-3"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
