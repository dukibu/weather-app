// Init storage object
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init date object
let now = new Date();

// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
// Get input value
const city = document.getElementById("city");

city.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    // Change location
    weather.changeLocation(city.value);
    let storedCity = city.value;

    // Set location in local storage
    storage.setLocationData(storedCity);

    // Get and display weather
    getWeather();
  }
});

// Define get weather data
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.showData(results);
    })
    .catch((err) => console.log(err));
}
