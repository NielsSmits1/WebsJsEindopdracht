/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Controller/MainController.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Controller/InventoryController.js":
/*!*******************************************!*\
  !*** ./Controller/InventoryController.js ***!
  \*******************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\nlet currentDraggable;\r\n\r\n\r\n// On load make divs\r\n\r\nfunction init() {\r\n    createStartDivs();\r\n    createTargetDivs();\r\n}\r\n\r\nfunction createStartDivs() {\r\n    let toAdd = document.createDocumentFragment();\r\n    let dropdown = document.getElementById(\"clothing-dropdown\");\r\n    localStorage.removeItem(\"jurk\")\r\n    let jurk = { name : \"jurk\", description : \"Rode jurk van zijden draad\",import : 5.00,export : 7.50,min_stock : 2,cur_stock : 3,color : \"red\",size : \"XL\", imgpath: \"https://source.unsplash.com/random/30x30\"};\r\n    if(localStorage.getItem(\"jurk\") == null){\r\n        localStorage.setItem(\"jurk\", JSON.stringify(jurk));\r\n    }\r\n    \r\n    let newDiv = document.createElement('div');\r\n        let newDiv2 = document.createElement('div');\r\n        newDiv.className = 'empty';\r\n        newDiv2.className = 'fill';\r\n        newDiv2.draggable = true;\r\n        newDiv2.id = jurk.name;\r\n        newDiv2.style.backgroundImage = \"url('\" + jurk.imgpath + \"')\";\r\n        newDiv.appendChild(newDiv2);\r\n        toAdd.appendChild(newDiv);\r\n    // for (let i = 0; i < 5; i++) {\r\n    //     let newDiv = document.createElement('div');\r\n    //     let newDiv2 = document.createElement('div');\r\n    //     newDiv.className = 'empty';\r\n    //     newDiv2.className = 'fill';\r\n    //     newDiv2.draggable = true;\r\n    //     newDiv.appendChild(newDiv2);\r\n    //     toAdd.appendChild(newDiv);\r\n    // }\r\n    dropdown.appendChild(toAdd);\r\n}\r\n\r\n//Creates divs\r\nfunction createTargetDivs() {\r\n    let counter = 0;\r\n    fetch('../Model/Map.json')\r\n        .then(response => response.json())\r\n        .then(function(response){\r\n            console.log(JSON.stringify(response.map));\r\n            let clothings = response.map.products.clothing;\r\n            let tierlantins = response.map.products.tierlantin;\r\n            let decorations = response.map.products.decoration;\r\n            let blockedTiles = response.map.blockedTiles;\r\n            let clothing = document.getElementById('clothing-region')\r\n            let toAdd = document.createDocumentFragment();\r\n            for (let j = 0; j < 15; j++) {\r\n                \r\n                for (let i = 0; i < 15; i++) {\r\n                    let newDiv = document.createElement('div');\r\n                    newDiv.className = 'empty';\r\n                    newDiv.id = counter;\r\n                    toAdd.appendChild(newDiv);\r\n                    counter++;\r\n                }\r\n                \r\n            }\r\n            clothing.appendChild(toAdd)\r\n            // clothings.forEach(function(item){\r\n            //         let cloth = new Clothing(item.item.name, item.item.description, item.item.import, item.item.export, item.item.min_stock, item.item.cur_stock, item.item.color, item.item.size);\r\n            //         let newDiv2 = document.createElement('div');\r\n            //         newDiv2.style.backgroundImage = \"url('\" + cloth.img.src + \"')\";\r\n            //         newDiv2.className = 'fill' + ' clothing'; \r\n            //         newDiv2.id = item.id;\r\n            //         newDiv2.draggable = true;\r\n            //         let newDiv = document.getElementById(item.id);\r\n            //         newDiv.appendChild(newDiv2);\r\n                \r\n            //  })\r\n\r\n            let tierlantin = document.getElementById('tierlantin-region')\r\n\r\n    for (let j = 0; j < 15; j++) {\r\n        let toAdd = document.createDocumentFragment();\r\n        for (let i = 0; i < 15; i++) {\r\n            let newDiv = document.createElement('div');\r\n            newDiv.className = 'empty';\r\n            newDiv.id = counter;\r\n            toAdd.appendChild(newDiv);\r\n            counter++;\r\n        }\r\n        tierlantin.appendChild(toAdd)\r\n    }\r\n    // tierlantins.forEach(function(item){\r\n    //         let tier = new Tierlantin(item.item.name, item.item.description, item.item.import, item.item.export, item.item.min_stock, item.item.cur_stock, item.item.weight);\r\n    //         let newDiv2 = document.createElement('div');\r\n    //         newDiv2.style.backgroundImage = \"url('\" + tier.img.src + \"')\";\r\n    //         newDiv2.className = 'fill';\r\n    //         newDiv2.id = item.id;\r\n    //         newDiv2.draggable = true;\r\n    //         let newDiv = document.getElementById(item.id);\r\n    //         newDiv.appendChild(newDiv2);\r\n        \r\n    //  })\r\n\r\n    let decoration = document.getElementById('decoration-region')\r\n\r\n    for (let j = 0; j < 15; j++) {\r\n        let toAdd = document.createDocumentFragment();\r\n        for (let i = 0; i < 15; i++) {\r\n            let newDiv = document.createElement('div');\r\n            newDiv.className = 'empty';\r\n            newDiv.id = counter;\r\n            toAdd.appendChild(newDiv);\r\n            counter++;\r\n        }\r\n        decoration.appendChild(toAdd)\r\n    }\r\n    // decorations.forEach(function(item){\r\n    //         let deco = new Decoration(item.item.name, item.item.description, item.item.import, item.item.export, item.item.min_stock, item.item.cur_stock, item.length, item.color, item.amountinpackage);\r\n    //         let newDiv2 = document.createElement('div');\r\n    //         newDiv2.style.backgroundImage = \"url('\" + deco.img.src + \"')\";\r\n    //         newDiv2.className = 'fill';\r\n    //         newDiv2.id = item.id\r\n    //         newDiv2.draggable = true;\r\n    //         let newDiv = document.getElementById(item.id);\r\n    //         newDiv.appendChild(newDiv2);\r\n        \r\n    //  })\r\n        blockedTiles.forEach(function(item){\r\n            let blockeddiv = document.getElementById(item.id);\r\n            blockeddiv.className = 'block';\r\n        })\r\n        addListeners();\r\n        let keys = Object.keys(localStorage);\r\n        for(let key of keys){\r\n            if(isNaN(parseInt(key))){\r\n                return;\r\n            }\r\n            let product = JSON.parse(localStorage.getItem(key));\r\n            let div = document.getElementById(parseInt(key));\r\n            let div2 = document.createElement('div');\r\n            div2.className = 'fill';\r\n            div2.draggable = true;\r\n            div2.style.backgroundImage = \"url(\" + product.imgpath +\")\";\r\n            div.appendChild(div2);\r\n        };\r\n     \r\n});\r\n}\r\n\r\n// Loop through empty boxes and add listeners\r\nfunction addListeners() {\r\n    let empties = Array.from(document.querySelectorAll('.empty'));\r\n    empties.forEach(function (item) {\r\n        item.addEventListener('dragover', dragOver);\r\n        item.addEventListener('dragenter', dragEnter);\r\n        item.addEventListener('dragleave', dragLeave);\r\n        item.addEventListener('drop', dragDrop);\r\n        item.addEventListener('dragstart', dragStart);\r\n        item.addEventListener('dragend', dragEnd);\r\n    })\r\n\r\n    }\r\n\r\n// Drag Functions\r\nfunction dragStart() {\r\n    this.className += ' hold';\r\n    currentDraggable = this.firstChild;\r\n}\r\n\r\nfunction dragEnd() {\r\n    let oldid;\r\n    if(currentDraggable.id == ''){\r\n        oldid = currentDraggable.parentElement.id;\r\n    }else{\r\n        oldid = currentDraggable.id;\r\n    }\r\n    let info = localStorage.getItem(oldid)\r\n    localStorage.setItem(this.id, info);\r\n    localStorage.removeItem(oldid);\r\n    let item = JSON.parse(localStorage.getItem(this.id));\r\n    let newDiv2 = document.createElement('div');\r\n    newDiv2.className = 'fill';\r\n    newDiv2.style.backgroundImage = \"url('\" + item.imgpath + \"')\";\r\n    //this.firstChild = newDiv2;\r\n}\r\n\r\nfunction dragOver(e) {\r\n    e.preventDefault();\r\n}\r\n\r\nfunction dragEnter(e) {\r\n    e.preventDefault();\r\n    this.className += ' hovered';\r\n}\r\n\r\nfunction dragLeave() {\r\n    this.className = 'empty';\r\n}\r\n\r\nfunction dragDrop() {\r\n    this.className = 'empty';\r\n    if (this.hasChildNodes()) {\r\n        return;\r\n    }\r\n    this.append(currentDraggable);\r\n}\r\n\r\nfunction Product(name, description, Import, Export, min_stock,cur_stock){\r\n    this.Name = name;\r\n    this.Description = description;\r\n    this.Import = Import;\r\n    this.Export = Export;\r\n    this.Export_btw= Export*1.21;\r\n    this.Min_stock = min_stock;\r\n    this.Cur_stock = cur_stock;\r\n    this.img = new Image();\r\n    this.img.src = 'https://source.unsplash.com/random/30x30';\r\n}\r\n\r\nfunction Clothing(name, description, Import, Export, min_stock,cur_stock, color, size){\r\n    Product.call(this, name, description, Import, Export, min_stock,cur_stock);\r\n    this.Color = color;\r\n    this.Size = size;\r\n}\r\n\r\nfunction Tierlantin(name, description, Import, Export, min_stock,cur_stock, weight){\r\n    Product.call(this, name, description, Import, Export, min_stock,cur_stock);\r\n    this.Weight = weight;\r\n}\r\n\r\nfunction Decoration(name, description, Import, Export, min_stock,cur_stock, length, color, amountinpackage){\r\n    Product.call(this, name, description, Import, Export, min_stock,cur_stock);\r\n    this.Length = length;\r\n    this.Color = color;\r\n    this.AmountInPackage = amountinpackage;\r\n}\n\n//# sourceURL=webpack:///./Controller/InventoryController.js?");

/***/ }),

