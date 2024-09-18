"use strict";

//! Variables
var alturaMarcos = 170 /*cm*/
var pesoMarcos = 80 /*Kg*/

var alturaJuan = 150 /*cm*/
var pesoJuan = 57 /*Kg*/

// var marcosEsMayor = null /*variable que indica si es mayor marcos en IMC*/

//? Solución
console.log("¿Tiene Marcos un IMC mayor que el de Juan?: "+calculoPeso(alturaMarcos, pesoMarcos, alturaJuan, pesoJuan))

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
// Mostrar el resultado en el HTML
document.addEventListener("DOMContentLoaded", function() {
    const resultado = document.getElementById("resultado");
    const esMayor = calculoPeso(alturaMarcos, pesoMarcos, alturaJuan, pesoJuan);
    resultado.textContent += esMayor ? " Sí" : " No";
});

