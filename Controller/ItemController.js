/*Variables*/
const name = document.getElementById('item-name');
const description = document.getElementById('item-description');
const purchasePrice = document.getElementById('item-purchase-price');
const sellPriceExbtw = document.getElementById('item-sell-price-exbtw');
const color = document.getElementById('item-color');
const size = document.getElementById('item-size');
const weight = document.getElementById('item-weight');
const sizeCM = document.getElementById('item-size-CM');
const amountInPackage = document.getElementById('item-amount-in-package');
const btnClothingForm = document.getElementById('btn-clothing-form');
const btnTierlatinForm = document.getElementById('btn-tierlatin-form');
const btnDecorationForm = document.getElementById('btn-decoration-form');
const informationbar = document.getElementById('information-bar');

let currentItemType = 'clothing';
let invalidFormFields = false;


function createItem() {


    if (name.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de naam invullen!"));
        informationbar.append(para);
        invalidFormFields = true;
    }
    if (description.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de beschrijving invullen!."));
        informationbar.append(para);
        invalidFormFields = true;
    }
    if (purchasePrice.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de inkoopprijs invullen!."));
        informationbar.append(para);
        invalidFormFields = true;
    }
    if (sellPriceExbtw.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de verkoopprijs invullen!."));
        informationbar.append(para);
        invalidFormFields = true;
    }
    if (color.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de kleur invullen!."));
        informationbar.append(para);
        invalidFormFields = true;
    }
    if (size.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de grootte invullen!."));
        informationbar.append(para);
        invalidFormFields = true;
    }
    if (weight.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even het gewicht invullen!."));
        informationbar.append(para);
        invalidFormFields = true;
    }
    if (sizeCM.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de grootte in cm invullen!."));
        informationbar.append(para);
        invalidFormFields = true;
    }
    if (amountInPackage.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de hoeveelheid per pakketje invullen!."));
        informationbar.append(para);
        invalidFormFields = true;
    }

    if (invalidFormFields) {
        return;
    }


}

btnClothingForm.addEventListener('click', function () {
    currentItemType = 'clothing';
});

btnTierlatinForm.addEventListener('click', function () {
    currentItemType = 'tierlatin';
});

btnDecorationForm.addEventListener('click', function () {
    currentItemType = 'decoration';
});