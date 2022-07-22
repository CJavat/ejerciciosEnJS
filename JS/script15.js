let porcentaje60 = Math.floor((60/100)*14); //8.4 --> 8.
let porcentaje30 = Math.floor((30/100)*14); //4.2 --> 4.
let porcentaje10 = Math.round(((10/100)*14)+0.4); //1.4 --> 2.

let i = 1;
do {    
    let numeroUsuario = Math.floor(Math.random()*3+1);

    if(i <= porcentaje60 & numeroUsuario == 1) {
        document.write(`RESULTADO ${i}: ${numeroUsuario} <br>`);
    }
    else if(i > porcentaje30 & i <= 12 & numeroUsuario == 3) {
        document.write(`RESULTADO ${i}: x <br>`);
    }
    else if(i > porcentaje10 & i <= 14 & numeroUsuario == 2){
        document.write(`RESULTADO ${i}: ${numeroUsuario} <br>`);
    }
    else {
        i--;
    }
    i++;
}while(i <= 14);