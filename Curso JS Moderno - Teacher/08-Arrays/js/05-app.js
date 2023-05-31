// AGREGAR ELEMENTOS AL INICIO O FIN DE UN ARREGLO

const meses = ['Enero', 'Febrero', 'Marzo'];

//--> Agregar al final del arreglo

meses.push('Abril');
meses.push('Mayo');

console.table(meses);


//--> Ejemplo carrito de compras

const carrito = [];

const producto = {
    nombre: 'Monitor',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Camara',
    precio: 1000
}

carrito.push(producto);
carrito.push(producto2);

//--> Agregar al inicio del arreglo

carrito.unshift(producto3);

console.table(carrito);

