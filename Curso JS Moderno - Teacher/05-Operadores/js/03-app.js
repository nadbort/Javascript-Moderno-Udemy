
let numero1;

//--> Undefined significa que la variable fue creada pero nunca se le asigno un valor
//console.log(numero1);

let numero2 = null;

//--> Objeto null
//console.log(numero2);

//--> Si comparamos si son iguales undefined y null nos dira que true

console.log(numero1 == numero2);

//--> Es mejor comparar siempre con el comparador estricto

console.log(numero1 === numero2);