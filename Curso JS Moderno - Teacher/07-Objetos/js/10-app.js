// COPIAR 2 OBJETOS

const producto = {

    nombre: 'Lapiz',
    precio: 45,
    disponible: true
}

const medidas = {

    peso: '1kg',
    medida: '1m'

}

console.log(producto);
console.log(medidas);

//--> Unir 2 objetos
const resultado = Object.assign(producto, medidas);

//--> Unir usando el spread operator o rest operator

const resultado2 = {...producto, ...medidas}; // los ... se utiliza para copiar

console.log(resultado2);