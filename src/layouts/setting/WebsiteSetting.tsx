import { SVGS } from "@/assets/SVGS";
import ButtonForm from "@/components/button/ButtonForm";
import ColorPicker from "@/components/color-picker/ColorPicker";
import TextInput from "@/components/input/TextInput";
import TextSelect from "@/components/select/TextSelect";
import React, { useRef, useState } from "react";
import BrandColorSelection from "./module/BrandColorSelection";
import ToggleBtn from "@/components/button/ToggleBtn";
import { SelectChangeEvent } from "@mui/material";

function WebsiteSetting() {
  const brandLogoRef = useRef<any>("");
  const [websiteSetting, setWebsiteSetting] = useState({
    brandFGColor: "",
    brandBGColor: "",
    theme: "",
    brandLogo: "",
    analyticsId: "",
    showTopbar: false,
    topbarMessage: "",
    headline: "Start your day with happiness, brewed for you.",
  });

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setWebsiteSetting({
      ...websiteSetting,
      [name]: value,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setWebsiteSetting({
        ...websiteSetting,
        [name]: URL.createObjectURL(files[0]),
      });
    } else {
      setWebsiteSetting({
        ...websiteSetting,
        [name]: value,
      });
    }
  };

  const handleColorSelect = (color: string, name: string) => {
    setWebsiteSetting({
      ...websiteSetting,
      [name]: color,
    });
  };

  const handleToggle = (value: boolean, name: string) => {
    setWebsiteSetting({
      ...websiteSetting,
      [name]: value,
    });
  };

  const removeSelectedColor = (name: string) =>
    setWebsiteSetting({ ...websiteSetting, [name]: "" });

  const saveHandler = () => {
    alert(JSON.stringify(websiteSetting));
  };
  return (
    <div>
      <div className="header flex items-center justify-between">
        <div className="flex items-start gap-3 mt-5">
          <div className="mt-2">
            <SVGS.SettingIcon />
          </div>
          <div>
            <h4 className="text-[20px] font-semibold">Website setting</h4>
            <p className="-mt-2 text-sm">
              Customize your website look and feel.
            </p>
          </div>
        </div>

        <button
          onClick={saveHandler}
          className="h-12 flex items-center justify-center rounded-lg bg-black text-white font-semibold text-sm px-5"
        >
          Save settings
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
        <div className="w-full lg:w-[400px] pt-8">
          <div className="my-5">
            <TextSelect
              onChange={handleSelectChange}
              label="Select Website Theme"
              name="theme"
              value={websiteSetting.theme}
              options={[
                { label: "Theme1", value: "theme1" },
                { label: "Theme2", value: "theme2" },
                { label: "Theme3", value: "theme3" },
              ]}
            />
          </div>

          <div className="my-5 flex items-center justify-start gap-x-5">
            <input
              // value={websiteSetting.brandLogo}
              ref={brandLogoRef}
              onChange={handleChange}
              type="file"
              name="brandLogo"
              className="hidden"
            />
            <button
              onClick={() =>
                brandLogoRef.current && brandLogoRef.current.click()
              }
              className="w-full min-w-[200px] h-14 rounded bg-primary-blue_ text-black flex items-center justify-start"
              type="button"
            >
              <SVGS.ImageIcon color="#000000" /> Upload brand logo
            </button>
            {websiteSetting.brandLogo && (
              <div className="w-[70px] h-[70px] border border-gray-300 rounded flex flex-shrink-0 items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={websiteSetting.brandLogo}
                  alt=""
                />
              </div>
            )}
          </div>

          <BrandColorSelection
            name="brandFGColor"
            value={websiteSetting.brandFGColor}
            handleColorSelect={handleColorSelect}
            removeSelectedColor={removeSelectedColor}
            title="Brand foreground color"
            subTitle="Select your brand foreground color"
          />

          <BrandColorSelection
            name="brandBGColor"
            value={websiteSetting.brandBGColor}
            handleColorSelect={handleColorSelect}
            removeSelectedColor={removeSelectedColor}
            title="Brand background color"
            subTitle="Select your brand background color"
          />
        </div>
        <div className="w-full lg:w-[400px] pt-8">
          <div className="my-5 flex items-center justify-between">
            <div>
              <h5 className="font-semibold">Show Topbar</h5>
              <p>
                Do you have any announcement to show visitors on your website
                Topbar?
              </p>
            </div>
            <ToggleBtn
              status={websiteSetting.showTopbar}
              handleToggle={handleToggle}
              name="showTopbar"
            />
          </div>
          {websiteSetting.showTopbar && (
            <div className="w-full">
              <TextInput
                type="text"
                label="Topbar message"
                name="topbarMessage"
                onChange={handleChange}
                placeholder="Enter your topbar message"
                value={websiteSetting.topbarMessage}
              />
            </div>
          )}
          <hr className="w-full my-5" />
          <div className="my-5">
            <TextInput
              onChange={handleChange}
              type="text"
              placeholder="Enter google analytics ID"
              label="Analytics ID"
              name="analyticsId"
              value=""
              rows={4}
              isMultiLine={true}
            />
          </div>
          <hr className="w-full my-5" />
          <div className="my-5">
            <TextInput
              type="text"
              label="Headerline"
              name="headline"
              onChange={handleChange}
              placeholder="Enter your store headline message"
              value={websiteSetting.headline}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteSetting;
