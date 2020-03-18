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
        clothingdd.parentElement.style.display = "none";
        tierlantindd.parentElement.style.display = "none";
        decorationdd.parentElement.style.display = "none";
        clothingbtn.addEventListener('click', function () {
            clothingregion.style.display = "block";
            clothingdd.parentElement.style.display = "block";
            crudregion.style.display = "block";
            tierlantindd.parentElement.style.display = "none";
            decorationdd.parentElement.style.display = "none";
            tierlantinregion.style.display = "none";
            decorationregion.style.display = "none";
            createitemregion.style.display = "none";
            let screen = document.getElementsByClassName("screen");
            screen[0].style.display = "none";
        });

        tierlantinbtn.addEventListener('click', function () {
            clothingregion.style.display = "none";
            tierlantinregion.style.display = "block";
            tierlantindd.parentElement.style.display = "block";
            crudregion.style.display = "block";
            clothingdd.parentElement.style.display = "none";
            decorationdd.parentElement.style.display = "none";
            decorationregion.style.display = "none";
            createitemregion.style.display = "none";
            let screen = document.getElementsByClassName("screen");
            screen[0].style.display = "none";
        });

        decorationbtn.addEventListener('click', function () {
            clothingregion.style.display = "none";
            tierlantinregion.style.display = "none";
            decorationregion.style.display = "block";
            decorationdd.parentElement.style.display = "block";
            crudregion.style.display = "block";
            clothingdd.parentElement.style.display = "none";
            tierlantindd.parentElement.style.display = "none";
            createitemregion.style.display = "none";
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

        ctx.fillCircle = function(x, y) {
            this.fillStyle = 'black';
            this.beginPath();
            this.moveTo(x, y);
            this.arc(x, y, 3, 0, Math.PI * 2, false);
            this.fill();
        };
        // ctx.clearTo = function() {
        //     ctx.fillStyle = 'white';
        //     ctx.fillRect(0, 0, width, height);
        // };
        // ctx.clearTo();

        canvas.onmousemove = function(e) {
            if (!isDrawing) {
                return;
             }
             console.log(e.pageX, e.pageY);
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            ctx.fillCircle(x, y);
        };
        canvas.onmousedown = function(e) {
            isDrawing = true;
        };
        canvas.onmouseup = function(e) {
            isDrawing = false;
        };
    }
}