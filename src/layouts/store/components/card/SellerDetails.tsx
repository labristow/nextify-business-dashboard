import React from "react";
import IconButton from "@mui/material/IconButton";
import { Facebook, Twitter, Instagram, WhatsApp } from "@mui/icons-material";

function SellerDetails() {
  return (
    <div className="w-full h-[30vh] border border-gray-300">
      <div className="h-12 flex items-center justify-center bg-gray-200">
        <h5 className="uppercase text-sm">SELLER INFORMATION</h5>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-700">Email Address</p>
            <a href="mailto:blessingladejobi@gmail.com" className="font-thin">
              blessingladejobi@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs text-gray-700">Mobile Number</p>
            <a href="mailto:blessingladejobi@gmail.com" className="font-thin">
              +234 814 833 1698
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 py-5">
          <span className="text-sm w-8 h-8 rounded-full border border-gray-50 flex items-center justify-center">
            <IconButton aria-label="Facebook">
              <Facebook className="text-primary-blue" />
            </IconButton>
          </span>
          <span className="text-sm w-8 h-8 rounded-full border border-gray-50 flex items-center justify-center">
            <IconButton aria-label="Facebook">
              <Twitter className="text-blue-500" />
            </IconButton>
          </span>
          <span className="text-sm w-8 h-8 rounded-full border border-gray-50 flex items-center justify-center">
            <IconButton aria-label="Facebook">
              <Instagram className="text-red-700" />
            </IconButton>
          </span>
          <span className="text-sm w-8 h-8 rounded-full border border-gray-50 flex items-center justify-center">
            <IconButton aria-label="Facebook">
              <WhatsApp className="text-green-500" />
            </IconButton>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SellerDetails;
