const key = 'ca862c1ce25923db366fa1502282cb69';
const CityIDs = ["2744513", "2759794", "2950159", "2643743"];
let currentCityIndex = 0;

export function fetchWeatherInformation(cityID) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            drawWeather(data);
        })
        .catch(error => {
            console.log(error);
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
    document.getElementById('weatherDescription').innerHTML = 'Beschrijving: ' + description;
    document.getElementById('humidity').innerHTML = 'Vochtigheidsgraad: ' + humidity + '%';
}

function nextPlace() {
    if (currentCityIndex == CityIDs.length-1) {
        currentCityIndex = 0;
    } else{
        currentCityIndex++;
    }
    fetchWeatherInformation(CityIDs[currentCityIndex]);
}

function previousPlace() {
    if (currentCityIndex == 0) {
        currentCityIndex = CityIDs.length-1;
    } else{
        currentCityIndex--;
    }
    fetchWeatherInformation(CityIDs[currentCityIndex]);
}

document.getElementById('btn-weather-switch-next').addEventListener('click', nextPlace);
document.getElementById('btn-weather-switch-previous').addEventListener('click', previousPlace);


