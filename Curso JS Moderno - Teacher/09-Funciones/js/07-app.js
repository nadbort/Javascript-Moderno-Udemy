// COMO SE COMUNICAN LAS FUNCIONES

iniciarApp();

function iniciarApp() {
  
    console.log('Iniciando app...');

    segundaFuncion();

}

function segundaFuncion() {

  console.log('Desde la segunda funcion');

  usuarioAutenticado('Pablo');

}

function usuarioAutenticado(nombre){

   console.log('Autenticando usuario por favor espere...');
   console.log(`Usuario ${nombre} autenticado exitosamente!`);

}