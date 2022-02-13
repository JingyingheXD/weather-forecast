import React from "react";

function WeatherSummary(props) {
  const dailyWeathers = props.dailyWeathers;
  const currentWeather = props.currentWeather;
  const selectedWeather = props.selectedWeather;

  let selectedIsTodayFlag = 0;

  const selectedIsToday = (selectedWeather, currentWeather) => {
    let select = new Date(selectedWeather.dt * 1000);
    let current = new Date(currentWeather.dt * 1000);
    if (
      select.getDate() == current.getDate() &&
      select.getMonth() == current.getMonth()
    ) {
      selectedIsTodayFlag = 1;
      return currentWeather;
    } else {
      return selectedWeather;
    }
  };

  let displayWeather = selectedIsToday(selectedWeather, currentWeather);

  const celsiusTemp = (tempKelvin) => {
    let tempCelsius = 0;
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
            <button type="button" className="btn btn-secondary">
              Hourly tempreture
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default WeatherSummary;
