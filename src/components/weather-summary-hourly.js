import React from "react";
import dayjs from "dayjs";
import ConvertKelvinToCelsius from "../utils/convert-kelvin-to-celsius";
import { LineChart, Line, XAxis, LabelList } from "recharts";

function WeatherHourly(props) {
  let hours = props.hourlyWeathers;

  const data = hours.map((hour) => {
    const a = dayjs.unix(hour.dt);
    return {
      time: a.format("HH"),
      temp: ConvertKelvinToCelsius(hour.temp),
    };
  });

  console.log(data);

  return (
    <LineChart
      width={470}
      height={120}
      data={data}
      margin={{ right: 2, left: 12 }}
    >
      <Line type="monotone" dataKey="temp" stroke="#476072">
        <LabelList dataKey="temp" position="bottom" stroke="#476072" />
      </Line>
      <XAxis dataKey="time" type="category" stroke="#476072" />
    </LineChart>
  );
}

export default WeatherHourly;
