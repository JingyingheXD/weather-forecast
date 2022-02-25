import React from "react";
import ConvertUnixTime from "../utils/convert-unix-time";
import GetWeatherIcon from "../utils/get-weather-icon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(props) {
  const dailyWeathers = props.dailyWeathers;

  const dailyWeatherClicked = (selectedWeather) => {
    props.dailyWeatherClicked(selectedWeather);
  };

  return (
    <div className="footer">
      {dailyWeathers &&
        dailyWeathers.map((dailyWeather) => {
          return (
            <div
              className="footer-day"
              key={dailyWeather.dt}
              onClick={(evt) => dailyWeatherClicked(dailyWeather)}
            >
              <FontAwesomeIcon
                icon={GetWeatherIcon(dailyWeather.weather[0].main)}
                className="mx-auto footer-icons"
              />
              <p className="mx-auto footer-dates">
                {ConvertUnixTime(dailyWeather.dt, 0)}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Footer;
