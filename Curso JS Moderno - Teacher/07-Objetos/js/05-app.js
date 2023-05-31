//--> Un objeto dentro de otro objeto

const producto = {

    nombre: 'Lapiz',
    precio: 45,
    disponible: true,
    informacion: {
        medidas:{
           peso: '1KG',
           medida:'1m'
        },

        fabricacion: {
            pais: 'China'
        }
    }
}

console.log(producto);

console.log(producto.informacion.medidas.peso);