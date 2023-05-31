// FOR IN

// La diferencia con for of es que este itera sobre objetos y no arreglos

/*
let automovil = {
    modelo: 'Camaro',
    año: 1994,
    placa: 'RLH85D'
}

for (let propiedad in automovil) {

    console.log(propiedad);

}
*/

// Nueva forma de recorrer un arreglo en ecma escript 7

let automovil = {
    modelo: 'Camaro',
    año: 1994,
    placa: 'RLH85D'
}

for ( let [llave, valor] of Object.entries(automovil) ) {

    console.log(valor);

}
