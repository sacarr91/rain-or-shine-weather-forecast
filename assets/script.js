const searchContainer = document.getElementById('searchCtn');
const forecastContainer = document.getElementById('forecastCtn');
const searchButton = document.getElementById('searchBtn');
const apiKey = "22a572ddc4e089d2bb5e1db833219c1b";

//Use OpenWeather API
function getAPI() {
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

