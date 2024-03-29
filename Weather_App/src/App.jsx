import { useState } from "react";
import "./App.css";
import fetchWeather from "./Api/weatherApi";
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
    }
  };
  return (
    <div className="main-container">
      <h1 className="heading">Weather App</h1>
      <input
        type="text"
        className="search"
        placeholder="search a city..."
        value={query}
        onChange={(e) => {
          const { value } = e.target;
          setQuery(value);
        }}
        onKeyDown={handleSearch}
      />
      {weather?.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather?.name}</span>
            <sup>{weather?.sys?.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather?.main?.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
