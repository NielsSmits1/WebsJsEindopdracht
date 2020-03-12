let currentDraggable;


// On load make divs

export function init() {
    createStartDivs();
    createTargetDivs();
}

function createStartDivs() {
    let toAdd = document.createDocumentFragment();
    let dropdown = document.getElementById("clothing-dropdown");
    localStorage.removeItem("jurk")
    let jurk = { name : "jurk", description : "Rode jurk van zijden draad",import : 5.00,export : 7.50,min_stock : 2,cur_stock : 3,color : "red",size : "XL", imgpath: "https://source.unsplash.com/random/30x30"};
    if(localStorage.getItem("jurk") == null){
        localStorage.setItem("jurk", JSON.stringify(jurk));
    }
    
    let newDiv = document.createElement('div');
        let newDiv2 = document.createElement('div');
        newDiv.className = 'empty';
        newDiv2.className = 'fill';
        newDiv2.draggable = true;
        newDiv2.id = jurk.name;
        newDiv2.style.backgroundImage = "url('" + jurk.imgpath + "')";
        newDiv.appendChild(newDiv2);
        toAdd.appendChild(newDiv);
    // for (let i = 0; i < 5; i++) {
    //     let newDiv = document.createElement('div');
    //     let newDiv2 = document.createElement('div');
    //     newDiv.className = 'empty';
    //     newDiv2.className = 'fill';
    //     newDiv2.draggable = true;
    //     newDiv.appendChild(newDiv2);
    //     toAdd.appendChild(newDiv);
    // }
    dropdown.appendChild(toAdd);
}

//Creates divs
function createTargetDivs() {
    let counter = 0;
    fetch('../Model/Map.json')
        .then(response => response.json())
        .then(function(response){
            console.log(JSON.stringify(response.map));
            let clothings = response.map.products.clothing;
            let tierlantins = response.map.products.tierlantin;
            let decorations = response.map.products.decoration;
            let blockedTiles = response.map.blockedTiles;
            let clothing = document.getElementById('clothing-region')
            let toAdd = document.createDocumentFragment();
            for (let j = 0; j < 15; j++) {
                
                for (let i = 0; i < 15; i++) {
                    let newDiv = document.createElement('div');
                    newDiv.className = 'empty';
                    newDiv.id = counter;
                    toAdd.appendChild(newDiv);
                    counter++;
                }
                
            }
            clothing.appendChild(toAdd)
            // clothings.forEach(function(item){
            //         let cloth = new Clothing(item.item.name, item.item.description, item.item.import, item.item.export, item.item.min_stock, item.item.cur_stock, item.item.color, item.item.size);
            //         let newDiv2 = document.createElement('div');
            //         newDiv2.style.backgroundImage = "url('" + cloth.img.src + "')";
            //         newDiv2.className = 'fill' + ' clothing'; 
            //         newDiv2.id = item.id;
            //         newDiv2.draggable = true;
            //         let newDiv = document.getElementById(item.id);
            //         newDiv.appendChild(newDiv2);
                
            //  })

            let tierlantin = document.getElementById('tierlantin-region')

    for (let j = 0; j < 15; j++) {
        let toAdd = document.createDocumentFragment();
        for (let i = 0; i < 15; i++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'empty';
            newDiv.id = counter;
            toAdd.appendChild(newDiv);
            counter++;
        }
        tierlantin.appendChild(toAdd)
    }
    // tierlantins.forEach(function(item){
    //         let tier = new Tierlantin(item.item.name, item.item.description, item.item.import, item.item.export, item.item.min_stock, item.item.cur_stock, item.item.weight);
    //         let newDiv2 = document.createElement('div');
    //         newDiv2.style.backgroundImage = "url('" + tier.img.src + "')";
    //         newDiv2.className = 'fill';
    //         newDiv2.id = item.id;
    //         newDiv2.draggable = true;
    //         let newDiv = document.getElementById(item.id);
    //         newDiv.appendChild(newDiv2);
        
    //  })

    let decoration = document.getElementById('decoration-region')

    for (let j = 0; j < 15; j++) {
        let toAdd = document.createDocumentFragment();
        for (let i = 0; i < 15; i++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'empty';
            newDiv.id = counter;
            toAdd.appendChild(newDiv);
            counter++;
        }
        decoration.appendChild(toAdd)
    }
    // decorations.forEach(function(item){
    //         let deco = new Decoration(item.item.name, item.item.description, item.item.import, item.item.export, item.item.min_stock, item.item.cur_stock, item.length, item.color, item.amountinpackage);
    //         let newDiv2 = document.createElement('div');
    //         newDiv2.style.backgroundImage = "url('" + deco.img.src + "')";
    //         newDiv2.className = 'fill';
    //         newDiv2.id = item.id
    //         newDiv2.draggable = true;
    //         let newDiv = document.getElementById(item.id);
    //         newDiv.appendChild(newDiv2);
        
    //  })
        blockedTiles.forEach(function(item){
            let blockeddiv = document.getElementById(item.id);
            blockeddiv.className = 'block';
        })
        addListeners();
        let keys = Object.keys(localStorage);
        for(let key of keys){
            if(isNaN(parseInt(key))){
                return;
            }
            let product = JSON.parse(localStorage.getItem(key));
            let div = document.getElementById(parseInt(key));
            let div2 = document.createElement('div');
            div2.className = 'fill';
            div2.draggable = true;
            div2.style.backgroundImage = "url(" + product.imgpath +")";
            div.appendChild(div2);
        };
     
});
}

// Loop through empty boxes and add listeners
function addListeners() {
    let empties = Array.from(document.querySelectorAll('.empty'));
    empties.forEach(function (item) {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    })

    }

// Drag Functions
function dragStart() {
    this.className += ' hold';
    currentDraggable = this.firstChild;
}

function dragEnd() {
    let oldid;
    if(currentDraggable.id == ''){
        oldid = currentDraggable.parentElement.id;
    }else{
        oldid = currentDraggable.id;
    }
    let info = localStorage.getItem(oldid)
    localStorage.setItem(this.id, info);
    localStorage.removeItem(oldid);
    let item = JSON.parse(localStorage.getItem(this.id));
    let newDiv2 = document.createElement('div');
    newDiv2.className = 'fill';
    newDiv2.style.backgroundImage = "url('" + item.imgpath + "')";
    //this.firstChild = newDiv2;
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
    this.img = new Image();
    this.img.src = 'https://source.unsplash.com/random/30x30';
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