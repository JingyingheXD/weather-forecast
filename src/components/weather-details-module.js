import React from "react";

function WeatherDetailsModule(props) {
  return (
    <div className="weather-details-module">
      <h3>{props.itemName}</h3>
      <div>{props.item}</div>
    </div>
  );
}

export default WeatherDetailsModule;
