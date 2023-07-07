import { ICONS } from "@/assets/Icons";
import Image from "next/image";
import React from "react";
interface IType {
  id: number;
  image: any;
  text: string;
  isSelected: boolean;
  selectHandler: (id: number) => void;
  unselectHandler: () => void;
}
function AccountType({
  id,
  text,
  image,
  isSelected,
  selectHandler,
  unselectHandler,
}: IType) {
  return (
    <div className="group w-[160px] h-[160px] relative">
      <button
        onClick={() => selectHandler(id)}
        className={`w-full h-full rounded-2xl border-2 ${
          isSelected ? "border-primary" : "border-gray-200 hover:border-gray-300"
        } flex flex-col justify-center items-center transition-all duration-500`}
      >
        <div className="w-auto h-14 flex items-center overflow-hidden">
          <Image src={image} width={100} height={100} alt="" />
        </div>
        <h5 className="font-primary text-[16px]">{text}</h5>
      </button>
      {isSelected && (
        <button
          onClick={unselectHandler}
          className="w-6 h-6 hidden group-hover:flex items-center justify-center border-2 border-primary rounded-full absolute top-4 right-3"
        >
          <ICONS.CloseIcon color="#5F30E2" />
        </button>
      )}
    </div>
  );
}

export default AccountType;
