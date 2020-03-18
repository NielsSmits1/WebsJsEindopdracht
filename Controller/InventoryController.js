const urlLink = document.getElementById('new-url');
import LocalStorageModel from '../Model/StorageConnector.js';
import {loadImage} from '../Helpers/ImageLoader.js';
export default class InventoryController {

    

    constructor() {
        this.currentDraggable;
        this.oldDraggable;
        this.storage = new LocalStorageModel();
    }

    GetCurrent(){
        return this.currentDraggable;
    }

    init(){
        this.counter = 0;
        this.createStartDivs();
        this.createClothingDiv();
        this.createTierlantinDiv();
        this.createDecorationDiv();
        this.loadPlacedProducts();
        this.addListeners();
        this.createBlockedDivs();
        this.createDeleteDiv();
    }

    addEmptyListener(item){
        item.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        item.addEventListener('dragenter', (e) => {
            e.preventDefault();
        });
        item.addEventListener('drop', () => {
            if (item.hasChildNodes()) {
                return;
            }
            item.append(this.currentDraggable);
        });
        item.addEventListener('dragstart', () => {
            item.className += ' hold';
            console.log(this);
            this.currentDraggable = item.firstChild;
            this.oldDraggable = item;
        });
        item.addEventListener('dragend', () => {
            //REMOVE PREVIOUS
            let list;
            let type;
            if (this.oldDraggable.classList.contains('used')) {
                list = this.storage.GetList('used');
                type = 'used';
            } else {
                list = this.storage.GetList('unused');
                type = 'unused';
            }
            //ITEM TO BE EDITED
            let candidate;

            for (let i = 0; i < list.products.length; i++) {
                if (list.products[i].placed_at == this.oldDraggable.id) {
                    candidate = list.products[i];
                    list.products.splice(i, 1);
                    //return;
                }

            }

            this.storage.SetList(type, list);
            //ADD TO LIST
            let second_list;
            let second_type;
            if (this.currentDraggable.parentElement.classList.contains('used')) {
                second_list = this.storage.GetList('used');
                second_type = 'used';
            } else {
                second_list = this.storage.GetList('unused');
                second_type = 'unused';
            }
            candidate.placed_at = this.currentDraggable.parentElement.id;
            second_list.products[second_list.products.length] = candidate;
            this.storage.SetList(second_type, second_list);

            //HIDE OLD SCREEN
            this.HideScreen();
        });
    }

    createStartDivs() {
        let unused = this.storage.GetList('unused');
        let dropdown = document.getElementById("clothing-dropdown");
        let tier_dropdown = document.getElementById("tierlantin-dropdown");
        let deco_dropdown = document.getElementById("decoration-dropdown");
    
        unused.products.forEach(product => {
            this.createStartDiv(product, dropdown, tier_dropdown, deco_dropdown);
        });
    }

    createStartDiv_1(product, addFill){
        let newDiv;
        let newDiv2;
        if (product.type == 'clothing') {
            newDiv = document.createElement('div');
            newDiv2 = document.createElement('div');
            newDiv.className = 'empty ';
            newDiv.className += 'unused';
            newDiv2.className = 'fill';
            newDiv2.draggable = true;          
            newDiv.id = product.placed_at;
            if (product.imgpath != null) {
                newDiv2.style.backgroundImage = loadImage(product.imgpath);
            }
        }
        if (product.type == 'tierlantin') {
            newDiv = document.createElement('div');
            newDiv2 = document.createElement('div');
            newDiv.className = 'empty ';
            newDiv.className += 'unused';
            newDiv2.className = 'fill';
            newDiv2.draggable = true;
            newDiv.id = product.placed_at;
            if (product.imgpath != null) {
                newDiv2.style.backgroundImage = loadImage(product.imgpath);
            }
        }
        if (product.type == 'decoration') {
            newDiv = document.createElement('div');
            newDiv2 = document.createElement('div');
            newDiv.className = 'empty ';
            newDiv.className += 'unused';
            newDiv2.className = 'fill';
            newDiv2.draggable = true;
            newDiv.id = product.placed_at;
            if (product.imgpath != null) {
                newDiv2.style.backgroundImage = loadImage(product.imgpath);
            }
        }
        newDiv.appendChild(newDiv2);

        if(addFill){
            newDiv2.addEventListener('click', () => {
                let screen = document.getElementsByClassName('screen');
                screen[0].id = newDiv2.parentElement.id;
                screen[0].className = "screen" + " " + newDiv2.parentElement.classList[1];
                screen[0].style.display = 'block';
            });
        }
        

        return newDiv;
    }

    createStartDiv(product, d1, d2, d3){
        if (product.type == 'clothing') {
            let newDiv = document.createElement('div');
            let newDiv2 = document.createElement('div');
            newDiv.className = 'empty ';
            newDiv.className += 'unused';
            newDiv2.className = 'fill';
            newDiv2.draggable = true;
            newDiv.id = product.placed_at;
            if (product.imgpath != null) {
                newDiv2.style.backgroundImage = loadImage(product.imgpath);
            }
            newDiv.appendChild(newDiv2);
            d1.appendChild(newDiv);
        }
        if (product.type == 'tierlantin') {
            let newDiv = document.createElement('div');
            let newDiv2 = document.createElement('div');
            newDiv.className = 'empty ';
            newDiv.className += 'unused';
            newDiv2.className = 'fill';
            newDiv2.draggable = true;
            newDiv.id = product.placed_at;
            if (product.imgpath != null) {
                newDiv2.style.backgroundImage = loadImage(product.imgpath);
            }
            newDiv.appendChild(newDiv2);
            d2.appendChild(newDiv);
        }
        if (product.type == 'decoration') {
            let newDiv = document.createElement('div');
            let newDiv2 = document.createElement('div');
            newDiv.className = 'empty ';
            newDiv.className += 'unused';
            newDiv2.className = 'fill';
            newDiv2.draggable = true;
            newDiv.id = product.placed_at;
            if (product.imgpath != null) {
                newDiv2.style.backgroundImage = loadImage(product.imgpath);
            }
            newDiv.appendChild(newDiv2);
            d3.appendChild(newDiv);
        }
    }

