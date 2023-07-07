import { SVGS } from "@/assets/SVGS";
import React, { ChangeEvent, useRef, useState } from "react";
import { toast } from "react-hot-toast";

function Avatar({
  avatar,
  handleAvatarUpload,
}: {
  avatar: string;
  handleAvatarUpload: (image: string) => void;
}) {
  const [uploadTimeout, setUplaodTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const avatarFileRef = useRef<HTMLInputElement>(null);
  const launchFileSelector = () => {
    const target = avatarFileRef.current;
    if (target) {
      if (uploadTimeout) {
        clearTimeout(uploadTimeout);
      }
      target.click();
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files?.length > 0) {
      if (uploadTimeout) {
        clearTimeout(uploadTimeout);
      }
      const timeout = setTimeout(() => {
        // Upload image to server
        toast.success("Profile picture changed successfully");
      }, 6000);
      setUplaodTimeout(timeout);
      handleAvatarUpload(URL.createObjectURL(files[0]));
    }
  };
  return (
    <div className="relative p-[3px] border-2 bg-gradient-to-r from-primary-blue via-primary to-secondary-blue flex items-center justify-center w-32 h-32 rounded-full">
      <div className="group w-[120px] h-[120px] bg-white rounded-full relative">
        <input
          type="file"
          className="hidden"
          ref={avatarFileRef}
          onChange={handleInputChange}
        />
        <div className="w-full h-full duration-500 scale-0 group-hover:scale-100 flex items-center justify-center absolute bg-primary-blue bg-opacity-10 backdrop-blur-md rounded-full">
          <button onClick={launchFileSelector}>
            <SVGS.CameraIcon size="36" />
          </button>
        </div>
        <img
          src={avatar}
          className="w-full h-full rounded-full shadow object-cover"
          alt=""
        />
      </div>
      <span className="absolute bottom-3 right-1">
        <SVGS.ApprovedIcon className="bg-white rounded-full fill-primary-blue" />
      </span>
    </div>
  );
}

export default Avatar;
