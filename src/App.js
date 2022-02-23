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

  // useEffect(() => {
  //   fetch(
  //     "http://api.openweathermap.org/data/2.5/air_pollution?lat=-37&lon=145&appid=e1fb6136198f0c0a8cd978f199e1a78a",
  //     { method: "GET" }
  //   )
  //     .then((resp) => resp.json())
  //     .then((resp) => {
  //       setPollution(resp.list[0].components.pm2_5);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // // TODO: re-render body after getting pollution

  // useEffect(() => {
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/onecall?lat=-37&lon=145&appid=e1fb6136198f0c0a8cd978f199e1a78a",
  //     { method: "GET" }
  //   )
  //     .then((resp) => resp.json())
  //     .then((resp) => {
  //       setDailyWeathers(resp.daily);
  //       setCurrentWeather(resp.current);
  //       setDisplayWeather(
  //         GetSelectedWeatherSummary(resp.daily[0], resp.current, pollution)
  //       );
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    Promise.all([
      fetch(
        "http://api.openweathermap.org/data/2.5/air_pollution?lat=-37&lon=145&appid=e1fb6136198f0c0a8cd978f199e1a78a",
        { method: "GET" }
      ).then((res) => res.json()),
      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=-37&lon=145&appid=e1fb6136198f0c0a8cd978f199e1a78a",
        { method: "GET" }
      ).then((res) => res.json()),
    ])
      .then(([resp1, resp2]) => {
        setPollution(resp1.list[0].components.pm2_5);
        setDailyWeathers(resp2.daily);
        setCurrentWeather(resp2.current);
        setDisplayWeather(
          GetSelectedWeatherSummary(
            resp2.daily[0],
            resp2.current,
            resp1.list[0].components.pm2_5
          )
        );
      })
      .catch((error) => console.log(error));
  }, []);

  // let promise1 = fetch(
  //   "http://api.openweathermap.org/data/2.5/air_pollution?lat=-37&lon=145&appid=8d62e862b9b9d93bc6d6ea069f8a3012",
  //   { method: "GET" }
  // ).then((resp) => resp.json());

  // let promise2 = fetch(
  //   "https://api.openweathermap.org/data/2.5/onecall?lat=-37&lon=145&appid=8d62e862b9b9d93bc6d6ea069f8a3012",
  //   { method: "GET" }
  // ).then((resp) => resp.json());

  // Promise.all([promise1, promise2])
  //   .then(([resp1, resp2]) => {
  //     setPollution(resp1.list[0].components.pm2_5);
  //     setDailyWeathers(resp2.daily);
  //     setCurrentWeather(resp2.current);
  //     setDisplayWeather(
  //       GetSelectedWeatherSummary(resp2.daily[0], resp2.current, pollution)
  //     );
  //   })
  //   .catch((error) => console.log(error));

  // var t1 = 0;
  // var t2 = 0;

  // let Promise1 = new Promise((resolve, reject) => {
  //   resolve((t1 = t1 + 1));
  // });

  // let Promise2 = new Promise((resolve, reject) => {
  //   resolve((t2 = t2 - 1));
  // });

  // Promise.all([Promise1, Promise2]).then((values) => {
  //   console.log(values);
  // });

  // console.log("hahah");

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
