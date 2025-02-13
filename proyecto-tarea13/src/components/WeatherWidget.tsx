import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import WeatherChart from "./WeatherChart";

function WeatherWidget() {
  return (
    <div className="weather-widget border rounded p-3 bg-white">
      <WeatherInfo temperature="15°C" condition="Soleado" humidity="50%" wind="13 km/h" />
      <WeatherChart />
      <WeatherForecast />
    </div>
  );
}

export default WeatherWidget;
