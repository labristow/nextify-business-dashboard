import React, { useId } from "react";
interface IButtonLinkProps {
  onClick: (status: string) => void;
  element: { text: string; count: number; name: string };
  activeStatus: string;
}
function ButtonTab({ element, onClick, activeStatus }: IButtonLinkProps) {
  const uid = useId();
  return (
    <React.Fragment>
      <button
        onClick={() => onClick(element.name)}
        key={uid}
        className={`group h-11 px-4 rounded-full border-2 border-dark ${
          activeStatus === element.name && "bg-dark text-white"
        } text-[16px] uppercase font-bold transition-all duration-500 relative`}
      >
        <span className="cover bg-gray-200 w-full h-full scale-0 group-hover:scale-100 transition-all duration-500 absolute rounded-full mix-blend-difference left-0 top-0 block"></span>
        {element.text}{" "}
        {element.count > -1 && (
          <span className="text-[10px] font-bold -ml-1">{element.count}</span>
        )}
      </button>
    </React.Fragment>
  );
}

export default ButtonTab;
