"use strict";

//! Variables
const arrayCadenas = ["Ian", "Pedro", "Miguel", "Francisco", "Julio"];

//? Solución
// Array que pone en mayúsculas todo el array usando spread operator y map.
const arrayCadenasMayus = [...arrayCadenas].map(mostrarEnMayuscula);
console.log(arrayCadenasMayus);

// Array ordenado con sort, usando spread operator para no modificar el original.
const arrayOrdenado = [...arrayCadenasMayus].sort();
console.log(arrayOrdenado);

// Array mapeado a JSON con spread operator y desestructuración.
const arrayJSON = arrayCadenas.map((nombre, indice) => {
    return {
        id: indice,
        nombre
    };
});
console.log(arrayJSON);

//* Funciones
// Función que recibe el array y lo devuelve en mayúsculas.
function mostrarEnMayuscula(valor) {
    return valor.toUpperCase();
}
// Usamos map en lugar de forEach para recorrer el array y devolver un nuevo array
const nombresConId = arrayJSON.map(({ id, nombre }) => {
    return `ID: ${id}, Nombre: ${nombre}`;
});
console.log(nombresConId);
