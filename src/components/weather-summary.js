import React from "react";
import ConvertKelvinToCelsius from "../utils/convert-kelvin-to-celsius";

function WeatherSummary(props) {
  const weather = props.displayWeather;

  if (weather) {
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
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-secondary">
                Hourly tempreture
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  } else {
    return <div>The weather summary is loading...</div>;
  }
}

export default WeatherSummary;
