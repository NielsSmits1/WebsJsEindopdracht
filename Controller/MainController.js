import WeatherController from './WeatherController.js';
import InventoryController from './InventoryController.js';
import ViewController from '../View/ViewController.js';
import ItemController from './ItemController.js';

let inventoryController = new InventoryController();
inventoryController.init();
let weatherController = new WeatherController();
let viewController = new ViewController();
let itemController = new ItemController(inventoryController);
inventoryController.addItemController(itemController);

