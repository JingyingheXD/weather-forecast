import React from "react";

function WeatherSummary(props) {
  const currentWeather = props.currentWeather;
  const dailyWeathers = props.dailyWeathers;

  return (
    currentWeather && (
      <div className="weather-sum">
        <div className="weather-sum-degree">
          {ConvertKelvinToCelsius(currentWeather.temp)}&deg;
        </div>
        <div className="weather-sum-description">
          {props.currentWeather.weather[0].description}
        </div>
        <div className="weather-sum-Low-High">
          L: {ConvertKelvinToCelsius(dailyWeathers[0].temp.min)}&deg; H:{" "}
          {ConvertKelvinToCelsius(dailyWeathers[0].temp.max)}&deg;
        </div>
        <div className="weather-sum-button">
          <div className="d-flex justify-content-center">
            <button type="button" class="btn btn-secondary">
              Hourly tempreture
            </button>
          </div>
        </div>
      </div>
    )
  );
}

function ConvertKelvinToCelsius(tempKelvin) {
  var tempCelsius;
  tempCelsius = Math.round(tempKelvin - 273.15);
  return tempCelsius;
}

export default WeatherSummary;
