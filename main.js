window.addEventListener("load", () => {
  let long; //longitude
  let lat; //latitude
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector("temperature-section")
  const temperatureSpan = document.querySelector('temperature-section')
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `http://api.weatherapi.com/v1/current.json?key= d9b2e4ad4f014b6c82e135210221603&q=${lat},${long}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp_c, condition, icon } = data.current;
          const { tz_id } = data.location;
          // Set DOM Elements from the API
          temperatureDegree.textContent = temp_c; //temp
          temperatureDescription.textContent = condition.text; //weather type
          locationTimezone.textContent = tz_id; //timezone
        });
    });
  }
});
