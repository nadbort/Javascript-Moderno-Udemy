/*
for(let i = 0; i < 10;) {
    
    if(i === 5){
        console.log('Este es el 5');
        break; // Apenas se cumpla esta condicion se terminara el ciclo.

        //continue; A diferencia de break no se saldra del ciclo.
    }
    console.log(`Numero ${i}`);

}
*/

const carrito = [

    { nombre: 'Monitor de 29 pulgadas', precio: 560 },
    { nombre: 'Televisor', precio: 380, descuento: true },
    { nombre: 'Airbuds', precio: 890 },
    { nombre: 'Aire Acondicionado', precio: 900 },
    { nombre: 'Carro Ford Ranger', precio: 400000 },
    { nombre: 'CPU Gamer', precio: 2000, descuento:true },
]

for(let i = 0; i < carrito.length; i++){

    if(carrito[i].descuento){

        console.log(`El producto ${carrito[i].nombre} tiene descuento`);
        continue;
    }

    console.log(carrito[i].nombre);
}