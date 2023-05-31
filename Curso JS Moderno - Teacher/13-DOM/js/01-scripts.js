let elemento;

//Nos selecciona todo el documento
elemento = document;

// Nos selecciona todos los elementos, incluyendo etiquetas y clases 
elemento = document.all;

// Nos selecciona el head del html
elemento = document.head

// Nos selecciona el body del html
elemento = document.body

// Selecciona el dominio donde estamos trabajando
elemento = document.domain;

// Selecciona todos los formularios que haya.
elemento = document.forms;

//Estos elementos normalmente se muestran como un arreglo, estos tambien se llaman HTML collection

// Podriamos usar [] para seleccionar la posicion del elemento que queremos mostrar
elemento = document.forms[0];

// Tambien podriamos seleccionar los atributos de ese elemento con notacion de puntos
elemento = document.forms[0].id;

// Nos da la lista de clases que tiene el elemento HTML
elemento = document.forms[0].classList;


elemento = document.forms[0].action;

// Nos da todos los elementos que utilizen la etiqueta a, todos los enlaces
elemento = document.links;

// Selecciona todas las imagenes de la pagina
elemento = document.images;


console.log(elemento);