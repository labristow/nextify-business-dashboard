import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface ISelectFieldProps {
  onChange?: (e: SelectChangeEvent) => void;
  options: { value: string; label: string }[];
  name: string;
  value: string;
  label: string;
  disabled?: boolean;
}

export default function TextSelect({
  onChange,
  name,
  options,
  value,
  label,
  disabled,
}: ISelectFieldProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          disabled={disabled}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label={label}
          onChange={onChange}
          MenuProps={{
            disableScrollLock: true,
            style: {
              height: 250,
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
