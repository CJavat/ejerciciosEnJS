alert("PROGRAMA PARA GENERARTE TRES NÚMEROS ALEATORIOS ENTRE EL 1 Y 99 PERO NUNGUNO SE VA A REPETIR.");
let i=0;
let primerNumero = 0, segundoNumero = 0, tercerNumero = 0;


do {
    let numero = Math.floor(Math.random()*(100-1)+1);
    if(primerNumero != numero & segundoNumero != numero & tercerNumero != numero) {
        if(i==0) {
            primerNumero = numero;
            i++;
        }
        else if(i==1) {
            segundoNumero = numero;
            i++;
        }
        else if(i==2) {
            tercerNumero = numero;
            i++;
        }
    }
}while(i<3);

document.write(`Éstos son los números generados: <br>Primer Nùmero: ${primerNumero}, Segundo Nùmero: ${segundoNumero}, Tercer Nùmero: ${tercerNumero}`); 
