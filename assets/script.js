//API Key storage
require("./secrets")

//grab HTML elements
const searchContainerEl = document.getElementById('searchCtn');
const forecastContainerEl = document.getElementById('forecastCtn');
const searchButton = document.getElementById('searchBtn');

//initiate empty array for searched cities
const searchedCities = [];

//additional function to get lat & lon for increased specificity >> improve accuracy of location for displayed weather
function getLatLon() {
    let cityName = getElementById('userInput').value;
    let countryCode = "US";
    // let countryCode = >>>>>>>GET FROM GEOCODE API<<<<<<
    const geocodeURL = (`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=5&units=imperial&appid=${apiKey}`);
    if (localStorage.length === 0) localStorage.setItem(searchedCities);
    fetch(geocodeURL)
        .then(function (geocodeInfo) {
            console.log(`Geocode Info from fetch..... ${geocodeInfo}`);
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

function newSearch() {
    getLatLon();
    const lat = localStorage.getItem(searchedCities[0].lat);
    const lon = localStorage.getItem(searchedCities[0].lon);
    const requestUrl = (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
    fetch(requestUrl)
        .then(function (data) {
            console.log(`${data} is ready to use`);
        });
};

function revisitPrevQuery() {
    // how to click on previous search & yeild same results?
}


// display preeviously searched cities
//display city name... add to list in small column?
searchedCities.forEach(searchedQuery => {
    const link = document.createElement('a');
    searchContainerEl.appendChild(link);
    link.textContent = (searchedQuery.city);
    link.href = (//FUNCTION TO DISPLAY WEATHER// `https://api.openweathermap.org/data/2.5/forecast?lat=${searchedQuery.lat}&lon=${searchedQuery.lon}&units=imperial&appid=${apiKey}`)
})

searchButton.addEventListener('click', newSearch);



//////////////////////////////
// function addressAutocomplete(cityName, data) {
//     cityName = document.getElementById('userInput');
//     console.log(`Selected option: ${cityName}`);
//     console.log(data);
// };
// addressAutocomplete(cityName, (data) => {
//     console.log("Selected option: ");////////////////////////////LEFT OFF HERE....
//     //////////////How to pull data from selected city?
//     //////////////what is the callback here?
//     //////////////looking at Step 2 of Geoapify tutorial: https://www.geoapify.com/tutorial/address-input-for-address-validation-and-address-verification-forms-tutorial
//     console.log(data);
// }, {
//     placeholder: "Enter an address here"
// });