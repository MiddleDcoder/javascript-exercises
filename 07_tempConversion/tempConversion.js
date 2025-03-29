const convertToCelsius = function(fahrenheit) {
  // formula °C = (f - 32) * 5/9

  return  Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
  
};

const convertToFahrenheit = function(celsius) {
  // formula °F = (9/5 * c) + 32

  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
