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
  const dailyWeathers = props.dailyWeathers;

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
        return faBolt;
        break;
      case "Drizzle":
        return faCloudRain;
        break;
      case "Rain":
        return faCloudShowersHeavy;
        break;
      case "Snow":
        return faSnowflake;
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return faSmog;
        break;
      case "Clouds":
        return faCloud;
        break;
      case "Clear":
        return faSun;
    }
  };

  return (
    <div className="footer">
      {dailyWeathers &&
        dailyWeathers.map((dailyWeather) => {
          return (
            <div key={dailyWeather.dt}>
              <FontAwesomeIcon
                icon={weatherIcon(dailyWeather.weather[0].main)}
                className="footer-icons"
              />
              <p className="footer-dates">{dateTime(dailyWeather.dt)}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Footer;
