import { SVGS } from "@/assets/SVGS";
import { formatDateTime } from "@/utils/formatDateTime";
import React from "react";

function DateTime() {
  return (
    <div className="w-[230px] hidden md:flex items-center gap-2">
      <span className="animate-pulse">
        <SVGS.CalndarIcon color="#222222" />
      </span>
      <p className="text-dark text-sm">
        {formatDateTime(new Date().toISOString()).getDate}
      </p>
    </div>
  );
}

export default DateTime;
