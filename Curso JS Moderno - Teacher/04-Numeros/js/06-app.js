//--> CONVERTIR STRINGS A NUMEROS

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;

//--> Convierte un string a un numero entero
console.log(Number.parseInt(numero1));

//--> Convierte un string a un numero que soporta decimales
console.log(Number.parseFloat(numero2));

//--> Revisar si un numero es entereo o no
console.log(Number.isInteger(numero2));