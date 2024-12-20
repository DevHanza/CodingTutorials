function getWeather() {
  return new Promise(function (resolve, reject) {
    resolve("Rainy");
  });
}

function getWeatherIcon(data) {
  return new Promise(function () {
    switch (data) {
      case "Sunny":
        console.log("☀");
        break;
    case "Rainy":
        reject()
      default:
        console.log("NO ICON FOUND");
    }
  });
}

function onSuccess(data) {
  console.log(`Resolve: ${data}`);
}

function onError(error) {
  console.log(`Reject: ${error}`);
}

getWeather()
.then(onSuccess, onError)
.then(getWeatherIcon)
.catch(onError)
.finally("THIS RUNS NO MATTER WHAT!");
