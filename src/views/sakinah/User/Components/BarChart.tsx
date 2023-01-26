import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  display: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      display: false,
    },
    title: {
      display: true,
      text: "Finances (£)",
    },
  },
  label: false,
};

export function BarChart({ dataSessions }) {
  const sessionNumbers = dataSessions.map((item) => item.number * 50);
  const sessionColors = dataSessions.map((item) => item.color);

  const data = {
    labels: ["Amount Paid", "Amount to pay", "Refunded"],
    datasets: [
      {
        label: "Finances (£)",
        data: sessionNumbers,
        backgroundColor: sessionColors,
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} options={options} />;
}
