import { SVGS } from "@/assets/SVGS";
import ButtonForm from "@/components/button/ButtonForm";
import FileUpload from "@/components/fileuploader/FileUpload";
import TextInput from "@/components/input/TextInput";
import TextareaInput from "@/components/input/TextareaInput";
import TextSelect from "@/components/select/TextSelect";
import React, { useState } from "react";

function SocialMediaSetting() {
  const [socialData, setSocialData] = useState({
    fbPageLink: "www.facebook.com/",
    igPageLink: "www.instagram.com/",
    twPageLink: "www.twitter.com/",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "fbPageLink") {
      const rootAddress = "www.facebook.com/";
      const newInput = value.split(rootAddress)[1];
      setSocialData({
        ...socialData,
        [name]: newInput ? rootAddress + newInput : rootAddress,
      });
    } else if (name === "igPageLink") {
      const rootAddress = "www.instagram.com/";
      const newInput = value.split(rootAddress)[1];
      setSocialData({
        ...socialData,
        [name]: newInput ? rootAddress + newInput : rootAddress,
      });
    } else if (name === "twPageLink") {
      const rootAddress = "www.twitter.com/";
      const newInput = value.split(rootAddress)[1];
      setSocialData({
        ...socialData,
        [name]: newInput ? rootAddress + newInput : rootAddress,
      });
    }
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formattedPayload: {
      fbUsername?: string;
      igUsername?: string;
      twUsername?: string;
    } = {};
    const fbUsername = socialData.fbPageLink.split("www.facebook.com/")[1];
    const igUsername = socialData.igPageLink.split("www.instagram.com/")[1];
    const twUsername = socialData.twPageLink.split("www.twitter.com/")[1];

    if (fbUsername) formattedPayload.fbUsername = fbUsername;
    if (igUsername) formattedPayload.igUsername = igUsername;
    if (twUsername) formattedPayload.twUsername = twUsername;
    alert(JSON.stringify(formattedPayload));
  };
  return (
    <React.Fragment>
      <div className="header flex items-start gap-3 mt-5">
        <div className="mt-2">
          <SVGS.SettingIcon />
        </div>
        <div>
          <h4 className="text-[20px] font-semibold">Social media setting</h4>
          <p className="-mt-2 text-sm">
            Help your customers to reach you on your social media platforms.
          </p>
        </div>
      </div>
      <div>
        <form
          method="POST"
          autoComplete="off"
          onSubmit={handleSubmit}
          className="mt-10 w-[420px]"
        >
          <div>
            <TextInput
              value={socialData.fbPageLink}
              name="fbPageLink"
              type="text"
              onChange={handleChange}
              label="Facebook Page Link"
              placeholder="Enter your facebook link"
            />
          </div>
          <div className="mt-7">
            <TextInput
              value={socialData.igPageLink}
              name="igPageLink"
              type="text"
              onChange={handleChange}
              label="Instagram Page Link"
              placeholder="Enter your instagram link"
            />
          </div>
          <div className="mt-7">
            <TextInput
              value={socialData.twPageLink}
              name="twPageLink"
              type="text"
              onChange={handleChange}
              label="Twitter Page Link"
              placeholder="Enter your twitter link"
            />
          </div>
          <div className="mt-3">
            <ButtonForm
              type="submit"
              text="Save social settings"
              className="w-full h-14 bg-primary-blue"
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default SocialMediaSetting;
