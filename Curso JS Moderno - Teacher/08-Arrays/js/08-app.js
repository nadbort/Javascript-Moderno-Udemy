// DESTRUCTURING CON ARREGLOS

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

//-----------------------------------

const numeros = [10,20,30,40,50];

//const [ primero, segundo, tercero ] = numeros; // A diferencia de los objetos puedes colocar cualquier nombre a la variable
// en cambio en los objetos debe seguir el nombre de la propiedad. 

//console.log(tercero); // tendria el valor de 30

// --> Como crear la variable del 30 sin crear las variables de las primeras posiciones

//-------------------

//const [ , , tercero ] = numeros; // Las , indican las posiciones

//console.log(tercero);

// --> Como extraer la primera y segunda posicion y crear un arreglo aparte con los elementos 30, 40, 50

const [ primero, segundo, ...tercero ] = numeros; // ... tercero creara un arreglo con las ultimas posiciones,
// el resultado sera 30, 40, 50

console.log(tercero);

