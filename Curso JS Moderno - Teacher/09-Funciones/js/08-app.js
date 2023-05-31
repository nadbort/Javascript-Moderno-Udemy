// MULTIPLES FUNCIONES QUE SE PASAN VALORES

function sumar(a,b){

    return a + b;

}

const resultado = sumar(2,3);

//--> Ejemplo más avanzado

let total = 0;

function calcularPrecio(precio) {

    return total += precio;

}

total = calcularPrecio(200);
total = calcularPrecio(300);
total = calcularPrecio(500);

console.log(total);

function calcularImpuestos(total){
    
    return total * 1.15;

}

const valorTotal = calcularImpuestos(total);

console.log(`El valor total con impuestos es: ${valorTotal}`)