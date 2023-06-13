// Event bubling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {

    e.stopPropagation(); // Detiene la propagacion del evento
    
    console.log('Click en Card');


});


infoDiv.addEventListener('click', () => {

    e.stopPropagation(); // Detiene la propagacion del evento
    
    
    console.log('Click en Info');


});

titulo.addEventListener('click', () => {

    e.stopPropagation(); // Detiene la propagacion del evento
    
    
    console.log('Click en Titulo');


});