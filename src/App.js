import React, { useEffect, useState } from "react";
import "./App.css";
import GetSelectedWeatherSummary from "./utils/get-selected-weather-summary";

import WeatherSummary from "./components/weather-summary";
import WeatherDetails from "./components/weather-details";
import Footer from "./components/footer";

function App() {
  const [pageStatus, setPageStatus] = useState("loading");
  const [dailyWeathers, setDailyWeathers] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [displayWeather, setDisplayWeather] = useState(null);
  const [pollution, setPollution] = useState(null);

  let keyid = "e1fb6136198f0c0a8cd978f199e1a78a";

  const response = (res) => {
    const errors = [401, 404, 429, 500, 502, 503, 504];
    if (errors.indexOf(res.status) == -1) {
      return res.json();
    } else {
      throw new Error("error");
    }
  };

  useEffect(() => {
    Promise.all([
      fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=-37&lon=145&appid=${keyid}`,
        { method: "GET" }
      )
        .then((res) => {
          const resp = response(res);
          return resp;
        })
        .catch((err) => {
          return undefined;
        }),
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=-37&lon=145&appid=${keyid}`,
        { method: "GET" }
      )
        .then((res) => {
          const resp = response(res);
          return resp;
        })
        .catch(() => {
          return undefined;
        }),
    ])
      .then(([resp1, resp2]) => {
        let pollution;
        let dailyWeathers;
        let currentWeather;

        // If pollution API crashes, the website can still runs.
        // If weather API crashes, the web app pageStatus will be 'error', and show error page.
        if (resp1 == undefined) {
          pollution = null;
        } else {
          pollution = resp1.list[0].components.pm2_5;
        }
        if (resp2 == undefined) {
          setPageStatus("error");
          return null;
        } else {
          dailyWeathers = resp2.daily;
          currentWeather = resp2.current;
        }

        setPageStatus("loaded");
        setPollution(pollution);
        setDailyWeathers(dailyWeathers);
        setCurrentWeather(currentWeather);
        setDisplayWeather(
          GetSelectedWeatherSummary(dailyWeathers[0], currentWeather, pollution)
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

  if (pageStatus == "error") {
    return (
      <div className="App">
        <div className="body"> There are some errors.</div>
      </div>
    );
  } else if (pageStatus == "loading") {
    return (
      <div className="App">
        <div className="body"> The website is loading......</div>
        <Footer></Footer>
      </div>
    );
  } else if (pageStatus == "loaded") {
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
}

export default App;
