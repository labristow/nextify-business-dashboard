import React from "react";
import TextInput from "../input/TextInput_old";
import SearchInput from "../input/SearchInput";
import WebsiteInput from "../input/WebsiteInput";
import TextSelect from "../select/TextSelect";

function WorkExperienceForm() {
  return (
    <div className="w-full mt-6">
      <TextInput />
      <div className="grid grid-cols-2 items-center gap-x-4 py-3">
        <SearchInput />
        <WebsiteInput />
      </div>
      <div className="grid grid-cols-2 items-center gap-x-4 py-3">
        <SearchInput title="Location" />
        <TextSelect />
      </div>
    </div>
  );
}

export default WorkExperienceForm;
