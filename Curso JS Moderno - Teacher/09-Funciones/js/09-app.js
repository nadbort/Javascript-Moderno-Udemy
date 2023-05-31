// AÑADIR FUNCIONES A UN OBJETO

const reproductor = {
   
    reproducir: function(id){

       console.log(`Reproduciendo cancion con el id ${id}`);

    },

    pausar: function(){

       console.log(`Pausando...`);

    },

    crearPlaylist: function(nombre){

        console.log(`Creando la playlist de ${nombre}`);
        
    }

}

reproductor.reproducir(30);
reproductor.reproducir(20);

reproductor.pausar();

// Tambien se puede agregar propiedades por fuera del objeto

reproductor.borrar = function(id){

    console.log(`Borrando cancion numero ${id}`)
}

reproductor.borrar(20);

reproductor.crearPlaylist('Heavy metal');