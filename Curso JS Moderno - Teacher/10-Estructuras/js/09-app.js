// EL OPERADOR TERNARIO

const autenticado = true;
const puedePagar = false;

// Despues del ? tenemos el "if" y despues del : es el else
console.log(autenticado ? 'Si esta autenticado' : 'No no esta autenticado');

// Sino quieres que imprima nada en caso de caer en el else puedes usar el valor null
console.log(autenticado ? 'Si esta autenticado' : null);

//--> Revisar dos condiciones en un ternario

console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No no puedepagar');

