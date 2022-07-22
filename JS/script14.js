let numero;

for(let i=0; i<14; i++) {
    let numeroRandom = Math.floor(Math.random()*4);
    if(numeroRandom == 3) {
        numero = "x";
    }
    else {
        numero = numeroRandom;
    }
    document.write(`Resultado ${i+1}: ${numero} <br>`);
}