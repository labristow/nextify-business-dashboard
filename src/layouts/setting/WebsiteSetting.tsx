import { SVGS } from "@/assets/SVGS";
import ButtonForm from "@/components/button/ButtonForm";
import ColorPicker from "@/components/color-picker/ColorPicker";
import TextInput from "@/components/input/TextInput";
import TextSelect from "@/components/select/TextSelect";
import React, { useRef, useState } from "react";
import BrandColorSelection from "./module/BrandColorSelection";

function WebsiteSetting() {
  const brandLogoRef = useRef<any>("");
  const [accordionTabIndex, setAccordionTabIndex] = useState<number>(-1);
  const [websiteSetting, setWebsiteSetting] = useState({
    brandColor: "",
    fontSelection: "",
    brandLogo: "",
    analyticsId: "",
  });
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
  const handleColorSelect = (color: string) => {
    setWebsiteSetting({
      ...websiteSetting,
      brandColor: color,
    });
  };
  const toggleAccordion = (id: number) => {
    if (id === accordionTabIndex) {
      setAccordionTabIndex(-1);
    } else {
      setAccordionTabIndex(id);
    }
  };
  const removeSelectedColor = () =>
    setWebsiteSetting({ ...websiteSetting, brandColor: "" });
  return (
    <div>
      <div className="header flex items-start gap-3 mt-5">
        <div className="mt-2">
          <SVGS.SettingIcon />
        </div>
        <div>
          <h4 className="text-[20px] font-semibold">Website setting</h4>
          <p className="-mt-2 text-sm">Customize your website look and feel.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
        <div className="w-full lg:w-[400px] pt-8">
          <BrandColorSelection
            websiteSetting={websiteSetting}
            toggleAccordion={toggleAccordion}
            accordionTabIndex={accordionTabIndex}
            handleColorSelect={handleColorSelect}
            removeSelectedColor={removeSelectedColor}
          />
          <div className="my-5">
            <TextSelect
              label="Select Brand Font"
              name="fontSelection"
              value=""
              options={[
                { label: "Roboto", value: "roboto" },
                { label: "Arial", value: "arial" },
                { label: "Open Sans", value: "open-sans" },
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
              className="w-full min-w-[200px] h-14 rounded bg-primary-blue text-white flex items-center justify-center"
              type="button"
            >
              <SVGS.ImageIcon color="#FFFFFF" /> Upload brand logo
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
        </div>
        <div className="w-full lg:w-[400px] pt-8">
          <div className="my-5">
            <TextSelect
              label="Select Website Theme"
              name="theme"
              value=""
              options={[
                { label: "Theme1", value: "theme1" },
                { label: "Theme2", value: "theme2" },
                { label: "Theme3", value: "theme3" },
              ]}
            />
          </div>
          <div className="my-5">
            <TextInput
              onChange={handleChange}
              type="text"
              placeholder="Upload promotional images"
              label="Promotional Images"
              name="analyticsId"
              value=""
            />
          </div>
        </div>
      </div>

      <form
        method="POST"
        autoComplete="off"
        // onSubmit={handleSubmit}
        className="mt-5 w-[440px] hidden"
      >
        {/* <div>
          <TextInput
            value={socialData.fbPageLink}
            name="name"
            type="text"
            onChange={handleChange}
            label="Facebook Page Link"
            placeholder="Enter your facebook link"
          />
        </div> */}
        <div className="">
          <ColorPicker
            selectedColor={websiteSetting.brandColor}
            onSelect={handleColorSelect}
            removeSelectedColor={removeSelectedColor}
          />
          {/* <TextInput
            value={socialData.fbPageLink}
            onChange={handleChange}
            name="price"
            type="text"
            label="Price"
            placeholder="Enter your product price"
          /> */}
          {/* <TextSelect
            options={categories}
            label="Category"
            name="category"
            value={socialData.category}
            onChange={handleChange}
          /> */}
        </div>
        {/* <div className="mt-3">
          <TextareaInput
            value={socialData.description}
            onChange={handleChange}
            name="description"
            type="text"
            label="Description"
            placeholder="Enter your product description"
          />
        </div> */}
        {/* <div className="mt-3">
          <FileUpload handleFileUpload={handleFileUpload} />
        </div> */}
        <div className="mt-3">
          <ButtonForm
            type="submit"
            text="Create new product"
            className="w-full h-14 bg-primary-blue"
          />
        </div>
      </form>
    </div>
  );
}

export default WebsiteSetting;
