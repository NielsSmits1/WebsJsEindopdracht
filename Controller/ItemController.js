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

const clothingformbtn = document.getElementById("btn-clothing-form");
const tierlatinformbtn = document.getElementById("btn-tierlatin-form");
const decorationformbtn = document.getElementById("btn-decoration-form");

let currentItemType = 'clothing';
let invalidUserInput = false;


function createItem() {
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
    if (invalidUserInput) {
        return;
    }
    // TODO daadwerkelijk het item toevoegen
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

clothingformbtn.addEventListener('click', function () {
    HideAllErrorMessages();
});

tierlatinformbtn.addEventListener('click', function () {
    HideAllErrorMessages();
});

decorationformbtn.addEventListener('click', function () {
    HideAllErrorMessages();
});

export function initItemController() {
    HideAllErrorMessages();
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
        HideAllErrorMessages();
        createItem();
    });
}