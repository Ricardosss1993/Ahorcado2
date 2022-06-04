var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");

function horca1(){
    pincel.fillStyle = "brown"
    pincel.beginPath();
    pincel.fillRect (60,600,150,10);
    pincel.fill();
}
function horca2(){
    pincel.fillStyle = "brown"
    pincel.beginPath();
    pincel.fillRect(95,205,10,400);
}

function horca3(){
    pincel.fillStyle = "brown"
    pincel.beginPath();
    pincel.fillRect(105,205,200,10);
}

function soga(){
    pincel.fillStyle = "white"
    pincel.beginPath();
    pincel.fillRect(295,215,10,50);
}

function cabeza(){
    pincel.fillStyle = "lightpink"
    pincel.beginPath();
    pincel.arc(300,295,40,0,2*3.14);
    pincel.fill();
    pincel.fillStyle = "pink"
    pincel.beginPath();
    pincel.arc(300,295,30,0,2*3.14);
    pincel.fill()
}

function cuerpo(){
    pincel.fillStyle = "black"
    pincel.fillRect(295,335,10,130);
}

function brazoIzquierdo(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(295,355);
    pincel.lineTo(220,325);
    pincel.lineTo(220,335);
    pincel.lineTo(295,365);
    pincel.fill();
}

function brazoDerecho(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(305,355);
    pincel.lineTo(380,325);
    pincel.lineTo(380,335);
    pincel.lineTo(305,365);
    pincel.fill();
}

function piernaIzquierda(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(295,455);
    pincel.lineTo(210,505);
    pincel.lineTo(210,515);
    pincel.lineTo(295,465);
    pincel.fill();
}

function piernaDerecha(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(305,455);
    pincel.lineTo(390,505);
    pincel.lineTo(390,515);
    pincel.lineTo(305,465);
    pincel.fill();
}

