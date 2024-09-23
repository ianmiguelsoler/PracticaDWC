"use strict";

//! Variables
var arrayCadenas = ["Ian","Pedro","Miguel","Francisco","Julio"];

//? Solución
//Array que pone mayúsculas todo el array.
var arrayCadenasMayus = arrayCadenas.map(mostrarEnMayuscula);
console.log(arrayCadenasMayus); 
//Array ordenado con sort, no hace falta mapearlo.
var arrayOrdenado = arrayCadenasMayus.sort();
console.log(arrayOrdenado); 

//array mapeado con JSON.
var arrayJSON = arrayCadenas.map((nombre, indice) => {
    return {
        id: indice,
        nombre: nombre
    };
});
console.log(arrayJSON)
//* Funciones
//Función que se le pasa el array y lo devulve en mayúsculas.
function mostrarEnMayuscula(valor, indice, arrayCadenas){
    return valor.toUpperCase();
};