/***/ "./Controller/ItemController.js":
/*!**************************************!*\
  !*** ./Controller/ItemController.js ***!
  \**************************************/
/*! exports provided: initItemController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initItemController\", function() { return initItemController; });\n/*Variables*/\r\nconst name = document.getElementById('item-name');\r\nconst description = document.getElementById('item-description');\r\nconst purchasePrice = document.getElementById('item-purchase-price');\r\nconst sellPriceExbtw = document.getElementById('item-sell-price-exbtw');\r\nconst color = document.getElementById('item-color');\r\nconst size = document.getElementById('item-size');\r\nconst weight = document.getElementById('item-weight');\r\nconst sizeCM = document.getElementById('item-size-CM');\r\nconst amountInPackage = document.getElementById('item-amount-in-package');\r\nconst btnClothingForm = document.getElementById('btn-clothing-form');\r\nconst btnTierlatinForm = document.getElementById('btn-tierlatin-form');\r\nconst btnDecorationForm = document.getElementById('btn-decoration-form');\r\nconst informationbar = document.getElementById('information-bar');\r\nconst submitInformationBtn = document.getElementById('submit-information-btn');\r\n\r\n/*Error messages*/\r\nconst itemNameErrorMessage = document.getElementById('item-name-error-message');\r\nconst itemDescriptionErrorMessage = document.getElementById('item-description-error-message');\r\nconst itemPurchasePriseErrorMessage = document.getElementById('item-purchase-price-error-message');\r\nconst itemSellPriceErrorMessage = document.getElementById('item-sell-price-error-message');\r\nconst itemColorErrorMessage = document.getElementById('item-color-error-message');\r\nconst itemSizeErrorMessage = document.getElementById('item-size-error-message');\r\nconst itemWeightErrorMessage = document.getElementById('item-weight-error-message');\r\nconst itemSizeCMErrorMessage = document.getElementById('item-sizeCM-error-message');\r\nconst itemAmountErrorMessage = document.getElementById('item-amount-error-message');\r\n\r\nconst clothingformbtn = document.getElementById(\"btn-clothing-form\");\r\nconst tierlatinformbtn = document.getElementById(\"btn-tierlatin-form\");\r\nconst decorationformbtn = document.getElementById(\"btn-decoration-form\");\r\n\r\nlet currentItemType = 'clothing';\r\nlet invalidUserInput = false;\r\n\r\nfunction createItem() {\r\n    if (name.value == '') {\r\n        itemNameErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (description.value == '') {\r\n        itemDescriptionErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (purchasePrice.value == '') {\r\n        itemPurchasePriseErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (sellPriceExbtw.value == '') {\r\n        itemSellPriceErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (color.value == '') {\r\n        itemColorErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (size.value == '') {\r\n        itemSizeErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (weight.value == '') {\r\n        itemWeightErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (sizeCM.value == '') {\r\n        itemSizeCMErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (amountInPackage.value == '') {\r\n        itemAmountErrorMessage.style.display = \"block\";\r\n\r\n        invalidUserInput = true;\r\n    }\r\n    if (invalidUserInput) {\r\n        return;\r\n    }\r\n    // TODO daadwerkelijk het item toevoegen\r\n}\r\n\r\nfunction HideAllErrorMessages() {\r\n    itemNameErrorMessage.style.display = \"none\";\r\n    itemDescriptionErrorMessage.style.display = \"none\";\r\n    itemPurchasePriseErrorMessage.style.display = \"none\";\r\n    itemSellPriceErrorMessage.style.display = \"none\";\r\n    itemColorErrorMessage.style.display = \"none\";\r\n    itemSizeErrorMessage.style.display = \"none\";\r\n    itemWeightErrorMessage.style.display = \"none\";\r\n    itemSizeCMErrorMessage.style.display = \"none\";\r\n    itemAmountErrorMessage.style.display = \"none\";\r\n}\r\n\r\nclothingformbtn.addEventListener('click', function () {\r\n    HideAllErrorMessages();\r\n});\r\n\r\ntierlatinformbtn.addEventListener('click', function () {\r\n    HideAllErrorMessages();\r\n});\r\n\r\ndecorationformbtn.addEventListener('click', function () {\r\n    HideAllErrorMessages();\r\n});\r\n\r\nfunction initItemController() {\r\n    HideAllErrorMessages();\r\n    btnClothingForm.addEventListener('click', function (e) {\r\n        currentItemType = 'clothing';\r\n    });\r\n\r\n    btnTierlatinForm.addEventListener('click', function () {\r\n        currentItemType = 'tierlatin';\r\n    });\r\n\r\n    btnDecorationForm.addEventListener('click', function () {\r\n        currentItemType = 'decoration';\r\n    });\r\n\r\n    submitInformationBtn.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        HideAllErrorMessages();\r\n        createItem();\r\n    });\r\n}\n\n//# sourceURL=webpack:///./Controller/ItemController.js?");

