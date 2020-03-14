/*Buttons*/
const clothingbtn = document.getElementById("clothing-btn");
const tierlantinbtn = document.getElementById("tierlantin-btn");
const decorationbtn = document.getElementById("decoration-btn");

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
    }
}