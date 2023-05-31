// ARROW FUNCTIONS EN UN forEach y un map

const carrito = [

    { nombre: 'Monitor de 29 pulgadas', precio: 560 },
    { nombre: 'Televisor', precio: 380 },
    { nombre: 'Airbuds', precio: 890 },
    { nombre: 'Aire Acondicionado', precio: 900 },
    { nombre: 'Carro Ford Ranger', precio: 400000 },
    { nombre: 'CPU Gamer', precio: 2000 },
]

const nuevocarrito = carrito.forEach( producto => `${producto.nombre} tiene un precio de: ${producto.precio}`);

console.log(nuevocarrito);


carrito.map((producto) => console.log(`${producto.nombre} tiene un precio de: ${producto.precio}`));