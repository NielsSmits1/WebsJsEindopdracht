import {fetchWeatherInformation} from './WeatherController.js';
import {init} from './InventoryController.js';

window.onload = function () {
    fetchWeatherInformation(2744513);
    init();
};