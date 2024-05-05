require("./secrets")

const searchContainer = document.getElementById('searchCtn');
const forecastContainer = document.getElementById('forecastCtn');
const searchButton = document.getElementById('searchBtn');

//Use OpenWeather API
function getAPI() {
    let lat, lon;
    const requestUrl = (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
}

searchButton.addEventListener('click', getAPI)


//use localstorage to store persistent data

