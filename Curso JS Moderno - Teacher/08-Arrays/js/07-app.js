// ELIMINAR ELEMENTOS DEL ARREGLO

const meses = ['Enero', 'Febrero', 'Marzo'];


meses.push('Abril');
meses.push('Mayo');

console.table(meses);


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

const producto4 = {
    nombre: 'Airbuds',
    precio: 800
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);



carrito.unshift(producto3);

console.table(carrito);

//--> Eliminar ultimo elemento del arreglo

carrito.pop();

console.table(carrito);

//--> Eliminar del inicio del arreglo

carrito.shift();

console.table(carrito);

//--> Eliminar desde cualquier posicion

carrito.shift(0, 1); // (posicion, cuantos elementos se quieren eliminar desde esa posicion)
console.table(carrito);


