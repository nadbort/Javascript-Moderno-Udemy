// .FIND

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con .forEach

let resultado;

carrito.forEach( (producto, index) => {

    if(producto.nombre === 'Celular'){
      
        console.log(carrito[index]);

    }

});



// Con .find

// El problema con .find es que siempre traera el primero que encuentre en la condicion, 
// Si hay mas productos llamados Audifonos, solo traera el primero.
const resultado2 = carrito.find( producto => producto.nombre === 'Audifonos' );

console.log(resultado2);