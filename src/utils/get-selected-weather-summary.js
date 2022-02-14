function GetSelectedWeatherSummary(selectedWeather, currentWeather) {
  if (selectedWeather && currentWeather) {
    const selectedIsToday = (selectedWeather, currentWeather) => {
      let select = new Date(selectedWeather.dt * 1000);
      let current = new Date(currentWeather.dt * 1000);
      if (
        select.getDate() == current.getDate() &&
        select.getMonth() == current.getMonth()
      ) {
        return 1;
      } else {
        return 0;
      }
    };

    let selectedIsTodayFlag = selectedIsToday(selectedWeather, currentWeather);
    let displayWeather = {};

    if (selectedIsTodayFlag == 1) {
      displayWeather["dt"] = currentWeather.dt;
      displayWeather["temp"] = currentWeather.temp;
      displayWeather["description"] = currentWeather.weather[0].description;
      displayWeather["min"] = selectedWeather.temp.min;
      displayWeather["max"] = selectedWeather.temp.max;
      displayWeather["current"] = 1;
      displayWeather["weatherParameter"] = currentWeather.weather[0].main;
      displayWeather["feels_like"] = currentWeather.feels_like;
      displayWeather["sunrise"] = currentWeather.sunrise;
      displayWeather["sunset"] = currentWeather.sunset;
      displayWeather["humidity"] = currentWeather.humidity;
      displayWeather["uvi"] = currentWeather.uvi;
      displayWeather["wind_speed"] = currentWeather.wind_speed;
      displayWeather["pressure"] = currentWeather.pressure;
    } else {
      displayWeather["dt"] = selectedWeather.dt;
      displayWeather["temp"] = selectedWeather.temp.day;
      displayWeather["description"] = selectedWeather.weather[0].description;
      displayWeather["min"] = selectedWeather.temp.min;
      displayWeather["max"] = selectedWeather.temp.max;
      displayWeather["current"] = 0;
      displayWeather["weatherParameter"] = selectedWeather.weather[0].main;
      displayWeather["feels_like"] = selectedWeather.feels_like.day;
      displayWeather["sunrise"] = selectedWeather.sunrise;
      displayWeather["sunset"] = selectedWeather.sunset;
      displayWeather["humidity"] = selectedWeather.humidity;
      displayWeather["uvi"] = selectedWeather.uvi;
      displayWeather["wind_speed"] = selectedWeather.wind_speed;
      displayWeather["pressure"] = selectedWeather.pressure;
    }

    return displayWeather;
  } else {
    return null;
  }
}

export default GetSelectedWeatherSummary;
