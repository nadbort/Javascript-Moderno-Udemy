const autenticado = true;

//--> Da por implicito que es true, no hay necesidad de colocar autenticado === true

if(autenticado === true){

    console.log('Si puedes ver Netflix');

}else{
    console.log('No, no puedes verlo');
}

//--> Operador ternario

console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');