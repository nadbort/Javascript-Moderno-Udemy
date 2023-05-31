// RECORRER UN ARREGLO

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);

//--> Cuanto mide el arreglo

console.log(meses.length);

//--> Para recorrer un arreglo se utiliza un iterador, en este caso un for loop

for(let i = 0; i < meses.length; i++ ){

    console.log(meses[i]);

}