const reproductor = {

    cancion: '',
   
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),

    pausar: () => console.log(`Pausando...`),

    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),


    // Set es una forma de agregar valores
    set nuevaCancion(cancion){

        this.cancion = cancion;

        console.log(`Añadiendo ${cancion}`);

    },

    // Get es una forma de obtener esos valores
    get obtenerCancion(){

        console.log(`${this.cancion}`);
    }

}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist('Electronica');


// A diferencia de las otras propiedades usando set y get no se necesita los () para llamarla
reproductor.nuevaCancion = 'Summer times';
reproductor.obtenerCancion;