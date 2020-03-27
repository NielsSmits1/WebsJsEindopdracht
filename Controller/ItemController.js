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
    createItemStepOne();
}

function createItemStepOne() {
    //step announcer
    let step1announcement = document.createElement('h1');
    step1announcement.classList.add('step1');
    step1announcement.innerHTML = 'Stap 1: wat wilt u maken?';
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

    //step announcer
    let step2announcement = document.createElement('h1');
    step2announcement.classList.add('step2');
    step2announcement.innerHTML = 'Stap 2: algemene informatie.';
    createItemRegion.append(step2announcement);

    //name form field
    let nameField = document.createElement('input');
    nameField.classList.add('step2');
    nameField.setAttribute('id', 'item-name-field');
    

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








