# Rain or Shine? Weather Forecast

[Link to Deployed Weather App](https://sacarr91.github.io/rain-or-shine-weather-forecast/)

## Description
Want to know if it's a good day to take the boat out? Go golfing? Head to the park? Stay inside?

This weather app will allow users to search for weather conditions in any city. 
When a city is selected, the current conditions will display alongside the 5-day forecast. 
Searched cities will store in local storage for easy reaccess by the user as desired.

![screenshot of deployed page](./assets/images/cover/Screenshot%202024-06-26%20191127.png)

## User Story

```
AS A traveler

I WANT to see the weather outlook for multiple cities

SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

* GIVEN a weather dashboard 
> - [x] with form inputs...
* WHEN I search for a city
> - [x] THEN I am presented with current and future conditions for that city and that city is added to the search history
* WHEN I view current weather conditions for that city
> THEN I am presented with 
> - [x] the city name, 
> - [x] the date, 
> - [x] an icon representation of weather conditions, 
> - [x] the temperature, 
> - [x] the wind speed, 
> - [x] and the humidity 
>> **Current-day forecast responses:**
>>- name
>>- dt ... CONVERT USING DAY.JS
>>- weather.icon
>>- main.temp
>>- wind.speed
>>- main.humidity
>>+ *main.feels_like*
>>+ *weather.icon*
>>+ *weather.main* 
>>+ *weather.description*
>>+ *main.temp_min*
>>+ *main.temp_max*
>>+ *sys.sunrise*
>>+ *sys.sunset*

* WHEN I view future weather conditions for that city
> THEN I am presented with a **5-day forecast** that displays...
>- [x] the date, 
>- [x] an icon representation of weather conditions, 
>- [x] the temperature, 
>- [x] the wind speed, 
>- [x] and the humidity
>> **5-day forecast responses:**
>>- city.name
>>- list.dt_txt .... CONVERT USING DAY.JS
>>- list.main.temp 
>>+ *list.main.feels_like*
>>+ *list.weather.icon*
>>+ *list.weather.main* 
>>+ *list.weather.description*
>>+ *list.main.temp_min*
>>+ *list.main.temp_max*
>>- list.main.humidity
>>- list.wind.speed
>>+ *city.sunrise*
>>+ *city.sunset*
* WHEN I click on a city in the search history
> - [x] THEN I am again presented with current and future conditions for that city