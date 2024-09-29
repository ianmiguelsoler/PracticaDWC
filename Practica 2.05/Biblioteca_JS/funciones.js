"use strict";


//!-------------------------------Ejercicio 1-----------------------------------
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

//!-------------------------------Ejercicio 2-----------------------------------

//* Funciones
// Función que muestra el tiempo en formato adecuado (mm:ss).
function mostrarTiempo(minutos, segundos) {
  //PadStart funciona de la siguiente manera, cuando la cadena no llega a la longitud deseada le añade lo que le pongamos, en este caso 0.
  let min = String(minutos).padStart(2, '0');
  let sec = String(segundos).padStart(2, '0');
  console.log(`${min}:${sec}`);
}

// Función del temporizador que recibe minutos y segundos como parámetros.
function temporizador(minutos, segundos) {
  // Validación de parámetros.
  if (typeof minutos !== 'number' || typeof segundos !== 'number' || minutos < 0 || segundos < 0 || segundos > 59) {
      console.error("Ya deberías de haber aprendido:\n 1-. Que los números que tienes que introducir son mayores a 0\n 2-. Y los segundos no deberían pasar de 59");
      return;
  }
  // Si solo se recibe un parámetro, se considera que son segundos.
  if (minutos === undefined || minutos === null) {
      minutos = 0;
  }
  if (segundos === undefined || segundos === null) {
      segundos = minutos;
      minutos = 0;
  }
  // Inicializar el tiempo total en milisegundos.
  let tiempoTotal = (minutos * 60) + segundos;

  // Definir la cuenta regresiva usando setInterval.
  let temporizadorId = setInterval(() => {
      let min = Math.floor(tiempoTotal / 60);
      let sec = tiempoTotal % 60;
      mostrarTiempo(min, sec);
      tiempoTotal--;  // Restar 1 segundo.

      // Si el tiempo llega a 0, detener el temporizador.
      if (tiempoTotal < 0) {
          clearInterval(temporizadorId);
          console.log("¡Tiempo terminado!");
      }
  }, 1000);
}

//!-------------------------------Ejercicio 3-----------------------------------

function solicitarDni() {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  let resultadoDniGuardados = [];

  // Función para calcular la letra de control de un DNI
  function calcularLetra(dni) {
      return letras[dni % 23];
  }

  // Función principal que solicita el DNI
  function pedirDni() {
      let dni = prompt("Escriba un DNI válido (8 números) o -1 para terminar:");
      
      // Si se ingresa -1, detener el proceso y mostrar los resultados
      if (dni === "-1") {
          clearInterval(intervalo);
          console.log("Todos los DNIs introducidos son:");
          resultadoDniGuardados.forEach((letra, index) => {
              console.log(`${index + 1}.- ${letra}`);
          });
      } else {
          // Validar si el DNI tiene 8 dígitos
          //?/^\d{8}$/.test(dni) --> Es una forma de validar un número específico de dígitos, en este caso 8. [.test(dni) comprueba si la cadena dni cumple con el patrón definido]
          if (dni.length === 8 && /^\d{8}$/.test(dni)) {
              let letra = calcularLetra(dni);
              resultadoDniGuardados.push( dni + letra);
              console.log(`DNI: ${dni} - Letra: ${letra}`);
          } else {
              console.error("¡Debe ser un DNI de 8 números!");
          }
      }
  }

  // Usar setInterval para pedir DNI cada 5 segundos
  let intervalo = setInterval(pedirDni, 5000);
}





//Ejecución de funciones importadas.

/* console.log(sumar(5, 5));
console.log(add(5, 5));
console.log(Feo.restar(5, 5));
console.log(Feo.dividir(85, 0));
console.log(multi(5, 5)); */

/*****************************************************************
 *  El objeto Window.
 *
 *  Automatización de tareas.
 *
 *  setInterval(función,tiempo,parámetros)  → Repite una acción.
 *  setTimeout(función,tiempo, parámetros)  → Programa una acción.
 *  clearTimeout/clearInterval(id) 	        → Elimina acción.
 *
 */

let idMostrar = 0;
let idDespedir = 0;

// const mostrarMensaje = (mensaje) => {
//   console.log(`${Date.now()} Mostrando ${mensaje}.`);
// };

// const mostrarDespedida = (mensaje) => {
//   console.log(mensaje);
// };

// Función sin parámetros.
/* const idMostrar = setInterval(mostrarMensaje, 1000); */

// Función con parámetros.
/* idMostrar = setInterval(mostrarMensaje, 1000, "¡Hola, feos!"); */

// Función flecha. Versión recomendable a partir de ahora.
/* idMostrar = setInterval(() => {
  mostrarMensaje("¡Hola desde una función flecha!");
}, 1000); */

// Mostrar el identificador del setInterval.
// console.log(`El identificador del setInterval es: ${idMostrar}`);

// Realizar una tarea transcurrido un tiempo.
/* idDespedir = setTimeout(mostrarDespedida, 5000, "¡Adiós, feos!"); */

// Versión con función flecha (USAR SIEMPRE).
/* idDespedir = setTimeout(() => {
  mostrarDespedida("¡Adiós desde una función flecha, feos!");
}, 5000); */

// Detener el intervalo anterior.
/* idDespedir = setTimeout(() => {
  clearInterval(idMostrar);
}, 10000); */

/************************************************************
 *   Interactuar con el usuario (NO UTILIZAR EN LO SUCESIVO).
 *
 *  alert() 	→ Abre ventana de información.
 *  confirm() 	→ Abre una ventana de confirmación.
 *  prompt() 	→ Recoge información del usuario.
 *
 * */

//alert("¡Hola, feos"); // Los navegadores suelen bloquearlos. No se puede confiar el ellos.

/* const decision = confirm(
  "¿Está seguro de borrar este registro de la base de datos?"
);

console.log(`El usuario ha decidio que ${decision}.`); // Es booleano. */

/* const informacion = prompt("¿Cuál es tu arma de destrucción masiva favorita?");

console.log(`Mi arma de destrucción masiva favorita es ${informacion}`); */



//!Exportamos las funciones necesarias para la solución.
export { cadenaCani ,temporizador, solicitarDni};