/***/ }),

/***/ "./Controller/MainController.js":
/*!**************************************!*\
  !*** ./Controller/MainController.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WeatherController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherController.js */ \"./Controller/WeatherController.js\");\n/* harmony import */ var _InventoryController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryController.js */ \"./Controller/InventoryController.js\");\n/* harmony import */ var _View_viewcontroller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../View/viewcontroller.js */ \"./View/viewcontroller.js\");\n/* harmony import */ var _ItemController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemController.js */ \"./Controller/ItemController.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.onload = function () {\r\n    Object(_WeatherController_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchWeatherInformation\"])(2744513);\r\n    Object(_InventoryController_js__WEBPACK_IMPORTED_MODULE_1__[\"init\"])();\r\n    Object(_View_viewcontroller_js__WEBPACK_IMPORTED_MODULE_2__[\"initialize\"])();\r\n    Object(_ItemController_js__WEBPACK_IMPORTED_MODULE_3__[\"initItemController\"])();\r\n};\n\n//# sourceURL=webpack:///./Controller/MainController.js?");

/***/ }),

/***/ "./Controller/WeatherController.js":
/*!*****************************************!*\
  !*** ./Controller/WeatherController.js ***!
  \*****************************************/
/*! exports provided: fetchWeatherInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchWeatherInformation\", function() { return fetchWeatherInformation; });\nconst key = 'ca862c1ce25923db366fa1502282cb69';\r\nconst CityIDs = [\"2744513\", \"2759794\", \"2950159\", \"2643743\"];\r\nlet currentCityIndex = 0;\r\n\r\nfunction fetchWeatherInformation(cityID) {\r\n    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)\r\n        .then(function (resp) {\r\n            return resp.json()\r\n        }) // Convert data to json\r\n        .then(function (data) {\r\n            drawWeather(data);\r\n        })\r\n        .catch(error => {\r\n            console.log(error);\r\n        });\r\n}\r\n\r\nfunction drawWeather(weatherData) {\r\n    let actualTemp = Math.round(parseFloat(weatherData.main.temp) - 273.15);\r\n    let feelsLikeTemp = Math.round(parseFloat(weatherData.main.feels_like) - 273.15);\r\n    let humidity = weatherData.main.humidity;\r\n    let description = weatherData.weather[0].description;\r\n\r\n    document.getElementById('location').innerHTML = weatherData.name;\r\n    document.getElementById('temp').innerHTML = 'Temp: ' + actualTemp + '&deg;';\r\n    document.getElementById('feels_like').innerHTML = 'Gevoels temp: ' + feelsLikeTemp + '&deg;';\r\n    document.getElementById('weatherDescription').innerHTML = 'Beschrijving: ' + description;\r\n    document.getElementById('humidity').innerHTML = 'Vochtigheidsgraad: ' + humidity + '%';\r\n}\r\n\r\nfunction nextPlace() {\r\n    if (currentCityIndex == CityIDs.length-1) {\r\n        currentCityIndex = 0;\r\n    } else{\r\n        currentCityIndex++;\r\n    }\r\n    fetchWeatherInformation(CityIDs[currentCityIndex]);\r\n}\r\n\r\nfunction previousPlace() {\r\n    if (currentCityIndex == 0) {\r\n        currentCityIndex = CityIDs.length-1;\r\n    } else{\r\n        currentCityIndex--;\r\n    }\r\n    fetchWeatherInformation(CityIDs[currentCityIndex]);\r\n}\r\n\r\ndocument.getElementById('btn-weather-switch-next').addEventListener('click', nextPlace);\r\ndocument.getElementById('btn-weather-switch-previous').addEventListener('click', previousPlace);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./Controller/WeatherController.js?");

/***/ }),

