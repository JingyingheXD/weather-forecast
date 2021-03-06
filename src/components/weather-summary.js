import { React, useState } from "react";
import ConvertKelvinToCelsius from "../utils/convert-kelvin-to-celsius";
import WeatherHourly from "./weather-summary-hourly";

function WeatherSummary(props) {
  let weather = props.displayWeather;
  let hourlyWeathers = props.hourlyWeathers;

  const [showHourly, setShowHourly] = useState(false);

  if (weather && hourlyWeathers) {
    return (
      <div className="weather-sum">
        <div className="weather-sum-degree">
          {ConvertKelvinToCelsius(weather.temp)}&deg;
        </div>
        <div className="weather-sum-description">{weather.description}</div>
        <div className="weather-sum-Low-High">
          L: {ConvertKelvinToCelsius(weather.min)}&deg; H:{" "}
          {ConvertKelvinToCelsius(weather.max)}&deg;
        </div>
        {weather.current ? (
          <div className="weather-sum-button">
            <button
              type="button"
              className="btn btn-secondary mx-auto"
              onClick={(evt) => setShowHourly(!showHourly)}
            >
              Hourly tempreture
            </button>
            {showHourly ? (
              <WeatherHourly hourlyWeathers={hourlyWeathers.slice(0, 17)} />
            ) : null}
          </div>
        ) : null}
      </div>
    );
  } else {
    return <div>The weather summary is loading...</div>;
  }
}

export default WeatherSummary;
