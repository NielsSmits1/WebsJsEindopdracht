/*Regions*/
const clothingregion = document.getElementById("clothing-region");
const tierlantinregion = document.getElementById("tierlantin-region");
const decorationregion = document.getElementById("decoration-region");
const createitemregion = document.getElementById("create-item-region");

/*Buttons*/
const createitembtn = document.getElementById("create-item-btn");
const clothingformbtn = document.getElementById("btn-clothing-form");
const tierlatinformbtn = document.getElementById("btn-tierlatin-form");
const decorationformbtn = document.getElementById("btn-decoration-form");

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

/*Error messages*/
const itemNameErrorMessage = document.getElementById('item-name-error-message');
const itemDescriptionErrorMessage = document.getElementById('item-description-error-message');
const itemPurchasePriseErrorMessage = document.getElementById('item-purchase-price-error-message');
const itemSellPriceErrorMessage = document.getElementById('item-sell-price-error-message');
const itemColorErrorMessage = document.getElementById('item-color-error-message');
const itemSizeErrorMessage = document.getElementById('item-size-error-message');
const itemWeightErrorMessage = document.getElementById('item-weight-error-message');
const itemSizeCMErrorMessage = document.getElementById('item-sizeCM-error-message');
const itemAmountErrorMessage = document.getElementById('item-amount-error-message');


let currentItemType = 'clothing';
let invalidUserInput = false;
let currentWizardStep = 1;

export default class ItemController {
    constructor() {
        createitembtn.addEventListener('click', function () {
            submitInformationBtn.innerHTML = 'Naar stap 2';
            clothingregion.style.display = "none";
            tierlantinregion.style.display = "none";
            decorationregion.style.display = "none";
            createitemregion.style.display = "block";
            showStepOneFormFields();
            disableStepTwoFormfields();
            clothingformbtn.click();
        });

        clothingformbtn.addEventListener('click', function () {
            name.style.display = "block";
            purchasePrice.style.display = "block";
            sellPriceExbtw.style.display = "block";
            color.style.display = "block";
            size.style.display = "block";
            weight.style.display = "none";
            sizeCM.style.display = "none";
            amountInPackage.style.display = "none";
            disableStepTwoFormfields();
            setStandardFormInputValues();
        });

        tierlatinformbtn.addEventListener('click', function () {
            name.style.display = "block";
            purchasePrice.style.display = "block";
            sellPriceExbtw.style.display = "block";
            color.style.display = "none";
            sizeCM.style.display = "none";
            weight.style.display = "block";
            sizeCM.style.display = "none";
            amountInPackage.style.display = "none";
            disableStepTwoFormfields();
            setStandardFormInputValues();
        });

        decorationformbtn.addEventListener('click', function () {
            name.style.display = "block";
            purchasePrice.style.display = "block";
            sellPriceExbtw.style.display = "block";
            color.style.display = "block";
            size.style.display = "none";
            weight.style.display = "none";
            sizeCM.style.display = "block";
            amountInPackage.style.display = "block";
            disableStepTwoFormfields();
            setStandardFormInputValues();
        });
        createitembtn.click();

        HideAllErrorMessages();

        btnClothingForm.addEventListener('click', function (e) {
            currentItemType = 'clothing';
            submitInformationBtn.innerHTML = 'Naar stap 2';
            currentWizardStep = 1;
        });

        btnTierlatinForm.addEventListener('click', function () {
            currentItemType = 'tierlatin';
            submitInformationBtn.innerHTML = 'Naar stap 2';
            currentWizardStep = 1;
        });

        btnDecorationForm.addEventListener('click', function () {
            currentItemType = 'decoration';
            submitInformationBtn.innerHTML = 'Naar stap 2';
            currentWizardStep = 1;
        });

        submitInformationBtn.addEventListener('click', function (e) {
            e.preventDefault();
            //stap 1
            if (currentWizardStep == 1) {
                ValidateUserForm();
                if (invalidUserInput) {
                    return;
                }
                HideAllErrorMessages();
                showStepTwoFormfields();
                disableStepOneFormFields();
                submitInformationBtn.innerHTML = 'Aanmaken die handel!';
                currentWizardStep++;
            }
            //stap 2
            else if (currentWizardStep == 2) {
                ValidateUserForm();
                if (invalidUserInput) {
                    return;
                }
                HideAllErrorMessages();
                currentWizardStep = 1;
                createitembtn.click();
            }
        });

        clothingformbtn.addEventListener('click', function () {
            HideAllErrorMessages();
        });

        tierlatinformbtn.addEventListener('click', function () {
            HideAllErrorMessages();
        });

        decorationformbtn.addEventListener('click', function () {
            HideAllErrorMessages();
        });
    }

}

