// RECORRER UN ARREGLO CON EL METODO .forEach

const carrito = [

    { nombre: 'Monitor de 29 pulgadas', precio: 560 },
    { nombre: 'Televisor', precio: 380 },
    { nombre: 'Airbuds', precio: 890 },
    { nombre: 'Aire Acondicionado', precio: 900 },
    { nombre: 'Carro Ford Ranger', precio: 400000 },
    { nombre: 'CPU Gamer', precio: 2000 },
]


//--> Anteriormente se utilizaba esta forma para recorrer un arreglo

for(let i = 0; i < carrito.length; i++ ){

    //console.log(carrito[i]);

    //Si queremos imprimir algunos datos como el nombre y el precio se puede complejizar el codigo

    console.log(`${carrito[i].nombre} tiene un precio de: ${carrito[i].precio}`);

}

//--> Recorrer el mismo metodo usando .forEach

carrito.forEach(function(producto){ // carrito es el plural y producto es singular cada producto del carrito

    console.log(`${producto.nombre} tiene un precio de: ${producto.precio}`);

} )