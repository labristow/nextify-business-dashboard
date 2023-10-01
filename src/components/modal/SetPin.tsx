import { SVGS } from "@/assets/SVGS";
import React from "react";
import ModalHeader from "../header/ModalHeader";
import OTPInput from "../input/OTPInput";
import { toast } from "react-hot-toast";
import { hideOverlay } from "@/features/overlay/overlaySlice";
import { useDispatch } from "react-redux";
import { UserData } from "@/layouts/dashboard/DashboardLayout";

function SetPin() {
  const dispatch = useDispatch();
  const [pinLength] = React.useState<number>(4);
  const [pin, setPin] = React.useState<string>("");
  const handlePin = (value: string) => {
    setPin(value);
  };
  const handlePinSetup = () => {
    if (pin.length === pinLength) {
      let _userData: UserData = JSON.parse(
        window.sessionStorage.getItem("userData") ?? ""
      );
      if (_userData && _userData.isPinSet === false) {
        const newUserData = {
          ..._userData,
          isPinSet: true,
        };
        window.sessionStorage.setItem("userData", JSON.stringify(newUserData));
        toast.success("PIN setup successfully.");
        dispatch(hideOverlay());
        window.location.reload();
      }
    } else if (pin === "") {
      toast.error("PIN is required");
    } else {
      toast.error("Invalid PIN");
    }
  };
  return (
    <div className="w-full lg:w-[480px] bg-white min-h-[365px] mx-auto mt-10 shadow-sm rounded-lg py-7 px-5 relative">
      <ModalHeader
        Icon={SVGS.ProductIcon}
        title="Setup your PIN"
        subtitle="Secure all activities on your account"
      />

      <div className="w-full h-[24vh] flex flex-col items-center justify-center">
        <OTPInput length={pinLength} handleOtpChange={handlePin} />
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={handlePinSetup}
          className="set-pin h-[52px] rounded-lg bg-gray-200 hover:bg-black hover:text-white text-black font-semibold inline-block text-sm px-6 duration-500"
        >
          Setup PIN
        </button>
      </div>
    </div>
  );
}

export default SetPin;
