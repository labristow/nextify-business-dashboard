import Navbar from "@/components/navbar/Navbar";
import OverlayContainer from "@/components/overlay/OverlayContainer";
import Sidebar from "@/components/sidebar/Sidebar";
import { showOverlay } from "@/features/overlay/overlaySlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
interface IDashboardLayoutProps {
  children: JSX.Element;
}

export interface UserData {
  name: string;
  email: string;
  mobile: string;
  userName: string;
  imageUrl: string;
  isPinSet: boolean;
  isScreenLocked: boolean;
}

function DashboardLayout({ children }: IDashboardLayoutProps) {
  const dispatch = useDispatch();
  const [lockTime] = useState(5 * 60 * 1000);
  const [inactiveTimeout, setInactiveTimeout] = useState<NodeJS.Timeout>();
  const router = useRouter();
  const [width, setWidth] = useState<number>(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
  const [_, setUserData] = useState<any>(null);

  useEffect(() => {
    // setInactiveTimeout
    // Add event listeners for user activity
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("mousedown", handleActivity);
    window.addEventListener("keypress", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("mousedown", handleActivity);
      window.removeEventListener("keypress", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
    };
  }, [inactiveTimeout]);

  const handleActivity = () => {
    let inactivityTimer;
    clearTimeout(inactiveTimeout);

    inactivityTimer = setTimeout(() => {
      handleLockScreen();
    }, lockTime);
    setInactiveTimeout(inactivityTimer);
  };

  const handleLockScreen = () => {
    const _userData: UserData = JSON.parse(
      window.sessionStorage.getItem("userData") ?? ""
    );
    if (_userData && !_userData.isScreenLocked) {
      const newUserData = {
        ..._userData,
        isScreenLocked: true,
      };
      window.sessionStorage.setItem("userData", JSON.stringify(newUserData));
      window.location.reload();
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    if (window.innerWidth < 520) {
      setIsSidebarVisible(false);
    } else {
      setIsSidebarVisible(true);
    }
    // document.querySelector("body")?.classList.add("custom__scrollbar");
  }, []);

  useEffect(() => {
    if (window.innerWidth < 520) {
      setIsSidebarVisible(false);
    }
    let _userData: UserData = JSON.parse(
      window.sessionStorage.getItem("userData") ?? ""
    );

    if (_userData) {
      if (!_userData.isPinSet) {
        // When user refresh page or change pathname without setup pin they should see the set pin modal
        dispatch(
          showOverlay({
            name: "set-pin-overlay",
          })
        );
      }
      setUserData(_userData);
    }
  }, [router.pathname]);

  useEffect(() => {
    lockScreenForInactivity();
  }, []);

  const lockScreenForInactivity = () => {
    let _userData = window.sessionStorage.getItem("userData");
    if (_userData && JSON.parse(_userData).isScreenLocked) {
      dispatch(
        showOverlay({
          name: "lock-screen-overlay",
        })
      );
    }
  };

  return (
    <div className="w-full flex">
      <OverlayContainer />
      {isSidebarVisible && (
        <Sidebar setIsSidebarVisible={setIsSidebarVisible} />
      )}
      <div className="w-full md:w-[calc(100%_-_210px)] bg-gray-50">
        <Navbar setIsSidebarVisible={setIsSidebarVisible} />
        <div className="pb-5 px-1 md:pl-6 md:pr-6 h-[calc(100vh_-_80px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
