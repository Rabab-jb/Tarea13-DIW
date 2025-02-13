interface WeatherItemProps {
    day: string;
    temperature: string;
    icon: string;
  }
  
  function WeatherItem({ day, temperature, icon }: WeatherItemProps) {
    return (
      <div className="text-center p-2">
        <p className="fw-bold">{day}</p>
        <i className={`bi ${icon} display-4`}></i>
        <p className="text-muted">{temperature}</p>
      </div>
    );
  }
  
  export default WeatherItem;
  