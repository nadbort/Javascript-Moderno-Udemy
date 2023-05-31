const producto = 'Monitor de 20 pulgadas';

console.log(producto);

//--> Remplazar una palabra dentro de tu cadena de caracteres por otra.  
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));


//-----------------------------------
//--> Cortar un string desde una posicion de inicio de caracteres hasta una final

//--> Corta desde la posicion del caracter 0 hasta la posicion del caracter 10
console.log(producto.slice(0, 10));

//--> Corta desde la posicion 8 hacia adelante. 
console.log(producto.slice(8));

//--> No hace nada porque el segundo parametro es menor al numero de inicio
console.log(producto.slice(2,1));

//---------------------------------
//--> Alternativa a slice se llama substring

console.log(producto.substring(0, 10));
//--> En este caso si lo va a reconocer.
console.log(producto.substring(2,1));

const nombre = "Juan";
console.log(nombre.substring(0,1));

//-------------------------------
//--> Otra forma de cortar la primer letra es usando el metodo charAt

console.log(nombre.charAt(0));