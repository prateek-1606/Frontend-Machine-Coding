import { useEffect, useState } from "react";
import "./App.css";

const API_KEY = "54b287a7b9b69c4b565bfd725a463024";

function App() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchWeatherData(lat: number, lon: number) {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      });
    }
  }, []);

  return (
    <>
      {isLoading || !weatherData ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="city-name">{weatherData.name}</div>
          <div className="description">{`Current Temperature: ${weatherData.main.temp} F`}</div>
          <div className="description">{`Description: ${weatherData.weather[0].description}`}</div>
          <div className="description">{`Max Temperature: ${weatherData.main.temp_max} F`}</div>
          <div className="description">{`Min Temperature: ${weatherData.main.temp_min} F`}</div>
          <div className="description">{`Humidity: ${weatherData.main.humidity} F`}</div>
        </>
      )}
    </>
  );
}

export default App;
