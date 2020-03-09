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


/*Regions*/
const clothingregion = document.getElementById("clothing-region");
const tierlantinregion = document.getElementById("tierlantin-region");
const decorationregion = document.getElementById("decoration-region");
const createitemregion = document.getElementById("create-item-region");

/*Event Listeners*/
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

createitembtn.addEventListener('click', function () {
    clothingregion.style.display = "none";
    tierlantinregion.style.display = "none";
    decorationregion.style.display = "none";
    createitemregion.style.display = "block";
});

clothingformbtn.addEventListener('click', function () {
    itemcolorfield.style.display = "block";
    itemsizefield.style.display = "block";
    itemweightfield.style.display = "none";
    itemSizeinCMfield.style.display = "none";
    itemAmountInPackagefield.style.display = "none";
});

tierlatinformbtn.addEventListener('click', function () {
    itemcolorfield.style.display = "none";
    itemsizefield.style.display = "none";
    itemweightfield.style.display = "block";
    itemSizeinCMfield.style.display = "none";
    itemAmountInPackagefield.style.display = "none";
});

decorationformbtn.addEventListener('click', function () {
    itemcolorfield.style.display = "block";
    itemsizefield.style.display = "none";
    itemweightfield.style.display = "none";
    itemSizeinCMfield.style.display = "block";
    itemAmountInPackagefield.style.display = "block";
});

/*Actions*/
// clothingbtn.click();
createitembtn.click();
//clothingformbtn.click();