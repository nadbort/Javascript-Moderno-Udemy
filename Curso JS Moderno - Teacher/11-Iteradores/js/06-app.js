// FOREACH

const meses = ['Enero', 'Febrero', 'Marzo'];


/*
meses.forEach( (mes) =>{

    console.log(mes);

} );

*/

// Tambien usando el forEach puedes pasarle el indice
meses.forEach( (mes, indice) =>{

    console.log(`${indice}: ${mes}`);

} );