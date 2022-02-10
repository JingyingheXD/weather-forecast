import React from "react";

function Footer(props) {
  return (
    <div>
      <h2>{props.dailyWeather.weather[0].main}</h2>
      <h2>{props.dailyWeather.dt}</h2>
    </div>
  );
}

export default Footer;
