const producto = "Monitor de 20 pulgadas";
const precio = " 30 USD";

// --> Usando el metodo .concat
console.log(producto.concat(precio));

// --> Agregando el string que tu desees, en el metodo .concat
console.log(producto.concat(' 20% de descuento'));

// --> Concatenar usando +
console.log(producto + precio);

console.log(producto + " con un precio de: " + precio);

// --> Nueva forma de concatenar en ECMASCRIPT 6, usando template strings o template litaral

console.log(`El producto: ${producto} tiene un precio de: ${precio}`);