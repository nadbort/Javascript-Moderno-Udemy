// .SOME

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo

// Una forma es hacerlo con un foreach

/*
meses.forEach( (mes) => {

    if(mes === 'Marzo'){
        console.log('Si existe');
    }

})
*/

// Usando .includes

const resultado = meses.includes('Febrero'); // Solo funciona con arreglos sencillos con un indice no con arreglos con objetos

console.log(resultado);

// En un arreglo de objetos se utiliza .some

const existe = carrito.some((producto) => {
   
    return producto.nombre === 'Teclado';

});

console.log(existe);
