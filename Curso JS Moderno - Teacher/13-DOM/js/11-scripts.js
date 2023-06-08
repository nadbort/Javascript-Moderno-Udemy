const boton = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

boton.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter(){

    if(footer.classList.contains('activo')){

        footer.classList.remove('activo');
        boton.classList.remove('activo');
        this.textContent = "Idioma y Moneda";

    }else{

        footer.classList.add('activo');
        boton.classList.add('activo');
        this.textContent = 'X Cerrar';

    }

  
}