"use strict";

//! Variables
//Creación de nuevo usuario
let nombre = "Ian"
let preferencias = { tema: "oscuro", idioma: "español", edad: 18 };
let contacto = {
    direccion: {
        calle: "Calle Madre Elisa Oliver Molina, 1 6",
        localidad: "Murcia",
        pais: "España"
    },
    correoelectronico: "ianmiguel@yahoo.com",
    telefono: ""
};



const usuarios = [
    {
      nombre: "Luis",
      preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
      contacto: {
        direccion: {
          calle: "Calle falsa, 666",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correofalso@yahoo.com",
        telefono: "123456789",
      },
    },
    {
      nombre: "Marta",
      preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
      contacto: {
        direccion: {
          calle: "Calle también falsa, 123",
          localidad: "Andorra la Vella",
          pais: "Andorra",
        },
        correoelectronico: "correoandorrano@gmail.com",
        telefono: "",
      },
    },
    {
      nombre: "Alberto",
      preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
      contacto: {
        direccion: {
          calle: "Elm Street, 666",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "correonulo@yahoo.com",
        telefono: "548632478",
      },
    },
    {
      nombre: "Jacinto",
      preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
      contacto: {
        direccion: {
          calle: "Elm Street, 667",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correofalso@gmail.com",
        telefono: "",
      },
    },
    {
      nombre: "Rigoberta",
      preferencias: { tema: "claro", idioma: "francés", edad: 34 },
      contacto: {
        direccion: {
          calle: "Calle inexistente, 6",
          localidad: "Burdeos",
          pais: "Francia",
        },
        correoelectronico: "correofalso@gmail.com",
        telefono: "232547859",
      },
    },
    {
      nombre: "Sandra",
      preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
      contacto: {
        direccion: {
          calle: "Calle de mentira, s/n",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "estecorreonoexiste@gmail.com",
        telefono: "452158697",
      },
    },
    {
      nombre: "Sandra",
      preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
      contacto: {
        direccion: {
          calle: "Calle existente, 34",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "correoinexistente@yahoo.com",
        telefono: "",
      },
    },
  ];

//? Solución
// let usuarioNuevo = creaUsuario(nombre, preferencias, contacto);
// muestraUsuario(usuarioNuevo)

//Con esto se agregará el usuario al usuarios.
// let usuarioAgregado = agragaUsuario(usuarios, usuarioNuevo)
// muestraUsuario(usuarioAgregado)


//Mostrara el array de objetos filtrado
// console.log("Los usuarios mayores de edad son los siguientes:")
// let filtradoPorEdad = filtrarPorEdad(usuarios, 18)
// muestraUsuario(filtradoPorEdad)


// console.log("Los usuarios que contienen el correo de Yahoo son los siguientes:")
// let filtradoCorreo = filtrarPorCorreo(usuarios, "yahoo")
// muestraUsuario(filtradoCorreo)

console.log("Los usuarios mayores de edad, que son de España y tengan de preferencia el tema claro son los siguientes:")
let tema = "claro"
let pais = "España"
let edad = 18
let filtradoTema = filtrarPorTema(usuarios,edad, tema, pais);
muestraUsuario(filtradoTema);

//* Funciones
function creaUsuario(nombre, preferencias, contacto) {
    return {
        nombre: nombre,
        preferencias: {
            tema: preferencias.tema,
            idioma: preferencias.idioma,
            edad: preferencias.edad
        
        },
        contacto: {
            direccion: {
                calle: contacto.direccion.calle,
                localidad: contacto.direccion.localidad,
                pais: contacto.direccion.pais
            },
            correoelectronico: contacto.correoelectronico,
            telefono: contacto.telefono
        },
    }
};
//Función que muestra todo el contenido desglosado del usuario.
function muestraUsuario(usuario) {
    console.log(`%cEl Objeto contiene los siguientes datos:\n`, 'color: red; font-weight: bold;');//He cambiado el color para distinguirlo mejor.
    for (const clave in usuario) {
        //Este if se asegura El tipo de dato es un objetoue todas que son directamente del objeto usuario, no propiedades heredadas del prototipo.
        if (Object.hasOwnProperty.call(usuario, clave)) {
            const element = usuario[clave];
            if (Array.isArray(element)) { // Verifica si es un array
                console.log(`${clave} => ${JSON.stringify(element)}`);
            }
            else if (typeof element === 'object') { // Verifica si es un objeto.
                    if (element !== null && element !== undefined && element.length !== 0) {
                        console.log("Dentro de ------>",clave)
                        muestraUsuario(element);
                        console.log(`%cTerminado el muestreo del objeto. ${clave.toUpperCase()}`, 'color: blue; font-weight: bold;',);
            }}
            else{
                console.log(`${clave} => ${JSON.stringify(element)}`);
            }
        }
    }
};
//Añade un usuario.
function agragaUsuario(usuario, usuarioAgregado){
    let usuarioNuevo = { ...usuario, ...usuarioAgregado}
    return usuarioNuevo
};
//Función que filtra los que son mayores de edad y se guarda el objeto en otro array de objetos.
function filtrarPorEdad(usuarios, edadMinima) {
  return usuarios
    .filter(usuario => usuario.preferencias.edad >= edadMinima)
    // .map(usuario => ({ ...usuario }));
}
//Función que filtra el array de usuarios que tiene el correo electronico del servidor Yahoo.
function filtrarPorCorreo(usuarios, dominio) {
  return usuarios
    .filter(usuario => usuario.contacto.correoelectronico.includes(dominio))
    // .map(usuario => ({ ...usuario }));
}
//Función que filtra el array buscando que sean de españa y mayores de edad.
function filtrarPorTema(usuarios, edad, tema, pais){
  return usuarios.filter(usuario => 
    usuario.preferencias.edad >= edad && 
    usuario.preferencias.tema.toLowerCase() === tema.toLowerCase() && 
    usuario.contacto.direccion.pais.toLowerCase() === pais.toLowerCase()
  );
}
