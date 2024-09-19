"use strict";

//! Variables
var numero1 = 2 /*numero impresion*/
var numero2 = 8 /*numero multiplicador*/

//? Soluciones
console.log(multiplicar(numero1, numero2))

//* Funciones
// Función que muestra un numero x de veces el siguiente multiplicado por 2
function multiplicar(numero1P, numero2M) {
    let valorAnterior = numero2M
    for (let contador = 0; contador < numero1P; contador++) {
        var resultado = valorAnterior * 2
        console.log(resultado)
        valorAnterior = resultado
    }
}