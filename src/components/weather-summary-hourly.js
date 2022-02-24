import React from "react";

function WeatherHourly(props) {
  let hours = props.hourlyWeathers;

  return (
    <div>
      {hours.map((hour) => {
        return <div>{hour.dt}</div>;
      })}
    </div>
  );
}

export default WeatherHourly;
