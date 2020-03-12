import {fetchWeatherInformation} from './WeatherController.js';
import {init} from './InventoryController.js';
import {initialize} from '../View/viewcontroller.js';
import {initItemController} from './ItemController.js';

window.onload = function () {
    fetchWeatherInformation(2744513);
    init();
    initialize();
    initItemController();
};