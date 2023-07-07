import { SVGS } from "@/assets/SVGS";
import MetricCard from "@/components/card/MetricCard";
import { currencyConverter } from "@/utils/currenyConverter";
import React, { useState } from "react";
import TransactionTable from "@/components/table/transactionTable/TransactionTable";

const greetingMessages = [
  "Hope you're having a great day!",
  "Wishing you a wonderful morning!",
  "Sending you warm greetings!",
  "May your day be filled with joy and happiness!",
  "Hello! I hope you're doing well.",
  "Good to see you! Have a fantastic day!",
  "Greetings and best wishes to you!",
  "Sending positive vibes your way!",
  "Wishing you a successful and productive day!",
  "Hello! Trust you are good today!",
];

function Index({ greetingIndex }: { greetingIndex: number }) {
  const [metrics, setMetrics] = useState([
    {
      cardName: "Total Sales",
      Icon: SVGS.WalletIcon,
      count: currencyConverter(30002),
      unit: "₦",
    },
    {
      cardName: "New Customers",
      Icon: SVGS.ProfileIcon,
      count: currencyConverter(32),
      // unit: "₦",
    },
    {
      cardName: "Pending Orders",
      Icon: SVGS.OrderIcon,
      count: currencyConverter(2),
      // unit: "₦",
    },
    {
      cardName: "Total Orders",
      Icon: SVGS.OrderIcon,
      count: currencyConverter(78),
      // unit: "₦",
    },
  ]);
  return (
    <div className="w-full slide-up py-6 px-6 md:px-0">
      <h4 className="font-bold text-3xl uppercase">Welcome back 👋,</h4>
      <p>Hi happycoffee, {greetingMessages[greetingIndex]}</p>
      <div className="card-container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6 py-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
      <TransactionTable />
    </div>
  );
}

export const getServerSideProps = async () => {
  const greetingIndex = Math.floor(Math.random() * 10);
  return {
    props: {
      greetingIndex,
    },
  };
};

export default Index;
