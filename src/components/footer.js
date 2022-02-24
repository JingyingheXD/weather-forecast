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
              key={dailyWeather.dt}
              onClick={(evt) => dailyWeatherClicked(dailyWeather)}
            >
              <FontAwesomeIcon
                icon={GetWeatherIcon(dailyWeather.weather[0].main)}
                className="footer-icons"
              />
              <p className="footer-dates">
                {ConvertUnixTime(dailyWeather.dt, 0)}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Footer;
