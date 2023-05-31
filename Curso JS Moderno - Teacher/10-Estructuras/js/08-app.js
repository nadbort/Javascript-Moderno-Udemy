// Detener la ejecucion de un IF con una funcion

const puntaje = 450;


// Las estructuras de control se encierran dentro de una funcion para poder utilizar el return
const miPuntaje = () => {

    if(puntaje > 400){
        console.log('Excelente');
        return; // Si esta condicion es verdadera no ejecutara la siguiente.
    }
    
    if(puntaje > 300){
    
        console.log('Buen puntaje felicidades');
        return;
    }

}

miPuntaje();