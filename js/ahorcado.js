var botonIniciar        = document.querySelector("#iniciarJuego");
var inputPalabra      = document.querySelector("#inputNuevaPalabra");
var botonAgregarPalabra = document.querySelector("#nuevaPalabra");
var botonReiniciar      = document.querySelector("#reiniciarJuego")

palabrasSecretas = ["COHETE","MURCIELAGO","MOCHILA","CARTUCHERA","ALURA","LAGRIMAS","VESTIMENTA","FUTBOL","ELEFANTE","FANTASMA","MARINERO","PIEDRA","TOSTADORA"]

var juegoIniciado = false;
var palabraSorteada;
var indices = [];
var arrayPalabra;
arrayLetraIngresada = [];
arrayLetrasCorrectas = [];
arrayLetrasIncorrectas = [];
let letrasUnicas = [];

function saltarLetrasRepetidas(){
    for (i=0;i<palabraSorteada.length;i++){
        if(!letrasUnicas.includes(palabraSorteada[i])){
            letrasUnicas.push(palabraSorteada[i])
        }
    }
}

function sortearPalabra(){
    var numeroAleatorio = Math.floor(Math.random()*palabrasSecretas.length);
    palabraSorteada = palabrasSecretas[numeroAleatorio];
    palabrasSecretas.splice(numeroAleatorio,1);
    return palabraSorteada;
}

function crearArrayPalabra(palabra){
    separada = palabra.split("");
    arrayPalabra = separada;
}

botonIniciar.addEventListener("click",function(event){
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    iniciarJuego();
})
botonReiniciar.addEventListener("click",function(event){
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    iniciarJuego();
})

botonAgregarPalabra.addEventListener("click",function(event){
    event.preventDefault();
    palabrasSecretas.push(inputPalabra.value.toUpperCase());
    inputPalabra.value = "";
    inputPalabra.focus();
})

function iniciarJuego(){
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    horca1();
    sortearPalabra();
    crearArrayPalabra(palabraSorteada);
    dibujarGuiones();
    saltarLetrasRepetidas();
    juegoIniciado = true;
    arrayLetraIngresada = [];
    arrayLetrasCorrectas = [];
    arrayLetrasIncorrectas = [];
}

function buscarIndices(){
    if (juegoIniciado){
    var indiceBuscado = arrayPalabra.indexOf(arrayLetraIngresada[0]);
        while (indiceBuscado != -1) { 
            indices.push(indiceBuscado);
            indiceBuscado = arrayPalabra.indexOf(arrayLetraIngresada[0], indiceBuscado + 1);
  }
}
}

function dibujarGuiones(){
    var inicioX = 350;
    var inicioY = 610;
    var contador = 0;
    var nLetras = palabraSorteada.length;
    while (contador<nLetras){
        pincel.fillStyle = "black";
        pincel.fillRect(inicioX+(40*contador),inicioY,30,4);
        contador++;
    }
}

function dibujarletras(arrOrden){
    var inicioX = 358;
    var inicioY = 600;
        for(i=0;i<arrOrden.length;i++){
            pincel.fillStyle = "black";
            pincel.font = "20px Georgia";
            pincel.fillText(arrayLetraIngresada[0],inicioX+(40*arrOrden[i]),inicioY);
        }
        indices = [];
}

document.addEventListener("keyup", function(event){
    arrayLetraIngresada = [];
    var letra = event.key.toUpperCase();
    var codigo = letra.charCodeAt();
    if (juegoIniciado){
    if(codigo>64 && codigo<91){
        arrayLetraIngresada.push(letra);
        buscarIndices();
        dibujarletras(indices);
        var comparador = arrayLetrasIncorrectas.length;
        if(arrayPalabra.includes(letra)){
            if(!arrayLetrasCorrectas.includes(letra)){
                arrayLetrasCorrectas.push(letra)
            }
        }else if(!arrayLetrasIncorrectas.includes(letra)){
            arrayLetrasIncorrectas.push(letra)
        }
        if(comparador<arrayLetrasIncorrectas.length){
            dibujarLetrasErroneas(arrayLetrasIncorrectas) 
        }
        dibujarAhorcado();
        }
    verificarFinGanador();
    verificarFinPerdedor();
    } 
});

function dibujarLetrasErroneas(letrasIncorrectas){
    var inicioX = 400;
    var inicioY = 200;
    pincel.fillStyle = "black";
    pincel.font = "20px Arial";
    pincel.fillText("LETRAS NO ENCONTRADAS: " + letrasIncorrectas.toString(),inicioX,inicioY);
}

function verificarFinGanador(){
    let palabraOriginalsinLetrasRepetidas = letrasUnicas.sort().toString();
    let letrasErroneasIngresadas = arrayLetrasCorrectas.sort().toString();
    if(palabraOriginalsinLetrasRepetidas===letrasErroneasIngresadas){
        pincel.fillStyle = "lightgreen";
        pincel.font = "50px Arial";
        pincel.fillText("¡GANASTE!",600,400);
        juegoIniciado = false;
        botonReiniciar.focus();
        letrasUnicas = [];
    }
}

function verificarFinPerdedor(){
    if(arrayLetrasIncorrectas.length>8){
        pincel.fillStyle = "red";
        pincel.font = "20px Arial"
        pincel.fillText("¡PERDISTE! La palabra era: "+ palabraSorteada ,600,400);
        juegoIniciado = false;
        botonReiniciar.focus();
        letrasUnicas = [];
    }
}

function dibujarAhorcado(){
    let contador = arrayLetrasIncorrectas.length;
    if (contador ===1){
        horca2()
    }
    else if (contador ===2){
        horca3()
    }
    else if (contador ===3){
        soga()
    }
    else if (contador===4){
        cabeza()
    }
    else if(contador===5){
        cuerpo()
    }
    else if(contador===6){
        brazoIzquierdo()
    }
    else if(contador===7){
        brazoDerecho()
    }
    else if(contador===8){
        piernaIzquierda()
    }
    else if(contador===9){
        piernaDerecha()
    }
}
