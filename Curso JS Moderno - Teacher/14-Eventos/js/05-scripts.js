// Eventos de Scroll

window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');

    const ubicacion = premium.getBoundingClientRect(); // Esto nos va a decir a que dsitancia se encuentre ese objeto

    if (ubicacion.top < 100){
        console.log('El elemento ya esta visible');
    }


    console.log(ubicacion);

});