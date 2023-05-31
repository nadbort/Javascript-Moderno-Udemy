// EL OPERADOR OR PARA QUE AL MENOS SE CUMPLA UNA CONDICION

const efectivo = 300;
const credito = 1000;

const disponible = efectivo + credito;

const totalaPagar = 600;

if(efectivo > totalaPagar || credito > totalaPagar) {

    console.log('Si podemos pagar');

}else{
    console.log('Fondos insusfientes');
}