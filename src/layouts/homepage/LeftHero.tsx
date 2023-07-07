import { SVGS } from "@/assets/SVGS";
import ButtonLink from "@/components/button/ButtonLink";
import TextFocusOne from "@/components/text/TextFocusOne";
import React from "react";

export default function LeftHero() {
  return (
    <div className="pl-[80px] pt-24">
      <div className="intro h-12 flex items-center">
        <span className="px-5 py-3 rounded-full rounded-bl-none font-normal text-sm bg-blue-100 text-primary-blue">
          👋 Hello, we are kamart!
        </span>
      </div>
      <div className="hero-text w-full ...">
        <h3 className="py-4 text-6xl font-medium">
          Launch Your Online Store in Minutes with
          <TextFocusOne> kamart</TextFocusOne>
        </h3>
        <p className="text-xl">
          We makes it easy to launch a fully customized website that perfectly
          reflects your brand and helps you sell faster.
        </p>
      </div>
      <div className="call-2-actions mt-8 flex items-center gap-x-3">
        <ButtonLink className="w-[200px] h-20 bg-primary-blue border-transparent text-white rounded-full text-[15px] px-7 font-medium capitalize">
          Get started
        </ButtonLink>
        <ButtonLink className="w-[200px] h-20 rounded-full text-[15px] px-7 font-medium capitalize">
          Learn more
        </ButtonLink>
      </div>
    </div>
  );
}
