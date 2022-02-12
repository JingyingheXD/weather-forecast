import React from "react";

function WeatherSummary(props) {
  const currentWeather = props.currentWeather;
  const dailyWeathers = props.dailyWeathers;

  if (currentWeather == null) {
    return <div>The current weather is loading...</div>;
  } else {
    let tempCelsius = Math.round(props.currentWeather.temp - 273.15);
    let lowTemp = Math.round(dailyWeathers[0].temp.min - 273.15);
    let HighTemp = Math.round(dailyWeathers[0].temp.max - 273.15);
    return (
      <div className="weather-sum">
        <div className="weather-sum-degree">{tempCelsius}&deg;</div>
        <div className="weather-sum-description">
          {props.currentWeather.weather[0].description}
        </div>
        <div className="weather-sum-Low-High">
          L: {lowTemp}&deg; H: {HighTemp}&deg;
        </div>
        <div className="weather-sum-button">
          <div className="d-flex justify-content-center">
            <button type="button" class="btn btn-secondary">
              Show Hourly tempreture
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherSummary;

// <button className="weather-sum-button">Show Hourly tempreture</button>;
