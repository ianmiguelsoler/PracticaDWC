"use strict";

//! Variables
var alturaMarcos = 170 /*cm*/
var pesoMarcos = 80 /*Kg*/

var alturaJuan = 150 /*cm*/
var pesoJuan = 57 /*Kg*/

//? Solución
console.log("¿Tiene Marcos un IMC mayor que el de Juan?: "+ calculoPeso(alturaMarcos, pesoMarcos, alturaJuan, pesoJuan))


//* Funciones
function calculoPeso(alturaMarcosF, pesoMarcosF, alturaJuanF, pesoJuanF) {
    
    let imcMarcos = pesoMarcosF / Math.pow(alturaMarcosF, 2); // Convertimos cm a metros
    let imcJuan = pesoJuanF / Math.pow(alturaJuanF, 2); // Convertimos cm a metros

    let marcosEsMayorF = imcMarcos > imcJuan; // Verificamos si el IMC de Marcos es mayor

    if(marcosEsMayorF){
        return true
    }
    else{
        return false
    }
}
