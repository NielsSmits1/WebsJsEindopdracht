import {FetchWeatherInformation} from './WeatherController.js';
import {init} from './InventoryController.js';
let currentCity = '2744513';

window.onload= function () {
FetchWeatherInformation(currentCity);
init();
}