import React from "react";
import { Button } from "@mui/material";

interface IProps extends React.ComponentProps<typeof Button> {
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
}
function ButtonForm(props: IProps) {
  const {
    text,
    bgColor = "#2026D2",
    textColor = "#FFFFFF",
    className,
    isLoading,
    onClick,
    ...restProps
  } = props;
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        textTransform: "none",
        color: textColor,
      }}
      className={className}
      {...restProps}
    >
      {isLoading && (
        <span className="w-5 h-5 block animate-spin rounded-full border-2 border-white border-t-transparent"></span>
      )}
      {text}
    </Button>
  );
}

export default ButtonForm;
