import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=-37&lon=145&exclude=daily&appid=e1fb6136198f0c0a8cd978f199e1a78a",
      { method: "GET" }
    )
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">Weather Forecast</header>
    </div>
  );
}

export default App;
