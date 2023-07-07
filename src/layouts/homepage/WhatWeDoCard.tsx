import HeroActionButton from "@/components/button/HeroActionButton";
import React from "react";

interface CardDetails {
  title: string;
  subtitle: string;
  buttonText: string;
}
interface Props {
  color: string;
  index: number;
  cardDetails: CardDetails;
}
function WhatWeDoCard(props: Props, ref: any) {
  const { color, index, cardDetails, ...restProps } = props;
  return (
    <div
      style={{
        backgroundColor: color ?? "black",
      }}
      ref={(element) => (ref.current = element)}
      className={`card-background ${
        index % 2 === 0
          ? "card-background-position-left"
          : "card-background-position-right"
      } p-20 h-[78vh] w-full rounded-[3em] relative z-20`}
    >
      <h3 className="font-semibold text-4xl w-1/3 ...">{cardDetails.title}</h3>
      <p className="text-2xl my-10 w-2/3 text-justify ..."> {cardDetails.subtitle}</p>
      <HeroActionButton href="/register" text={cardDetails.buttonText} className="border border-gray-600 h-20 rounded-full scale-95 hover:scale-100 duration-700" />
    </div>
  );
}

export default React.forwardRef(WhatWeDoCard);
