import React, { useState } from "react";
import AccountType from "../card/AccountType";
import RocketIcon from "@/assets/3d-image/rocket.png";
import StackIcon from "@/assets/3d-image/circle-stack.png";
import AllAppIcon from "@/assets/3d-image/all-app.png";

function CardContainer({
  activateBtn,
  deactivateBtn,
}: {
  activateBtn: () => void;
  deactivateBtn: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const accountTypes = [
    { image: RocketIcon, text: "Design" },
    { image: StackIcon, text: "Design" },
    { image: AllAppIcon, text: "Design" },
  ];
  const selectHandler = (index: number) => {
    setSelectedIndex(index);
    activateBtn();
  };
  const unselectHandler = () => {
    setSelectedIndex(null);
    deactivateBtn();
  };
  return (
    <div className="w-full grid grid-cols-3 gap-9 mt-8">
      {accountTypes.map(({ image, text }, index) => (
        <AccountType
          id={index}
          key={index}
          isSelected={index === selectedIndex}
          selectHandler={selectHandler}
          unselectHandler={unselectHandler}
          image={image}
          text={text}
        />
      ))}
    </div>
  );
}

export default CardContainer;
