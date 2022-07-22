let frase = prompt("Escribe una frase");
let fraseMayuscula = frase.toUpperCase();
let numeroDeVocales = 0;

for(let i=0; i<frase.length; i++) {
    if(fraseMayuscula[i] == "A" | fraseMayuscula[i] == "E" | fraseMayuscula[i] == "I" | fraseMayuscula[i] == "O" | fraseMayuscula[i] == "U")
    {
        numeroDeVocales++;
    }
}

document.write(`El nùmero total de vocales es de: ${numeroDeVocales}.`);