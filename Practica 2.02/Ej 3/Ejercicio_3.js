"use strict";


//* Funciones
//Función que calcula números de forma aleatoria
function numerosAleatorios(numero) {
    let arrayAleatorio = [];
    for (let contador = 0; contador < numero; contador++) {
        arrayAleatorio[contador] = Math.floor(Math.random() * 100) + 1; 
    }
    return arrayAleatorio;
}
//calcula el array formateado
function imprimirArrayFormateado(array1, array2) {
    if(array1.length !== array2.length){
        console.error("Los arrays deben tener la misma longitud.");
        return null;
    }
    for (let contador = 0; contador < array1.length; contador++) {
        let arraySumado = array1[contador] + array2[array2.length - 1 - contador];
        arrayResultado.push(arraySumado);
    }
    return arrayResultado;
}
//Imprime el array de forma formateada
function imprimirArrayFormateado(array) {
    console.log("[" + array.join(", ") + "]");
}