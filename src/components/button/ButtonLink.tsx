import Link from "next/link";
import React from "react";
interface IButtonLinkProps {
  children: JSX.Element | string;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}
function ButtonLink({
  children,
  className,
  href,
  onClick,
  ...restProps
}: IButtonLinkProps) {
  return (
    <React.Fragment>
      {href ? (
        <Link
          href={href}
          {...restProps}
          className={`scale-95 hover:scale-100 h-11 px-4 rounded-full border-2 border-dark text-[12px] uppercase font-bold transition-all duration-700 relative ${className}`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`scale-95 hover:scale-100 h-11 px-4 rounded-full border-2 border-dark text-[12px] uppercase font-bold transition-all duration-700 relative ${className}`}
        >
          {/* <span className="cover bg-gray-200 w-full h-full scale-0 group- hover:scale-100 transition-all duration-500 absolute rounded-full mix-blend-difference left-0 top-0 block"></span> */}
          {children}
        </button>
      )}
    </React.Fragment>
  );
}

export default ButtonLink;
