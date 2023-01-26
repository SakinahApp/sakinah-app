import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      display: true,
    },
    title: {
      display: true,
      text: "Sessions Information",
    },
  },
  label: false,
};

export function DoughnutChart({ dataSessions }) {
  const sessionNumbers = dataSessions.map((item) => item.number);
  const sessionColors = dataSessions.map((item) => item.color);
  const sessionNames = dataSessions.map((item) => item.name).slice(0, 3);

  const data = {
    labels: sessionNames,
    datasets: [
      {
        label: "# of Sessions",
        data: sessionNumbers,
        backgroundColor: sessionColors,
        borderColor: [
          "rgba(153, 102, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
}
