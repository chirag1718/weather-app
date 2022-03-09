window.addEventListener("load", () => {
  let long; //longitude
  let lat; //latitude
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `http://api.weatherapi.com/v1/current.json?key=2fc2f19b62c34b379ad114500220903&q=${lat},${long}`

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data)
          const { temp_c, condition, icon } = data.current;
          const { name, country, tz_id } = data.location;
          // Set DOM Elements from the API
          temperatureDegree.textContent = temp_c;
          temperatureDescription.textContent = condition.text
          locationTimezone.textContent = tz_id
          // locationTimezone.in = condition.icon
        });
    });
  }

  function  setIcons(icon, iconId){
    const skycons = new skycons({color: "white"})
    const currentIcon = icon
    skycons.play()
    return skycons.set(iconId, skycons[currentIcon])
  }
});
