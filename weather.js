// Define class Weather

class Weather {
  constructor(city) {
    this.base = "https://api.openweathermap.org/data/2.5/";
    this.city = city;
    this.key = "1d7de6aa9c0d0182a919387f9808bb84";
  }

  // Fetch weather data from API
  async getWeather() {
    const response = await fetch(
      `${this.base}weather?q=${this.city}&units=metric&APPID=${this.key}`
    );

    const responseData = await response.json();

    // Return weather data from API
    return responseData;
  }

  // Change location(city)
  changeLocation(city) {
    this.city = city;
  }
}
