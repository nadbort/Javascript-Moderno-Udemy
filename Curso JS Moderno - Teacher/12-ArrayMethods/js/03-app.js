// .REDUCE

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Sumar totales usando un .forEach

/*
let total = 0;

carrito.forEach( producto => total += producto.precio );

console.log(total);

*/


// Sumar totales usando un .reduce

const sumaTotal = carrito.reduce( (acumulador, producto) => {
  
    return acumulador + producto.precio;

}, 0 );

console.log(sumaTotal);