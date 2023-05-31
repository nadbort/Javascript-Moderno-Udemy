// ENTENDER .THIS

const producto = {

    nombre: 'Lapiz',
    precio: 45,
    disponible: true,
    mostrarInfo: function(){

        //console.log(`El producto: ${nombre} tiene un precio de ${precio}`); //--> Cuando no usamos .this las variables las leera por fuera y no las del objeto en si mismo. 

        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`); // La palabra .this se refiere a los variables dentro del mismo objeto.



    }
}

producto.mostrarInfo();