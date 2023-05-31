//--> SELLAR UN OBJETO

"use strict"; // Esto habilita el modo estricto, una vez habilitado tenemos acceso a unos metodos para bloquear objetos



const producto = {

    nombre: 'Lapiz',
    precio: 45,
    disponible: true
}

//--> SEAL
Object.seal( producto ); // La diferencia con frozen es que en esta si se puede modificar las propiedades existentes
// pero no se puede agregar nuevas propiedades ni eliminarlas. 

//producto.imagen = 'imagen.jpg'; // no permite añadir nuevas propiedades

//delete producto.precio; // no permite borrar propiedades

//--> IsFrozen Preguntar si un objeto esta congelado

console.log(Object.isSealed(producto));