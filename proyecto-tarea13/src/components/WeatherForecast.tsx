import WeatherItem from "./WeatherItem";

const forecastData = [
  { day: "Jue", temperature: "16° 1°", icon: "bi-brightness-high" },
  { day: "Vie", temperature: "16° 2°", icon: "bi-cloud-sun" },
  { day: "Sáb", temperature: "17° 4°", icon: "bi-cloud" },
  { day: "Dom", temperature: "17° 3°", icon: "bi-cloud-sun" },
  { day: "Lun", temperature: "17° 6°", icon: "bi-cloud" },
  { day: "Mar", temperature: "18° 7°", icon: "bi-cloud" },
  { day: "Mié", temperature: "16° 6°", icon: "bi-cloud-sun" },
  { day: "Jue", temperature: "17° 6°", icon: "bi-cloud-sun" },
];

function WeatherForecast() {
  return (
    <div className="d-flex justify-content-around bg-light p-3 rounded">
      {forecastData.map((data, index) => (
        <WeatherItem key={index} {...data} />
      ))}
    </div>
  );
}

export default WeatherForecast;
