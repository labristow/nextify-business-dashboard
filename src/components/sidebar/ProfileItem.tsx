import { SVGS } from "@/assets/SVGS";
import React from "react";

function ProfileItem() {
  return (
    <div className="px-5 mt-auto">
      <button className="h-20 border-t border-gray-200 w-full flex items-center justify-start gap-x-2">
        <div className="avatar">
          <img
            src={"https://avatars.githubusercontent.com/u/72989?v=4"}
            width={40}
            height={40}
            alt="profile_image"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="profile-details flex items-start relative">
          <div className="">
            <h5 className="font-semibold text-left text-sm w-[110px] truncate">
              Blessing Ladejobi
            </h5>
            <p className="text-xs mt-0.5 font-medium w-[120px] truncate">
              blessingladejobi@gmail.com
            </p>
          </div>
          <div title="Logout" className="absolute -top-1 -right-4">
            <SVGS.LogoutIcon />
          </div>
        </div>
      </button>
    </div>
  );
}

export default ProfileItem;
