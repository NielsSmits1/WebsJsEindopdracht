/*Buttons*/
let clothingbtn = document.getElementById("clothing-btn");
let tierlantinbtn = document.getElementById("tierlantin-btn");
let decorationbtn = document.getElementById("decoration-btn");
let createitembtn = document.getElementById("create-item-btn");

/*Regions*/
let clothingregion = document.getElementById("clothing-region");
let tierlantinregion = document.getElementById("tierlantin-region");
let decorationregion = document.getElementById("decoration-region");
let createitemregion = document.getElementById("create-item-region");

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

/*Actions*/
clothingbtn.click();
