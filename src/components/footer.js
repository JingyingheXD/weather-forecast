import React from "react";

function Footer(props) {
  const dateTime = (UnixTimeStamp) => {
    let a = new Date(UnixTimeStamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + " " + month;
    return time;
  };

  return (
    <div>
      <h2>{props.dailyWeather.weather[0].main}</h2>
      <h2>{dateTime(props.dailyWeather.dt)}</h2>
    </div>
  );
}

export default Footer;
