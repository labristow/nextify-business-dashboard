import React from "react";
import GradientImg from "@/assets/gradient.png";
import Image from "next/image";
import { SVGS } from "@/assets/SVGS";
import { hideOverlay } from "@/features/overlay/overlaySlice";
import { useDispatch } from "react-redux";

interface IProps {
  title?: string;
  subtitle?: string;
  Icon?: any;
  hasBackground?: boolean;
}

function ModalHeader({
  title = "Add work experience",
  subtitle = "Share where you've worked on your profile",
  Icon,
  hasBackground = false,
}: IProps) {
  const dispatch = useDispatch();
  const closeOverlay = () => {
    dispatch(hideOverlay());
  };
  return (
    <React.Fragment>
      {hasBackground && (
        <Image
          src={GradientImg}
          alt="gradient.png"
          className="absolute left-0 top-0 h-full rounded-[20px] blur-sm opacity-50"
        />
      )}
      <div className="header flex items-start gap-3">
        <div className="mt-2">
          <Icon />
        </div>
        <div>
          <h4 className="text-[20px] font-semibold">{title}</h4>
          <p className="-mt-2">{subtitle}</p>
        </div>
        <button
          onClick={closeOverlay}
          className="close-btn hover:bg-gray-100 transition-all duration-300 absolute right-5 top-5"
        >
          <SVGS.CloseIcon size="28" />
        </button>
      </div>
    </React.Fragment>
  );
}

export default ModalHeader;