/***/ "./View/viewcontroller.js":
/*!********************************!*\
  !*** ./View/viewcontroller.js ***!
  \********************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialize\", function() { return initialize; });\n/*Buttons*/\r\nconst clothingbtn = document.getElementById(\"clothing-btn\");\r\nconst tierlantinbtn = document.getElementById(\"tierlantin-btn\");\r\nconst decorationbtn = document.getElementById(\"decoration-btn\");\r\nconst createitembtn = document.getElementById(\"create-item-btn\");\r\nconst clothingformbtn = document.getElementById(\"btn-clothing-form\");\r\nconst tierlatinformbtn = document.getElementById(\"btn-tierlatin-form\");\r\nconst decorationformbtn = document.getElementById(\"btn-decoration-form\");\r\n\r\n/*Form Field*/\r\nconst itemcolorfield = document.getElementById(\"item-color\");\r\nconst itemsizefield = document.getElementById(\"item-size\");\r\nconst itemweightfield = document.getElementById(\"item-weight\");\r\nconst itemSizeinCMfield = document.getElementById(\"item-size-CM\");\r\nconst itemAmountInPackagefield = document.getElementById(\"item-amount-in-package\");\r\nconst itemName = document.getElementById('item-name');\r\nconst itemDescription = document.getElementById('item-description');\r\nconst itemPurchasePrice = document.getElementById('item-purchase-price');\r\nconst itemSellPriceExbtw = document.getElementById('item-sell-price-exbtw');\r\n\r\n/*Regions*/\r\nconst clothingregion = document.getElementById(\"clothing-region\");\r\nconst tierlantinregion = document.getElementById(\"tierlantin-region\");\r\nconst decorationregion = document.getElementById(\"decoration-region\");\r\nconst createitemregion = document.getElementById(\"create-item-region\");\r\n\r\n/*Event Listeners*/\r\nfunction initialize() {\r\n    clothingbtn.addEventListener('click', function () {\r\n        clothingregion.style.display = \"block\";\r\n        tierlantinregion.style.display = \"none\";\r\n        decorationregion.style.display = \"none\";\r\n        createitemregion.style.display = \"none\";\r\n    });\r\n\r\n    tierlantinbtn.addEventListener('click', function () {\r\n        clothingregion.style.display = \"none\";\r\n        tierlantinregion.style.display = \"block\";\r\n        decorationregion.style.display = \"none\";\r\n        createitemregion.style.display = \"none\";\r\n    });\r\n\r\n    decorationbtn.addEventListener('click', function () {\r\n        clothingregion.style.display = \"none\";\r\n        tierlantinregion.style.display = \"none\";\r\n        decorationregion.style.display = \"block\";\r\n        createitemregion.style.display = \"none\";\r\n    });\r\n\r\n    function setStandardFormInputValues() {\r\n        itemName.value = 'Item naam';\r\n        itemDescription.value = 'Item beschrijving';\r\n        itemPurchasePrice.value = 'Item inkoopprijs';\r\n        itemSellPriceExbtw.value = 'Item verkoopprijs excl. btw';\r\n        itemcolorfield.value = 'Item kleur';\r\n        itemsizefield.value = 'Item maat';\r\n        itemweightfield.value = 'Item gewicht';\r\n        itemSizeinCMfield.value = 'Item grootte in cm';\r\n        itemAmountInPackagefield.value = 'Item hoeveelheid per pakketje';\r\n    }\r\n\r\n    createitembtn.addEventListener('click', function () {\r\n        clothingregion.style.display = \"none\";\r\n        tierlantinregion.style.display = \"none\";\r\n        decorationregion.style.display = \"none\";\r\n        createitemregion.style.display = \"block\";\r\n\r\n        clothingformbtn.click();\r\n    });\r\n\r\n    clothingformbtn.addEventListener('click', function () {\r\n        itemcolorfield.style.display = \"block\";\r\n        itemsizefield.style.display = \"block\";\r\n        itemweightfield.style.display = \"none\";\r\n        itemSizeinCMfield.style.display = \"none\";\r\n        itemAmountInPackagefield.style.display = \"none\";\r\n        setStandardFormInputValues();\r\n    });\r\n\r\n    tierlatinformbtn.addEventListener('click', function () {\r\n        itemcolorfield.style.display = \"none\";\r\n        itemsizefield.style.display = \"none\";\r\n        itemweightfield.style.display = \"block\";\r\n        itemSizeinCMfield.style.display = \"none\";\r\n        itemAmountInPackagefield.style.display = \"none\";\r\n        setStandardFormInputValues();\r\n    });\r\n\r\n    decorationformbtn.addEventListener('click', function () {\r\n        itemcolorfield.style.display = \"block\";\r\n        itemsizefield.style.display = \"none\";\r\n        itemweightfield.style.display = \"none\";\r\n        itemSizeinCMfield.style.display = \"block\";\r\n        itemAmountInPackagefield.style.display = \"block\";\r\n        setStandardFormInputValues();\r\n    });\r\n    createitembtn.click();\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./View/viewcontroller.js?");

/***/ })

/******/ });