const key = 'ca862c1ce25923db366fa1502282cb69';
const WijchenCityID = '2744513';
const AmsterdamCityID = '2759794';
let currentCity = '2744513';

export function fetchWeatherInformation(cityID) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {
            console.log('An error has occurred.')
        });
}

function drawWeather(weatherData) {
    let actualTemp = Math.round(parseFloat(weatherData.main.temp) - 273.15);
    let feelsLikeTemp = Math.round(parseFloat(weatherData.main.feels_like) - 273.15);
    let humidity = weatherData.main.humidity;
    let description = weatherData.weather[0].description;

    document.getElementById('location').innerHTML = weatherData.name;
    document.getElementById('temp').innerHTML = 'Temp: ' + actualTemp + '&deg;';
    document.getElementById('feels_like').innerHTML = 'Gevoels temp: ' + feelsLikeTemp + '&deg;';
    document.getElementById('description').innerHTML = 'Beschrijving: ' + description;
    document.getElementById('humidity').innerHTML = 'Vochtigheidsgraad: ' + humidity + '%';
}

function switchPlaces() {
    if (currentCity == WijchenCityID) {
        currentCity = AmsterdamCityID;
        fetchWeatherInformation(currentCity);
    } else {
        currentCity = WijchenCityID;
        fetchWeatherInformation(currentCity);
    }
}

document.getElementById('btn-weather-switch').addEventListener('click', switchPlaces);


