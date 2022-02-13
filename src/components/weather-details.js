import React from "react";
import ConvertUnixTime from "../utils/convert-unix-time";
import GetWeatherIcon from "../utils/get-weather-icon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WeatherDetails(props) {
  const weather = props.displayWeather;

  if (weather) {
    return (
      <div className="weather-details">
        <header className="weather-details-header">
          {ConvertUnixTime(weather.dt)}
        </header>
        <FontAwesomeIcon icon={GetWeatherIcon(weather.weatherParameter)} />
        <div className="weather-details-body">
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
