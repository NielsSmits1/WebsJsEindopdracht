/*Buttons*/
const clothingbtn = document.getElementById("clothing-btn");
const tierlantinbtn = document.getElementById("tierlantin-btn");
const decorationbtn = document.getElementById("decoration-btn");
const createitembtn = document.getElementById("create-item-btn");
const clothingformbtn = document.getElementById("btn-clothing-form");
const tierlatinformbtn = document.getElementById("btn-tierlatin-form");
const decorationformbtn = document.getElementById("btn-decoration-form");

/*Form Field*/


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

});

tierlatinformbtn.addEventListener('click', function () {

});

decorationformbtn.addEventListener('click', function () {

});

/*Actions*/
// clothingbtn.click();
createitembtn.click();