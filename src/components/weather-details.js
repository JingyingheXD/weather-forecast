import React from "react";
import ConvertUnixTime from "../utils/convert-unix-time";
import GetWeatherIcon from "../utils/get-weather-icon";
import ConvertKelvinToCelsius from "../utils/convert-kelvin-to-celsius";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WeatherDetails(props) {
  const weather = props.displayWeather;

  if (weather) {
    return (
      <div className="weather-details">
        <header className="weather-details-header">
          {ConvertUnixTime(weather.dt)}
        </header>

        <div className="weather-details-body">
          <FontAwesomeIcon
            className="weather-details-icon"
            icon={GetWeatherIcon(weather.weatherParameter)}
          />
          <div>
            <p>FEELS LIKE: {ConvertKelvinToCelsius(weather.feels_like)}&deg;</p>
            <p>SUNRISE: {ConvertUnixTime(weather.sunrise)}</p>
            <p>SUNSET: {ConvertUnixTime(weather.sunset)}</p>
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
