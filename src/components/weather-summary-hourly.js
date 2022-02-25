import React from "react";
import dayjs from "dayjs";
import ConvertKelvinToCelsius from "../utils/convert-kelvin-to-celsius";
import {
  LineChart,
  Line,
  XAxis,
  LabelList,
  ResponsiveContainer,
} from "recharts";

function WeatherHourly(props) {
  let hours = props.hourlyWeathers;

  const data = hours.map((hour) => {
    const a = dayjs.unix(hour.dt);
    return {
      time: a.format("HH"),
      temp: ConvertKelvinToCelsius(hour.temp),
    };
  });

  return (
    <div className="mx-auto weather-sum-hourly">
      <LineChart
        width={750}
        height={120}
        data={data}
        margin={{ left: 10, right: 10, top: 8 }}
      >
        <Line type="monotone" dataKey="temp" stroke="#556052">
          <LabelList dataKey="temp" position="bottom" stroke="#556052" />
        </Line>
        <XAxis dataKey="time" type="category" stroke="#556052" />
      </LineChart>
    </div>
  );
}

export default WeatherHourly;
