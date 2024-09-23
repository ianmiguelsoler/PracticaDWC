"use strict";

//! Variables
let array1 = numerosAleatorios(10);
let array2 = numerosAleatorios(6);
let array3 = numerosAleatorios(14);

//? Solución

//* Funciones

//Genera array aleatorios pasándole la longitud de estos
function numerosAleatorios(numero) {
    let arrayAleatorio = [];
    for (let contador = 0; contador < numero; contador++) {
        arrayAleatorio[contador] = Math.floor(Math.random() * 100) + 1; 
    }
    return arrayAleatorio;
}

//Imprime el array de forma formateada
function imprimirArrayFormateado(array) {
    console.log("[" + array.join(", ") + "]");
}

// Función que une los arrays y se queda solo con los números mayores a 5
function creaArrayMayor(...arrays) {
    // Unir todos los arrays en uno
    let arrayUnido = [].concat(...arrays);
    let contador = 0
    console.log('El array antes de filtrarse es este:')
    imprimirArrayFormateado(arrayUnido)
    // Filtrar solo los números mayores a 5
    let arrayFiltrado = arrayUnido.filter(num => {
        if (num > 5) {
            contador++; 
            return true; 
        }
        return false;
    });
    console.log(`Se han eliminado un total de ${contador}, números.`)
    return arrayFiltrado;
}
console.log(`Los arrays son estos:`)
imprimirArrayFormateado(array1)
imprimirArrayFormateado(array2)
imprimirArrayFormateado(array3)
// Llamada a la función con múltiples arrays
let arrayMayor = creaArrayMayor(array1, array2, array3);

//El array después de filtrarse es este
imprimirArrayFormateado(arrayMayor);
