// Evento Submit

const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', (e) => {

    e.preventDefault(); // Va a prevenir la accion por defecto del elemento


    console.log(e);

});