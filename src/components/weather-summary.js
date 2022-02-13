import React from "react";

function WeatherSummary(props) {
  const currentWeather = props.currentWeather;
  const dailyWeathers = props.dailyWeathers;

  const celsiusTemp = (tempKelvin) => {
    var tempCelsius = 0;
    tempCelsius = Math.round(tempKelvin - 273.15);
    return tempCelsius;
  };

  return (
    currentWeather && (
      <div className="weather-sum">
        <div className="weather-sum-degree">
          {celsiusTemp(currentWeather.temp)}&deg;
        </div>
        <div className="weather-sum-description">
          {currentWeather.weather[0].description}
        </div>
        <div className="weather-sum-Low-High">
          L: {celsiusTemp(dailyWeathers[0].temp.min)}&deg; H:{" "}
          {celsiusTemp(dailyWeathers[0].temp.max)}&deg;
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

export default WeatherSummary;
