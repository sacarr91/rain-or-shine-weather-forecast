//API Key storage

const apiKey = "22a572ddc4e089d2bb5e1db833219c1b";

//grab HTML elements
const searchContainerEl = document.getElementById('searchCtn');
const forecastContainerEl = document.getElementById('forecastCtn');
const searchButton = document.getElementById('searchBtn');
let searchedCities = [];

//additional function to get lat & lon for increased specificity >> improve accuracy of location for displayed weather
function initSearch() {
    // if (localStorage.length !== 0) {
    let prevSearch = localStorage.getItem("searchedCities") || JSON.stringify({
            city: "this",
            state: "is",
            country: "a",
            lat: "test",
            lon: "item"
        })
    };
    if (prevSearch <= 1) { searchedCities = JSON.parse(prevSearch); }
    // } else {
    //     localStorage.setItem("searchedCities", []);
    // };

    let cityName = document.getElementById('userInput').value;
    let countryCode = "US";
    // let countryCode = >>>>>>>GET FROM GEOCODE API<<<<<<
    const geocodeURL = (`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apiKey}`);

    fetch(geocodeURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            countryCode = data.country;
            //store info to local storage
            const userQuery = {
                city: data.city,
                state: data.state,
                country: countryCode,
                lat: data.lat,
                lon: data.lon
            };
            searchedCities.unshift(userQuery);

            searchedCities = JSON.stringify(searchedCities);

            localStorage.setItem("searchedCities", searchedCities);


        })
// };

function sendIt(lat, lon) {
    let prevSearch = localStorage.getItem("searchedCities") || [];
    if (prevSearch !== 0) { searchedCities = JSON.parse(prevSearch); }
    const currentSearch = searchedCities[0];
    lat = currentSearch.lat;
    lon = currentSearch.lon;
    const requestUrl = (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);
    fetch(requestUrl)
        .then(function (weather) {
            return weather.json();
        })
        .then(function (data2) {
            console.log(data2);
        })
};

//display searched cities
function addToSearched(city, state) {
    let prevSearch = localStorage.getItem("searchedCities") || [];
    if (prevSearch !== 0) { searchedCities = JSON.parse(prevSearch); }
    const currentSearch = searchedCities[0];
    city = currentSearch.city;
    state = currentSearch.state;
    const link = document.createElement('a');
    searchContainerEl.prepend(link);
    link.textContent = (`${city}, ${state}`);
    link.href = ("/");
    // DISP WEATHER // `https://api.openweathermap.org/data/2.5/forecast?lat=${searchedQuery.lat}&lon=${searchedQuery.lon}&units=imperial&appid=${apiKey}`)
};

const newSearch = () => {
    initSearch();
    sendIt();                   
    addToSearched();
};

// function revisitPrevQuery() {
// how to click on previous search & yeild same results?
// }


searchButton.addEventListener("click", newSearch);



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