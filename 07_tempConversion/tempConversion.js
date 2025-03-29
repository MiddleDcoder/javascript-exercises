const convertToCelsius = function(fahrenheit) {
  // formula °C = (f - 32) * 5/9
  let celsiusResult = (fahrenheit - 32) * 5/9;

  return celsiusResult = Math.round(celsiusResult * 10) / 10;
  
};

const convertToFahrenheit = function(celsius) {
  // formula °F = (9/5 * c) + 32
  let fahrenheitResult = (9/5 * celsius) + 32;

  return fahrenheitResult  = Math.round(fahrenheitResult * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
