"use strict";

//! Variables

//? Solución
const cani = cadenaCani("Pedro es un cani y lo sabes");
console.log("Su cadena de texto se ha vuelto cani, te lo muestro a continuación:\n", cani);

//* Funciones
function cadenaCani(cadenaCani) {
    var resultado = "";
    //Hacemos un array recorriendo todo el string caracter a caracter
    for (let contador = 0; contador < cadenaCani.length; contador++) {
        let caracter = cadenaCani[contador];

        // Si el carácter está en mayúsculas, lo cambiamos a minúsculas
        if (caracter === caracter.toUpperCase()) {
            if(caracter === 'c' || caracter === 'C'){
                resultado += 'k'
            }
            else{
                resultado += caracter.toLowerCase();
            }
        } 
        // Si está en minúsculas, lo cambiamos a mayúsculas
        else {
            if(caracter === 'c' || caracter === 'C'){
                resultado += 'k'
            }
            else{
                resultado += caracter.toUpperCase();
            }
        }
    }
    let cuantasH = (Math.random() * 4) + 1;
        for (let contador = 0; contador < cuantasH; contador++) {
            resultado += 'H';  
        }
    return resultado; // Devolvemos el string modificado
};

// // Exporta los elementos situados entre las llaves.
// export { sumar, restar, multiplicar };
// // Exporta el elemento con un seudónimo.
// export { multiplicar as multi };
