import React, { useEffect } from "react";
import "./App.css";
import WeatherDetails from "./components/weather-details";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=-37&lon=145&appid=e1fb6136198f0c0a8cd978f199e1a78a",
      { method: "GET" }
    )
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <div className="card">
        <WeatherDetails />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
