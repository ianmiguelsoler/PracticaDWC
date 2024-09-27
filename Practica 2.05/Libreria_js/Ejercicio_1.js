"use strict";

//* Funciones
//Función que se le pasa una cadena, cambia varios carácteres y los modifica.
function cadenaCani(cadenaCani) {
    var resultado = "";
    //Hacemos un array recorriendo todo el string carácter a carácter.
    for (let contador = 0; contador < cadenaCani.length; contador++) {
        let caracter = cadenaCani[contador];
        // Si el carácter está en mayúsculas, lo cambiamos a minúsculas.
        if (caracter === caracter.toUpperCase()) {
            if(caracter === 'c' || caracter === 'C'){
                resultado += 'k'
            }
            else{
                resultado += caracter.toLowerCase();
            }
        } 
        // Si está en minúsculas, lo cambiamos a mayúsculas.
        else {
            if(caracter === 'c' || caracter === 'C'){
                resultado += 'k'
            }
            else{
                resultado += caracter.toUpperCase();
            }
        }
    }
    //Código que randomiza la cantidad de H que se agregaran al final de la frase.
    let cuantasH = (Math.random() * 4) + 1;
        for (let contador = 0; contador < cuantasH; contador++) {
            resultado += 'H';  
        }
    return resultado; // Devolvemos el string modificado.
};

//Exportamos la cadena Cani.
export { cadenaCani };
