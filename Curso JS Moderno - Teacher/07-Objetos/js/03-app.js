
const producto = {

    nombre: 'Lapiz',
    precio: 45,
    disponible: true
}

// Agregar nuevas propiedades al objeto

producto.imagen = 'imagen.jpg';

// Eliminar propiedades

delete producto.disponible;

console.log(producto);