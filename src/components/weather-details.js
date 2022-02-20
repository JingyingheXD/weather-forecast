import React from "react";
import GetWeatherIcon from "../utils/get-weather-icon";
import ConvertKelvinToCelsius from "../utils/convert-kelvin-to-celsius";
import ConvertUnixTime from "../utils/convert-unix-time";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WeatherDetails(props) {
  const weather = props.displayWeather;

  if (weather) {
    return (
      <div className="weather-details">
        <header className="weather-details-header">
          {ConvertUnixTime(weather.dt, 0)}
        </header>

        <div className="weather-details-body">
          <FontAwesomeIcon
            className="weather-details-icon"
            icon={GetWeatherIcon(weather.weatherParameter)}
          />
          <div className="weather-details-main-info">
            FEELS LIKE: {ConvertKelvinToCelsius(weather.feels_like)}&deg;
            <br />
            SUNRISE: {ConvertUnixTime(weather.sunrise, 1)}
            <br />
            SUNSET: {ConvertUnixTime(weather.sunset, 1)}
          </div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </div>
      </div>
    );
  } else {
    return <div>The weather detail is loading...</div>;
  }
}

export default WeatherDetails;
