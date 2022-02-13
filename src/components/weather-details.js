import React from "react";

function WeatherDetails(props) {
  const weather = props.displayWeather;

  return (
    <div className="weather-details">
      <div>Sunny</div>
      <div className="weather-details-body">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </div>
  );
}

export default WeatherDetails;
// <header className="weather-details-header">{weather.dt}</header>
