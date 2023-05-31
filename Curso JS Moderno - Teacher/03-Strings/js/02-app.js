const producto = "Monitor 29";

// --> El metodo .length nos dice cuantos caracteres tiene nuestro string, incluido los espacios.
console.log(producto.length);

const producto2 = "Hola amigos de Dingus";

//--> Nos regresa el numero de la posicion desde donde comienza la palabra que escribimos en el argumento
console.log(producto2.indexOf('amigos'));

const producto3 = "Hola amigos de Dingus";

//--> .includes nos regresa true o false si el elemento que estamos buscando existe. 
console.log(producto3.includes('amigos'));