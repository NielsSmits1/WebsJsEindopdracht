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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InventoryController; });\nclass InventoryController {\r\n\r\n    constructor() {\r\n        this.currentDraggable;\r\n        this.oldDraggable;\r\n        this.counter = 0;\r\n        this.initializeLocalStorage();\r\n        this.createStartDivs();\r\n        this.createClothingDiv();\r\n        this.createTierlantinDiv();\r\n        this.createDecorationDiv();\r\n        this.loadPlacedProducts();\r\n        this.addListeners();\r\n        this.createBlockedDivs();\r\n    }\r\n\r\n    initializeLocalStorage() {\r\n        if (localStorage.getItem('used') == null) {\r\n            let used = { products: [] };\r\n            localStorage.setItem('used', JSON.stringify(used));\r\n        }\r\n        if (localStorage.getItem('unused') == null) {\r\n            let unused = { products: [] };\r\n            let jurk = {\r\n                id: 1,\r\n                placed_at: 0,\r\n                name: \"jurk\",\r\n                type: \"clothing\",\r\n                description: \"Rode jurk van zijden draad\",\r\n                import: 5.00,\r\n                export: 7.50,\r\n                min_stock: 2,\r\n                cur_stock: 3,\r\n                color: \"red\",\r\n                size: \"XL\",\r\n                imgpath: \"https://source.unsplash.com/random/30x30\"\r\n            };\r\n            unused.products[unused.products.length] = jurk;\r\n            localStorage.setItem('unused', JSON.stringify(unused));\r\n        }\r\n\r\n    }\r\n\r\n    createStartDivs() {\r\n        let unused = JSON.parse(localStorage.getItem('unused'));\r\n        let toAddClothing = document.createDocumentFragment();\r\n        let toAddTierlantin = document.createDocumentFragment();\r\n        let toAddDecoration = document.createDocumentFragment();\r\n        let dropdown = document.getElementById(\"clothing-dropdown\");\r\n        let tier_dropdown = document.getElementById(\"tierlantin-dropdown\");\r\n        let deco_dropdown = document.getElementById(\"decoration-dropdown\");\r\n\r\n        unused.products.forEach(product => {\r\n            if (product.type == 'clothing') {\r\n                let newDiv = document.createElement('div');\r\n                let newDiv2 = document.createElement('div');\r\n                newDiv.className = 'empty ';\r\n                newDiv.className += 'unused';\r\n                newDiv2.className = 'fill';\r\n                newDiv2.draggable = true;\r\n                newDiv.id = product.placed_at;\r\n                newDiv2.style.backgroundImage = \"url('\" + product.imgpath + \"')\";\r\n                newDiv.appendChild(newDiv2);\r\n                toAddClothing.appendChild(newDiv);\r\n            }\r\n            if (product.type == 'tierlantin') {\r\n                let newDiv = document.createElement('div');\r\n                let newDiv2 = document.createElement('div');\r\n                newDiv.className = 'empty ';\r\n                newDiv.className += 'unused';\r\n                newDiv2.className = 'fill';\r\n                newDiv2.draggable = true;\r\n                newDiv2.id = product.id;\r\n                newDiv2.style.backgroundImage = \"url('\" + product.imgpath + \"')\";\r\n                newDiv.appendChild(newDiv2);\r\n                toAddTierlantin.appendChild(newDiv);\r\n            }\r\n            if (product.type == 'decoration') {\r\n                let newDiv = document.createElement('div');\r\n                let newDiv2 = document.createElement('div');\r\n                newDiv.className = 'empty ';\r\n                newDiv.className += 'unused';\r\n                newDiv2.className = 'fill';\r\n                newDiv2.draggable = true;\r\n                newDiv2.id = product.id;\r\n                newDiv2.style.backgroundImage = \"url('\" + product.imgpath + \"')\";\r\n                newDiv.appendChild(newDiv2);\r\n                toAddDecoration.appendChild(newDiv);\r\n            }\r\n        });\r\n\r\n        dropdown.appendChild(toAddClothing);\r\n        tier_dropdown.appendChild(toAddTierlantin);\r\n        deco_dropdown.appendChild(toAddDecoration);\r\n\r\n\r\n    }\r\n\r\n    createClothingDiv() {\r\n        let clothing = document.getElementById('clothing-region')\r\n        let toAdd = document.createDocumentFragment();\r\n        for (let j = 0; j < 15; j++) {\r\n\r\n            for (let i = 0; i < 15; i++) {\r\n                let newDiv = document.createElement('div');\r\n                newDiv.className = 'empty used';\r\n                //newDiv.className += 'used';\r\n                newDiv.id = this.counter;\r\n                toAdd.appendChild(newDiv);\r\n                this.counter++;\r\n            }\r\n\r\n        }\r\n        clothing.appendChild(toAdd)\r\n    }\r\n\r\n    createTierlantinDiv() {\r\n        let tierlantin = document.getElementById('tierlantin-region')\r\n\r\n        for (let j = 0; j < 15; j++) {\r\n            let toAdd = document.createDocumentFragment();\r\n            for (let i = 0; i < 15; i++) {\r\n                let newDiv = document.createElement('div');\r\n                newDiv.className = 'empty used';\r\n                newDiv.id = this.counter;\r\n                toAdd.appendChild(newDiv);\r\n                this.counter++;\r\n            }\r\n            tierlantin.appendChild(toAdd)\r\n        }\r\n\r\n    }\r\n\r\n    createDecorationDiv() {\r\n        let decoration = document.getElementById('decoration-region')\r\n\r\n        for (let j = 0; j < 15; j++) {\r\n            let toAdd = document.createDocumentFragment();\r\n            for (let i = 0; i < 15; i++) {\r\n                let newDiv = document.createElement('div');\r\n                newDiv.className = 'empty used';\r\n                newDiv.id = this.counter;\r\n                toAdd.appendChild(newDiv);\r\n                this.counter++;\r\n            }\r\n            decoration.appendChild(toAdd)\r\n        }\r\n    }\r\n\r\n    createBlockedDivs() {\r\n        fetch('../Model/Map.json')\r\n            .then(response => response.json())\r\n            .then(function (response) {\r\n                let usedsquares = document.querySelectorAll('.empty.used');\r\n                let blockedTiles = response.map.blockedTiles;\r\n                blockedTiles.forEach(function (item) {\r\n                    let olddiv = usedsquares[item.id];\r\n                    let blockeddiv = document.createElement('div');\r\n                    blockeddiv.className = 'block';\r\n                    olddiv.replaceWith(blockeddiv);\r\n                });\r\n            })\r\n    }\r\n\r\n    loadPlacedProducts() {\r\n        let used = JSON.parse(localStorage.getItem('used'));\r\n        let usedsquares = document.querySelectorAll('.empty.used');\r\n\r\n        used.products.forEach(product => {\r\n            let square = usedsquares[product.placed_at];\r\n            let div2 = document.createElement('div');\r\n            div2.className = 'fill';\r\n            div2.draggable = true;\r\n            div2.style.backgroundImage = \"url(\" + product.imgpath + \")\";\r\n            square.appendChild(div2);\r\n        })\r\n    };\r\n\r\n\r\naddListeners() {\r\n    let self = this;\r\n    let fills = Array.from(document.querySelectorAll('.fill'));\r\n    fills.forEach(function(item){\r\n        item.addEventListener('click', () =>{\r\n            console.log(item.parentElement);\r\n            let screen = document.getElementsByClassName('screen');\r\n            screen[0].id = item.parentElement.id;\r\n            screen[0].style.display =  'block';\r\n        })\r\n    });\r\n    let empties = Array.from(document.querySelectorAll('.empty'));\r\n    empties.forEach(function (item) {\r\n        item.addEventListener('dragover', (e) => {\r\n            e.preventDefault();\r\n        });\r\n        item.addEventListener('dragenter', (e) => {\r\n            e.preventDefault();\r\n        });\r\n        item.addEventListener('dragleave', () => {\r\n        });\r\n        item.addEventListener('drop', () => {\r\n            if (item.hasChildNodes()) {\r\n                return;\r\n            }\r\n            item.append(self.currentDraggable);\r\n        });\r\n        item.addEventListener('dragstart', () => {\r\n            item.className += ' hold';\r\n            self.currentDraggable = item.firstChild;\r\n            self.oldDraggable = item;\r\n        });\r\n        item.addEventListener('dragend', () => {\r\n            //REMOVE PREVIOUS\r\n            let list;\r\n            let type;\r\n            if(self.oldDraggable.classList.contains('used')){\r\n                list = JSON.parse(localStorage.getItem('used'));\r\n                type = 'used';\r\n            }else{\r\n                list = JSON.parse(localStorage.getItem('unused'));\r\n                type = 'unused';\r\n            }\r\n            //ITEM TO BE EDITED\r\n            let candidate;\r\n\r\n            for (let i = 0; i < list.products.length; i++) {\r\n                if(list.products[i].placed_at == self.oldDraggable.id){\r\n                    candidate = list.products[i];\r\n                    list.products.splice(i,1);\r\n                    //return;\r\n                }\r\n                \r\n            }\r\n\r\n            localStorage.setItem(type, JSON.stringify(list));\r\n            //ADD TO LIST\r\n            let second_list;\r\n            let second_type;\r\n            if(self.currentDraggable.parentElement.classList.contains('used')){\r\n                second_list = JSON.parse(localStorage.getItem('used'));\r\n                second_type = 'used';\r\n            }else{\r\n                second_list = JSON.parse(localStorage.getItem('unused'));\r\n                second_type = 'unused';\r\n            }\r\n            candidate.placed_at = self.currentDraggable.parentElement.id;\r\n            second_list.products[second_list.products.length] = candidate;\r\n            localStorage.setItem(second_type, JSON.stringify(second_list));\r\n            \r\n    })\r\n\r\n})\r\n\r\n\r\n\r\n\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n// function Product(name, description, Import, Export, min_stock,cur_stock){\r\n//     this.Name = name;\r\n//     this.Description = description;\r\n//     this.Import = Import;\r\n//     this.Export = Export;\r\n//     this.Export_btw= Export*1.21;\r\n//     this.Min_stock = min_stock;\r\n//     this.Cur_stock = cur_stock;\r\n//     this.img = new Image();\r\n//     this.img.src = 'https://source.unsplash.com/random/30x30';\r\n// }\r\n\r\n// function Clothing(name, description, Import, Export, min_stock,cur_stock, color, size){\r\n//     Product.call(this, name, description, Import, Export, min_stock,cur_stock);\r\n//     this.Color = color;\r\n//     this.Size = size;\r\n// }\r\n\r\n// function Tierlantin(name, description, Import, Export, min_stock,cur_stock, weight){\r\n//     Product.call(this, name, description, Import, Export, min_stock,cur_stock);\r\n//     this.Weight = weight;\r\n// }\r\n\r\n// function Decoration(name, description, Import, Export, min_stock,cur_stock, length, color, amountinpackage){\r\n//     Product.call(this, name, description, Import, Export, min_stock,cur_stock);\r\n//     this.Length = length;\r\n//     this.Color = color;\r\n//     this.AmountInPackage = amountinpackage;\r\n// }\n\n//# sourceURL=webpack:///./Controller/InventoryController.js?");

/***/ }),

/***/ "./Controller/ItemController.js":
/*!**************************************!*\
  !*** ./Controller/ItemController.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemController; });\n/*Regions*/\r\nconst clothingregion = document.getElementById(\"clothing-region\");\r\nconst tierlantinregion = document.getElementById(\"tierlantin-region\");\r\nconst decorationregion = document.getElementById(\"decoration-region\");\r\nconst createitemregion = document.getElementById(\"create-item-region\");\r\n\r\n/*Buttons*/\r\nconst createitembtn = document.getElementById(\"create-item-btn\");\r\nconst clothingformbtn = document.getElementById(\"btn-clothing-form\");\r\nconst tierlatinformbtn = document.getElementById(\"btn-tierlatin-form\");\r\nconst decorationformbtn = document.getElementById(\"btn-decoration-form\");\r\n\r\n/*Variables*/\r\nconst name = document.getElementById('item-name');\r\nconst description = document.getElementById('item-description');\r\nconst purchasePrice = document.getElementById('item-purchase-price');\r\nconst sellPriceExbtw = document.getElementById('item-sell-price-exbtw');\r\nconst color = document.getElementById('item-color');\r\nconst size = document.getElementById('item-size');\r\nconst weight = document.getElementById('item-weight');\r\nconst sizeCM = document.getElementById('item-size-CM');\r\nconst amountInPackage = document.getElementById('item-amount-in-package');\r\nconst btnClothingForm = document.getElementById('btn-clothing-form');\r\nconst btnTierlatinForm = document.getElementById('btn-tierlatin-form');\r\nconst btnDecorationForm = document.getElementById('btn-decoration-form');\r\nconst submitInformationBtn = document.getElementById('submit-information-btn');\r\n\r\n/*Error messages*/\r\nconst itemNameErrorMessage = document.getElementById('item-name-error-message');\r\nconst itemDescriptionErrorMessage = document.getElementById('item-description-error-message');\r\nconst itemPurchasePriseErrorMessage = document.getElementById('item-purchase-price-error-message');\r\nconst itemSellPriceErrorMessage = document.getElementById('item-sell-price-error-message');\r\nconst itemColorErrorMessage = document.getElementById('item-color-error-message');\r\nconst itemSizeErrorMessage = document.getElementById('item-size-error-message');\r\nconst itemWeightErrorMessage = document.getElementById('item-weight-error-message');\r\nconst itemSizeCMErrorMessage = document.getElementById('item-sizeCM-error-message');\r\nconst itemAmountErrorMessage = document.getElementById('item-amount-error-message');\r\n\r\n\r\nlet currentItemType = 'clothing';\r\nlet invalidUserInput = false;\r\nlet currentWizardStep = 1;\r\n\r\nclass ItemController {\r\n    constructor() {\r\n        createitembtn.addEventListener('click', function () {\r\n            submitInformationBtn.innerHTML = 'Naar stap 2';\r\n            clothingregion.style.display = \"none\";\r\n            tierlantinregion.style.display = \"none\";\r\n            decorationregion.style.display = \"none\";\r\n            createitemregion.style.display = \"block\";\r\n            showStepOneFormFields();\r\n            disableStepTwoFormfields();\r\n            clothingformbtn.click();\r\n        });\r\n\r\n        clothingformbtn.addEventListener('click', function () {\r\n            name.style.display = \"block\";\r\n            purchasePrice.style.display = \"block\";\r\n            sellPriceExbtw.style.display = \"block\";\r\n            color.style.display = \"block\";\r\n            size.style.display = \"block\";\r\n            weight.style.display = \"none\";\r\n            sizeCM.style.display = \"none\";\r\n            amountInPackage.style.display = \"none\";\r\n            disableStepTwoFormfields();\r\n            setStandardFormInputValues();\r\n        });\r\n\r\n        tierlatinformbtn.addEventListener('click', function () {\r\n            name.style.display = \"block\";\r\n            purchasePrice.style.display = \"block\";\r\n            sellPriceExbtw.style.display = \"block\";\r\n            color.style.display = \"none\";\r\n            sizeCM.style.display = \"none\";\r\n            weight.style.display = \"block\";\r\n            sizeCM.style.display = \"none\";\r\n            amountInPackage.style.display = \"none\";\r\n            disableStepTwoFormfields();\r\n            setStandardFormInputValues();\r\n        });\r\n\r\n        decorationformbtn.addEventListener('click', function () {\r\n            name.style.display = \"block\";\r\n            purchasePrice.style.display = \"block\";\r\n            sellPriceExbtw.style.display = \"block\";\r\n            color.style.display = \"block\";\r\n            size.style.display = \"none\";\r\n            weight.style.display = \"none\";\r\n            sizeCM.style.display = \"block\";\r\n            amountInPackage.style.display = \"block\";\r\n            disableStepTwoFormfields();\r\n            setStandardFormInputValues();\r\n        });\r\n        createitembtn.click();\r\n\r\n        HideAllErrorMessages();\r\n\r\n        btnClothingForm.addEventListener('click', function (e) {\r\n            currentItemType = 'clothing';\r\n            submitInformationBtn.innerHTML = 'Naar stap 2';\r\n            currentWizardStep = 1;\r\n        });\r\n\r\n        btnTierlatinForm.addEventListener('click', function () {\r\n            currentItemType = 'tierlatin';\r\n            submitInformationBtn.innerHTML = 'Naar stap 2';\r\n            currentWizardStep = 1;\r\n        });\r\n\r\n        btnDecorationForm.addEventListener('click', function () {\r\n            currentItemType = 'decoration';\r\n            submitInformationBtn.innerHTML = 'Naar stap 2';\r\n            currentWizardStep = 1;\r\n        });\r\n\r\n        submitInformationBtn.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            //stap 1\r\n            if (currentWizardStep == 1) {\r\n                ValidateUserForm();\r\n                if (invalidUserInput) {\r\n                    return;\r\n                }\r\n                HideAllErrorMessages();\r\n                showStepTwoFormfields();\r\n                disableStepOneFormFields();\r\n                submitInformationBtn.innerHTML = 'Aanmaken die handel!';\r\n                currentWizardStep++;\r\n            }\r\n            //stap 2\r\n            else if (currentWizardStep == 2) {\r\n                ValidateUserForm();\r\n                if (invalidUserInput) {\r\n                    return;\r\n                }\r\n                HideAllErrorMessages();\r\n                currentWizardStep = 1;\r\n                //HIER INSERTEN\r\n                createitembtn.click();\r\n            }\r\n        });\r\n\r\n        clothingformbtn.addEventListener('click', function () {\r\n            HideAllErrorMessages();\r\n        });\r\n\r\n        tierlatinformbtn.addEventListener('click', function () {\r\n            HideAllErrorMessages();\r\n        });\r\n\r\n        decorationformbtn.addEventListener('click', function () {\r\n            HideAllErrorMessages();\r\n        });\r\n    }\r\n\r\n}\r\n\r\nfunction ValidateUserForm() {\r\n    invalidUserInput = false;\r\n    if (name.value == '') {\r\n        itemNameErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (description.value == '') {\r\n        itemDescriptionErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (purchasePrice.value == '') {\r\n        itemPurchasePriseErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (sellPriceExbtw.value == '') {\r\n        itemSellPriceErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (color.value == '') {\r\n        itemColorErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (size.value == '') {\r\n        itemSizeErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (weight.value == '') {\r\n        itemWeightErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (sizeCM.value == '') {\r\n        itemSizeCMErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n    if (amountInPackage.value == '') {\r\n        itemAmountErrorMessage.style.display = \"block\";\r\n        invalidUserInput = true;\r\n    }\r\n\r\n}\r\n\r\nfunction HideAllErrorMessages() {\r\n    itemNameErrorMessage.style.display = \"none\";\r\n    itemDescriptionErrorMessage.style.display = \"none\";\r\n    itemPurchasePriseErrorMessage.style.display = \"none\";\r\n    itemSellPriceErrorMessage.style.display = \"none\";\r\n    itemColorErrorMessage.style.display = \"none\";\r\n    itemSizeErrorMessage.style.display = \"none\";\r\n    itemWeightErrorMessage.style.display = \"none\";\r\n    itemSizeCMErrorMessage.style.display = \"none\";\r\n    itemAmountErrorMessage.style.display = \"none\";\r\n    invalidUserInput = false;\r\n}\r\n\r\nfunction setStandardFormInputValues() {\r\n    name.value = 'Item naam';\r\n    description.value = 'Item beschrijving';\r\n    purchasePrice.value = 'Item inkoopprijs';\r\n    sellPriceExbtw.value = 'Item verkoopprijs excl. btw';\r\n    color.value = 'Item kleur';\r\n    size.value = 'Item maat';\r\n    weight.value = 'Item gewicht';\r\n    sizeCM.value = 'Item grootte in cm';\r\n    amountInPackage.value = 'Item hoeveelheid per pakketje';\r\n}\r\n\r\nfunction disableStepTwoFormfields() {\r\n    description.style.display = \"none\";\r\n}\r\n\r\nfunction showStepTwoFormfields() {\r\n    description.style.display = \"block\";\r\n}\r\n\r\nfunction disableStepOneFormFields() {\r\n    name.style.display = \"none\";\r\n    purchasePrice.style.display = \"none\";\r\n    sellPriceExbtw.style.display = \"none\";\r\n    color.style.display = \"none\";\r\n    size.style.display = \"none\";\r\n    weight.style.display = \"none\";\r\n    amountInPackage.style.display = \"none\";\r\n    sizeCM.style.display = \"none\";\r\n}\r\n\r\nfunction showStepOneFormFields() {\r\n    name.style.display = \"block\";\r\n    purchasePrice.style.display = \"block\";\r\n    sellPriceExbtw.style.display = \"block\";\r\n    color.style.display = \"block\";\r\n    size.style.display = \"block\";\r\n    weight.style.display = \"block\";\r\n    amountInPackage.style.display = \"block\";\r\n    sizeCM.style.display = \"block\";\r\n}\n\n//# sourceURL=webpack:///./Controller/ItemController.js?");

/***/ }),

