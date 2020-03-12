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
const submitInformationBtn = document.getElementById('submit-information-btn');

let currentItemType = 'clothing';
let invalidUserInput = false;

function createItem() {
    if (name.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de naam invullen!"));
        informationbar.append(para);
        invalidUserInput = true;
    }
    if (description.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de beschrijving invullen!."));
        informationbar.append(para);
        invalidUserInput = true;
    }
    if (purchasePrice.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de inkoopprijs invullen!."));
        informationbar.append(para);
        invalidUserInput = true;
    }
    if (sellPriceExbtw.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de verkoopprijs invullen!."));
        informationbar.append(para);
        invalidUserInput = true;
    }
    if (color.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de kleur invullen!."));
        informationbar.append(para);
        invalidUserInput = true;
    }
    if (size.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de grootte invullen!."));
        informationbar.append(para);
        invalidUserInput = true;
    }
    if (weight.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even het gewicht invullen!."));
        informationbar.append(para);
        invalidUserInput = true;
    }
    if (sizeCM.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de grootte in cm invullen!."));
        informationbar.append(para);
        invalidUserInput = true;
    }
    if (amountInPackage.value == '') {
        let para = document.createElement("div");
        para.appendChild(document.createTextNode("Graag nog even de hoeveelheid per pakketje invullen!."));
        informationbar.append(para);
        invalidUserInput = true;
    }
    if (invalidUserInput) {
        return;
    }
    // TODO daadwerkelijk het item toevoegen
}

export function initItemController() {
    btnClothingForm.addEventListener('click', function (e) {
        currentItemType = 'clothing';
    });

    btnTierlatinForm.addEventListener('click', function () {
        currentItemType = 'tierlatin';
    });

    btnDecorationForm.addEventListener('click', function () {
        currentItemType = 'decoration';
    });

    submitInformationBtn.addEventListener('click', function (e) {
        e.preventDefault();
        createItem();
    });
}