"use strict";

//! Variables
var discente = {
    idDiscente: 1,
    nombreDiscente: "Pedro",
    apellidos: "Pica Piedras",
    aficiones: ["Picar", "Dormir"],
    notas:{
        primera: 7.8,
        segunda: 8,
        tercera: 9
    },
    getCalcularMedia: function() {
        console.log("La nota media es: ");
        return (this.notas.primera + this.notas.segunda + this.notas.tercera) / 3;
    },
    getAficiones: function() {
        console.log(`Las Aficiones Son Estas:\n`);
        this.aficiones.forEach(element => {
            console.log(element);
        });
    },
    getInforme: function() {
        console.log(`El informe que ha pedido es este: \n`);
        for (let clave in this) {
            if (typeof this[clave] !== 'function') {
                console.log(`${clave}: ${JSON.stringify(this[clave])}`);
            }
        }
    }
}

//? Solución
comprobarTodo(discente)

//* Funciones
//Funcion que hace todas las llamadas para comprobar que funcionen
function comprobarTodo(discente) {
    console.log("Comprobación código Discente: \n");

    // Imprimendo propiedades simples
    for (let clave in discente) {
        if (typeof discente[clave] !== 'function') {
            console.log(`${clave}: ${JSON.stringify(discente[clave])}`);
        }
    }

    // Llamar a las funciones
    console.log("Resultado de getCalcularMedia: ", discente.getCalcularMedia());
    discente.getAficiones();
    discente.getInforme();
}
