import React from "react";

function WeatherDetailsModule(props) {
  return (
    <div className="weather-details-module">
      <div className="weather-details-module-title">{props.itemName}</div>
      <div className="weather-details-module-content">{props.item}</div>
    </div>
  );
}

export default WeatherDetailsModule;
