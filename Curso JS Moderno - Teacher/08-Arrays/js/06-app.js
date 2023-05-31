// CREAR UN ARREGLO CON EL SPREAD OPERATOR

const carrito = [];

const producto = {
    nombre: 'Monitor',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Camara',
    precio: 1000
}

//--> A diferencia de utilizar Unshift y push que son de tipo imperativa, es decir que modifican el arreglo
// en si. Usando el spread operator utiliza la forma no declarativa, es decir no modifica el arreglo en si
// sino que crea una nueva variable. 

let resultado;

resultado = [...carrito, producto] // Lo que hace es crear una copia del array carrito usando los ...
// agrega el objeto producto a el.

console.table(resultado);