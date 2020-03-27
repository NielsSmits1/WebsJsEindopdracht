import LocalStorageModel from "../Model/StorageConnector.js"

const createItemRegion = document.getElementById("create-item-region");

let ItemTypes = ["Clothing", "Tierlatin", "Decoration"];
let currentItemType;

export default class ItemController {
    constructor(inventoryController) {
        this.inventoryController = inventoryController;
        this.storage = new LocalStorageModel();

        document.getElementById("create-item-btn").addEventListener('click', initCreationForm)

    }
}

function initCreationForm() {
    //hide other regions
    document.getElementById("clothing-region").classList.add('hide');
    document.getElementById("decoration-region").classList.add('hide');
    document.getElementById("tierlantin-region").classList.add('hide');
    document.getElementById("crud-region").classList.add('hide');
    removeElementsByClass('step1');
    removeElementsByClass('step2');
    removeElementsByClass('step3');
    createItemStepOne();
}

function createItemStepOne() {
    //step announcer
    let step1announcement = document.createElement('h1');
    step1announcement.classList.add('step1', 'smallMargin');
    step1announcement.innerHTML = 'Step 1: what would you like to make?';
    createItemRegion.append(step1announcement);

    //Clothing handler
    let btnclothingform = document.createElement('button');
    btnclothingform.classList.add('step1');
    btnclothingform.innerHTML = 'Clothing';
    btnclothingform.classList.add('btn', 'btn-info', 'smallMargin');
    createItemRegion.append(btnclothingform);

    btnclothingform.addEventListener('click', () => {
        currentItemType = ItemTypes[0];
        createItemStepTwo();
    });

    //Tierlatin handler
    let btntierlatinform = document.createElement('button');
    btntierlatinform.classList.add('step1');
    btntierlatinform.innerHTML = 'Tierlatin';
    btntierlatinform.classList.add('btn', 'btn-info', 'smallMargin');
    createItemRegion.append(btntierlatinform);

    btntierlatinform.addEventListener('click', () => {
        currentItemType = ItemTypes[1];
        createItemStepTwo();
    });

    //decoration handler
    let btndecorationform = document.createElement('button');
    btndecorationform.classList.add('step1');
    btndecorationform.innerHTML = 'Decoration';
    btndecorationform.classList.add('btn', 'btn-info', 'smallMargin');
    createItemRegion.append(btndecorationform);

    btndecorationform.addEventListener('click', () => {
        currentItemType = ItemTypes[2];
        createItemStepTwo()
    });

}

function createItemStepTwo() {
    removeElementsByClass('step1');

    let verticalAlignment = document.createElement('div');
    verticalAlignment.classList.add('row', 'flex-column', 'smallMargin', 'step2');
    createItemRegion.append(verticalAlignment);

    //step announcer
    let step2announcement = document.createElement('h1');
    step2announcement.classList.add('step2', 'smallVerticalMargin');
    step2announcement.innerHTML = 'Stap 2: general information.';
    verticalAlignment.append(step2announcement);

    //name
    let nameLabel = document.createElement('label');
    nameLabel.innerHTML = 'Name';
    nameLabel.classList.add('step2', 'smallVerticalMargin');
    nameLabel.setAttribute('id', 'item-name-label');
    verticalAlignment.append(nameLabel);

    let nameField = document.createElement('input');
    nameField.classList.add('step2', 'form-control');
    nameField.setAttribute('id', 'item-name-field');
    verticalAlignment.append(nameField);

    //description
    let descriptionLabel = document.createElement('label');
    descriptionLabel.innerHTML = 'Description';
    descriptionLabel.classList.add('step2', 'smallVerticalMargin');
    descriptionLabel.setAttribute('id', 'item-description-label');
    verticalAlignment.append(descriptionLabel);

    let descriptionField = document.createElement('input');
    descriptionField.classList.add('step2', 'form-control');
    descriptionField.setAttribute('id', 'item-description-field');
    verticalAlignment.append(descriptionField);

    //purchase price
    let purchasePriceLabel = document.createElement('label');
    purchasePriceLabel.innerHTML = 'Purchase price';
    purchasePriceLabel.classList.add('step2', 'smallVerticalMargin');
    purchasePriceLabel.setAttribute('id', 'item-purchasePrice-label');
    verticalAlignment.append(purchasePriceLabel);

    let purchasePriceField = document.createElement('input');
    purchasePriceField.classList.add('step2', 'form-control');
    purchasePriceField.setAttribute('id', 'item-purchasePrice-field');
    verticalAlignment.append(purchasePriceField);

    //sell price excl. btw
    let sellPriceLabel = document.createElement('label');
    sellPriceLabel.innerHTML = 'Sell price excl. btw';
    sellPriceLabel.classList.add('step2', 'smallVerticalMargin');
    sellPriceLabel.setAttribute('id', 'item-sellPrice-label');
    verticalAlignment.append(sellPriceLabel);

    let sellPriceField = document.createElement('input');
    sellPriceField.classList.add('step2', 'form-control');
    sellPriceField.setAttribute('id', 'item-sellPrice-field');
    verticalAlignment.append(sellPriceField);

    //current stock
    let currStockLabel = document.createElement('label');
    currStockLabel.innerHTML = 'Current stock';
    currStockLabel.classList.add('step2', 'smallVerticalMargin');
    currStockLabel.setAttribute('id', 'item-curStock-label');
    verticalAlignment.append(currStockLabel);

    let currStockField = document.createElement('input');
    currStockField.classList.add('step2', 'form-control');
    currStockField.setAttribute('id', 'item-curStock-field');
    verticalAlignment.append(currStockField);

    //minimal stock
    let minStockLabel = document.createElement('label');
    minStockLabel.innerHTML = 'Minimal stock';
    minStockLabel.classList.add('step2', 'smallVerticalMargin');
    minStockLabel.setAttribute('id', 'item-minStock-label');
    verticalAlignment.append(minStockLabel);

    let minStockField = document.createElement('input');
    minStockField.classList.add('step2', 'form-control');
    minStockField.setAttribute('id', 'item-minStock-field');
    verticalAlignment.append(minStockField);

    //To step 3 handler
    let toStepThreeBtn = document.createElement('button');
    toStepThreeBtn.classList.add('step2');
    toStepThreeBtn.innerHTML = 'To step 3';
    toStepThreeBtn.classList.add('btn', 'btn-info', 'smallMargin');
    verticalAlignment.append(toStepThreeBtn);

    toStepThreeBtn.addEventListener('click', () => {
//validate user input
        createItemStepThree();
    });

    function createItemStepThree(){
        removeElementsByClass('step2');

        let verticalAlignment = document.createElement('div');
        verticalAlignment.classList.add('row', 'flex-column', 'smallMargin', 'step3');
        createItemRegion.append(verticalAlignment);

        //step announcer
        let step3announcement = document.createElement('h1');
        step3announcement.classList.add('step3', 'smallVerticalMargin');
        step3announcement.innerHTML = 'Stap 3: item specific information.';
        verticalAlignment.append(step3announcement);

        switch (currentItemType) {
            case 'Clothing':
                alert('clothing');
                //add clothing specific fields
                break;
            case 'Tierlatin':
                alert('tierlatin');
                //add tierlatin specific fields
                break;
            case 'Decoration':
                alert('decoration');
                //add decoration specific fields
                break;
        }
    }

}

//helper function
function removeElementsByClass(className) {
    let elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}


//
// submitInformationBtn.addEventListener('click', function (e) {
//     e.preventDefault();
// });








