import { SVGS } from "@/assets/SVGS";
import React, { useState } from "react";
import DetailsBox from "./DetailsBox";
import Avatar from "@/components/avatar/Avatar";

interface ProfilePayload {
  name: string;
  username: string;
  email: string;
  contactNumber: string;
  businessAddress: string;
  title: string;
  avatar: string;
  [key: string]: string; // Add index signature
}

function ContactDetails() {
  const [profilePayload, setProfilePayload] = useState<ProfilePayload>({
    name: "Ladejobi Blessing",
    username: "Thexagon Limited",
    email: "blessingladejobi@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/72989?v=4",
    contactNumber: "+2348148331698",
    businessAddress: "B12 Adeniyi Jones, Ikeja Lagos Nigeria",
    title: "Brewing happiness in every cup",
  });
  const [profileElement] = useState([
    {
      key: "name",
      Icon: SVGS.ProfileIcon,
      label: "Name",
      editable: true,
    },
    {
      key: "username",
      Icon: SVGS.ProfileIcon,
      label: "Username/Shop Name",
      editable: true,
    },
    {
      key: "email",
      Icon: SVGS.EmailIcon,
      label: "Email Address",
      editable: false,
    },
    {
      key: "title",
      Icon: SVGS.ProfileIcon,
      label: "Title",
      editable: true,
    },
    {
      key: "contactNumber",
      Icon: SVGS.PhoneIcon,
      label: "Contact Number",
      editable: true,
    },
    {
      key: "businessAddress",
      Icon: SVGS.LocationIcon,
      label: "Business Address",
      editable: true,
    },
  ]);
  const handleInputChange = (props: { name: string; value: string }) => {
    const { name, value } = props;
    setProfilePayload({
      ...profilePayload,
      [name]: value,
    });
  };
  const handleAvatarUpload = (image: string) => {
    setProfilePayload({
      ...profilePayload,
      avatar: image,
    });
  };
  return (
    <div className="bg-white p-5">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-x-4">
        <Avatar
          avatar={profilePayload.avatar}
          handleAvatarUpload={handleAvatarUpload}
        />
        <div className="business-details flex flex-col">
          <h5 className="font-semibold text-xl">{profilePayload.username}</h5>
          <p className="text-[15px] font-medium">{profilePayload.title}</p>
        </div>
      </div>
      <div className="mx-auto grid items-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        {profileElement.map(({ Icon, label, key, editable }, index) => (
          <DetailsBox
            key={index}
            Icon={Icon}
            label={label}
            name={key}
            onChange={handleInputChange}
            value={profilePayload[key]}
            isEditable={editable}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactDetails;
