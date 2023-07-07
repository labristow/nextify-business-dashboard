import Link from "next/link";
import React from "react";

interface HeroActionButton {
  className?: string;
  text?: string;
  href?: string;
}

function HeroActionButton({
  className = "h-20 text-xl text-white border-2 border-white rounded-full flex items-center justify-center",
  text = "Create yours now",
  href,
}: HeroActionButton) {
  return (
    <React.Fragment>
      {href ? (
        <Link href={href}>
          <button className={`w-[250px] ${className}`}>{text}</button>
        </Link>
      ) : (
        <button className={`w-[250px] ${className}`}>{text}</button>
      )}
    </React.Fragment>
  );
}

export default HeroActionButton;
