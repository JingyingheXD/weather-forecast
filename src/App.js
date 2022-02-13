import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherSummary from "./components/weather-summary";
import Footer from "./components/footer";

function App() {
  const [dailyWeathers, setDailyWeathers] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=-37&lon=145&appid=e1fb6136198f0c0a8cd978f199e1a78a",
      { method: "GET" }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setDailyWeathers(resp.daily);
        setCurrentWeather(resp.current);
      })
      .catch((error) => console.log(error));
  }, []);

  const dailyWeatherClicked = (dailyWeather) => {
    setSelectedWeather(dailyWeather);
  };

  return (
    <div className="App">
      <div className="weather-details">
        <WeatherSummary
          dailyWeathers={dailyWeathers}
          currentWeather={currentWeather}
        />
        <div>hello</div>
      </div>
      <Footer
        dailyWeatherClicked={dailyWeatherClicked}
        dailyWeathers={dailyWeathers.slice(0, -1)}
      />
    </div>
  );
}

export default App;
