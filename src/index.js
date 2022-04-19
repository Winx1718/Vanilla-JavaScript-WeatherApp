function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#currentTemp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = `913b7ac1ecf2018545f41afe76c8aad3`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
