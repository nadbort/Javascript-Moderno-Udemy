// OBJECT CONSTRUCTOR

// Object literal
const producto = {

    nombre: 'Lapiz',
    precio: 45,
    disponible: true
}

// Object constructor

function Producto(nombre, precio){

    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;

}

const producto2 = new Producto('Camiseta', 98);

console.log(producto2);