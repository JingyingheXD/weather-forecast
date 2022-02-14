function ConvertKelvinToCelsius(tempKelvin) {
  const celsiusTemp = (tempKelvin) => {
    let tempCelsius = 0;
    tempCelsius = Math.round(tempKelvin - 273.15);
    return tempCelsius;
  };

  let newTemp = celsiusTemp(tempKelvin);
  return newTemp;
}

export default ConvertKelvinToCelsius;
