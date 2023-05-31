// RECORRER UN ARREGLO CON EL METODO .map

const carrito = [

    { nombre: 'Monitor de 29 pulgadas', precio: 560 },
    { nombre: 'Televisor', precio: 380 },
    { nombre: 'Airbuds', precio: 890 },
    { nombre: 'Aire Acondicionado', precio: 900 },
    { nombre: 'Carro Ford Ranger', precio: 400000 },
    { nombre: 'CPU Gamer', precio: 2000 },
]




//--> Recorrer el mismo metodo usando .forEach

carrito.forEach(function(producto){ // carrito es el plural y producto es singular cada producto del carrito

    console.log(`${producto.nombre} tiene un precio de: ${producto.precio}`);

} )

//--> Recorrer el mismo metodo usando .map

//--> La principal diferencia entre .map

carrito.map(function(producto){ // carrito es el plural y producto es singular cada producto del carrito

    console.log(`${producto.nombre} tiene un precio de: ${producto.precio}`);

} )

//--> La principal diferencia entre .map y for each es que .map crea un nuevo arreglo y .forEach no

const nuevoArreglo = carrito.map(function(producto){ // carrito es el plural y producto es singular cada producto del carrito

    return `${producto.nombre} tiene un precio de: ${producto.precio}`;

} )

console.log(nuevoArreglo);