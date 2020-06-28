// Define class Storage

class Storage {
  constructor() {
    this.city;
    this.defaultCity = "Miami";
  }

  // Get location(city)
  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    return {
      city: this.city,
    };
  }

  // Set location(city) in local storage
  setLocationData(city) {
    localStorage.setItem("city", city);
  }
}
