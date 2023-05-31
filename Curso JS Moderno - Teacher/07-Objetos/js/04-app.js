const producto = {

    nombre: 'Lapiz',
    precio: 45,
    disponible: true
}

//--> Antes para extraer una propiedad y guardarla en una variable se hacia lo siguiente

const productoNombre = producto.nombre;


//--> Ahora con ECMASCRIPT6 se utiliza la destructurizacion haciendo lo lo siguiente

//const { nombre } = producto; //--> En los {} extrae la propiedad y a la vez crea la variable "nombre";

//console.log(nombre);

//--> Incluso se puede extraer todas las propiedades que queramos en una sola linea

const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);