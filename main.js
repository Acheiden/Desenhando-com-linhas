let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");

let mouseX, mouseY, mouseXfinal, mouseYfinal;
let touchX, touchY, touchXfinal, touchYfinal;

canvas.addEventListener("mousedown", cliquei);

function cliquei() {
    cor = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    mouseevent = "mousedown";

}

canvas.addEventListener("mousemove", arrastei);

function arrastei(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        ctx.moveTo(mouseXfinal, mouseYfinal);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }
    mouseXfinal = mouseX;
    mouseYfinal = mouseY;
}

canvas.addEventListener("mouseup", soltei);

function soltei() {
    mouseevent = "mouseup";
}

function limpar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

larguraNova = screen.width - 70;
alturaNova = screen.height - 300;

if (width < 992) {
    document.getElementById("mycanvas").width = larguraNova;
    document.getElementById("mycanvas").height = alturaNova;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", enconstei);

function enconstei() {
    cor = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    touchXfinal = e.touches[0].clientX - canvas.offsetLeft;
    touchYfinal = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", melartela);

function melartela(e) {
    touchX = e.touches[0].clientX - canvas.offsetLeft;
    touchY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
    ctx.moveTo(touchXfinal, touchYfinal);
    ctx.lineTo(touchX, touchY);
    ctx.stroke();

    touchXfinal = touchX;
    touchYfinal = touchY;
}

canvas.addEventListener("touchend", parei);

function parei() {
    mouseevent = "touchend";
}