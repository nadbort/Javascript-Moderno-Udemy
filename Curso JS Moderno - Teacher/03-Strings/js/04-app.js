const producto = "                 Esto es un monitor            ";

console.log(producto);
console.log(producto.length);

// --> Eliminar espacio del inicio

console.log(producto.trimStart());

// --> Eliminar espacio del inicio
console.log(producto.trimEnd());

//--> Utilizar metodos de forma encadenada, en Javascript es llamada Chaining

console.log(producto.trimStart().trimEnd());

//--> Anteriormente solo se utilizaba este metodo

console.log(producto.trim());