// FOR LOOP

// Este se ejecuta hasta que el codigo deja de cumplir una condicion

//for(let i = 0; i < 10;) {

    //console.log(`Numero ${i}`);

//}

/*
for(let i = 1; i < 20; i++){

  if(i % 2 === 0){
    console.log(`El numero ${i} es par`);
  }

}*/

const carrito = [

    { nombre: 'Monitor de 29 pulgadas', precio: 560 },
    { nombre: 'Televisor', precio: 380 },
    { nombre: 'Airbuds', precio: 890 },
    { nombre: 'Aire Acondicionado', precio: 900 },
    { nombre: 'Carro Ford Ranger', precio: 400000 },
    { nombre: 'CPU Gamer', precio: 2000 },
]

for(let i = 0; i < carrito.length; i++){

    console.log(carrito[i]);
}