function ValidateUserForm() {
    invalidUserInput = false;
    if (name.value == '') {
        itemNameErrorMessage.style.display = "block";
        invalidUserInput = true;
    }
    if (description.value == '') {
        itemDescriptionErrorMessage.style.display = "block";
        invalidUserInput = true;
    }
    if (purchasePrice.value == '') {
        itemPurchasePriseErrorMessage.style.display = "block";
        invalidUserInput = true;
    }
    if (sellPriceExbtw.value == '') {
        itemSellPriceErrorMessage.style.display = "block";
        invalidUserInput = true;
    }
    if (color.value == '') {
        itemColorErrorMessage.style.display = "block";
        invalidUserInput = true;
    }
    if (size.value == '') {
        itemSizeErrorMessage.style.display = "block";
        invalidUserInput = true;
    }
    if (weight.value == '') {
        itemWeightErrorMessage.style.display = "block";
        invalidUserInput = true;
    }
    if (sizeCM.value == '') {
        itemSizeCMErrorMessage.style.display = "block";
        invalidUserInput = true;
    }
    if (amountInPackage.value == '') {
        itemAmountErrorMessage.style.display = "block";
        invalidUserInput = true;
    }

}

function HideAllErrorMessages() {
    itemNameErrorMessage.style.display = "none";
    itemDescriptionErrorMessage.style.display = "none";
    itemPurchasePriseErrorMessage.style.display = "none";
    itemSellPriceErrorMessage.style.display = "none";
    itemColorErrorMessage.style.display = "none";
    itemSizeErrorMessage.style.display = "none";
    itemWeightErrorMessage.style.display = "none";
    itemSizeCMErrorMessage.style.display = "none";
    itemAmountErrorMessage.style.display = "none";
    invalidUserInput = false;
}

function setStandardFormInputValues() {
    name.value = 'Item naam';
    description.value = 'Item beschrijving';
    purchasePrice.value = 'Item inkoopprijs';
    sellPriceExbtw.value = 'Item verkoopprijs excl. btw';
    color.value = 'Item kleur';
    size.value = 'Item maat';
    weight.value = 'Item gewicht';
    sizeCM.value = 'Item grootte in cm';
    amountInPackage.value = 'Item hoeveelheid per pakketje';
}

function disableStepTwoFormfields() {
    description.style.display = "none";
}

function showStepTwoFormfields() {
    description.style.display = "block";
}

function disableStepOneFormFields() {
    name.style.display = "none";
    purchasePrice.style.display = "none";
    sellPriceExbtw.style.display = "none";
    color.style.display = "none";
    size.style.display = "none";
    weight.style.display = "none";
    amountInPackage.style.display = "none";
    sizeCM.style.display = "none";
}

function showStepOneFormFields() {
    name.style.display = "block";
    purchasePrice.style.display = "block";
    sellPriceExbtw.style.display = "block";
    color.style.display = "block";
    size.style.display = "block";
    weight.style.display = "block";
    amountInPackage.style.display = "block";
    sizeCM.style.display = "block";
}