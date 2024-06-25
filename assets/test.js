const apiKey = "22a572ddc4e089d2bb5e1db833219c1b";
const cscURL = (`http://api.openweathermap.org/geo/1.0/direct?q=Orlando,FL,US&limit=1&appid=22a572ddc4e089d2bb5e1db833219c1b`);
const fetchOnSearch = () => {
    fetch(cscURL)
        .then(res => {
                console.log(res);
                array.forEach(element => {
                    
                });
                const jsonData = JSON.stringify(data);
                console.log(jsonData);
            } else {
                console.log("Fetch unsuccessful")
            }
        })

        .then(data => {
            console.log(data);
            const parsedData = JSON.parse(data);
            console.log(parsedData)
        });
}

const parseAndStoreRes = async () => {
    const searchQuery = await data;
    console.log({
        city: data[0].name,
        state: searchState.value,
        country: data[0].country,
        lat: data[0].lat,
        lon: data[0].lon
    });
};

//put this object at the start of the searched cities array in LS
searchedCities.unshift(searchQuery);
searchedCities = JSON.stringify(searchedCities);
localStorage.setItem("searchedCities", searchedCities);
console.log(localStorage);
console.log(searchQuery);
}
});