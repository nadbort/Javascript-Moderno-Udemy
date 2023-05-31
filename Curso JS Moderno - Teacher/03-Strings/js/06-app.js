const producto = "Monitor de 20 pulgadas";

//--> .repeat te va a permitir repetir una cadena de texto

const texto = " en promocion".repeat(3);

console.log(`${producto} ${texto}`);

//---------------------------------------------------

//--> .split te va a permitir dividir un string

const actividad = 'Estoy aprendiendo Javascript';

//--> Tenemos que pasarle como argumento por que caracter queremos dividirlo, en este caso colocamos que espacio ' ' es decir
// que va a dividir 'Estoy/aprendiendo/Javascript'. Te devuelve un arreglo. 
console.log(actividad.split(' '));

const hobbies = 'Leer, correr, jugar videojuegos, escribir, hacer yoga';

console.log(hobbies.split(', '));