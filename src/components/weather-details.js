import React, { useEffect, useState } from "react";
import GetWeatherIcon from "../utils/get-weather-icon";
import ConvertKelvinToCelsius from "../utils/convert-kelvin-to-celsius";
import ConvertUnixTime from "../utils/convert-unix-time";
import WeatherDetailsModule from "./weather-details-module";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WeatherDetails(props) {
  const weather = props.displayWeather;
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

  if (weather && pollution) {
    return (
      <div className="weather-details">
        <div className="weather-details-header">
          <FontAwesomeIcon
            className="weather-details-icon"
            icon={GetWeatherIcon(weather.weatherParameter)}
          />
          <div className="weather-details-date">
            {ConvertUnixTime(weather.dt, 0)}
          </div>
        </div>
        <div className="weather-details-body">
          <WeatherDetailsModule
            itemName="FEELS LIKE"
            item={ConvertKelvinToCelsius(weather.feels_like)}
          />
          <WeatherDetailsModule
            itemName="SUNRISE"
            item={ConvertUnixTime(weather.sunrise, 1)}
          />
          <WeatherDetailsModule
            itemName="SUNSET"
            item={ConvertUnixTime(weather.sunset, 1)}
          />
          <WeatherDetailsModule itemName="HUMIDITY" item={weather.humidity} />
          <WeatherDetailsModule itemName="UVI" item={weather.uvi} />
          <WeatherDetailsModule
            itemName="WIND SPEED"
            item={weather.wind_speed}
          />
          <WeatherDetailsModule itemName="PRESSURE" item={weather.pressure} />
          <WeatherDetailsModule itemName="POLLUTION" item={pollution} />
        </div>
      </div>
    );
  } else {
    return <div>The weather detail is loading...</div>;
  }
}

export default WeatherDetails;
