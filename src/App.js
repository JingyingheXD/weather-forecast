import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherDetails from "./components/weather-details";
import Footer from "./components/footer";

function App() {
  const [dailyWeathers, setDailyWeathers] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=-37&lon=145&appid=e1fb6136198f0c0a8cd978f199e1a78a",
      { method: "GET" }
    )
      .then((resp) => resp.json())
      .then((resp) => setDailyWeathers(resp.daily))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <div className="card">
        <WeatherDetails />
      </div>
      <div className="footer">
        {dailyWeathers.slice(0, -1).map((dailyWeather) => {
          return <Footer key={dailyWeather.dt} dailyWeather={dailyWeather} />;
        })}
      </div>
    </div>
  );
}

export default App;
