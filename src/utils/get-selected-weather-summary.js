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
    } else {
      displayWeather["dt"] = selectedWeather.dt;
      displayWeather["temp"] = selectedWeather.temp.day;
      displayWeather["description"] = selectedWeather.weather[0].description;
      displayWeather["min"] = selectedWeather.temp.min;
      displayWeather["max"] = selectedWeather.temp.max;
    }

    return displayWeather;
  } else {
    return null;
  }
}

export default GetSelectedWeatherSummary;
