import { currencyConverter } from "@/utils/currenyConverter";
import React from "react";

export interface ITableColumn {
  avatar: string;
  recipientName: string;
  time: string;
  date: string;
  isInflow: boolean;
  currency: string;
  amount: number;
}
interface Props {
  onClick: () => void;
  data: ITableColumn;
}
function TableColumn({ data, onClick }: Props) {
  const { avatar, recipientName, time, date, isInflow, currency, amount } =
    data;
  return (
    <div
      onClick={() => onClick()}
      className="flex hover:bg-blue-50 px-3 rounded-lg h-[72px] cursor-pointer items-center justify-between"
    >
      <div className="profile_info flex items-center gap-2">
        <div className="avatar relative w-10 h-10 rounded-full shadow bg-gray-300 font-bold flex items-center justify-center text-lg">
          {avatar ? (
            <img
              src={avatar}
              alt="user__avatar"
              className="absolute w-full h-full rounded-full"
            />
          ) : (
            `${recipientName.split(" ")[0][0]}${recipientName.split(" ")[1][0]}`
          )}
        </div>
        <div>
          <h5 className="text-[16px] text-gray-600">{recipientName}</h5>
          <p className="flex items-center text-[12px] text-gray-400 gap-2">
            {time}
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            {date}
          </p>
        </div>
      </div>
      <p
        className={`text-sm ${
          isInflow ? "text-green-500" : "text-red-500"
        }`}
      >
        {currency}{currencyConverter(amount)}
      </p>
    </div>
  );
}

export default TableColumn;
