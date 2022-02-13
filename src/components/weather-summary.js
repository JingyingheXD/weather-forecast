import React from "react";

function WeatherSummary(props) {
  const weather = props.displayWeather;

  if (weather) {
    const celsiusTemp = (tempKelvin) => {
      let tempCelsius = 0;
      tempCelsius = Math.round(tempKelvin - 273.15);
      return tempCelsius;
    };

    return (
      <div className="weather-sum">
        <div className="weather-sum-degree">
          {celsiusTemp(weather.temp)}&deg;
        </div>
        <div className="weather-sum-description">{weather.description}</div>
        <div className="weather-sum-Low-High">
          L: {celsiusTemp(weather.min)}&deg; H: {celsiusTemp(weather.max)}&deg;
        </div>
        {weather.current ? (
          <div className="weather-sum-button">
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-secondary">
                Hourly tempreture
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  } else {
    return <div>The weather summary is loading...</div>;
  }
}

export default WeatherSummary;
