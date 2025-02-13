interface WeatherInfoProps {
    temperature: string;
    condition: string;
    humidity: string;
    wind: string;
  }
  
  function WeatherInfo({ temperature, condition, humidity, wind }: WeatherInfoProps) {
    return (
      <div className="p-3 text-center">
        <h2 className="fw-bold">{temperature} ☀️</h2>
        <p className="text-muted">{condition}</p>
        <p>💧 Humedad: {humidity}</p>
        <p>💨 Viento: {wind}</p>
      </div>
    );
  }
  
  export default WeatherInfo;
  