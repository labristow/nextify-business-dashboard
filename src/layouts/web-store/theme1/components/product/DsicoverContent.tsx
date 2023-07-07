import Image from "next/image";
import React from "react";
import Product1 from "@/assets/web-assets/1.png";

export default function DsicoverContent() {
  return (
    <div className="w-[465px] h-[260px] rounded-2xl bg-yellow-500 overflow-hidden">
      <Image
        src={Product1}
        alt=""
        className="rounded-2xl w-[465px] h-[260px] hover:scale-105 scale-100 transition-all duration-300" unoptimized
      />
    </div>
  );
}
