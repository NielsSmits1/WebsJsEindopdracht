const key = 'ca862c1ce25923db366fa1502282cb69';
const WijchenCityID = '2744513';
const AmsterdamCityID = '2759794';

function FetchWeatherInformation(cityID) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function () {
            console.log('An error has occured.')
        });
}

function drawWeather(weatherData) {
    let actualTemp = Math.round(parseFloat(weatherData.main.temp) - 273.15);
    let feelslike = Math.round(parseFloat(weatherData.main.feels_like) - 273.15);
    let humidity = weatherData.main.humidity;
    let description = weatherData.weather[0].description;

    document.getElementById('location').innerHTML = weatherData.name;
    document.getElementById('temp').innerHTML = 'Temp: ' + actualTemp + '&deg;';
    document.getElementById('feels_like').innerHTML = 'Gevoels temp: ' + feelslike + '&deg;';
    document.getElementById('description').innerHTML = 'Beschrijving: ' + description;
    document.getElementById('humidity').innerHTML = 'Vochtigheidsgraad: ' + humidity;

}

window.onload = function () {
    FetchWeatherInformation(WijchenCityID);
};