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
        let canvas = document.createElement('canvas');
        document.getElementById('canvasplacement').appendChild(canvas);
        let ctx = canvas.getContext('2d');
        let pos = {x: 0, y: 0};

        document.addEventListener('mousemove', draw);
        document.addEventListener('mousedown', setPosition);
        document.addEventListener('mouseenter', setPosition);

        function setPosition(e) {
            pos = getMousePos(canvas, e);
        }

        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }

        function draw(e) {
            if (e.buttons !== 1) return;

            ctx.beginPath(); // begin

            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#c0392b';

            ctx.moveTo(pos.x, pos.y); // from
            setPosition(e);
            ctx.lineTo(pos.x, pos.y); // to

            ctx.stroke(); // draw it!
        }
    }
}