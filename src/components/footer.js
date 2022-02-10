import React from "react";

function Footer(props) {
  return (
    <div>
      <h2>{props.dailyWeather.dt}</h2>
      <h2>{props.dailyWeather.temp.day}</h2>
    </div>
  );
}

export default Footer;
