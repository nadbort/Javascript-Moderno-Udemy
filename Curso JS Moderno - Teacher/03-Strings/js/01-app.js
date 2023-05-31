// --> Formas de crear strings

const producto = "Monitor";
const producto2 = String('Camara');
const producto3 = new String('Cama');

// --> Cuando se necesita agregar comillas dentro de otras comillas se escapan las comillas usando barra invertida

const producto4 = "Monitor de 24\"";

console.log(producto4);