/***/ "./Controller/MainController.js":
/*!**************************************!*\
  !*** ./Controller/MainController.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WeatherController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherController.js */ \"./Controller/WeatherController.js\");\n/* harmony import */ var _InventoryController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryController.js */ \"./Controller/InventoryController.js\");\n/* harmony import */ var _View_ViewController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../View/ViewController.js */ \"./View/ViewController.js\");\n/* harmony import */ var _ItemController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemController.js */ \"./Controller/ItemController.js\");\n\r\n\r\n\r\n\r\n\r\nlet inventoryController = new _InventoryController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nlet weatherController = new _WeatherController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nlet viewController = new _View_ViewController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nlet itemController = new _ItemController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n\n\n//# sourceURL=webpack:///./Controller/MainController.js?");

/***/ }),

/***/ "./Controller/WeatherController.js":
/*!*****************************************!*\
  !*** ./Controller/WeatherController.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WeatherController; });\nconst key = 'ca862c1ce25923db366fa1502282cb69';\r\nconst CityIDs = [\"2744513\", \"2759794\", \"2950159\", \"2643743\"];\r\nlet currentCityIndex = 0;\r\nconst informationbar = document.getElementById('information-bar');\r\n\r\nclass WeatherController {\r\n    constructor() {\r\n        this.fetchWeatherInformation(2744513);\r\n        document.getElementById('btn-weather-switch-next').addEventListener('click', () => {\r\n            if (currentCityIndex == CityIDs.length - 1) {\r\n                currentCityIndex = 0;\r\n            } else {\r\n                currentCityIndex++;\r\n            }\r\n           \r\n            this.fetchWeatherInformation(CityIDs[currentCityIndex]);\r\n        });\r\n\r\n        document.getElementById('btn-weather-switch-previous').addEventListener('click', () => {\r\n            if (currentCityIndex == 0) {\r\n                currentCityIndex = CityIDs.length - 1;\r\n            } else {\r\n                currentCityIndex--;\r\n            }\r\n            this.fetchWeatherInformation(CityIDs[currentCityIndex]);\r\n        });\r\n    }\r\n\r\n    fetchWeatherInformation(cityID) {\r\n        fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)\r\n            .then((resp) => {\r\n                return resp.json()\r\n            })\r\n            .then((data) => {\r\n                this.drawWeather(data);\r\n            })\r\n            .catch(error => {\r\n                informationbar.innerHTML('Het ziet er naar uit dat de API op vakantie is. Probeer het later nog een keer!');\r\n            });\r\n    }\r\n\r\n    drawWeather(weatherData) {\r\n        let actualTemp = Math.round(parseFloat(weatherData.main.temp) - 273.15);\r\n        let feelsLikeTemp = Math.round(parseFloat(weatherData.main.feels_like) - 273.15);\r\n        let humidity = weatherData.main.humidity;\r\n        let description = weatherData.weather[0].description;\r\n\r\n        document.getElementById('location').innerHTML = weatherData.name;\r\n        document.getElementById('temp').innerHTML = 'Temp: ' + actualTemp + '&deg;';\r\n        document.getElementById('feels_like').innerHTML = 'Gevoels temp: ' + feelsLikeTemp + '&deg;';\r\n        document.getElementById('weatherDescription').innerHTML = 'Beschrijving: ' + description;\r\n        document.getElementById('humidity').innerHTML = 'Vochtigheidsgraad: ' + humidity + '%';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/WeatherController.js?");

/***/ }),

