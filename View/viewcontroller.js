/*Buttons*/
const clothingbtn = document.getElementById("clothing-btn");
const tierlantinbtn = document.getElementById("tierlantin-btn");
const decorationbtn = document.getElementById("decoration-btn");
const createitembtn = document.getElementById("create-item-btn");
const clothingformbtn = document.getElementById("btn-clothing-form");
const tierlatinformbtn = document.getElementById("btn-tierlatin-form");
const decorationformbtn = document.getElementById("btn-decoration-form");

/*Form Field*/
const itemcolorfield = document.getElementById("item-color");
const itemsizefield = document.getElementById("item-size");
const itemweightfield = document.getElementById("item-weight");
const itemSizeinCMfield = document.getElementById("item-size-CM");
const itemAmountInPackagefield = document.getElementById("item-amount-in-package");
const itemName = document.getElementById('item-name');
const itemDescription = document.getElementById('item-description');
const itemPurchasePrice = document.getElementById('item-purchase-price');
const itemSellPriceExbtw = document.getElementById('item-sell-price-exbtw');

/*Regions*/
const clothingregion = document.getElementById("clothing-region");
const tierlantinregion = document.getElementById("tierlantin-region");
const decorationregion = document.getElementById("decoration-region");
const createitemregion = document.getElementById("create-item-region");

/*Event Listeners*/
export default class ViewController {
    constructor() {
        clothingbtn.addEventListener('click', function () {
            clothingregion.style.display = "block";
            tierlantinregion.style.display = "none";
            decorationregion.style.display = "none";
            createitemregion.style.display = "none";
        });

        tierlantinbtn.addEventListener('click', function () {
            clothingregion.style.display = "none";
            tierlantinregion.style.display = "block";
            decorationregion.style.display = "none";
            createitemregion.style.display = "none";
        });

        decorationbtn.addEventListener('click', function () {
            clothingregion.style.display = "none";
            tierlantinregion.style.display = "none";
            decorationregion.style.display = "block";
            createitemregion.style.display = "none";
        });

        function setStandardFormInputValues() {
            itemName.value = 'Item naam';
            itemDescription.value = 'Item beschrijving';
            itemPurchasePrice.value = 'Item inkoopprijs';
            itemSellPriceExbtw.value = 'Item verkoopprijs excl. btw';
            itemcolorfield.value = 'Item kleur';
            itemsizefield.value = 'Item maat';
            itemweightfield.value = 'Item gewicht';
            itemSizeinCMfield.value = 'Item grootte in cm';
            itemAmountInPackagefield.value = 'Item hoeveelheid per pakketje';
        }

        createitembtn.addEventListener('click', function () {
            clothingregion.style.display = "none";
            tierlantinregion.style.display = "none";
            decorationregion.style.display = "none";
            createitemregion.style.display = "block";
            clothingformbtn.click();
        });

        clothingformbtn.addEventListener('click', function () {
            itemcolorfield.style.display = "block";
            itemsizefield.style.display = "block";
            itemweightfield.style.display = "none";
            itemSizeinCMfield.style.display = "none";
            itemAmountInPackagefield.style.display = "none";
            setStandardFormInputValues();
        });

        tierlatinformbtn.addEventListener('click', function () {
            itemcolorfield.style.display = "none";
            itemsizefield.style.display = "none";
            itemweightfield.style.display = "block";
            itemSizeinCMfield.style.display = "none";
            itemAmountInPackagefield.style.display = "none";
            setStandardFormInputValues();
        });

        decorationformbtn.addEventListener('click', function () {
            itemcolorfield.style.display = "block";
            itemsizefield.style.display = "none";
            itemweightfield.style.display = "none";
            itemSizeinCMfield.style.display = "block";
            itemAmountInPackagefield.style.display = "block";
            setStandardFormInputValues();
        });
        createitembtn.click();
    }
}