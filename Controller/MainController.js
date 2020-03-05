import {fetchWeatherInformation} from './WeatherController.js';
import {init} from './InventoryController.js';

let currentCity = '2744513';

window.onload = function () {
    fetchWeatherInformation(currentCity);
    init();
}