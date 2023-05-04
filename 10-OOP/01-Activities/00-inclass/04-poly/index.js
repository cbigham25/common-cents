// take in a temp and return the forecast
const weatherCheck = function (temp) {
  if (typeof temp === "number") {
    if (temp < 32) {
      return "Its freezing out";
    } else if (temp > 31 && temp < 50) {
      return "Refreshing!";
    } else if (temp >= 50 && temp < 75) {
      return "Nice Out!";
    } else {
      return "Hot!";
    }
  } else {
    if (temp == "Freezing") {
      return 20;
    } else if (temp == "Refreshing") {
      return 45;
    } else if (temp == "Nice") {
      return 60;
    } else {
      return 90;
    }
  }
};

const currentWeather = weatherCheck(80);
//const currentWeather = weatherCheck("Nice");
console.log(currentWeather);
