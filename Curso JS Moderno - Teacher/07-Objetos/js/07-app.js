//--> EL PROBLEMA CON LOS OBJETOS

const producto = {

    nombre: 'Lapiz',
    precio: 45,
    disponible: true
}

//--> El problema principal con los objetos es que sus propiedades se pueden reescribir o eliminar facilmente

producto.nombre = 'Cuaderno';

console.log(producto);