    createClothingDiv() {
        let clothing = document.getElementById('clothing-region')
        let toAdd = document.createDocumentFragment();
        for (let j = 0; j < 15; j++) {

            for (let i = 0; i < 15; i++) {
                let newDiv = document.createElement('div');
                newDiv.className = 'empty used';
                newDiv.id = this.counter;
                toAdd.appendChild(newDiv);
                this.counter++;
            }

        }
        clothing.appendChild(toAdd)
    }

    createTierlantinDiv() {
        let tierlantin = document.getElementById('tierlantin-region')

        for (let j = 0; j < 15; j++) {
            let toAdd = document.createDocumentFragment();
            for (let i = 0; i < 15; i++) {
                let newDiv = document.createElement('div');
                newDiv.className = 'empty used';
                newDiv.id = this.counter;
                toAdd.appendChild(newDiv);
                this.counter++;
            }
            tierlantin.appendChild(toAdd)
        }

    }

    createDecorationDiv() {
        let decoration = document.getElementById('decoration-region')

        for (let j = 0; j < 15; j++) {
            let toAdd = document.createDocumentFragment();
            for (let i = 0; i < 15; i++) {
                let newDiv = document.createElement('div');
                newDiv.className = 'empty used';
                newDiv.id = this.counter;
                toAdd.appendChild(newDiv);
                this.counter++;
            }
            decoration.appendChild(toAdd)
        }
    }

    createBlockedDivs() {
        fetch('../Model/Map.json')
            .then(response => response.json())
            .then(function (response) {
                let usedsquares = document.querySelectorAll('.empty.used');
                let blockedTiles = response.map.blockedTiles;
                blockedTiles.forEach(function (item) {
                    let olddiv = usedsquares[item.id];
                    let blockeddiv = document.createElement('div');
                    blockeddiv.className = 'block';
                    olddiv.replaceWith(blockeddiv);
                });
            })
    }

    loadPlacedProducts() {
        let used = this.storage.GetList('used');
        let usedsquares = document.querySelectorAll('.empty.used');

        used.products.forEach(product => {
            let square = usedsquares[product.placed_at];
            let div2 = document.createElement('div');
            div2.className = 'fill';
            div2.draggable = true;
            if (product.imgpath != null) {
                div2.style.backgroundImage = loadImage(product.imgpath);
            }
            square.appendChild(div2);
        })
    };

    createDeleteDiv() {
        let deleteDiv = document.createElement('div');
        let self = this;
        console.log(this);
        deleteDiv.className = "delete";
        let crudregion = document.getElementById("crud-region");
        

        deleteDiv.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        deleteDiv.addEventListener('dragenter', (e) => {
            e.preventDefault();
        });
        deleteDiv.addEventListener('drop', () => {
            if (deleteDiv.hasChildNodes()) {
                return;
            }
            console.log(this);
            deleteDiv.append(this.currentDraggable);
        });

        deleteDiv.addEventListener('dragend', () => {
            let list;
            let type;
            if (this.oldDraggable.classList.contains('used')) {
                list = this.storage.GetList('used');
                type = 'used';
            } else {
                list = this.storage.GetList('unused');
                type = 'unused';
            }
            //ITEM TO BE EDITED
            let candidate;

            for (let i = 0; i < list.products.length; i++) {
                if (list.products[i].placed_at == this.oldDraggable.id) {
                    candidate = list.products[i];
                    list.products.splice(i, 1);
                }

            }

            this.storage.SetList(type, list);
            //REMOVE ITEM FROM DIV
            deleteDiv.removeChild(deleteDiv.firstChild);
            //HIDE SCREEN
            this.HideScreen();
        });
        crudregion.appendChild(deleteDiv);
    }


    addListeners() {
        let self = this;
        let btn = document.getElementById('upload-image');
        btn.addEventListener('click', () => {

            let screen = document.getElementsByClassName('screen');
            let type = screen[0].classList[1];
            let list = this.storage.GetList(type);
            list.products.forEach((product) => {
                if (product.placed_at == screen[0].id) {
                    product.imgpath = urlLink.value;
                }
            })
            this.storage.SetList(type, list);

            let squares = Array.from(document.querySelectorAll('.empty.' + type));
            squares.forEach((square) => {
                if (square.id == screen[0].id) {
                    square.firstChild.style.backgroundImage = loadImage(urlLink.value);
                }
            })

        });
        let fills = Array.from(document.querySelectorAll('.fill'));
        fills.forEach(function (item) {
            item.addEventListener('click', () => {
                console.log(item.parentElement);
                let screen = document.getElementsByClassName('screen');
                screen[0].id = item.parentElement.id;
                screen[0].className = "screen" + " " + item.parentElement.classList[1];
                screen[0].style.display = 'block';
            });
        });

        let empties = Array.from(document.querySelectorAll('.empty'));
        empties.forEach(function (item) {
            self.addEmptyListener(item);
        });
    }
    
            

    HideScreen(){
        let screen = document.getElementsByClassName("screen");
        screen[0].style.display = "none";
    }
}

