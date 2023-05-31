// WHILE

// Se va ejecutar mientras una condicion sea verdadera.

/*
let i = 0; // Inicializar el while

while(i < 10){ // Condicion

    console.log( `Numero ${i}`);

    i++; // Incremento

}
*/

let i = 0;

while(i < 20){

    if(i % 2 === 0){

        console.log(`El numero ${i} es par`);

    }else{
        console.log(`El numero ${i} es impar`);
    }

    i++;

}