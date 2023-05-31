//--> Destructuring para objetos anidados

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


//--> Llama al objeto informacion y todas sus llaves
//const { informacion } = producto;

//console.log(informacion);

//--> Llama el objeto medidas dentro de información, mas no llama al  objeto informacion
//const { informacion: { medidas } } = producto;

//console.log(medidas);

//--> Para llamar el objeto informacion y a la vez el objeto medidas hay que hacer lo siguiente

const { informacion, informacion: { medidas }} = producto;

console.log(informacion);
console.log(medidas);