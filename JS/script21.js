alert("Este programa te va a comprobar si lo que escribiste es un POLINDROMO.");
let textoNormal = prompt("Escribe el texto.");
let textoInvertido = "";
let textSize = textoNormal.length-1;
let esPlindromo = true;
let posicion = 0;

for(let i=textSize; i>=0; i--) {
    textoInvertido += textoNormal[i];
}

do {

    if(textoInvertido[posicion] === textoNormal[posicion]) {
        esPlindromo = true;
    }
    else {
        esPlindromo = false;
    }
    posicion++;

}while(posicion < textSize);

document.write(`EL TEXTO QUE INTRODUJISTE ES: <span class=textoPolindromo> ${textoNormal} </span>.<br>`);
document.write(`
    <style>
        .textoPolindromo {
            font-size: 1.5rem;
            color: red;
        }
    </style>
`);

if(esPlindromo === true) {
    document.write("EL TEXTO SI ES UN POLINDROMO.");
}
else {
    document.write("EL TEXTO NO ES UN POLINDROMO.");
}
