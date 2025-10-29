import { useEffect, useState, useRef } from "react";
import { weatherData } from "./weatherData.js";

function CityForecast({ city, onBack }) {
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (city && weatherData[city]) {
      setForecast(weatherData[city]);
    } else {
      setForecast(null);
    }
  }, [city]);

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="forecast">
      <h2>Forecast for {city}</h2>
      {forecast ? (
        <>
          <p>{forecast.summary}</p>
          <button onClick={scrollToDetails}>View Details</button>
          <div ref={detailsRef} className="details">
            <h3>Details</h3>
            <p>{forecast.details}</p>
          </div>
        </>
      ) : (
        <p>No forecast available for this city.</p>
      )}
      <button onClick={onBack}>Back to City List</button>
    </div>
  );
}

export default CityForecast;