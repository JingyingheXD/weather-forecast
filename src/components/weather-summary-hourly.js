import React from "react";
import dayjs from "dayjs";

function WeatherHourly(props) {
  let hours = props.hourlyWeathers;

  return (
    <div className="weather-sum-hourly">
      {hours.map((hour) => {
        const a = dayjs.unix(hour.dt);
        const now = dayjs();
        if (a.hour() == now.hour()) {
          return <div key={hour.dt}>Now</div>;
        } else {
          return <div key={hour.dt}>{a.format("HH")}</div>;
        }
      })}
    </div>
  );
}

export default WeatherHourly;
