// OPERADO && PARA REVISAR QUE SE CUMPLAN 2 O MAS CONDICIONES

const usuario = false;
const puedoPagar = true;

if(usuario && puedoPagar){

    console.log('Si eres usuario y puedes pagar')

}

else if(!usuario){ // Usando el simbolo ! negamos la condicion en este seria si no es usuario

    console.log('Por favor registrate');

}

else if(!puedoPagar){ 

    console.log('Fondos Insuficientes');

}

else{
    console.log('No no puedes comprar');
}