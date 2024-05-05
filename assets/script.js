//API Key storage
require("./secrets")

//grab HTML elements
const searchContainerEl = document.getElementById('searchCtn');
const forecastContainerEl = document.getElementById('forecastCtn');
const searchButton = document.getElementById('searchBtn');
const searchedCities = [];

//thinking through geocoding...
function getLatLon() {
    let cityName, countryCode;
    const geocodeURL = (`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=1&appid=${apiKey}`);
    if (localStorage.length === 0) localStorage.setItem(searchedCities);
    fetch(geocodeURL)
        .then(function (geocodeInfo) {
            console.log(`Geocode Info..... ${geocodeInfo}`);
            //store info to local storage
            const userQuery = {
                city: cityName,
                country: countryCode,
                lat: geocodeInfo.lat,
                lon: geocodeInfo.lon
            };
            searchedCities.unshift(userQuery);
            console.log(`Data pushed to array..... ${userQuery}`)
        })
}

//Use OpenWeather API
function getAPI() {
    let lat, lon;
    getLatLon();
    const requestUrl = (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

searchButton.addEventListener('click', getAPI)


//use localstorage to store persistent data

