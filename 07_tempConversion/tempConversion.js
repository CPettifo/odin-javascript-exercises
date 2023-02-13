const convertToFahrenheit = function(degrees) {

  degrees = Math.round((degrees * 9/5 + 32) * 10) / 10;
  return degrees;
};

const convertToCelsius = function(degrees) {
  degrees = Math.round(((degrees - 32) * 5/9) * 10) / 10;
  return degrees;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
