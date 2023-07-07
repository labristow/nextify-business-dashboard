import { IIcon } from "@/assets/SVGS";
import React, { ChangeEvent, useState } from "react";

interface IMetricCard {
  cardName: string;
  Icon: ({ color, size, fill, className }: IIcon) => JSX.Element;
  count: string;
  unit?: string;
}
function MetricCard(props: IMetricCard) {
  const { cardName, Icon, count, unit } = props;
  const [cardCount, setCardCount] = useState<number | string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCardCount(0);
    }, 2000);
  };
  return (
    <div className="relative w-full min-w-[245px] bg-white shadow-sm scale-100 hover:scale-105 hover:shadow-xl h-[162px] border border-gray-100 rounded-lg px-6 py-4 duration-300">
      <div className="filter-container flex justify-end">
        <select
          onChange={handleFilter}
          name="filter"
          id=""
          className="border-b border-gray-400 outline-none text-sm"
        >
          <option value="">Today</option>
          <option value="">This week</option>
          <option value="">This Month</option>
          <option value="">This Year</option>
          <option value="">All time</option>
        </select>
      </div>
      <div className="title flex items-center gap-x-2 mt-3">
        <div className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center">
          <Icon color="#FFFFFF" />
        </div>
        <h5 className="text-[16px] font-medium">{cardName}</h5>
      </div>
      <h3 className="mt-2.5 text-2xl font-medium flex items-center">
        {unit}
        {isLoading ? (
          <span className="block w-5 h-5 border border-gray-900 border-t-transparent rounded-full animate-spin"></span>
        ) : (
          <>{cardCount !== "" ? cardCount : count}</>
        )}
      </h3>
    </div>
  );
}

export default MetricCard;
