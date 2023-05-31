// FILTER

// Filter es muy versatil porque te permite hacer muchas operaciones sobre los arreglos

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Encontrar todos los productos que cuesten mas 400 en el carrito


let resultado;

resultado = carrito.filter( producto => producto.precio >= 400 );

// Tambien sirve para llamar los elementos excepto uno

resultado = carrito.filter( producto => producto.nombre !== 'Audifonos'); //Traera todos los productos excepto Audifonos


console.log(resultado);