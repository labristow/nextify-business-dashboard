import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 2,
    },
  ],
};

export function DoughnutChart() {
  const options = {
    spacing: 5, // set the spacing value to adjust the space between segments
    cutout: 56, // set the cutout value to adjust the thickness of each segment
    elements: {
      arc: {
        borderRadius: 10, // set the border radius value to apply rounded corners to each segment
      },
    },
  };
  return <Doughnut data={data} options={options} />;
}
