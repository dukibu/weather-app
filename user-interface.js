// Define class User Interface

class UI {
  constructor() {
    this.location = document.getElementById("location");
    this.date = document.getElementById("date");
    this.temp = document.getElementById("temp");
    this.icon = document.getElementById("icon");
    this.details = document.getElementById("details");
    this.hiLow = document.getElementById("hi-low");
    this.humidity = document.getElementById("humidity");
    this.wind = document.getElementById("wind");
  }

  // Show data from weather API
  showData(weather) {
    // Set data from weather API
    this.location.textContent = weather.name;

    // Get current date
    function dateBuilder(currentDate) {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[currentDate.getDay()];
      let date = currentDate.getDate();
      let month = months[currentDate.getMonth()];
      let year = currentDate.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    }

    this.date.innerText = dateBuilder(now);

    this.icon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"
    );
    this.temp.textContent = `Current: ` + weather.main.temp + `°c`;
    this.details.textContent = `Description: ${weather.weather[0].main} / ${weather.weather[0].description}`;
    this.hiLow.textContent = `Max - Min : ${weather.main.temp_max} °c / ${weather.main.temp_min} °c`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.wind.textContent = `Wind: ${weather.wind.deg}° / ${weather.wind.speed} m/s`;
  }
}
