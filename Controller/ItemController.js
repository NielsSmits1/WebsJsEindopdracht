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

let currentItemType = 'clothing';


function createItem() {

    if(name.value == ''){
        alert('Please enter a valid name')
    }
    if(description.value == ''){
        alert('Please enter a valid description')
    }
    if(purchasePrice.value == ''){
        alert('Please enter a valid price')
    }
    if(sellPriceExbtw.value == ''){
        alert('Please enter a valid price')
    }
    if(color.value == ''){
        alert('Please enter a valid color')
    }
    if(size.value == ''){
        alert('Please enter a valid size')
    }
    if(weight.value == ''){
        alert('Please enter a valid weight')
    }
    if(sizeCM.value == ''){
        alert('Please enter a valid size in cm')

    }
    if(amountInPackage.value == ''){
        alert('Please enter a valid amount in package')
    }

/*    console.log(description.value);
    console.log(purchasePrice.value);
    console.log(sellPriceExbtw.value);
    console.log(color.value);
    console.log(size.value);
    console.log(weight.value);
    console.log(sizeCM.value);
    console.log(amountInPackage.value);
    console.log(currentItemType);*/
    console.log('------');

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