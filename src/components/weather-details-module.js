import React from "react";

function WeatherDetailsModule(props) {
  return (
    <div className="weather-details-module">
      <div className="d-flex align-items-center mx-auto weather-details-module-title">
        {props.itemName}
      </div>
      <div className="mx-auto weather-details-module-content">{props.item}</div>
    </div>
  );
}

export default WeatherDetailsModule;
