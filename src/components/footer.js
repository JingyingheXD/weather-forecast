import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSmog,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
  const dateTime = (UnixTimeStamp) => {
    let timeNow = new Date(Date.now());
    let a = new Date(UnixTimeStamp * 1000);

    if (
      timeNow.getDate() == a.getDate() &&
      timeNow.getMonth() == timeNow.getMonth()
    ) {
      return "Today";
    }
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

  const weatherIcon = (weatherParameter) => {
    switch (weatherParameter) {
      case "Thunderstormh":
        return <FontAwesomeIcon icon={faBolt} />;
        break;
      case "Drizzle":
        return <FontAwesomeIcon icon={faCloudRain} />;
        break;
      case "Rain":
        return <FontAwesomeIcon icon={faCloudShowersHeavy} />;
        break;
      case "Snow":
        return <FontAwesomeIcon icon={faSnowflake} />;
        break;
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return <FontAwesomeIcon icon={faSmog} />;
        break;
      case "Clouds":
        return <FontAwesomeIcon icon={faCloud} />;
        break;
      case "Clear":
        return <FontAwesomeIcon icon={faSun} />;
    }
  };

  return (
    <div>
      {weatherIcon(props.dailyWeather.weather[0].main)}
      <h2>{dateTime(props.dailyWeather.dt)}</h2>
    </div>
  );
}

export default Footer;
