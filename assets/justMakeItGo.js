// TO DO
// [ ] form inputs

// [ ] pull & display present & future (5-day) conditions for city

// [ ] add city to search history

// [ ] display (card?) city name, date, icon, temp, wind speed, humidity

//API Key storage
const apiKey = "22a572ddc4e089d2bb5e1db833219c1b";
const countryCodesArr = [
    { name: "United States", code: "US" },
    { name: "Afghanistan", code: "AF" },
    { name: "land Islands", code: "AX" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "AndorrA", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Aruba", code: "AW" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bermuda", code: "BM" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Bouvet Island", code: "BV" },
    { name: "Brazil", code: "BR" },
    { name: "British Indian Ocean Territory", code: "IO" },
    { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Cape Verde", code: "CV" },
    { name: "Cayman Islands", code: "KY" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Christmas Island", code: "CX" },
    { name: "Cocos (Keeling) Islands", code: "CC" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Congo, The Democratic Republic of the", code: "CD" },
    { name: "Cook Islands", code: "CK" },
    { name: "Costa Rica", code: "CR" },
    { name: "Cote D\"Ivoire", code: "CI" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Ethiopia", code: "ET" },
    { name: "Falkland Islands (Malvinas)", code: "FK" },
    { name: "Faroe Islands", code: "FO" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "French Guiana", code: "GF" },
    { name: "French Polynesia", code: "PF" },
    { name: "French Southern Territories", code: "TF" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Gibraltar", code: "GI" },
    { name: "Greece", code: "GR" },
    { name: "Greenland", code: "GL" },
    { name: "Grenada", code: "GD" },
    { name: "Guadeloupe", code: "GP" },
    { name: "Guam", code: "GU" },
    { name: "Guatemala", code: "GT" },
    { name: "Guernsey", code: "GG" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Heard Island and Mcdonald Islands", code: "HM" },
    { name: "Holy See (Vatican City State)", code: "VA" },
    { name: "Honduras", code: "HN" },
    { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran, Islamic Republic Of", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Isle of Man", code: "IM" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jersey", code: "JE" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea, Democratic People\"S Republic of", code: "KP" },
    { name: "Korea, Republic of", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Lao People\"S Democratic Republic", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libyan Arab Jamahiriya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Macao", code: "MO" },
    { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Martinique", code: "MQ" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mayotte", code: "YT" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia, Federated States of", code: "FM" },
    { name: "Moldova, Republic of", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Montserrat", code: "MS" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "Netherlands Antilles", code: "AN" },
    { name: "New Caledonia", code: "NC" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "Niue", code: "NU" },
    { name: "Norfolk Island", code: "NF" },
    { name: "Northern Mariana Islands", code: "MP" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestinian Territory, Occupied", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Pitcairn", code: "PN" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Puerto Rico", code: "PR" },
    { name: "Qatar", code: "QA" },
    { name: "Reunion", code: "RE" },
    { name: "Romania", code: "RO" },
    { name: "Russian Federation", code: "RU" },
    { name: "RWANDA", code: "RW" },
    { name: "Saint Helena", code: "SH" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Pierre and Miquelon", code: "PM" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Georgia and the South Sandwich Islands", code: "GS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Svalbard and Jan Mayen", code: "SJ" },
    { name: "Swaziland", code: "SZ" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syrian Arab Republic", code: "SY" },
    { name: "Taiwan, Province of China", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania, United Republic of", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tokelau", code: "TK" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Turks and Caicos Islands", code: "TC" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States Minor Outlying Islands", code: "UM" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela", code: "VE" },
    { name: "Viet Nam", code: "VN" },
    { name: "Virgin Islands, British", code: "VG" },
    { name: "Virgin Islands, U.S.", code: "VI" },
    { name: "Wallis and Futuna", code: "WF" },
    { name: "Western Sahara", code: "EH" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" }
];



//grab HTML elements
const searchContainerEl = document.getElementById('searchCtn');
const forecastContainerEl = document.getElementById('forecastCtn');
const searchForm = document.getElementById('searchForm');
const searchButton = document.getElementById('searchBtn');
const searchCity = document.getElementById('cityInput');
const searchState = document.getElementById('stateInput');
const searchCountry = document.getElementById('countryDropdown');
const todayHeader = document.getElementById('currentSearchHeader');

let cityQuery, stateQuery, countryQuery;

// DONE: preload country options to load the correct country code in order to permit worldwide search functionality
function createCountryDropdown() {
    const countryDropdown = document.getElementById("countryDropdown");
    for (let i = 0; i < countryCodesArr.length; i++) {
        const thisCountry = countryCodesArr[i].name;
        const thisCode = countryCodesArr[i].code;
        let countryName = `<option value="${thisCode}">${thisCountry}</option>`;
        countryDropdown.innerHTML += countryName;
    };
};

// DONE: search by form input, fetch location demographics
async function initSearch() {
    console.log("inside initSearch function");

    cityQuery = searchCity.value;
    stateQuery = searchState.value;
    countryQuery = searchCountry.value;
    const cscURL = (`https://api.openweathermap.org/data/2.5/weather?q=${cityQuery},${stateQuery},${countryQuery}&appid=${apiKey}&units=imperial`);

    try {
        let res = await fetch(cscURL);
        console.log("cscURL res:"); console.log(res);
        let data = await res.json();
        constructObject(data);
    } catch (error) {
        console.log(error);
    }
} // to ConstructObject(data)

// DONE: create query object, store query, add to searched array, store new array, refresh searched cities list, reset form
function constructObject(data) {
    console.log("constructObject... data:"); console.log(data);
    let searchQuery = {
        city: data.name,
        state: searchState.value.toUpperCase(),
        country: countryQuery,
        lat: data.coord.lat,
        lon: data.coord.lon
    };
    console.log(`searchQuery:`); console.log(searchQuery);
    //store as current search for display function retrieval
    searchQueryString = JSON.stringify(searchQuery);
    localStorage.setItem("searchQuery", searchQueryString);
    console.log(`searchQuery in LocalStorage:`); console.log(JSON.parse(localStorage.getItem("searchQuery")));

    //put this object at the start of the searched cities array in LS
    localStorage.getItem("searchedCities")
        ? searchedCities = JSON.parse(localStorage.getItem("searchedCities"))
        : searchedCities = [];
    searchedCities.unshift(searchQuery);
    searchedCities = JSON.stringify(searchedCities);
    localStorage.setItem("searchedCities", searchedCities);

    console.log("end of constructObject functionality");
    searchForm.reset();
    listPreviousQueries();
    weatherForecast(searchQuery);
} // to weatherForecast(searchquery)

// DONE: reset list container, render searched city list, display city/state/country, refresh with array update, link array index as id, 
const listPreviousQueries = () => {
    console.log("inside listPrevQueries function");
    localStorage.getItem("searchedCities")
        ? prevQueryArr = JSON.parse(localStorage.getItem("searchedCities"))
        : prevQueryArr = [];
    const pqList = document.getElementById("previousQueryList");
    pqList.innerHTML = ""

    for (let i = 0; i < prevQueryArr.length; i++) {
        console.log(`inside for loop #${i}`);
        const pq = prevQueryArr[i];
        const queryUL =
            `<a href="#" class="list-group-item list-group-item-action prevQuery" id="${i}">
            ${pq.city}, ${pq.state}, ${pq.country}
            </a>`
        pqList.innerHTML += queryUL;
    };
    // add event listeners
    let prevQueries = document.querySelectorAll(".prevQuery");
    for (let i = 0; i < prevQueries.length; i++) {
        console.log(`assigning event listener for list item  ${i}`);
        const listItem = prevQueries[i];
        listItem.addEventListener("click", () => {
            console.log(`item ${i} has been clicked`);
            recallPrevQuery(i)
        });
    }
}; // to RecallPrevQuery(i) -- on click

// DONE: get ID of item clicked, pull item from stored searchedCities array, get lat & lon, call displayWeather(lat, lon)
function recallPrevQuery(i) {
    console.log("inside recallPrevQuery function");
    console.log(`i:`); console.log(i);
    const pqa = JSON.parse(localStorage.getItem("searchedCities"));
    const sq = pqa[i];
    console.log("sq = pqa[i]:"); console.log(sq);
    weatherForecast(sq);
}; // to weatherForecast(sq)

// THE ULTIMATE DISPLAY WEATHER FUNCTION -- both new & recalled searches lead here
function weatherForecast(sq) {
    //may come from initSearch origin OR recallPrevQuery
    console.log("inside weatherForecast function");
    console.log("sq:"); console.log(sq);
    let [lat, lon] = [sq.lat, sq.lon];
    console.log('lat:'); console.log(lat);
    console.log('lon:'); console.log(lon);

    const todayWeather = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
    const next5Weather = (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);

    //Current forecast call
    fetch(todayWeather)
        .then(res => {
            console.log(`todayWeather:`); console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(`todayWeather data:`); console.log(data);
            let tw = {
                date: dayjs().format('MMM D, YYYY'),
                city: data.name,
                currentTemp: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                iconCode: data.weather[0].icon,
                shortDesc: data.weather[0].main,
                longDesc: data.weather[0].description,
                visibility: data.visibility,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                highTemp: Math.round(data.main.temp_max),
                lowTemp: Math.round(data.main.temp_min),
                sunrise: dayjs(data.sys.sunrise).format("h:mm a"),
                sunset: dayjs(data.sys.sunset).format("h:mm a")
            };
            console.log("todaysWeather:"); console.log(tw);
            //create tw html here
            let weatherDisplayHeader = document.getElementById("currentSearchHeader");
            weatherDisplayHeader.innerHTML = `${sq.city}, ${sq.state}, ${sq.country}`;
            let twCard = document.getElementById("twCard");
            const twContent = `
                <img src="./assets/images/cover/${tw.iconCode}.png" class="card-img" alt="${tw.longDesc}" id="coverImg" style="max-height: 375px; object-fit: cover;">
                <div class="card-img-overlay col-8">
                <h2>${tw.date}</h2>
                <h3 class="card-title">${tw.currentTemp}°</h3>
                <img src="https://openweathermap.org/img/wn/${tw.iconCode}.png" alt="${tw.longDesc}">
                <h5>${tw.shortDesc}</h5>
                <p class="card-text">
                    Feels like ${tw.feelsLike}°</br>
                    HIGH ${tw.highTemp}° / LOW ${tw.lowTemp}°</br>
                    Wind Speed: ${tw.wind}</br>
                    Humidity: ${tw.humidity}</br>
                    Sunrise: ${tw.sunrise}</br>
                    Sunset: ${tw.sunset}</p>
                </div>`
            twCard.innerHTML = twContent;
        });

    // 5-day forecast call
    fetch(next5Weather)
        .then(res => {
            console.log(`next5Weather res:`); console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(`next5Weather data:`); console.log(data);
            let days = [];
            //filter data 
            for (let i = 0; i < data.list.length; i++) {
                if (data.list[i].dt_txt.includes("12:00:00")) {
                    days = [...days, data.list[i]];
                    console.log(`data.list[${i}] added to days array... new list:`); console.log(days);
                } else {
                    console.log(`data.list[${i}] not added.`);
                };
            }; // end of filter/[days] creating for loop

            let n5Container = document.getElementById("n5Container");
            n5Container.innerHTML = "";
            for (let i = 0; i < days.length; i++) {
                const d = days[i];
                const day = {
                    dayId: (i + 1),
                    weekday: dayjs(`${d.dt_txt}`).format('dddd'),
                    date: dayjs(`${d.dt_txt}`).format('M/D/YYYY'),
                    temp: Math.round(d.main.temp),
                    icon: d.weather[0].icon,
                    shortDesc: d.weather[0].main,
                    longDesc: d.weather[0].description,
                    rain: Math.round(d.pop),
                    humidity: d.main.humidity,
                    wind: d.wind.speed,
                };
                console.log(`"day" object created:`); console.log(day);
                //create n5 html here
                const n5Card =
                    `<div class="card justify-content-center">
                        <div class="card-header"><b>
                            ${day.weekday}</b></br>
                            ${day.date}
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">
                                ${day.temp}°
                            </h3>
                            <img src="https://openweathermap.org/img/wn/${day.icon}@2x.png" class="card-img-top p-1" alt="${day.longDesc}">
                            <p class="card-text">
                                ${day.rain}%</br>chance of rain
                            </p>
                            <p>
                                Wind Speed: ${day.wind}</br>
                                Humidity: ${day.humidity}
                            </p>
                        </div>
                    </div>`
                n5Container.innerHTML += n5Card;
            }; // end of [days]/{day} & forecast creation for loop
        });

};

// NOT NEEDED: function render image for cover on current weather
// const coverDisplay = (dwi) => {
//     let imgSrc = document.getElementById("coverImg");
//     const availImgs = ["01d", "01n", "02d", "02n", "03d", "03n", "04d", "04n", "09d", "09n", "10d", "10n", "11d", "11n", "13d", "13n", "50d", "50n"];
//     let img;
//     if (availImgs.includes(dwi)) {
//         img = dwi;
//     } else {
//         img = `generic image`;
//     };
//     let pathToImg = `./assets/images/cover/${img}.png`;
//     imgSrc.setAttribute("src", `${pathToImg}`);
// };

searchButton.addEventListener("click", initSearch);
listPreviousQueries();
createCountryDropdown();