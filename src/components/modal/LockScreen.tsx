import { SVGS } from "@/assets/SVGS";
import React from "react";
import ModalHeader from "../header/ModalHeader";
import OTPInput from "../input/OTPInput";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideOverlay } from "@/features/overlay/overlaySlice";
import { useRouter } from "next/router";
import { UserData } from "@/layouts/dashboard/DashboardLayout";

function LockScreen() {
  const router = useRouter();
  const navigateTo = (path: string) => router.push(path);
  const dispatch = useDispatch();
  const [pinLength] = React.useState<number>(4);
  const [pin, setPin] = React.useState<string>("");
  const handlePin = (value: string) => {
    setPin(value);
    if (value.length === pinLength) {
      if (value === "1234") {
        dispatch(hideOverlay());
        toast.success("Screen Unlocked");
        handleUnlockScreen();
      } else {
        toast.error("Wrong PIN. Try again");
      }
    }
  };

  const handleUnlockScreen = () => {
    const _userData: UserData = JSON.parse(
      window.sessionStorage.getItem("userData") ?? ""
    );
    if (_userData && _userData.isScreenLocked) {
      const newUserData = {
        ..._userData,
        isScreenLocked: false,
      };
      window.sessionStorage.setItem("userData", JSON.stringify(newUserData));
      // window.location.reload();
    }
  };

  const handleLogout = () => {
    window.sessionStorage.clear();
    navigateTo("/login");
    toast.success("Logout successfully");
  };
  return (
    <div className="w-full lg:w-[480px] bg-white min-h-[365px] mx-auto mt-10 shadow-sm rounded-lg py-7 px-5 relative">
      <ModalHeader
        Icon={SVGS.ProductIcon}
        title="Screen locked"
        subtitle="Enter PIN to unlock screen"
        hideCloseBtn={true}
      />

      <div className="w-full h-[24vh] flex flex-col items-center justify-center">
        <OTPInput length={pinLength} handleOtpChange={handlePin} />
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={handleLogout}
          className="set-pin h-[52px] flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-black font-semibold text-sm px-6 duration-500"
        >
          <SVGS.LogoutIcon />
          Logout account
        </button>
      </div>
    </div>
  );
}

export default LockScreen;
