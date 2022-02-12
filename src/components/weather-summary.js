import React from "react";

function WeatherSummary(props) {
  return (
    <div className="weather-sum">
      <h1>{props.currentWeather.temp}</h1>
      <h3>Sunny</h3>
      <h3>L:10 H:25</h3>
      <button>Show Hourly tempreture</button>
    </div>
  );
}

export default WeatherSummary;
