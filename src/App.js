import React, { useEffect, useState } from "react";
import "./App.css";
import GetSelectedWeatherSummary from "./utils/get-selected-weather-summary";

import WeatherSummary from "./components/weather-summary";
import WeatherDetails from "./components/weather-details";
import Footer from "./components/footer";

function App() {
  const [dailyWeathers, setDailyWeathers] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [displayWeather, setDisplayWeather] = useState(null);
  const [pollution, setPollution] = useState(null);

  useEffect(() => {
    fetch(
      "http://api.openweathermap.org/data/2.5/air_pollution?lat=-37&lon=145&appid=e1fb6136198f0c0a8cd978f199e1a78a",
      { method: "GET" }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setPollution(resp.list[0].components.pm2_5);
      })
      .catch((error) => console.log(error));
  });

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=-37&lon=145&appid=e1fb6136198f0c0a8cd978f199e1a78a",
      { method: "GET" }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setDailyWeathers(resp.daily);
        setCurrentWeather(resp.current);
        setDisplayWeather(
          GetSelectedWeatherSummary(resp.daily[0], resp.current, pollution)
        );
      })
      .catch((error) => console.log(error));
  }, []);

  const dailyWeatherClicked = (selectedWeather) => {
    const summary = GetSelectedWeatherSummary(
      selectedWeather,
      currentWeather,
      pollution
    );
    setDisplayWeather(summary);
  };

  return (
    <div className="App">
      <div className="body">
        <WeatherSummary displayWeather={displayWeather} />
        <WeatherDetails displayWeather={displayWeather} />
      </div>
      <Footer
        dailyWeatherClicked={dailyWeatherClicked}
        dailyWeathers={dailyWeathers.slice(0, -1)}
      />
    </div>
  );
}

export default App;
