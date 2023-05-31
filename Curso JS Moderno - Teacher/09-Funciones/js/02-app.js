// LA DIFERENCE ENTRE FUNCTION EXPRESION Y FUNCTION DECLARATION

//--> Declaracion de función ( Function declaration )

sumar(); // Dara el resultado de la funcion sin importar que este antes de inicializar la funcion,
// esto se da porque JS compila el codigo en dos vueltas, la primera busca las funciones y variables y la 
// segunda busca ejecutar el codigo.

function sumar(){
    console.log(2 + 2);
}



//--> Expresion de funcion (Function expression)

sumar2(); // No dara el resultado. Tambien se presenta las dos vueltas pero la funcion al hacer de tipo
// expression va interpretar en la primera vuelta que la variable sumar2 esta vacia, leera algo como esto


// const sumar2; primera vuelta

//sumar2(); segunda vuelta



const sumar2 = function(){

    console.log(2 + 4);
}

