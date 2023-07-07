import React from "react";
import Select from "react-select";
// import ValueType from "react-select";
// import OptionTypeBase from "react-select";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  name: string;
  value: string[];
  options: Option[];
  onChange: (value: string[], name: string) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  name,
  value,
  options,
  onChange,
}) => {
  const handleChange = (selectedOptions: any) => {
    const selectedValues =
      (selectedOptions as Option[] | null)?.map((option) => option.value) ?? [];
    onChange(selectedValues, name);
  };

  return (
    <Select
      name={name}
      value={options.filter((option) => value.includes(option.value))}
      options={options}
      onChange={handleChange}
      isMulti
    />
  );
};

export default MultiSelect;
