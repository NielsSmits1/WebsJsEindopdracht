let clothingbtn = document.getElementById("clothing-btn");
let tierlantinbtn = document.getElementById("tierlantin-btn");
let decorationbtn = document.getElementById("decoration-btn");
let clothingregion = document.getElementById("clothing-region");
let tierlantinregion = document.getElementById("tierlantin-region");
let decorationregion = document.getElementById("decoration-region");



clothingbtn.addEventListener('click', function(){
    clothingregion.style.display = "block";
    tierlantinregion.style.display = "none";
    decorationregion.style.display = "none";
    });

tierlantinbtn.addEventListener('click',function(){
    clothingregion.style.display = "none";
    tierlantinregion.style.display = "block";
    decorationregion.style.display = "none";
    });

decorationbtn.addEventListener('click', function(){
    clothingregion.style.display = "none";
    tierlantinregion.style.display = "none";
    decorationregion.style.display = "block";
     });

clothingbtn.click();
