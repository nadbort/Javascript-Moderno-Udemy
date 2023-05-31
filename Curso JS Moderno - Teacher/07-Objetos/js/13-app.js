

const producto = {

    nombre: 'Lapiz',
    precio: 45,
    disponible: true
}

//--> Obtener las llaves de un objeto

// se puede utilizar para saber si un objeto tiene valores o no

console.log(Object.keys(producto));

//--> Obtener los valores de un objeto

console.log(Object.values(producto));

//--Obtener llaves y valores de un objeto

console.log(Object.entries(producto));