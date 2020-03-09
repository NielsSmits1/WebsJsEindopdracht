let fill = Array.from(document.querySelectorAll('.fill'));
const body = document.querySelector('body');
const startdiv = document.querySelector('.startdivs');
let empties = Array.from(document.querySelectorAll('.empty'));
let currentDraggable;


// On load make divs

export function init() {
    createStartDivs();
    createTargetDivs();
    addListeners();
}

function createStartDivs() {
    let toAdd = document.createDocumentFragment();
    let dropdown = document.getElementById("clothing-dropdown");
    for (let i = 0; i < 5; i++) {
        let newDiv = document.createElement('div');
        let newDiv2 = document.createElement('div');
        newDiv.className = 'empty';
        newDiv2.className = 'fill';
        newDiv2.draggable = true;
        newDiv.appendChild(newDiv2);
        toAdd.appendChild(newDiv);
        fill.push(newDiv);
    }
    dropdown.appendChild(toAdd);
}

//Creates divs
function createTargetDivs() {
    let counter = 0;
    fetch('../Model/Map.json')
        .then(response => response.json())
        .then(function(response){
            let clothings = response.map.products.clothing;
            let tierlantins = response.map.products.tierlantin;
            let decorations = response.map.products.decoration;
            let clothing = document.getElementById('clothing-region')
            for (let j = 0; j < 15; j++) {
                let toAdd = document.createDocumentFragment();
                    for (let i = 0; i < 15; i++) {
                        clothings.forEach(function(item){
                            if(item.id == counter){
                                let cloth = new Clothing(item.item.name, item.item.description, item.item.import, item.item.export, item.item.min_stock, item.item.cur_stock, item.item.color, item.item.size);
                                console.log(cloth);
                            }
                         })
                        let newDiv = document.createElement('div');
                        newDiv.className = 'empty';
                        newDiv.id = counter;
                        toAdd.appendChild(newDiv);
                        empties.push(newDiv);
                        counter = counter + 1;
        }
            clothing.appendChild(toAdd);

            let tierlantin = document.getElementById('tierlantin-region')

    for (let j = 0; j < 15; j++) {
        let toAdd = document.createDocumentFragment();
        for (let i = 0; i < 15; i++) {
            tierlantins.forEach(function(item){
                if(item.id == counter){
                    let tier = new Tierlantin(item.item.name, item.item.description, item.item.import, item.item.export, item.item.min_stock, item.item.cur_stock, item.item.weight);
                    console.log(tier);
                }
             })
            let newDiv = document.createElement('div');
            newDiv.className = 'empty';
            newDiv.id = counter;
            toAdd.appendChild(newDiv);
            empties.push(newDiv);
            counter++;
        }
        tierlantin.appendChild(toAdd)
    }

    let decoration = document.getElementById('decoration-region')

    for (let j = 0; j < 15; j++) {
        let toAdd = document.createDocumentFragment();
        for (let i = 0; i < 15; i++) {
            decorations.forEach(function(item){
                if(item.id == counter){
                    let deco = new Decoration(item.item.name, item.item.description, item.item.import, item.item.export, item.item.min_stock, item.item.cur_stock, item.item.length, item.item.color, item.item.amountinpackage);
                    console.log(deco);
                }
             })
            let newDiv = document.createElement('div');
            newDiv.className = 'empty';
            newDiv.id = counter;
            toAdd.appendChild(newDiv);
            empties.push(newDiv);
            counter++;
        }
        decoration.appendChild(toAdd)
    }

    }
        });
        
        
    
    

    

    


}

// Loop through empty boxes and add listeners
function addListeners() {
    empties.forEach(function (item) {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });

    fill.forEach(function (item) {
        // Fill listeners
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });
}

// Drag Functions
function dragStart() {
    this.className += ' hold';
    currentDraggable = this.firstChild;
}

function dragEnd() {
    this.firstChild.className = 'fill';
    console.log("place");
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    if (this.hasChildNodes()) {
        return;
    }
    this.append(currentDraggable);
}

function Product(name, description, Import, Export, min_stock,cur_stock){
    this.Name = name;
    this.Description = description;
    this.Import = Import;
    this.Export = Export;
    this.Export_btw= Export*1.21;
    this.Min_stock = min_stock;
    this.Cur_stock = cur_stock;
}

function Clothing(name, description, Import, Export, min_stock,cur_stock, color, size){
    Product.call(this, name, description, Import, Export, min_stock,cur_stock);
    this.Color = color;
    this.Size = size;
}

function Tierlantin(name, description, Import, Export, min_stock,cur_stock, weight){
    Product.call(this, name, description, Import, Export, min_stock,cur_stock);
    this.Weight = weight;
}

function Decoration(name, description, Import, Export, min_stock,cur_stock, length, color, amountinpackage){
    Product.call(this, name, description, Import, Export, min_stock,cur_stock);
    this.Length = length;
    this.Color = color;
    this.AmountInPackage = amountinpackage;
}