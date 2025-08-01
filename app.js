//las variables globales
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroDeIntentos = 4;
//costrución de una variable que me cambien el texto  
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}
//función donde ingrese datos desde un inpu 
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos}  ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
        //El usuario no acertó. 
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++
        limpiarCaja();
    }
    return;    
}
//función para limpicar el 
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
// función donde me genera un numero semi aleatorio
function generarNumeroSecreto() {
    let numeroGenerado =( Math.floor(Math.random()*numeroMaximo)+1);
    //si quiero que al 4 intento se cierre 
    //while (intentos == numeroDeIntentos) : ('break') 
            //si ya sorteamos todos los números 
            if (listaNumerosSorteados.length == numeroMaximo){
                asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
            } else {
                // si el número generado esta inclido en la lista
                if (listaNumerosSorteados.includes(numeroGenerado)){
                    return generarNumeroSecreto();
                } else {
                    listaNumerosSorteados.push(numeroGenerado);
                    return numeroGenerado;
                }
    
        } 
    //}
    asignarTextoElemento('p', 'Alcanzo el número de intentos posibles');    
}

//función mensajes iniciales
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//fución del boton reiniciar
function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar número aleatorio 
    //inicializar el número intentos
    condicionesIniciales();
    // //deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute('disabled','true');
    return;
}
// código de mi programa
condicionesIniciales();