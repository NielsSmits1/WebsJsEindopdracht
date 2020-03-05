let fill = Array.from(document.querySelectorAll('.fill'));
const body = document.querySelector('body');
const startdiv = document.querySelector('.startdivs');
let empties = Array.from(document.querySelectorAll('.empty'));
let currentDraggable;

// On load make divs
window.onload = function () {
    createStartDivs();
    createTargetDivs();
    addListeners();
};

function createStartDivs() {
    let toAdd = document.createDocumentFragment();

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
    startdiv.appendChild(toAdd);
}

//Creates divs
function createTargetDivs() {
    let toAdd = document.createDocumentFragment();
    for (let i = 0; i < 5; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'empty';
        toAdd.appendChild(newDiv);
        empties.push(newDiv);
    }
    body.appendChild(toAdd);
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

const key = 'ca862c1ce25923db366fa1502282cb69';
const WijchenCityID = '2744513';
const AmsterdamCityID = '2759794';

function weatherBallon(cityID) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function () {
            console.log('error')
        });
}

function drawWeather(d) {
    let actualTemp = Math.round(parseFloat(d.main.temp) - 273.15);
    let feelslike = Math.round(parseFloat(d.main.feels_like) - 273.15);
    let humidity = d.main.humidity;
    let description = d.weather[0].description;

    document.getElementById('location').innerHTML = d.name;
    document.getElementById('temp').innerHTML = 'Temp: ' + actualTemp + '&deg;';
    document.getElementById('feels_like').innerHTML = 'Gevoels temp: ' + feelslike + '&deg;';
    document.getElementById('description').innerHTML = 'Beschrijving: ' + description;
    document.getElementById('humidity').innerHTML = 'Vochtigheidsgraad: ' + humidity;

}

window.onload = function () {
    weatherBallon(WijchenCityID);
}
