export default class InventoryController {

    constructor() {
        this.currentDraggable;
        this.oldDraggable;
        this.counter = 0;
        this.initializeLocalStorage();
        this.createStartDivs();
        this.createClothingDiv();
        this.createTierlantinDiv();
        this.createDecorationDiv();
        this.loadPlacedProducts();
        this.addListeners();
        this.createBlockedDivs();
    }

    initializeLocalStorage() {
        if (localStorage.getItem('used') == null) {
            let used = { products: [] };
            localStorage.setItem('used', JSON.stringify(used));
        }
        if (localStorage.getItem('unused') == null) {
            let unused = { products: [] };
            let jurk = {
                id: 1,
                placed_at: 0,
                name: "jurk",
                type: "clothing",
                description: "Rode jurk van zijden draad",
                import: 5.00,
                export: 7.50,
                export_btw: 7.50 * 1.25,
                min_stock: 2,
                cur_stock: 3,
                color: "red",
                size: "XL",
                imgpath: "https://source.unsplash.com/random/30x30"
            };
            unused.products[unused.products.length] = jurk;
            localStorage.setItem('unused', JSON.stringify(unused));
        }

    }

    createStartDivs() {
        let unused = JSON.parse(localStorage.getItem('unused'));
        let toAddClothing = document.createDocumentFragment();
        let toAddTierlantin = document.createDocumentFragment();
        let toAddDecoration = document.createDocumentFragment();
        let dropdown = document.getElementById("clothing-dropdown");
        let tier_dropdown = document.getElementById("tierlantin-dropdown");
        let deco_dropdown = document.getElementById("decoration-dropdown");

        unused.products.forEach(product => {
            if (product.type == 'clothing') {
                let newDiv = document.createElement('div');
                let newDiv2 = document.createElement('div');
                newDiv.className = 'empty ';
                newDiv.className += 'unused';
                newDiv2.className = 'fill';
                newDiv2.draggable = true;
                newDiv.id = product.placed_at;
                if (product.imgpath != null) {
                    newDiv2.style.backgroundImage = "url('" + product.imgpath + "')";
                }
                newDiv.appendChild(newDiv2);
                toAddClothing.appendChild(newDiv);
            }
            if (product.type == 'tierlantin') {
                let newDiv = document.createElement('div');
                let newDiv2 = document.createElement('div');
                newDiv.className = 'empty ';
                newDiv.className += 'unused';
                newDiv2.className = 'fill';
                newDiv2.draggable = true;
                newDiv2.id = product.id;
                if (product.imgpath != null) {
                    newDiv2.style.backgroundImage = "url('" + product.imgpath + "')";
                }
                newDiv.appendChild(newDiv2);
                toAddTierlantin.appendChild(newDiv);
            }
            if (product.type == 'decoration') {
                let newDiv = document.createElement('div');
                let newDiv2 = document.createElement('div');
                newDiv.className = 'empty ';
                newDiv.className += 'unused';
                newDiv2.className = 'fill';
                newDiv2.draggable = true;
                newDiv2.id = product.id;
                if (product.imgpath != null) {
                    newDiv2.style.backgroundImage = "url('" + product.imgpath + "')";
                }
                newDiv.appendChild(newDiv2);
                toAddDecoration.appendChild(newDiv);
            }
        });

        dropdown.appendChild(toAddClothing);
        tier_dropdown.appendChild(toAddTierlantin);
        deco_dropdown.appendChild(toAddDecoration);


    }

    createClothingDiv() {
        let clothing = document.getElementById('clothing-region')
        let toAdd = document.createDocumentFragment();
        for (let j = 0; j < 15; j++) {

            for (let i = 0; i < 15; i++) {
                let newDiv = document.createElement('div');
                newDiv.className = 'empty used';
                //newDiv.className += 'used';
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
        let used = JSON.parse(localStorage.getItem('used'));
        let usedsquares = document.querySelectorAll('.empty.used');

        used.products.forEach(product => {
            let square = usedsquares[product.placed_at];
            let div2 = document.createElement('div');
            div2.className = 'fill';
            div2.draggable = true;
            if (product.imgpath != null) {
                div2.style.backgroundImage = "url(" + product.imgpath + ")";
            }
            square.appendChild(div2);
        })
    };


    addListeners() {
        let self = this;
        let fills = Array.from(document.querySelectorAll('.fill'));
        fills.forEach(function (item) {
            item.addEventListener('click', () => {
                console.log(item.parentElement);
                let screen = document.getElementsByClassName('screen');
                screen[0].id = item.parentElement.id;
                screen[0].style.display = 'block';
            })
        });
        let empties = Array.from(document.querySelectorAll('.empty'));
        empties.forEach(function (item) {
            item.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
            item.addEventListener('dragenter', (e) => {
                e.preventDefault();
            });
            item.addEventListener('dragleave', () => {
            });
            item.addEventListener('drop', () => {
                if (item.hasChildNodes()) {
                    return;
                }
                item.append(self.currentDraggable);
            });
            item.addEventListener('dragstart', () => {
                item.className += ' hold';
                self.currentDraggable = item.firstChild;
                self.oldDraggable = item;
            });
            item.addEventListener('dragend', () => {
                //REMOVE PREVIOUS
                let list;
                let type;
                if (self.oldDraggable.classList.contains('used')) {
                    list = JSON.parse(localStorage.getItem('used'));
                    type = 'used';
                } else {
                    list = JSON.parse(localStorage.getItem('unused'));
                    type = 'unused';
                }
                //ITEM TO BE EDITED
                let candidate;

                for (let i = 0; i < list.products.length; i++) {
                    if (list.products[i].placed_at == self.oldDraggable.id) {
                        candidate = list.products[i];
                        list.products.splice(i, 1);
                        //return;
                    }

                }

                localStorage.setItem(type, JSON.stringify(list));
                //ADD TO LIST
                let second_list;
                let second_type;
                if (self.currentDraggable.parentElement.classList.contains('used')) {
                    second_list = JSON.parse(localStorage.getItem('used'));
                    second_type = 'used';
                } else {
                    second_list = JSON.parse(localStorage.getItem('unused'));
                    second_type = 'unused';
                }
                candidate.placed_at = self.currentDraggable.parentElement.id;
                second_list.products[second_list.products.length] = candidate;
                localStorage.setItem(second_type, JSON.stringify(second_list));

            })

        })




    }
}




// function Product(name, description, Import, Export, min_stock,cur_stock){
//     this.Name = name;
//     this.Description = description;
//     this.Import = Import;
//     this.Export = Export;
//     this.Export_btw= Export*1.21;
//     this.Min_stock = min_stock;
//     this.Cur_stock = cur_stock;
//     this.img = new Image();
//     this.img.src = 'https://source.unsplash.com/random/30x30';
// }

// function Clothing(name, description, Import, Export, min_stock,cur_stock, color, size){
//     Product.call(this, name, description, Import, Export, min_stock,cur_stock);
//     this.Color = color;
//     this.Size = size;
// }

// function Tierlantin(name, description, Import, Export, min_stock,cur_stock, weight){
//     Product.call(this, name, description, Import, Export, min_stock,cur_stock);
//     this.Weight = weight;
// }

// function Decoration(name, description, Import, Export, min_stock,cur_stock, length, color, amountinpackage){
//     Product.call(this, name, description, Import, Export, min_stock,cur_stock);
//     this.Length = length;
//     this.Color = color;
//     this.AmountInPackage = amountinpackage;
// }