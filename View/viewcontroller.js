/*Buttons*/
const clothingbtn = document.getElementById("clothing-btn");
const tierlantinbtn = document.getElementById("tierlantin-btn");
const decorationbtn = document.getElementById("decoration-btn");

/*Regions*/
const clothingregion = document.getElementById("clothing-region");
const tierlantinregion = document.getElementById("tierlantin-region");
const decorationregion = document.getElementById("decoration-region");
const createitemregion = document.getElementById("create-item-region");

/*Dropdowns*/
const clothingdd = document.getElementById('clothing-dropdown');
const tierlantindd = document.getElementById('tierlantin-dropdown');
const decorationdd = document.getElementById('decoration-dropdown');
/*Event Listeners*/
export default class ViewController {
    constructor() {
        clothingdd.parentElement.style.display = "none";
        tierlantindd.parentElement.style.display = "none";
        decorationdd.parentElement.style.display = "none";
        clothingbtn.addEventListener('click', function () {
            clothingregion.style.display = "block";
            clothingdd.parentElement.style.display = "block";
            tierlantindd.parentElement.style.display = "none";
            decorationdd.parentElement.style.display = "none";
            tierlantinregion.style.display = "none";
            decorationregion.style.display = "none";
            createitemregion.style.display = "none";
        });

        tierlantinbtn.addEventListener('click', function () {
            clothingregion.style.display = "none";
            tierlantinregion.style.display = "block";
            tierlantindd.parentElement.style.display = "block";
            clothingdd.parentElement.style.display = "none";
            decorationdd.parentElement.style.display = "none";
            decorationregion.style.display = "none";
            createitemregion.style.display = "none";
        });

        decorationbtn.addEventListener('click', function () {
            clothingregion.style.display = "none";
            tierlantinregion.style.display = "none";
            decorationregion.style.display = "block";
            decorationdd.parentElement.style.display = "block";
            clothingdd.parentElement.style.display = "none";
            tierlantindd.parentElement.style.display = "none";
            createitemregion.style.display = "none";
        });
    }
}