/***/ "./View/ViewController.js":
/*!********************************!*\
  !*** ./View/ViewController.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ViewController; });\n/*Buttons*/\r\nconst clothingbtn = document.getElementById(\"clothing-btn\");\r\nconst tierlantinbtn = document.getElementById(\"tierlantin-btn\");\r\nconst decorationbtn = document.getElementById(\"decoration-btn\");\r\n\r\n/*Regions*/\r\nconst clothingregion = document.getElementById(\"clothing-region\");\r\nconst tierlantinregion = document.getElementById(\"tierlantin-region\");\r\nconst decorationregion = document.getElementById(\"decoration-region\");\r\nconst createitemregion = document.getElementById(\"create-item-region\");\r\n\r\n/*Event Listeners*/\r\nclass ViewController {\r\n    constructor() {\r\n        clothingbtn.addEventListener('click', function () {\r\n            clothingregion.style.display = \"block\";\r\n            tierlantinregion.style.display = \"none\";\r\n            decorationregion.style.display = \"none\";\r\n            createitemregion.style.display = \"none\";\r\n        });\r\n\r\n        tierlantinbtn.addEventListener('click', function () {\r\n            clothingregion.style.display = \"none\";\r\n            tierlantinregion.style.display = \"block\";\r\n            decorationregion.style.display = \"none\";\r\n            createitemregion.style.display = \"none\";\r\n        });\r\n\r\n        decorationbtn.addEventListener('click', function () {\r\n            clothingregion.style.display = \"none\";\r\n            tierlantinregion.style.display = \"none\";\r\n            decorationregion.style.display = \"block\";\r\n            createitemregion.style.display = \"none\";\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./View/ViewController.js?");

/***/ })

/******/ });