import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSmog,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function GetWeatherIcon(weatherParameter) {
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

  let icon = weatherIcon(weatherParameter);

  return icon;
}

export default GetWeatherIcon;
