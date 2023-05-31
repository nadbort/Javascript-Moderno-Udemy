//--> BLOQUEAR UN OBJETO

"use strict"; // Esto habilita el modo estricto, una vez habilitado tenemos acceso a unos metodos para bloquear objetos



const producto = {

    nombre: 'Lapiz',
    precio: 45,
    disponible: true
}

//--> FREEZE
Object.freeze( producto ); // Congela el objeto para que no pueda ser modificado

//producto.nombre = 'Cuaderno'; // no permite editar propiedades

//producto.imagen = 'imagen.jpg'; // no permite añadir nuevas propiedades

//delete producto.precio; // no permite borrar propiedades

//--> IsFrozen Preguntar si un objeto esta congelado

console.log(Object.isFrozen(producto));