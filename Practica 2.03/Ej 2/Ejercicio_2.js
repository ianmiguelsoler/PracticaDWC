"use strict";

//! Variables
var nombreCurso = "2ºDAW"
var anoCurso = "2024"
var descCurso = "Es un curso donde se aprende programación Web"
var alumnado = []

//? Solución
var curso = creaCurso(nombreCurso, anoCurso, descCurso, alumnado);
muestraCurso(curso)

//* Funciones
function creaCurso(nombreCurso, anoCurso, descCurso, alumnado){
    return {
        nombreCurso: nombreCurso,
        anoCurso: anoCurso,
        descCurso: descCurso,
        alumnado: alumnado
    };
};

function muestraCurso(curso){
    console.log(`El Curso Contiene esto:\n`)
    for (const clave in curso) {
        if (Object.hasOwnProperty.call(curso, clave)) {
            const element = curso[clave];
            if (element !== null && element !== undefined && element.length !== 0) {
                console.log(`${clave} => ${element}`);
            }
            else{
                console.log(`${clave} => NO TIENE NINGÚN DATO`);
            }
        }
    }
};

