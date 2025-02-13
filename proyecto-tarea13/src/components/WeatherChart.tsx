import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const data = {
  labels: ["17:00", "20:00", "23:00", "02:00", "05:00", "08:00", "11:00", "14:00"],
  datasets: [
    {
      label: "Temperatura (°C)",
      data: [15, 11, 8, 6, 4, 2, 6, 12], // Valores de temperatura en la imagen
      borderColor: "#fbc02d",
      backgroundColor: "rgba(251, 192, 45, 0.2)",
      fill: true,
      tension: 0.4, // Suaviza la curva
    },
  ],
};

function WeatherChart() {
  return <Line data={data} />;
}

export default WeatherChart;
