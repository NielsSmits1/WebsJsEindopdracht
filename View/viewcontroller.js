/*Buttons*/
const clothingbtn = document.getElementById("clothing-btn");
const tierlantinbtn = document.getElementById("tierlantin-btn");
const decorationbtn = document.getElementById("decoration-btn");

/*Regions*/
const clothingregion = document.getElementById("clothing-region");
const tierlantinregion = document.getElementById("tierlantin-region");
const decorationregion = document.getElementById("decoration-region");
const createitemregion = document.getElementById("create-item-region");
const crudregion = document.getElementById("crud-region");

/*Dropdowns*/
const clothingdd = document.getElementById('clothing-dropdown');
const tierlantindd = document.getElementById('tierlantin-dropdown');
const decorationdd = document.getElementById('decoration-dropdown');
/*Event Listeners*/

export default class ViewController {
    constructor() {
        this.InitCanvas();
        document.getElementById("clothing-region").classList.add('hide');
        document.getElementById("decoration-region").classList.add('hide');
        document.getElementById("tierlantin-region").classList.add('hide');
        document.getElementById("crud-region").classList.add('hide');
        document.getElementById("create-item-region").classList.remove('hide');
        clothingdd.parentElement.classList.add('hide');
        tierlantindd.parentElement.classList.add('hide');
        decorationdd.parentElement.classList.add('hide');

        clothingbtn.addEventListener('click', function () {
            clothingregion.classList.remove('hide');
            clothingdd.parentElement.classList.remove('hide');
            crudregion.classList.remove('hide');
            clothingdd.classList.remove('hide');
            tierlantindd.parentElement.classList.add('hide');
            decorationdd.parentElement.classList.add('hide');
            document.getElementById("create-item-region").classList.add('hide');
            document.getElementById("decoration-region").classList.add('hide');
            document.getElementById("tierlantin-region").classList.add('hide');
            let screen = document.getElementsByClassName("screen");
            screen[0].style.display = "none";
        });

        tierlantinbtn.addEventListener('click', function () {
            clothingregion.classList.add('hide');
            clothingdd.parentElement.classList.add('hide');
            crudregion.classList.remove('hide');
            clothingdd.classList.add('hide');
            tierlantindd.parentElement.classList.remove('hide');
            decorationdd.parentElement.classList.add('hide');
            document.getElementById("create-item-region").classList.add('hide');
            document.getElementById("decoration-region").classList.add('hide');
            document.getElementById("tierlantin-region").classList.remove('hide');
            let screen = document.getElementsByClassName("screen");
            screen[0].style.display = "none";
        });

        decorationbtn.addEventListener('click', function () {
            clothingregion.classList.add('hide');
            clothingdd.parentElement.classList.add('hide');
            crudregion.classList.add('hide');
            clothingdd.classList.add('hide');
            tierlantindd.parentElement.classList.add('hide');
            decorationdd.parentElement.classList.remove('hide');
            document.getElementById("create-item-region").classList.add('hide');
            document.getElementById("decoration-region").classList.remove('hide');
            document.getElementById("tierlantin-region").classList.add('hide');
            let screen = document.getElementsByClassName("screen");
            screen[0].style.display = "none";
        });

        let dropdownbtns = Array.from(document.getElementsByClassName("dropbtn"));
        dropdownbtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.parentElement.id == "clothing-parent") {
                    document.getElementById("clothing-dropdown").classList.toggle('show');
                } else if (btn.parentElement.id == "tierlantin-parent") {
                    document.getElementById("tierlantin-dropdown").classList.toggle('show');
                } else if (btn.parentElement.id == "decoration-parent") {
                    document.getElementById("decoration-dropdown").classList.toggle('show');
                }
                let screen = document.getElementsByClassName("screen");
                screen[0].style.display = "none";

            })
        });

        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                let dropdowns = document.getElementsByClassName("dropdown-content");
                let i;
                for (i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    }

    InitCanvas() {
        let isDrawing = false;
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        let width = canvas.width;
        let height = canvas.height;

        ctx.fillCircle = function (x, y) {
            this.fillStyle = 'black';
            this.beginPath();
            this.moveTo(x, y);
            this.arc(x, y, 3, 0, Math.PI * 2, false);
            this.fill();
        };

        canvas.onmousemove = function (e) {
            if (!isDrawing) {
                return;
            }
            var x = e.pageX - canvas.getBoundingClientRect().left;
            var y = e.pageY - canvas.getBoundingClientRect().top;
            ctx.fillCircle(x, y);
        };
        canvas.onmousedown = function (e) {
            isDrawing = true;
        };
        canvas.onmouseup = function (e) {
            isDrawing = false;
        };
    }
}