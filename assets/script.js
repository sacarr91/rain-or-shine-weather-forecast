//API Key storage
require("./secrets")

//grab HTML elements
const searchContainerEl = document.getElementById('searchCtn');
const forecastContainerEl = document.getElementById('forecastCtn');
const searchButton = document.getElementById('searchBtn');
const searchedCities = [];

//TODO: Use OpenWeather API
//additional function to get lat & lon for increased specificity >> improve accuracy of location for displayed weather
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

function getAPI() {
    getLatLon();
    const lat = localStorage.getItem(searchedCities[0].lat);
    const lon = localStorage.getItem(searchedCities[0].lon);
    const requestUrl = (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    fetch(requestUrl)
        .then(function (response) {

        })
        .then(function (data) {
            console.log(data);
        })
}

// display searched cities
searchedCities.forEach(searchedQuery => {
    //display city name... add to list in small column?
});


searchButton.addEventListener('click', getAPI)


//use localstorage to store persistent data

