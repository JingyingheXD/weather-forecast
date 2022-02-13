import React from "react";
import ConvertUnixTime from "../utils/convert-unix-time";
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

  const weatherIcon = (weatherParameter) => {
    switch (weatherParameter) {
      case "Thunderstormh":
        return faBolt;
      case "Drizzle":
        return faCloudRain;
      case "Rain":
        return faCloudShowersHeavy;
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
      case "Clouds":
        return faCloud;
      case "Clear":
        return faSun;
    }
  };

  const dailyWeatherClicked = (selectedWeather) => {
    props.dailyWeatherClicked(selectedWeather);
  };

  return (
    <div className="footer">
      {dailyWeathers &&
        dailyWeathers.map((dailyWeather) => {
          return (
            <div
              key={dailyWeather.dt}
              onClick={(evt) => dailyWeatherClicked(dailyWeather)}
            >
              <FontAwesomeIcon
                icon={weatherIcon(dailyWeather.weather[0].main)}
                className="footer-icons"
              />
              <p className="footer-dates">
                {ConvertUnixTime(dailyWeather.dt)}{" "}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Footer;
